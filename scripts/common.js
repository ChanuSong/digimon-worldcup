window.App = (() => {
  const { TRAITS, DIGIMON_DATA } = window.AppData;
  const STORAGE_KEY = "digivice-matching-state";
  const IMAGE_CACHE_KEY = "digivice-image-map";

  function normalizeName(name) {
    return String(name).toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  function createPlaceholder(label) {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="420" height="420" viewBox="0 0 420 420">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1a3657" />
            <stop offset="100%" stop-color="#0a1422" />
          </linearGradient>
        </defs>
        <rect width="420" height="420" rx="42" fill="url(#g)"/>
        <circle cx="210" cy="150" r="92" fill="rgba(107,232,255,0.16)"/>
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Noto Sans KR, Arial" font-size="42" font-weight="700" fill="#f4fbff">${label}</text>
        <text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" font-family="Orbitron, Arial" font-size="20" fill="#6be8ff">IMAGE SYNC</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function saveState(nextState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  }

  function clearState() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function defaultScores() {
    return Object.fromEntries(TRAITS.map((trait) => [trait.key, 50]));
  }

  function topTraits(scores, limit = 3) {
    return [...TRAITS].sort((a, b) => scores[b.key] - scores[a.key]).slice(0, limit);
  }

  function calculateRanking(scores) {
    const dominantTraits = topTraits(scores, 3).map((trait) => trait.key);

    return DIGIMON_DATA.map((digimon) => {
      const distance = TRAITS.reduce((total, trait) => {
        return total + Math.abs(scores[trait.key] - digimon.traits[trait.key]);
      }, 0);

      const affinityBonus = dominantTraits.reduce((bonus, traitKey) => {
        return bonus + Math.max(0, 13 - Math.abs(scores[traitKey] - digimon.traits[traitKey]) / 5);
      }, 0);

      const matchScore = Math.min(99, Math.max(55, Math.round(100 - distance / 8 + affinityBonus)));

      return {
        ...digimon,
        matchScore,
        reasons: dominantTraits.map((traitKey) => {
          const trait = TRAITS.find((item) => item.key === traitKey);
          const gap = Math.abs(scores[traitKey] - digimon.traits[traitKey]);
          return gap < 12
            ? `${trait.label}의 결이 매우 비슷합니다`
            : `${trait.label}을 주고받는 방식이 잘 맞습니다`;
        })
      };
    }).sort((a, b) => b.matchScore - a.matchScore);
  }

  function describeChosenChild(scores) {
    const [first, second] = topTraits(scores, 2);
    return `${first.label}과 ${second.label}이 강한 선택받은 아이`;
  }

  function reasonNarrative(scores, digimon) {
    const strengths = topTraits(scores, 2).map((trait) => trait.label).join("과 ");
    return `${strengths} 성향이 높게 나타났고, ${digimon.nameKo}은 같은 축에서 높은 공명도를 보였습니다. 당신이 위기를 풀고 관계를 이어가는 방식이 ${digimon.nameKo}의 성격 패턴과 자연스럽게 맞닿습니다.`;
  }

  function loadImageMap() {
    try {
      const raw = localStorage.getItem(IMAGE_CACHE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveImageMap(map) {
    localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(map));
  }

  async function preloadImages() {
    const cache = loadImageMap();
    const names = [...new Set(DIGIMON_DATA.flatMap((digimon) => [digimon.apiName, digimon.evolution.apiName]))];
    const missing = names.filter((name) => !cache[normalizeName(name)]);

    if (missing.length === 0) {
      return cache;
    }

    const results = await Promise.allSettled(
      missing.map(async (name) => {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${encodeURIComponent(name)}`);
        const payload = await response.json();
        return { name, img: payload?.[0]?.img || "" };
      })
    );

    results.forEach((result) => {
      if (result.status === "fulfilled" && result.value.img) {
        cache[normalizeName(result.value.name)] = result.value.img;
      }
    });

    saveImageMap(cache);
    return cache;
  }

  function imageUrl(apiName, alt) {
    const map = loadImageMap();
    const cached = map[normalizeName(apiName)];
    if (cached) return cached;
    return `https://digimon-api.vercel.app/api/digimon/name/${encodeURIComponent(apiName)}`;
  }

  function imageMarkup(apiName, alt, className = "") {
    const map = loadImageMap();
    const cached = map[normalizeName(apiName)];
    const placeholder = createPlaceholder(alt);
    if (cached) {
      return `<img src="${cached}" alt="${alt}" class="${className}" loading="lazy" onerror="this.onerror=null;this.src='${placeholder}'" />`;
    }
    return `<img src="${placeholder}" alt="${alt}" class="${className}" loading="lazy" data-api-name="${apiName}" />`;
  }

  return {
    STORAGE_KEY,
    loadState,
    saveState,
    clearState,
    defaultScores,
    calculateRanking,
    topTraits,
    describeChosenChild,
    reasonNarrative,
    preloadImages,
    imageMarkup
  };
})();
