// constants to allow the DOM to access info from html

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];
let score = 0;

let questions = [
  {
    question: "What does HTML stand for?",
    choice1: "Hyper Trainer Marking Language",
    choice2: "Hyper Text Markup Language",
    choice3: "High Tech Modern Language",
    choice4: "Home Tool Management Language",
    answer: 2,
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    choice1: "<link>",
    choice2: "<href>",
    choice3: "<a>",
    choice4: "<h1>",
    answer: 3,
  },
  {
    question: "Which of the following is NOT a valid CSS unit?",
    choice1: "px",
    choice2: "em",
    choice3: "cm",
    choice4: "doc",
    answer: 4,
  },
  {
    question: "How do you apply an external CSS file to an HTML document?",
    choice1: "<style src='style.css'>",
    choice2: "<css>style.css</css>",
    choice3: "<link rel='stylesheet' href='style.css'>",
    choice4: "<script src='style.css'></script>",
    answer: 3,
  },
  {
    question:
      "Which of these JavaScript keywords is used to declare a variable?",
    choice1: "var",
    choice2: "let",
    choice3: "const",
    choice4: "All of the above",
    answer: 4,
  },
  {
    question: "What is the purpose of the z-index property in CSS?",
    choice1: "To change the size of text",
    choice2: "To control the stacking order of elements",
    choice3: "To set the transparency of an element",
    choice4: "To add a border around an element",
    answer: 2,
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    choice1: "<!-- -->",
    choice2: "//",
    choice3: "/* */",
    choice4: "##",
    answer: 2,
  },
  {
    question: "What will console.log(typeof 42); output?",
    choice1: "number",
    choice2: "string",
    choice3: "integer",
    choice4: "variable",
    answer: 1,
  },
  {
    question: "What is the default position of an HTML element in CSS?",
    choice1: "absolute",
    choice2: "fixed",
    choice3: "relative",
    choice4: "static",
    answer: 4,
  },
  {
    question:
      "Which JavaScript function is used to select an element by its ID?",
    choice1: "getElementById()",
    choice2: "querySelectorAll()",
    choice3: "getElementByClass()",
    choice4: "selectElementById()",
    answer: 1,
  },
];

const MAX_QUESTIONS = 10;
// function to start game taking available questions from questions array
const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

// function to check if questions bank has been used
const getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return document.location.assign("final.html");

    // part of function to monitor progress and set random question allocator using math.floor
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  // code to call next question using splice to prevent any question being re used

  choices.forEach((choice) => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

// section to to check and display answers incorrect or correct using event listeners and terinary operator

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset.number;

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(1);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    // time out to allow slight delay from answer being selected to be confirmed

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);
  });
});

// function to increment score

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
