const startButton = document.getElementById("start-btn");
const questionBoxElement = document.getElementById("question-box");
startButton.addEventListener("click", startGame);
function startGame() {
  console.log("testing");
  startButton.classList.add("hidden");
  questionBoxElement.classList.remove("hidden");
}
function setNextQuestion() {}

function selectAnswer() {}
