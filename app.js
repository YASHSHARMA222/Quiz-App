const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Modern Language",
    ],
    correct: 0,
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2,
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Vue", "Django"],
    correct: 3,
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const btns = document.querySelectorAll(".option-btn");
  btns.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#eee";
  });
  document.getElementById("result").innerText = "";
}

function selectAnswer(index) {
  const q = questions[currentQuestion];
  const btns = document.querySelectorAll(".option-btn");

  btns.forEach((btn) => (btn.disabled = true));

  if (index === q.correct) {
    score++;
    btns[index].style.backgroundColor = "lightgreen";
  } else {
    btns[index].style.backgroundColor = "lightcoral";
    btns[q.correct].style.backgroundColor = "lightgreen";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    document.getElementById(
      "result"
    ).innerText = `You scored ${score} out of ${questions.length}`;
  }
}

window.onload = loadQuestion;
