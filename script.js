const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionBoxElement = document.getElementById("question-box");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-btn");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
function startGame() {
  console.log("testing");
  startButton.classList.add("hidden");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionBoxElement.classList.remove("hidden");
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}
function resetState() {
  nextButton.classList.add("hidden");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hidden");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hidden");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
  {
    question: "To be or Not to be that is the question?",
    answers: [
      {
        text: "whether tis nobler.....",
        correct: true,
      },
      {
        text: "to be",
        correct: false,
      },
      {
        text: "Not to be",
        correct: false,
      },
    ],
  },
  {
    question: "Mustard or Ketchup?",
    answers: [
      {
        text: "Ketchup",
        correct: true,
      },
      {
        text: "Mustard",
        correct: false,
      },
    ],
  },
  {
    question: "1 + 1 = ?",
    answers: [
      {
        text: "a window",
        correct: true,
      },
      {
        text: "2",
        correct: false,
      },
      {
        text: "11",
        correct: false,
      },
    ],
  },
];
