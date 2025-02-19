# Quiz
This project is a simple quiz with ten randomly generated questions. Questions advance automatically, leading to a final score page where players can enter their name. The layout is optimized for small screens, with four clear answer choices, a question tracker, a score counter, and a fun progress bar. The home page features buttons to start the game or view the top five recent scores, which can be deleted if desired. Players can return to the home page from any page, ensuring a smooth user experience, especially if they want to restart the quiz.

![Alt text](assets/images/Screenshot%202025-02-16%20213411.png)

## UX (User Experience)

### Target Audience  
This project features a simple quiz with ten randomly generated questions. The interface ensures clear visibility on all screen sizes, with four distinct answer choices. A progress indicator displays the current question number, remaining questions, and score, alongside a progress bar for correct answers. After completing the quiz, users can enter their name on the final score page. 

### User Goals  
- Play a seamless quiz with ten randomly generated questions.  
- Track progress with a question counter, score display, and progress bar.  
- Save and view the top five recent scores.  

### Returning Users  
- Replay the quiz for a new set of random questions.  
- Review or reset the top five recent scores.  

### Design Decisions  
- Simple, intuitive navigation with home page access on all screens.  
- Automatic question transitions for a smooth experience.  
- Responsive layout ensuring accessibility on all devices.  


# UX Design – Five Planes

## 1. Strategy (User Needs & Business Objectives)
The goal of this project is to create a **simple and engaging quiz** with **ten randomly generated questions**. The focus is on:  
- **User Needs:** Providing an easy-to-use quiz where players can assess their knowledge quickly.  
- **Business Objectives:** Delivering a fun and educational experience while practicing coding techniques like event listeners and randomization.

## 2. Scope (Features & Functionalities)
The quiz includes the following **key features**:  
- **Ten randomly generated questions** for variety.  
- **Auto-advance to the next question** after answering, reducing unnecessary clicks.  
- **Clear question layout** with four distinct answer choices.  
- **Progress tracking:**  
  - Displays the **current question number** and **remaining questions**.  
  - Shows a **score counter** for real-time feedback.  
  - A **progress bar** visually tracks correct answers.  
- **Final score page** where players can enter their name to save their score.  
- **Navigation options:**  
  - A **home page** with buttons to start the game or check recent top scores.  
  - A **top scores page** displaying the **five most recent scores**, with options to **reset scores** and **return home**.  
  - The ability to **return to the home page from any stage** (including restarting if a mistake is made).  

## 3. Structure (Interaction Design)
The structure ensures a **logical and intuitive user flow**:  
1. **Home Page:** Players choose to **start the game** or **view top scores**.  
2. **Quiz Flow:**  
   - Each question appears **one at a time** with four answer options.  
   - Answering a question **automatically loads the next one**.  
   - The **progress bar, question number, and score counter** keep players informed.  
3. **Final Score Page:** Displays results and allows players to **enter their name** for leaderboard tracking.  
4. **Top Scores Page:** Players can **view, reset, or delete scores** and **return home**.  
5. **Navigation is always available**, ensuring players can easily restart or exit at any time.

## 4. Skeleton (Wireframe & Layout)
The visual hierarchy is designed for **clarity and usability**:  
- **Main content is centered** for accessibility on all screen sizes.  
- **Large, clear fonts** ensure readability on **mobile and desktop**.  
- **Buttons are easily tappable** for touchscreen users.  
- **Consistent placement of UI elements** across all pages:  
  - **Question & answer section** remains static in size and position.  
  - **Progress tracker & score counter** are placed visibly for instant feedback.  
  - **Navigation buttons** appear in predictable locations.

## 5. Surface (Visual Design)
The surface layer ensures the quiz is **visually appealing and user-friendly**:  
- **Clean and modern UI** with a focus on simplicity.  
- **High contrast between text and background** for easy readability.  
- **Consistent colour scheme** to highlight important elements (questions, progress bar, scores).  
- **Engaging progress bar animation** enhances the experience.  
- **Fun final score display** adds excitement and encourages replay ability.  

By structuring the project using the **Five Planes of UX Design**, the quiz delivers an **intuitive, accessible, and enjoyable** experience for all users.
[Back to Top](#top)

# Design
  - I initially used Balsamiq to create a skeleton idea for each page of the site.
  - This wireframe is of the "Home" index.html page.

  ![Alt text](assets/images/Screenshot%202025-02-17%20154622.png)


  - This wireframe is of the "Questions" questions.html page.

   ![Alt text](assets/images/Screenshot%202025-02-17%20155101.png)


  - This wireframe is of the "Final" final.html page where the scores are displayed.

  ![Alt text](assets/images/Screenshot%202025-02-17%20155451.png)


  - This wireframe is of the "Top Scores" topscores.html page where the top five highest scores are displayed.


  ![Alt text](assets/images/Screenshot%202025-02-17%20155636.png)
[Back to Top](#top)

# Content

Here is a list of all the content in the project with detailed descriptions as to what has been done and why.

- Home page


 ![Alt text](assets/images/Screenshot%202025-02-16%20212927.png)



 - The home page consists of a nice soothing green colour to welcome in the user and make them feel calm. It has the title of the quiz "Computer Quiz" clearly in the middle of the page centered horizontally and vertically in a purple colour to stand out well against the green background.
 - Under the heading are two navigation tabs.
  - The first one takes the user/player to the first question.
  - The second allows the user/player to view the 5 top scores.

- The colour schemes are:
  - This is the general background colour set for the background colour throughout the site using the :root {} format   #aae7aa.
  - This is the colour used for the title and progress bar (including outline) running score, final score and "Top Scores" heading in Top Scores page rgb(80, 22, 114).
  - This is the design for the buttons and inner text border: 0.2rem solid rgb(59, 59, 117)  with a background colour of  rgb(234, 223, 223);
  - This is the design effect for the buttons on hover for laptops and large screen sizes with a pointer cursor as well for the large screen sizes box-shadow: 0 0.3rem 1.5rem 0 rgb(23, 23, 85).

- Typography
  - The font family used throughout is Courier New", Courier, monospace.

- Favicon Icon
  - The favicon is an IA generated image of a fun computer with a few random images in the background.
   ![Alt text](assets/images/android-chrome-512x512.png)

- Questions page
  - The questions page is laid out with a text to say "Question" with a running tally of what number out of ten the person is on nicely indented in from the left hand side with a "Score" text similarly indented on the right hand side to advise them how many questions they have got correct so far.
  - Under the "Question" text is a "Progress" bar as a visual image to allow the player to see how far through the questions they are.
  - The questions themselves are in big bold font to help stand out on very small screen sizes and very large screen sizes.
  - At the bottom of the screen under the last answer option is a "Home" navigation tab so that if at any point the player wishes to end the game and start again they can do.



![Alt text](assets/images/Screenshot%202025-02-16%20212941.png)

- Score page

  - The Score page has the word "Score" centred in big letters with the result as a number underneath to let the player know how they have done.
  - There is then a text input box with the word "player" in the middle where the player has the option to save their score by entering their name.
  - Under the text input area are three button:
    - Save
       To allow the player to save their score if it is in the last 5 saved scores.
    - Play Again
       To allow the player to return directly to the first question and play the game again.
    - Home
       To allow the player to return directly to the home page.



![Alt text](assets/images/Screenshot%202025-02-16%20213014.png)

  - There is also a 2nd page for Score that if the player has scored 10 out of 10, the whole background lights up bright green

![Alt text](assets/images/Screenshot%202025-02-16%20213138.png)



- Top Scores
  - The Top scores page has in big bold purple letters the words "Top Scores" with the names of up to 5 players who have saved their scores with a dash between their name and their score.
  - Under the names and scores are the buttons:
    - Home
      - This like with the other pages takes the player directly back to the home page.
    - Clear Top Scores
      - This will clear the top scores and a pop up alert will advise the player that this has been done successfully.
    - Play Again
      - This like with the other pages will take the player directly back to the first question to play the game again.

![Alt text](assets/images/Screenshot%202025-02-16%20213035.png)

[Back to Top](#top)


# Development
  - In the build up to this project as I was going through the final stages of the Javascipt element of the course I had the idea to build golf crazy putting game, but I was unable to find the appropriate images to make this work as I had in mind. I noticed that from an example project that we were given to look at that the person had built a World Quiz, and that they had said that they had used videos on you tube to help build them, so I decided that I would make my own version of a quiz.
    -  The general challenge I have faced is knowing lots of individual segments of code and what they do, but having difficulty in knowing how to piece them all together to create a functional programme.
    - The first challenge I had was making the question large enough to be read on very large screens and clearly visible for very small screens so adopting the mobile first strategy, but being able to fit all the details on the screen. This was solved by creating a top margin so that even on small mobile devices everything can be seen easily.
    - The 2nd challenge was after a >empty< being picked up in html validate and adding a 0 as an initiator for the start of the score it changed the space layout causing a problem with the progress bar. I tried several times myself using dev tools to solve this but couldn't do it. After mentioning this to my mentor he pointed out the overflow hidden function in CSS and advised me to change the inner radius to 0 to create a vertical line within the bar.
    - It was while watching you tube videos for inspiration to aditional features that I saw someone had created an effect to let a player know when they had done well. This gave me the idea of changing the background colour if all questions had been answered correctly and being able to build it in with the if else statement that I was determined to use giving feedback as to the result.

# Features

  - The project has been designed like the first one over several pages to give a better user experience, with simple easy to use navigational tabs instead of an actual navigation bar which I feel would be cumbersome to this type of site / app.
  - There is a significant difference in text / font styling throughout, which is deliberate to focus the players attention on the important parts. The text displaying the question number is small as the questions themselves are the important part, text inside the answer boxes clear but not obstructing the outer container they are in.
  - A "Home" button on all pages allowing the player to return to the home screen at all times.
  - A bright green background on the "Score" page if the player has got all 10 questions correct.
  - Within the question.js file I have used camel case instead of CAPTIALS and _ with setting the const variable for the total number of questions. This after some research I learnt tells another developer that while the questions are a constant they can be changed and re coded if it is felt that more or less questions would be of benefit. 

# Future
- I would like to design the game so that there are multiple types of quizzes of different lengths and difficulties available using an internal API to store the data and an external API to build a feature where the player enters text that is linked to an external site to validate responses.

# Technology Used
  - HTML
  - CSS
  - JavaScript
  - HTML Validator
  - CSS Validator
  - JS Hint
  - Lighthouse
  - Chat GPT for generl advice of specific code segments.
  - You Tube videos as a general guide [How to make a quiz app](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=1851s) / [Build a Quiz app](https://www.youtube.com/watch?v=_FnFPmA87XU) / [Quick quiz app](https://youtube.com/playlist?list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&feature=shared) 
   
[Back to Top](#top)

# Testing
  - I used dev tools and 'inspect' on the preview page to test at first point how the project looked on a small screen simulating various mobile devices and then more widely for devices such as I pad's, tablets, laptop's and then by entering pixel sizes into dev tools large and very large screens as a first stage.
  - I later tested the site for usability on my own personal phone as well as my own I pad to simulate different screen sizes in a 'real world' environment.
  - Finally, I connected my laptop to a 2nd screen to see how the site performs on a large screen.

  
# Functionality Table

| Page / Function           | Feature / Functionality                                      | Expected Outcome                                      | Actual Outcome |
|--------------------------|------------------------------------------------|--------------------------------------------------|----------------|
| **Home Page**            | Start Game Button                                | Begins the quiz, loading the first question.     | [Passed] |
|                          | View Top Scores Button                          | Navigates to the Top Scores page.                | [Passed] |
|                          | Persistent Navigation                          | Player can return to Home from any page.        | [Passed] |
| **Questions Page**            | Display 10 Random Questions                     | Each game generates a unique set of questions.  | [Passed] |
|                          | Auto-advance to Next Question                   | Moves to the next question after an answer is selected. | [Passed] |
|                          | Four Answer Options                             | Clearly visible choices for each question.      | [Passed] |
|                          | Progress Tracking                               | Displays current question number and remaining questions. | [Passed] |
|                          | Score Counter                                  | Updates dynamically as the player answers questions. | [Passed] |
|                          | Progress Bar                                   | Fills up based on correct answers.              | [Passed] |
|                          | Return to Home Option                          | Allows player to restart the quiz if needed.    | [Passed] |
| **Final Score Page**     | Display Final Score                            | Shows the total score after all questions.      | [Passed] |
|                          | Enter Name Form                                | Allows player to enter their name for the leaderboard. | [Passed] |
|                          | Save Score Button                              | Saves name and score to local storage.          | [Passed] |
|                          | Return to Home Button                          | Navigates back to the Home Page.                | [Passed] |
| **Top Scores Page**      | Display Top 5 Scores                           | Shows the five most recent scores.              | [Passed] |
|                          | Delete Scores Button                           | Clears stored scores and resets leaderboard.    | [Passed] |
|                          | Return to Home Button                          | Navigates back to the Home Page.                | [Passed] |

[Back to Top](#top)

# Validation

  - I used HTML and CSS validate along with JS Hint as well as Lighthouse performance validates.
    - HTML validate
      - Home (indes) page

![Alt text](assets/images/Screenshot%202025-02-16%20213539.png)

      - Questions page


![Alt text](assets/images/Screenshot%202025-02-16%20213638.png)

      - Score page


![Alt text](assets/images/Screenshot%202025-02-16%20213719.png)

      - Top Scores page


![Alt text](assets/images/Screenshot%202025-02-16%20213814.png)

    - CSS validate
      - index.css


![Alt text](assets/images/Screenshot%202025-02-16%20213913.png)

      - questions.css


![Alt text](assets/images/Screenshot%202025-02-16%20213941.png)

      - topscores.css


![Alt text](assets/images/Screenshot%202025-02-16%20214009.png)

    - JS Hint validate
      - questions.js


![Alt text](assets/images/Screenshot%202025-02-16%20214134.png)

      - score.js


![Alt text](assets/images/Screenshot%202025-02-16%20214305.png)

      - topscores.js


![Alt text](assets/images/Screenshot%202025-02-17%20144342.png)

  
    - Lighthouse validate
      - Home (index) page


![Alt text](assets/images/Screenshot%202025-02-16%20212528.png)

      - Questions page


![Alt text](assets/images/Screenshot%202025-02-16%20212625.png)

      - Scores page


![Alt text](assets/images/Screenshot%202025-02-16%20212745.png)

      - Max Scores page (10 / 10)


![Alt text](assets/images/Screenshot%202025-02-16%20213216.png)

      - Top Scores page


![Alt text](assets/images/Screenshot%202025-02-16%20212837.png)
[Back to Top](#top)


# Deployment
  - To deploy my project I used GitHub pages by committing and pushing the project from Visual Studio Code to [Git Hub](https://github.com/).
  - This is done by entering in the terminal in Visual Studio Code:
    - git add .
    - git commit -m "enter commit message here"
    - git push
  - To publish the webiste to be avialable to all.
    - Select repository from [GitHub](https://github.com/).
    - Select "Settings" on the top title bar.
    - Select "Pages".
    - Choose "Deploy from a branch" in source under "Build and deployment.
    - "main" and "root" under "Branch" and click "save".
    - Return to home page and refresh page and wait a few minutes then look for "Deployments" midway down the right hand side of repository page.
    - This will take you to "github-pages deployments" at top of page, simply click on the highlighted link in the github-pages boxed section. This link can copied and pasted to be sent to other people or used manually if needed on any other device.


# Forking
  - To fork the project follow these steps:
    - Open [GitHub](https://github.com/)
    - Click on the desired project to be forked.
    - Find the'Fork' button to the top right of the page.
    - Click the button and the fork will be in your respository.

# Cloning
  - To clone the project follow these steps:
    - Open [GitHub](https://github.com/)
    - Click on the desired project to be cloned.
    - You will be provided with three options from which to choose, HTTPS, SSH or GitHub, click the clipboard icon in order to copy the URL.
    - When you have clicked the button the fork will be in your repository.
    - Open a new terminal.
    - Change the current working directory to the location where you want the cloned directory.
    - Type 'git clone' and paste the URL from the third step.
    - Press 'Enter' and the project is cloned.

# Credits
  - A big thank you to my mentor and general tips and advice from fellow students and interview videos with assesors.
  - Various you tube videos for general visual tips.
  [Back to Top](#top)
