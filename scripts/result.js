(() => {
  const { TRAITS, ACTIONS, MILESTONES } = window.AppData;
  const App = window.App;

  const emptyState = document.querySelector("#empty-state");
  const resultPage = document.querySelector("#result-page");
  const resultTitle = document.querySelector("#result-title");
  const resultSummary = document.querySelector("#result-summary");
  const topResult = document.querySelector("#top-result");
  const traitBars = document.querySelector("#trait-bars");
  const rankingList = document.querySelector("#ranking-list");
  const bondCard = document.querySelector("#bond-card");
  const interactionActions = document.querySelector("#interaction-actions");
  const milestoneList = document.querySelector("#milestone-list");
  const interactionLog = document.querySelector("#interaction-log");
  const evolutionOverlay = document.querySelector("#evolution-overlay");
  const evolutionTitle = document.querySelector("#evolution-title");
  const evolutionText = document.querySelector("#evolution-text");
  const closeEvolutionButton = document.querySelector("#close-evolution");

  let state = App.loadState();

  function currentPartner() {
    return state.ranking.find((item) => item.id === state.selectedDigimonId) || state.ranking[0];
  }

  function currentForm(partner) {
    return state.evolved ? partner.evolution : partner;
  }

  function renderTopResult(partner) {
    const form = currentForm(partner);
    const stageLabel = state.evolved ? `${form.stageKo} 활성화` : `${partner.stageKo} 링크`;

    topResult.innerHTML = `
      <article class="top-card">
        <div class="top-card-visual">
          <div class="visual-ring"></div>
          <div class="signal-badge"><span class="status-pill">MATCH ${partner.matchScore}%</span></div>
          <div class="hero-image">${App.imageMarkup(form.apiName, form.nameKo)}</div>
        </div>
        <div class="top-card-copy">
          <p class="eyebrow">Primary Partner</p>
          <h3>${form.nameKo}</h3>
          <p>${partner.personality}</p>
          <div class="status-row">
            <span class="status-pill">${stageLabel}</span>
            <span class="status-pill">문장 ${partner.crest}</span>
            ${state.evolved ? `<span class="status-pill">${partner.evolution.unlockedTitle}</span>` : ""}
          </div>
          <div class="tag-row">${partner.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="trait-chip-row">${partner.reasons.map((reason) => `<span class="trait-chip">${reason}</span>`).join("")}</div>
          <div class="score-box">
            <strong>추천 이유</strong>
            <p>${App.reasonNarrative(state.scores, partner)}</p>
            <div class="score-track"><div class="score-fill" style="width:${partner.matchScore}%"></div></div>
          </div>
        </div>
      </article>
    `;
  }

  function renderTraits() {
    traitBars.innerHTML = TRAITS.map((trait) => `
      <div class="trait-row">
        <span>${trait.label}</span>
        <div class="trait-track"><div class="trait-fill" style="width:${Math.round(state.scores[trait.key])}%"></div></div>
        <span>${Math.round(state.scores[trait.key])}</span>
      </div>
    `).join("");
  }

  function renderRanking() {
    rankingList.innerHTML = state.ranking.slice(0, 3).map((digimon, index) => `
      <article class="rank-card">
        <div class="rank-head">
          <div class="rank-thumb">${App.imageMarkup(digimon.apiName, digimon.nameKo)}</div>
          <div>
            <div class="rank-number">${index + 1}</div>
            <h3>${digimon.nameKo}</h3>
            <p>${digimon.personality}</p>
          </div>
        </div>
        <div class="tag-row">
          <span class="tag">매칭 ${digimon.matchScore}%</span>
          <span class="tag">진화 ${digimon.evolution.nameKo}</span>
        </div>
        <p>${App.reasonNarrative(state.scores, digimon)}</p>
      </article>
    `).join("");
  }

  function renderMilestones() {
    milestoneList.innerHTML = MILESTONES.map((milestone) => {
      const unlocked = state.bond >= milestone.threshold;
      const label = milestone.threshold === 100 && state.evolved ? "진화 완료" : unlocked ? "해금" : `${milestone.threshold}% 필요`;
      return `
        <article class="milestone-item">
          <div>
            <strong>${milestone.title}</strong>
            <p>${milestone.description}</p>
          </div>
          <span class="status-pill">${label}</span>
        </article>
      `;
    }).join("");
  }

  function renderBond(partner) {
    bondCard.innerHTML = `
      <p class="eyebrow">Bond Chamber</p>
      <h3>${partner.nameKo} ↔ ${partner.evolution.nameKo}</h3>
      <p>${state.evolved ? `${partner.evolution.nameKo} 진화가 완료되었습니다.` : state.evolutionReady ? "유대 수치가 가득 찼습니다. 진화 프로토콜을 실행할 수 있습니다." : "행동을 선택해 유대 수치를 올리세요."}</p>
      <div class="bond-stage">
        <div class="stage-card">
          <p class="eyebrow">Current</p>
          <div class="stage-visual">${App.imageMarkup(partner.apiName, partner.nameKo)}</div>
          <strong>${partner.nameKo}</strong>
          <p>${partner.stageKo}</p>
        </div>
        <div class="stage-card">
          <p class="eyebrow">Evolution</p>
          <div class="stage-visual">${App.imageMarkup(partner.evolution.apiName, partner.evolution.nameKo)}</div>
          <strong>${partner.evolution.nameKo}</strong>
          <p>${partner.evolution.stageKo}</p>
        </div>
      </div>
      <div>
        <p>유대 수치 ${state.bond}%</p>
        <div class="bond-track"><div class="bond-fill" style="width:${state.bond}%"></div></div>
      </div>
      <div class="fragments">${MILESTONES.map((milestone) => `<span class="status-pill">${state.bond >= milestone.threshold ? "●" : "○"} ${milestone.title}</span>`).join("")}</div>
      <p>${state.evolved ? partner.evolution.note : partner.description}</p>
    `;
    interactionLog.textContent = state.log;
    renderMilestones();
  }

  function updateStoredState() {
    App.saveState(state);
  }

  function milestoneLog(previousBond, nextBond) {
    const unlocked = MILESTONES.filter((milestone) => previousBond < milestone.threshold && nextBond >= milestone.threshold);
    return unlocked.map((milestone) => {
      if (milestone.threshold === 100) {
        state.evolutionReady = true;
        return `[시스템] ${milestone.title} 해금. 진화 프로토콜을 실행할 수 있습니다.`;
      }
      return `[시스템] ${milestone.title} 해금. ${milestone.description}`;
    }).join("\n");
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function performAction(actionKey) {
    const partner = currentPartner();
    const previousBond = state.bond;
    const favoriteBonus = partner.favoriteAction === actionKey ? 8 : 0;
    const evolvedBonus = state.evolved ? 2 : 0;
    const gain = Math.min(100 - state.bond, 10 + favoriteBonus + evolvedBonus);

    state.bond = Math.min(100, state.bond + gain);
    const extra = milestoneLog(previousBond, state.bond);
    const evolvedLine = state.evolved ? `\n[진화 상태] ${partner.evolution.nameKo}의 반응이 한층 강하게 공명합니다.` : "";
    state.log = `${randomItem(partner.interactionLines[actionKey])}\n\n유대 수치 +${gain}% → ${state.bond}%${evolvedLine}${extra ? `\n${extra}` : ""}`;

    updateStoredState();
    renderPage();
  }

  function triggerEvolution() {
    const partner = currentPartner();
    if (!state.evolutionReady || state.evolved) {
      return;
    }

    state.evolved = true;
    state.evolutionReady = false;
    state.log = `[진화 개시] ${partner.nameKo}의 데이터가 폭발적으로 재구성됩니다.\n${partner.evolution.nameKo} 진화 완료.\n"${partner.evolution.unlockedTitle}"`;
    evolutionTitle.textContent = `${partner.nameKo} → ${partner.evolution.nameKo}`;
    evolutionText.textContent = `${partner.evolution.unlockedTitle}. ${partner.evolution.note}`;
    evolutionOverlay.classList.remove("hidden");
    updateStoredState();
    renderPage();
  }

  function renderActions() {
    interactionActions.innerHTML = `
      ${ACTIONS.map((action) => `
        <button class="action-button" data-action="${action.key}">
          <strong>${action.label}</strong>
          <span>${action.description}</span>
        </button>
      `).join("")}
      <button class="action-button" id="evolve-button" ${state.evolutionReady ? "" : "disabled"}>
        <strong>진화 프로토콜</strong>
        <span>${state.evolutionReady ? "지금 실행 가능" : "유대 수치 100% 필요"}</span>
      </button>
    `;

    document.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", () => performAction(button.dataset.action));
    });
    document.querySelector("#evolve-button").addEventListener("click", triggerEvolution);
  }

  function renderPage() {
    const partner = currentPartner();
    resultTitle.textContent = state.evolved ? `${partner.nameKo}과 ${partner.evolution.nameKo}의 링크가 완성되었습니다` : `${partner.nameKo}, 당신의 1순위 파트너`;
    resultSummary.textContent = `${partner.personality} 당신은 ${App.describeChosenChild(state.scores)} 유형으로 분석되며, ${partner.nameKo}와 가장 강한 공명을 보였습니다.${state.evolved ? ` 현재 ${partner.evolution.nameKo} 진화가 해금된 상태입니다.` : ""}`;

    renderTopResult(partner);
    renderTraits();
    renderRanking();
    renderBond(partner);
    renderActions();
  }

  closeEvolutionButton.addEventListener("click", () => {
    evolutionOverlay.classList.add("hidden");
  });

  if (!state || !state.ranking || state.ranking.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  resultPage.classList.remove("hidden");
  App.preloadImages().finally(renderPage);
})();
