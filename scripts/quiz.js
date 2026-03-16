(() => {
  const { QUESTIONS } = window.AppData;
  const App = window.App;

  const progressText = document.querySelector("#progress-text");
  const progressFill = document.querySelector("#progress-fill");
  const questionCard = document.querySelector("#question-card");
  const answerList = document.querySelector("#answer-list");

  const state = {
    currentQuestion: 0,
    scores: App.defaultScores()
  };

  function renderQuestion() {
    const question = QUESTIONS[state.currentQuestion];
    const progress = ((state.currentQuestion + 1) / QUESTIONS.length) * 100;

    progressText.textContent = `${state.currentQuestion + 1} / ${QUESTIONS.length}`;
    progressFill.style.width = `${progress}%`;

    questionCard.innerHTML = `
      <div class="question-index">
        <div class="question-no">${state.currentQuestion + 1}</div>
        <p class="eyebrow">Signal Reading</p>
      </div>
      <h3 class="question-title">${question.prompt}</h3>
      <p class="question-subcopy">${question.subcopy}</p>
    `;

    answerList.innerHTML = question.answers.map((answer, index) => `
      <button class="answer-button" data-answer-index="${index}">
        <strong>${answer.title}</strong>
        <p>${answer.body}</p>
      </button>
    `).join("");

    document.querySelectorAll(".answer-button").forEach((button) => {
      button.addEventListener("click", () => {
        const answer = question.answers[Number(button.dataset.answerIndex)];
        applyAnswer(answer.effects);
      });
    });
  }

  function applyAnswer(effects) {
    Object.entries(effects).forEach(([trait, amount]) => {
      state.scores[trait] = Math.max(0, Math.min(100, state.scores[trait] + amount * 8));
    });

    if (state.currentQuestion < QUESTIONS.length - 1) {
      state.currentQuestion += 1;
      renderQuestion();
      return;
    }

    const ranking = App.calculateRanking(state.scores);
    App.saveState({
      scores: state.scores,
      ranking,
      selectedDigimonId: ranking[0].id,
      bond: 18,
      evolved: false,
      evolutionReady: false,
      log: `초기 링크 형성 완료.\n${ranking[0].nameKo}이(가) 당신을 바라봅니다.\n"이제부터 함께 간다."`
    });

    window.location.href = "./result.html";
  }

  renderQuestion();
})();
