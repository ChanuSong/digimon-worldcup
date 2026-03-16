const TRAITS = [
  { key: "courage", label: "용기" },
  { key: "empathy", label: "공감" },
  { key: "curiosity", label: "탐험심" },
  { key: "reliability", label: "신뢰" },
  { key: "playfulness", label: "유희성" },
  { key: "calm", label: "침착함" },
  { key: "leadership", label: "주도성" },
  { key: "hope", label: "희망" }
];

const DIGIMON_DATA = [
  {
    id: "agumon",
    name: "아구몬",
    stage: "성장기",
    image:
      "https://wikimon.net/images/thumb/9/95/Agumon.jpg/320px-Agumon.jpg",
    personality:
      "정면 돌파형 파트너. 위기 앞에서 도망치기보다 먼저 몸을 던지고, 동료를 지키는 결단이 빠릅니다.",
    description:
      "뜨거운 추진력과 솔직함이 핵심인 파트너입니다. 강한 책임감이 있을 때 진가가 드러납니다.",
    tags: ["정면 돌파", "리더 기질", "불굴의 추진력"],
    traits: {
      courage: 95,
      empathy: 66,
      curiosity: 72,
      reliability: 83,
      playfulness: 58,
      calm: 42,
      leadership: 88,
      hope: 80
    },
    interactionLines: {
      train: "아구몬이 전투 자세를 잡고 말합니다. '좋아, 지금이라면 뭐든 뚫고 나갈 수 있어!'",
      talk: "아구몬이 고개를 끄덕입니다. '네가 고민하는 이유를 알아. 그래도 넌 결국 해낼 거야.'",
      rest: "아구몬이 옆에 털썩 앉습니다. '잠깐 숨 고르자. 다음엔 더 크게 간다.'",
      explore: "아구몬이 앞장서 뛰어갑니다. '새로운 길? 최고지. 먼저 확인하고 올게!'"
    }
  },
  {
    id: "gabumon",
    name: "가부몬",
    stage: "성장기",
    image:
      "https://wikimon.net/images/thumb/0/08/Gabumon.jpg/320px-Gabumon.jpg",
    personality:
      "차분하게 관찰하고 끝까지 곁을 지키는 파트너. 겉으로는 신중하지만 속은 매우 따뜻합니다.",
    description:
      "혼란 속에서도 상황을 정리하고 안정감을 만드는 타입입니다. 믿을 수 있는 동행자와 특히 잘 맞습니다.",
    tags: ["보호자형", "신중함", "깊은 신뢰"],
    traits: {
      courage: 72,
      empathy: 84,
      curiosity: 60,
      reliability: 91,
      playfulness: 45,
      calm: 88,
      leadership: 57,
      hope: 76
    },
    interactionLines: {
      train: "가부몬이 자세를 낮춥니다. '무리하지 않는 범위에서 정확하게 가자. 오래 버티는 게 중요해.'",
      talk: "가부몬이 조용히 듣고 답합니다. '네가 말하지 않아도 느껴지는 게 있어. 난 네 편이야.'",
      rest: "가부몬이 불꽃처럼 온기를 내어줍니다. '긴장 풀어. 안정되면 판단이 더 선명해져.'",
      explore: "가부몬이 주변 흔적을 살핍니다. '급하지 않게 보자. 단서가 곧 길이 될 거야.'"
    }
  },
  {
    id: "patamon",
    name: "파타몬",
    stage: "성장기",
    image:
      "https://wikimon.net/images/thumb/0/0b/Patamon.jpg/320px-Patamon.jpg",
    personality:
      "다정하고 밝은 에너지로 주변을 살리는 파트너. 흔들리는 사람에게 희망을 건네는 데 능합니다.",
    description:
      "정서적 회복력과 따뜻한 낙관성이 강합니다. 상처를 치유하고 다시 일어서게 만드는 힘이 있습니다.",
    tags: ["힐링", "희망 전달", "따뜻한 낙관성"],
    traits: {
      courage: 63,
      empathy: 92,
      curiosity: 71,
      reliability: 72,
      playfulness: 86,
      calm: 68,
      leadership: 52,
      hope: 95
    },
    interactionLines: {
      train: "파타몬이 날개를 퍼덕이며 웃습니다. '분위기 좋다. 이번엔 즐겁게 강해져 보자!'",
      talk: "파타몬이 환하게 말합니다. '네 안에는 이미 좋은 빛이 있어. 내가 계속 밝혀줄게.'",
      rest: "파타몬이 어깨 위에 내려앉습니다. '괜찮아, 잠깐 쉬어도 빛은 사라지지 않아.'",
      explore: "파타몬이 빙글 돌며 앞을 가리킵니다. '저쪽에 재밌는 기운이 느껴져!'"
    }
  },
  {
    id: "tentomon",
    name: "텐타몬",
    stage: "성장기",
    image:
      "https://wikimon.net/images/thumb/8/8b/Tentomon.jpg/320px-Tentomon.jpg",
    personality:
      "분석적이면서도 유머를 잃지 않는 파트너. 복잡한 상황을 풀어내는 데 강합니다.",
    description:
      "탐구심과 침착함의 균형이 좋고, 새로운 문제를 해석하는 능력이 뛰어납니다.",
    tags: ["분석가", "유쾌한 브레인", "관찰력"],
    traits: {
      courage: 58,
      empathy: 70,
      curiosity: 94,
      reliability: 77,
      playfulness: 73,
      calm: 78,
      leadership: 64,
      hope: 69
    },
    interactionLines: {
      train: "텐타몬이 데이터를 정리합니다. '감으로도 좋지만, 이번엔 패턴을 읽고 움직여 보죠.'",
      talk: "텐타몬이 더듬이를 세웁니다. '흥미롭군요. 당신의 사고 방식은 위기에서 더 선명해집니다.'",
      rest: "텐타몬이 느긋하게 말합니다. '좋은 휴식은 최고의 업데이트입니다.'",
      explore: "텐타몬이 반짝입니다. '새로운 지역 발견! 조사할 이유가 충분하네요.'"
    }
  },
  {
    id: "gomamon",
    name: "고마몬",
    stage: "성장기",
    image:
      "https://wikimon.net/images/thumb/5/52/Gomamon.jpg/320px-Gomamon.jpg",
    personality:
      "자유롭고 적응력이 뛰어난 파트너. 낯선 환경에서도 금방 리듬을 찾아냅니다.",
    description:
      "유연함, 친화력, 즉흥적 기지가 강점입니다. 분위기를 너무 무겁지 않게 유지해줍니다.",
    tags: ["자유 영혼", "적응력", "분위기 메이커"],
    traits: {
      courage: 68,
      empathy: 76,
      curiosity: 83,
      reliability: 61,
      playfulness: 92,
      calm: 54,
      leadership: 49,
      hope: 81
    },
    interactionLines: {
      train: "고마몬이 장난스럽게 몸을 풉니다. '빡세도 재밌으면 계속할 수 있잖아?'",
      talk: "고마몬이 웃으며 어깨를 칩니다. '너무 심각해지진 마. 넌 생각보다 잘하고 있어.'",
      rest: "고마몬이 파도 소리를 흉내냅니다. '쉬는 것도 흐름이야. 리듬을 타자고.'",
      explore: "고마몬이 신나게 외칩니다. '미지의 장소? 바로 그거지!'"
    }
  },
  {
    id: "palmon",
    name: "팔몬",
    stage: "성장기",
    image:
      "https://wikimon.net/images/thumb/5/56/Palmon.jpg/320px-Palmon.jpg",
    personality:
      "돌봄과 끈기가 강한 파트너. 관계를 세심하게 다루고, 버티는 힘이 좋습니다.",
    description:
      "상대의 감정 변화에 민감하고, 공동체를 안정적으로 유지하는 역할에 어울립니다.",
    tags: ["케어형", "지속력", "관계 감각"],
    traits: {
      courage: 55,
      empathy: 89,
      curiosity: 64,
      reliability: 86,
      playfulness: 59,
      calm: 81,
      leadership: 60,
      hope: 74
    },
    interactionLines: {
      train: "팔몬이 단단히 뿌리내리듯 자세를 잡습니다. '천천히라도 꾸준히 가면 결국 강해져.'",
      talk: "팔몬이 부드럽게 답합니다. '네 마음이 거칠어질 때, 내가 균형을 잡아줄게.'",
      rest: "팔몬이 향긋한 바람을 일으킵니다. '조금만 쉬자. 회복도 전진의 일부야.'",
      explore: "팔몬이 주변 변화를 읽습니다. '숨겨진 길은 작은 변화를 보면 보여.'"
    }
  },
  {
    id: "biyomon",
    name: "피요몬",
    stage: "성장기",
    image:
      "https://wikimon.net/images/thumb/4/49/Piyomon.jpg/320px-Piyomon.jpg",
    personality:
      "감성적이면서도 한 번 결심하면 강하게 밀고 나가는 파트너. 표현력이 풍부합니다.",
    description:
      "감정과 이상을 행동으로 연결하는 타입으로, 분위기를 끌어올리는 열기가 있습니다.",
    tags: ["감성 추진형", "표현력", "상승 에너지"],
    traits: {
      courage: 78,
      empathy: 80,
      curiosity: 69,
      reliability: 67,
      playfulness: 71,
      calm: 50,
      leadership: 70,
      hope: 84
    },
    interactionLines: {
      train: "피요몬이 날개를 크게 펼칩니다. '마음이 움직였어. 이번엔 높이 올라가 보자!'",
      talk: "피요몬이 진지하게 바라봅니다. '네 진심은 결국 사람을 움직이게 해.'",
      rest: "피요몬이 조용히 숨을 고릅니다. '열정도 쉬어야 오래 타오를 수 있어.'",
      explore: "피요몬이 위쪽을 가리킵니다. '시야를 올려. 답은 더 넓은 곳에 있을 수도 있어.'"
    }
  },
  {
    id: "gatomon",
    name: "가트몬",
    stage: "성장기",
    image:
      "https://wikimon.net/images/thumb/9/99/Tailmon.jpg/320px-Tailmon.jpg",
    personality:
      "독립적이고 판단이 빠른 파트너. 냉정함 속에 강한 보호 본능을 숨기고 있습니다.",
    description:
      "자기 기준이 분명하고 위기 대응이 날카롭습니다. 스스로 서는 사람과 높은 시너지를 냅니다.",
    tags: ["독립성", "냉정한 판단", "숨은 보호 본능"],
    traits: {
      courage: 82,
      empathy: 71,
      curiosity: 68,
      reliability: 79,
      playfulness: 48,
      calm: 84,
      leadership: 74,
      hope: 73
    },
    interactionLines: {
      train: "가트몬이 짧게 말합니다. '좋아. 말보다 결과로 보여주자.'",
      talk: "가트몬이 시선을 피하지 않습니다. '네 강점은 약한 척하지 않는 데 있어. 그건 귀한 재능이야.'",
      rest: "가트몬이 가까이 있지만 티 내진 않습니다. '잠깐 쉬는 건 비효율이 아니라 전략이야.'",
      explore: "가트몬이 앞을 살핍니다. '함정이 있어도 괜찮아. 먼저 읽어낼 테니까.'"
    }
  }
];

const QUESTIONS = [
  {
    prompt: "예상치 못한 문제가 터졌을 때 당신은 먼저 어떻게 움직이나요?",
    answers: [
      {
        title: "일단 앞으로 나가 상황을 직접 바꾼다",
        body: "위험이 있어도 빠르게 행동하며 주도권을 잡으려 한다.",
        effects: { courage: 3, leadership: 2, calm: -1 }
      },
      {
        title: "주변 사람 상태부터 살피며 정리한다",
        body: "전체 분위기와 감정을 읽으며 손상부터 최소화한다.",
        effects: { empathy: 3, reliability: 2, leadership: 1 }
      },
      {
        title: "패턴과 원인을 분석하고 움직인다",
        body: "급히 반응하기보다 구조를 파악한 뒤 정확히 대응한다.",
        effects: { curiosity: 2, calm: 3, reliability: 1 }
      }
    ]
  },
  {
    prompt: "새로운 팀에 들어갔을 때 가장 먼저 신경 쓰는 것은?",
    answers: [
      {
        title: "분위기를 띄우고 자연스럽게 친해지는 것",
        body: "먼저 웃고 먼저 말을 건네며 거리감을 줄인다.",
        effects: { playfulness: 3, empathy: 2, hope: 1 }
      },
      {
        title: "내가 맡을 수 있는 역할을 빨리 찾는 것",
        body: "팀에서 필요한 위치를 파악하고 책임을 나눠 가진다.",
        effects: { reliability: 2, leadership: 2, courage: 1 }
      },
      {
        title: "관찰하면서 사람마다 성향을 파악하는 것",
        body: "표현보다 이해를 우선하며 안전한 거리를 유지한다.",
        effects: { calm: 2, empathy: 1, curiosity: 2 }
      }
    ]
  },
  {
    prompt: "당신이 가장 에너지를 얻는 순간은 언제인가요?",
    answers: [
      {
        title: "누군가가 내 말에 용기를 얻었을 때",
        body: "내 존재가 누군가의 힘이 되는 순간이 가장 크다.",
        effects: { hope: 3, empathy: 2, leadership: 1 }
      },
      {
        title: "복잡한 문제를 풀어냈을 때",
        body: "새로운 구조를 이해하거나 해답을 찾는 데 짜릿함을 느낀다.",
        effects: { curiosity: 3, calm: 1, courage: 1 }
      },
      {
        title: "몸으로 부딪혀 결과를 만들었을 때",
        body: "망설임 없이 돌파해낸 직후 가장 살아 있음을 느낀다.",
        effects: { courage: 3, leadership: 2, playfulness: 1 }
      }
    ]
  },
  {
    prompt: "휴식이 필요할 때 가장 끌리는 방식은?",
    answers: [
      {
        title: "혼자 조용히 정리하는 시간",
        body: "감정과 생각을 분리하며 페이스를 회복한다.",
        effects: { calm: 3, reliability: 1, curiosity: 1 }
      },
      {
        title: "좋아하는 사람과 가볍게 대화하기",
        body: "정서적 연결에서 큰 회복력을 얻는다.",
        effects: { empathy: 2, hope: 2, reliability: 1 }
      },
      {
        title: "새로운 장소나 콘텐츠를 탐험하기",
        body: "익숙한 틀을 벗어날 때 다시 살아난다.",
        effects: { curiosity: 2, playfulness: 2, courage: 1 }
      }
    ]
  },
  {
    prompt: "친구가 자신감을 잃었을 때 당신의 반응은?",
    answers: [
      {
        title: "곁에 앉아 감정을 끝까지 들어준다",
        body: "정답보다 먼저 공감과 안정감을 제공한다.",
        effects: { empathy: 3, calm: 1, reliability: 2 }
      },
      {
        title: "강점을 짚으며 다시 일어서게 만든다",
        body: "상대가 자기 힘을 기억하게 도와준다.",
        effects: { hope: 2, leadership: 2, courage: 1 }
      },
      {
        title: "현실적인 해결 루트를 함께 짠다",
        body: "작은 실행 계획이 자신감을 되찾게 만든다고 믿는다.",
        effects: { reliability: 2, curiosity: 1, calm: 2 }
      }
    ]
  },
  {
    prompt: "당신이 생각하는 이상적인 파트너십은?",
    answers: [
      {
        title: "함께 앞장서며 서로를 끌어올리는 관계",
        body: "열정과 추진력이 순환하는 팀워크를 원한다.",
        effects: { courage: 2, leadership: 3, hope: 1 }
      },
      {
        title: "말하지 않아도 서로를 믿는 안정적인 관계",
        body: "오래 가는 신뢰와 차분한 결속이 중요하다.",
        effects: { reliability: 3, calm: 2, empathy: 1 }
      },
      {
        title: "서로에게 영감을 주며 넓어지는 관계",
        body: "새로운 시도와 성장 자극이 있어야 한다.",
        effects: { curiosity: 2, playfulness: 2, hope: 1 }
      }
    ]
  },
  {
    prompt: "큰 결정을 내려야 할 때 기준이 되는 것은?",
    answers: [
      {
        title: "내가 지키고 싶은 사람과 가치",
        body: "관계와 의미가 선택을 결정한다.",
        effects: { empathy: 2, reliability: 2, courage: 1 }
      },
      {
        title: "장기적으로 가장 후회 없는 방향",
        body: "지금 감정보다 지속 가능성과 구조를 본다.",
        effects: { calm: 2, reliability: 2, leadership: 1 }
      },
      {
        title: "심장이 더 크게 반응하는 쪽",
        body: "확신은 논리보다 먼저 몸이 안다고 느낀다.",
        effects: { courage: 2, playfulness: 1, hope: 2 }
      }
    ]
  },
  {
    prompt: "당신을 가장 잘 설명하는 문장은 무엇인가요?",
    answers: [
      {
        title: "나는 사람을 편안하게 만드는 편이다",
        body: "내 주변은 비교적 안정되고 마음이 풀린다.",
        effects: { empathy: 2, calm: 2, hope: 1 }
      },
      {
        title: "나는 재밌는 가능성을 잘 발견한다",
        body: "남들이 지나치는 아이디어와 변화를 빨리 잡는다.",
        effects: { curiosity: 2, playfulness: 2, leadership: 1 }
      },
      {
        title: "나는 위기에서 더 선명해진다",
        body: "중요한 순간일수록 오히려 집중력이 올라간다.",
        effects: { courage: 3, calm: 1, leadership: 1 }
      }
    ]
  },
  {
    prompt: "당신이 부담을 느끼는 상황은 보통 어떤 모습인가요?",
    answers: [
      {
        title: "갈등이 길어지고 감정이 엉킬 때",
        body: "사람 사이의 균열이 커지면 에너지가 빠진다.",
        effects: { empathy: 2, reliability: 1, playfulness: -1 }
      },
      {
        title: "통제할 수 없는 혼란이 이어질 때",
        body: "정리되지 않은 상황이 오래 가면 버겁다.",
        effects: { calm: 2, reliability: 1, courage: -1 }
      },
      {
        title: "아무 변화도 없이 반복만 계속될 때",
        body: "정체된 상태가 가장 답답하다.",
        effects: { curiosity: 2, playfulness: 1, hope: 1 }
      }
    ]
  },
  {
    prompt: "디지털 월드에 소환된 첫날 밤, 당신은 어떤 선택을 할까요?",
    answers: [
      {
        title: "내일을 위해 지형과 위험 요소를 먼저 파악한다",
        body: "생존과 판단을 위해 정보를 최대한 확보한다.",
        effects: { curiosity: 2, calm: 2, reliability: 1 }
      },
      {
        title: "파트너와 마음을 맞추는 대화를 나눈다",
        body: "관계가 안정되어야 어떤 시련도 버틸 수 있다고 믿는다.",
        effects: { empathy: 2, hope: 2, reliability: 1 }
      },
      {
        title: "불안하더라도 앞으로의 작전을 직접 세운다",
        body: "두려움을 행동으로 전환하며 주도권을 잡는다.",
        effects: { courage: 2, leadership: 2, hope: 1 }
      }
    ]
  }
];

const state = {
  currentQuestion: 0,
  scores: Object.fromEntries(TRAITS.map((trait) => [trait.key, 50])),
  ranking: [],
  selectedDigimon: null,
  bond: 40
};

const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const quizPanel = document.querySelector("#quiz-panel");
const resultPanel = document.querySelector("#result-panel");
const questionCard = document.querySelector("#question-card");
const answerList = document.querySelector("#answer-list");
const progressText = document.querySelector("#progress-text");
const progressFill = document.querySelector("#progress-fill");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const topResult = document.querySelector("#top-result");
const traitBars = document.querySelector("#trait-bars");
const rankingList = document.querySelector("#ranking-list");
const archiveList = document.querySelector("#archive-list");
const bondCard = document.querySelector("#bond-card");
const interactionActions = document.querySelector("#interaction-actions");
const interactionLog = document.querySelector("#interaction-log");

function renderArchive() {
  archiveList.innerHTML = DIGIMON_DATA.map(
    (digimon) => `
      <article class="archive-card">
        <div class="archive-headline">
          <img src="${digimon.image}" alt="${digimon.name}" />
          <div>
            <h3>${digimon.name}</h3>
            <p>${digimon.stage}</p>
          </div>
        </div>
        <p>${digimon.description}</p>
        <div class="tag-row">
          ${digimon.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </article>
    `
  ).join("");
}

function scrollToPanel(element) {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const question = QUESTIONS[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / QUESTIONS.length) * 100;

  progressText.textContent = `${state.currentQuestion + 1} / ${QUESTIONS.length}`;
  progressFill.style.width = `${progress}%`;

  questionCard.innerHTML = `
    <div class="question-index">
      <div class="question-number">${state.currentQuestion + 1}</div>
      <p class="eyebrow">Signal Decoding</p>
    </div>
    <h3 class="question-title">${question.prompt}</h3>
  `;

  answerList.innerHTML = question.answers
    .map(
      (answer, index) => `
        <button class="answer-button" data-answer-index="${index}">
          <strong>${answer.title}</strong>
          <p>${answer.body}</p>
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => {
      const answerIndex = Number(button.dataset.answerIndex);
      applyAnswer(question.answers[answerIndex].effects);
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

  calculateRanking();
  renderResults();
}

function calculateRanking() {
  const dominantTraits = [...TRAITS]
    .sort((a, b) => state.scores[b.key] - state.scores[a.key])
    .slice(0, 3)
    .map((trait) => trait.key);

  state.ranking = DIGIMON_DATA.map((digimon) => {
    const distance = TRAITS.reduce((total, trait) => {
      return total + Math.abs(state.scores[trait.key] - digimon.traits[trait.key]);
    }, 0);

    const affinityBonus = dominantTraits.reduce((bonus, traitKey) => {
      return bonus + Math.max(0, 12 - Math.abs(state.scores[traitKey] - digimon.traits[traitKey]) / 4);
    }, 0);

    const score = Math.max(58, Math.round(100 - distance / 8 + affinityBonus));

    return {
      ...digimon,
      matchScore: Math.min(99, score),
      reasons: dominantTraits.map((traitKey) => {
        const trait = TRAITS.find((item) => item.key === traitKey);
        const gap = Math.abs(state.scores[traitKey] - digimon.traits[traitKey]);
        const tone =
          gap < 12
            ? `${trait.label}의 결이 매우 비슷합니다`
            : `${trait.label}을 주고받는 방식이 잘 맞습니다`;
        return tone;
      })
    };
  }).sort((a, b) => b.matchScore - a.matchScore);

  state.selectedDigimon = state.ranking[0];
  state.bond = 40;
}

function renderResults() {
  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  const first = state.ranking[0];
  resultTitle.textContent = `${first.name}, 당신의 1순위 파트너`;
  resultSummary.textContent = `${first.personality} 당신은 ${describeChosenChild()} 유형으로 분석되며, ${first.name}의 에너지와 가장 높은 공명을 보였습니다.`;

  topResult.innerHTML = `
    <article class="top-card">
      <div class="digimon-visual">
        <span class="signal-badge">Match ${first.matchScore}%</span>
        <img src="${first.image}" alt="${first.name}" />
      </div>
      <div class="top-card-content">
        <p class="eyebrow">Rank 1</p>
        <h3>${first.name}</h3>
        <p>${first.description}</p>
        <div class="tag-row">
          ${first.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="trait-chip-row">
          ${first.reasons.map((reason) => `<span class="trait-chip">${reason}</span>`).join("")}
        </div>
        <div class="score-line">
          <strong>추천 이유</strong>
          <p>${buildReasonNarrative(first)}</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${first.matchScore}%"></div>
          </div>
        </div>
      </div>
    </article>
  `;

  renderTraitBars();
  renderRanking();
  renderBondPanel();
  renderInteractionButtons();
  interactionLog.textContent = `초기 링크 형성 완료.\n${first.name}이(가) 당신을 바라봅니다.\n"이제부터 함께 간다."`;
  scrollToPanel(resultPanel);
}

function describeChosenChild() {
  const sorted = [...TRAITS].sort((a, b) => state.scores[b.key] - state.scores[a.key]);
  const [first, second] = sorted;
  return `${first.label}과 ${second.label}이 강한 선택받은 아이`;
}

function buildReasonNarrative(digimon) {
  const topTraits = [...TRAITS]
    .sort((a, b) => state.scores[b.key] - state.scores[a.key])
    .slice(0, 2)
    .map((trait) => trait.label);

  return `${topTraits.join("과 ")} 성향이 특히 높게 나타났고, ${digimon.name}은 같은 축에서 높은 공명도를 보였습니다. 당신이 관계를 맺고 위기를 돌파하는 방식이 ${digimon.name}의 성격 패턴과 자연스럽게 이어집니다.`;
}

function renderTraitBars() {
  traitBars.innerHTML = TRAITS.map((trait) => {
    const value = Math.round(state.scores[trait.key]);
    return `
      <div class="trait-row">
        <span>${trait.label}</span>
        <div class="trait-meter">
          <div class="trait-meter-fill" style="width:${value}%"></div>
        </div>
        <span>${value}</span>
      </div>
    `;
  }).join("");
}

function renderRanking() {
  rankingList.innerHTML = state.ranking.slice(0, 3).map((digimon, index) => `
    <article class="rank-card">
      <div class="rank-header">
        <div class="rank-number">${index + 1}</div>
        <div>
          <h3>${digimon.name}</h3>
          <p>${digimon.personality}</p>
        </div>
      </div>
      <div class="tag-row">
        <span class="tag">매칭 ${digimon.matchScore}%</span>
        ${digimon.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <p>${buildReasonNarrative(digimon)}</p>
    </article>
  `).join("");
}

function renderBondPanel() {
  const partner = state.selectedDigimon;
  bondCard.innerHTML = `
    <p class="eyebrow">Primary Partner</p>
    <h3>${partner.name}</h3>
    <p>${partner.personality}</p>
    <div class="bond-meter">
      <div class="bond-fill" style="width:${state.bond}%"></div>
    </div>
    <p>유대 수치 ${state.bond}%</p>
    <div class="tag-row">
      ${partner.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function renderInteractionButtons() {
  const actions = [
    { key: "train", label: "합동 훈련" },
    { key: "talk", label: "마음 대화" },
    { key: "rest", label: "휴식 공유" },
    { key: "explore", label: "지역 탐험" }
  ];

  interactionActions.innerHTML = actions
    .map(
      (action) => `<button class="action-button" data-action="${action.key}">${action.label}</button>`
    )
    .join("");

  document.querySelectorAll(".action-button").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      state.bond = Math.min(100, state.bond + 9);
      renderBondPanel();
      interactionLog.textContent = `${state.selectedDigimon.interactionLines[action]}\n\n현재 유대 수치: ${state.bond}%`;
    });
  });
}

function resetExperience() {
  state.currentQuestion = 0;
  state.scores = Object.fromEntries(TRAITS.map((trait) => [trait.key, 50]));
  state.ranking = [];
  state.selectedDigimon = null;
  state.bond = 40;
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
  scrollToPanel(quizPanel);
}

startButton.addEventListener("click", () => {
  quizPanel.classList.remove("hidden");
  resultPanel.classList.add("hidden");
  resetExperience();
});

restartButton.addEventListener("click", resetExperience);

renderArchive();
