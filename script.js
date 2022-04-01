// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const maxTime = 31;

//Global Variables
var pattern = new Array(5);
var lives = 3;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var gameTime = maxTime;
var mistake = false;
var gameStart = true;
var interval = null;

function generatePattern(){ //Generating a random pattern   
  
  for (var i = 0; i < 5; i++) {
    pattern[i] =  Math.floor(Math.random() * (6 - 1) + 1)
  }
  
}

function startGame(){
  //initialize game variables
  progress = 0;
  lives = 3;
  document.getElementById("lives").innerHTML = "Lives Remaining: " + lives; 
  generatePattern();
  gameTime = 31;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  playClueSequence(mistake, gameTime);
  gameStart = false;
}

function stopGame(){  
  gamePlaying = false;
  clearInterval(this.interval)
  document.getElementById("lives").innerHTML = "";
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");

}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(mistake, timeLeft){
  guessCounter = 0
  context.resume()
  
  if (gameStart == false) {
    clearInterval(this.interval);
  }

  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  if (mistake == false && gameStart == false) {
    gameTime = maxTime;
    timer();

  }else{
    gameTime = timeLeft;
    timer();
  }
  
}


function timer(){
  
  
  
  interval = setInterval(() => {
    this.gameTime--;
    document.getElementById("timer").innerHTML = "0:"+gameTime;
      if (gameTime == 0){
        loseGame();
      }
  }, 1000)
  
}

function loseGame(){
  stopGame();
  clearInterval(this.interval)
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  clearInterval(this.interval)
  alert("Game Over. You Won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){

    if(guessCounter == progress){
      
      if(pattern.length - 1 == progress){
        winGame();
      }else{
        clueHoldTime -= 55
        progress++;
        mistake = false;
        playClueSequence(mistake, maxTime);
      }
  
    }else{
      guessCounter ++;
    }
    
    
  }else if(lives > 0){
    lives--;
    document.getElementById("lives").innerHTML = "Lives Remaining: " + lives;
    mistake = true;
    clearInterval(this.interval)
    var currentTime = gameTime
    playClueSequence(mistake, currentTime);
  }else{
    document.getElementById("lives").innerHTML = "Lives Remaining: " + lives;
    loseGame();
  }
}



// Sound Synthesis Functions
const freqMap = {
  1: 320.6,
  2: 349.6,
  3: 392,
  4: 446.2,
  5: 490
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)