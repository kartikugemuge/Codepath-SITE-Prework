# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kartik Ugemuge**

Time spent: **9** hours spent in total

Link to project: https://local-gregarious-icicle.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Win Condition](https://user-images.githubusercontent.com/55012882/161351117-37a4da9c-e8cd-445b-be56-38d4a2fca252.gif)

![Losing via stikes](https://user-images.githubusercontent.com/55012882/161351181-cdffa7cd-111c-418a-adb7-555d4c940c7c.gif)

![Losing via time](https://user-images.githubusercontent.com/55012882/161351191-b6a024ad-7faf-4b90-86cb-75f533d1da50.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/ 

https://developer.mozilla.org/en-US 

https://stackoverflow.com/ 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The CSS part of this assignment was a struggle for me. My assignment lacks an aesthetic appeal that comes with good CSS skills, and due to a lack of practice with CSS, I decided it would be best to stick with a simple and minimalistic design. The rest of the assignment was straightforward, and the instructions were clear which helped me get started with the assignment. Another challenge I encountered was using a timer for the game. Before using the setInterval and clearInterval methods I thought of using something more conventional, like a loop. But that would not make any sense since a 30 count for loop is almost instantaneous, and I needed something more realistic than that functions, like a clock. Thankfully, the setInterval and clearInterval methods were designed to do exactly that. But even after that, I had to figure out how to implement them as these were functions, I had never used before. I came across a lot of bugs while implementing these functions. For instance, the set Interval function would be invoked twice, and no clear interval was invoked hence the timer would go down by 2 every time this happened. After altering playClueSequence() function and making another function along with multiple variables and overcoming multiple bugs, I finally produced a way to display the timer the way I wanted it to work.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing my submission, I was curious about which element of a web project requires the most attention. All 3 HTML, CSS, and JavaScript are supposed to work with each other, and there will always be a balance between them. But is there just one aspect that requires more attention than the others or could this be wrong to classify them. Intuitively, I would believe that JavaScript requires more attention, next would-be CSS and finally HTML. But after doing this project I could see there is always some balance between them. Another question came up when I was thinking about additional features. Is it possible to implement a statistics page (something that a user can view after reopening the site) by using only these three web development tools, I believe using cookies and sessions can be helpful in this situation. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had time to learn more about features such as sessions and cookies, I would have made a statistics page where the player can view some interesting data about them - it is always fun to watch personal stats. Such as high score, average time taken between each click, and with a little more ambition – how they compare with other players and much more. Another feature I would implement is game settings, where the user can customize the game speed, timer, number of blocks, changing themes, etc. Furthermore, I would learn more CSS skills to implement aesthetic elements to my project. And implementing the fifth option which was about adding images and different sounds. Overall, I would fix the UI to not only look better but also give the user a better experience.


## Interview Recording URL Link

[My 5-minute Interview Recording] https://psu.mediaspace.kaltura.com/media/Codepath+SITE+Interview+2022/1_o0nqmcko


## License

    Copyright [Kartik Ugemuge]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
