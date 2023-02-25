const question = document.getElementById("question");
const answer = document.getElementById("answer");
const questionBtn = document.getElementById("questionBtn");
const answerBtn = document.getElementById("answerBtn");

questionBtn.addEventListener("click", function () {
  fetch("https://opentdb.com/api.php?amount=1&category=15")
    .then((response) => response.json())
    .then((data) => {
      answer.innerHTML = "";

      const questionData = data.results[0].question;
      question.innerHTML = questionData;

      answerBtn.addEventListener("click", function () {
        const correctAnswer = data.results[0].correct_answer;
        answer.innerHTML = correctAnswer;
      });
    });
});
