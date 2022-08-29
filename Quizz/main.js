let questions = [
  {
    text: "JS is a programing language?",
    correctAnswer: true,
  },
  {
    text: "PHP is the same like JS?",
    correctAnswer: false,
  },
  {
    text: "CSS is stayling sheets language?",
    correctAnswer: true,
  },
];
let questionIndex = 0;
let userScore = 0;

function askQuestion() {
  let userAnswer = confirm(
    questions[questionIndex].text + "\nOK = Yes    Cancel = No"
  );
  if (questions[questionIndex].correctAnswer === userAnswer) {
    userScore++;
  }
  questionIndex++;
  if (questionIndex !== questions.length) {
    askQuestion();
  }
}
askQuestion();

console.log(
  "U answered correctly on: " +
    userScore +
    " questions " +
    "from the " +
    questions.length
);
