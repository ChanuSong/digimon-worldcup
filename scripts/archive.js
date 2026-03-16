(() => {
  const { DIGIMON_DATA } = window.AppData;
  const App = window.App;
  const archiveList = document.querySelector("#archive-list");

  function renderArchive() {
    archiveList.innerHTML = DIGIMON_DATA.map((digimon) => `
      <article class="archive-card">
        <div class="archive-head">
          <div class="archive-thumb">${App.imageMarkup(digimon.apiName, digimon.nameKo)}</div>
          <div>
            <h3>${digimon.nameKo}</h3>
            <p>${digimon.stageKo} · 문장 ${digimon.crest}</p>
          </div>
        </div>
        <p>${digimon.description}</p>
        <div class="tag-row">
          <span class="tag">진화 ${digimon.evolution.nameKo}</span>
          ${digimon.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </article>
    `).join("");
  }

  renderArchive();
  App.preloadImages().finally(renderArchive);
})();
