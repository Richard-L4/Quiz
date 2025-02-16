# Quiz
This project is a simple quiz with ten randomly generated questions. Questions advance automatically, leading to a final score page where players can enter their name. The layout is optimized for small screens, with four clear answer choices, a question tracker, a score counter, and a fun progress bar. The home page features buttons to start the game or view the top five recent scores, which can be deleted if desired. Players can return to the home page from any page, ensuring a smooth user experience, especially if they want to restart the quiz.

![Alt text](assets/images/Screenshot%202025-02-16%20213411.png)

# UX Design – Five Planes

This project follows **Jesse James Garrett’s Five Planes of UX Design** to create a structured and engaging quiz experience.

## 1. Strategy (User Needs & Business Objectives)
The goal of this project is to create a **simple and engaging quiz** with **ten randomly generated questions**. The focus is on:  
- **User Needs:** Providing an easy-to-use quiz where players can test their knowledge quickly.  
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
- **Consistent color scheme** to highlight important elements (questions, progress bar, scores).  
- **Engaging progress bar animation** enhances the experience.  
- **Fun final score display** adds excitement and encourages replayability.  

By structuring the project using the **Five Planes of UX Design**, the quiz delivers an **intuitive, accessible, and enjoyable** experience for all users.

# Features and Functionality Table

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

