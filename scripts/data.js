window.AppData = (() => {
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

  const ACTIONS = [
    { key: "train", label: "합동 훈련", description: "전투 감각과 호흡을 맞춥니다." },
    { key: "talk", label: "감정 교신", description: "감정과 결의를 나눕니다." },
    { key: "explore", label: "지역 탐험", description: "낯선 구역을 함께 조사합니다." },
    { key: "rest", label: "야영 정비", description: "휴식하며 연결을 안정화합니다." }
  ];

  const DIGIMON_DATA = [
    {
      id: "agumon", apiName: "Agumon", nameKo: "아구몬", stageKo: "성장기", crest: "용기", favoriteAction: "train",
      evolution: { apiName: "Greymon", nameKo: "그레이몬", stageKo: "성숙기", unlockedTitle: "정면 돌파의 화염 진화", note: "두려움을 정면으로 밀어붙이는 추진력이 완전 동기화됩니다." },
      personality: "불안한 순간에도 앞으로 나가 판을 바꾸는 돌파형 파트너입니다.",
      description: "직진성과 책임감, 결단력이 강한 디지몬입니다. 당신이 흔들릴 때도 먼저 등을 떠밀어 전진하게 만듭니다.",
      tags: ["정면 돌파", "결단력", "리더 감각"],
      traits: { courage: 95, empathy: 62, curiosity: 68, reliability: 83, playfulness: 55, calm: 36, leadership: 90, hope: 79 },
      interactionLines: { train: ["아구몬이 발을 굴리며 외칩니다. '좋아, 지금이다. 같이 밀어붙이자!'", "아구몬이 주먹을 꽉 쥡니다. '네 결심이 강할수록 나도 더 강해져.'"], talk: ["아구몬이 고개를 끄덕입니다. '망설여도 괜찮아. 결국 넌 앞으로 갈 거잖아.'"], explore: ["아구몬이 앞장서 달립니다. '새 길이 보이면 먼저 부딪혀 보는 거야!'"], rest: ["아구몬이 옆에 앉아 숨을 고릅니다. '쉬는 건 다음 돌파를 위한 준비지.'"] }
    },
    {
      id: "gabumon", apiName: "Gabumon", nameKo: "파피몬", stageKo: "성장기", crest: "우정", favoriteAction: "talk",
      evolution: { apiName: "Garurumon", nameKo: "가루몬", stageKo: "성숙기", unlockedTitle: "신뢰 동기화 진화", note: "침착한 보호 본능이 폭발적으로 확장됩니다." },
      personality: "겉은 조용하지만 속은 뜨거운 보호자형 파트너입니다.",
      description: "신중하고 안정적이며, 한 번 믿은 사람에게 끝까지 남는 타입입니다. 차분한 결속을 원하는 사용자와 궁합이 좋습니다.",
      tags: ["보호자형", "신중함", "깊은 신뢰"],
      traits: { courage: 72, empathy: 84, curiosity: 60, reliability: 93, playfulness: 42, calm: 90, leadership: 56, hope: 74 },
      interactionLines: { train: ["파피몬이 자세를 낮춥니다. '정확하게 움직이면 오래 버틸 수 있어.'"], talk: ["파피몬이 말합니다. '네가 다 말하지 않아도 느껴져. 난 네 편이야.'", "파피몬이 조용히 곁을 지킵니다. '신뢰는 소리보다 오래 남아.'"], explore: ["파피몬이 흔적을 살핍니다. '서두르지 말자. 길은 단서가 알려줄 거야.'"], rest: ["파피몬이 체온을 나눠 줍니다. '긴장을 풀어야 판단이 더 또렷해져.'"] }
    },
    {
      id: "patamon", apiName: "Patamon", nameKo: "파닥몬", stageKo: "성장기", crest: "희망", favoriteAction: "talk",
      evolution: { apiName: "Angemon", nameKo: "엔젤몬", stageKo: "성숙기", unlockedTitle: "희망 증폭 진화", note: "회복과 구원의 성향이 전장 전체를 비춥니다." },
      personality: "상처 입은 마음을 다시 일으켜 세우는 희망형 파트너입니다.",
      description: "다정함과 낙관성이 강하며, 절망적인 분위기에서 가장 빛을 발합니다. 정서적 회복력과 잘 맞습니다.",
      tags: ["희망", "회복력", "밝은 에너지"],
      traits: { courage: 64, empathy: 92, curiosity: 74, reliability: 72, playfulness: 84, calm: 66, leadership: 54, hope: 97 },
      interactionLines: { train: ["파닥몬이 기분 좋게 날갯짓합니다. '재밌게 강해지는 것도 방법이야!'"], talk: ["파닥몬이 웃습니다. '네 안의 빛은 아직 아주 선명해.'", "파닥몬이 속삭입니다. '다시 일어나는 사람은 정말 강해.'"], explore: ["파닥몬이 공중에서 맴돕니다. '저쪽에서 반짝이는 기운이 느껴져!'"], rest: ["파닥몬이 어깨에 내려앉습니다. '쉬어도 빛은 사라지지 않아.'"] }
    },
    {
      id: "gomamon", apiName: "Gomamon", nameKo: "쉬라몬", stageKo: "성장기", crest: "성실", favoriteAction: "explore",
      evolution: { apiName: "Ikkakumon", nameKo: "이크몬", stageKo: "성숙기", unlockedTitle: "유연 적응 진화", note: "거친 환경에서도 버티는 생존 감각이 극대화됩니다." },
      personality: "자유롭고 적응력이 좋으며, 분위기를 너무 무겁지 않게 만드는 파트너입니다.",
      description: "낯선 환경에서 리듬을 빠르게 찾고, 유머와 즉흥성으로 팀을 살립니다. 탐험형 성향과 잘 맞습니다.",
      tags: ["자유 영혼", "적응력", "탐험형"],
      traits: { courage: 68, empathy: 76, curiosity: 84, reliability: 60, playfulness: 93, calm: 52, leadership: 47, hope: 79 },
      interactionLines: { train: ["쉬라몬이 씩 웃습니다. '빡세도 재밌으면 계속할 수 있지!'"], talk: ["쉬라몬이 말합니다. '생각보다 넌 더 잘하고 있어. 너무 꽉 잡지 마.'"], explore: ["쉬라몬이 신나게 외칩니다. '미지의 지역? 그거야말로 우리가 갈 이유지!'", "쉬라몬이 주변을 둘러봅니다. '흐름만 타면 길은 금방 나와.'"], rest: ["쉬라몬이 몸을 웅크립니다. '지금은 체온 저장 모드로 간다.'"] }
    },
    {
      id: "piyomon", apiName: "Biyomon", nameKo: "피요몬", stageKo: "성장기", crest: "사랑", favoriteAction: "talk",
      evolution: { apiName: "Birdramon", nameKo: "버드라몬", stageKo: "성숙기", unlockedTitle: "감성 비상 진화", note: "감정 에너지가 추진력으로 바뀌며 상승 기류를 만듭니다." },
      personality: "감정을 숨기지 않고 표현하면서도, 결심하면 높이 올라가는 파트너입니다.",
      description: "표현력과 열기가 강한 디지몬으로, 당신의 진심을 행동으로 연결해 줍니다.",
      tags: ["감성 추진", "표현력", "상승 에너지"],
      traits: { courage: 79, empathy: 80, curiosity: 71, reliability: 66, playfulness: 71, calm: 48, leadership: 71, hope: 86 },
      interactionLines: { train: ["피요몬이 날개를 크게 펼칩니다. '이번엔 더 높이 치솟아 보자!'"], talk: ["피요몬이 진지하게 말합니다. '네 진심은 결국 사람을 움직이게 해.'"], explore: ["피요몬이 위쪽을 가리킵니다. '답은 시야를 높이면 보여.'"], rest: ["피요몬이 숨을 고릅니다. '열정도 쉬어야 오래 타오를 수 있어.'"] }
    },
    {
      id: "palmon", apiName: "Palmon", nameKo: "팔몬", stageKo: "성장기", crest: "순수", favoriteAction: "rest",
      evolution: { apiName: "Togemon", nameKo: "토게몬", stageKo: "성숙기", unlockedTitle: "지속 회복 진화", note: "버티는 힘과 돌봄의 밀도가 전투 지속력으로 바뀝니다." },
      personality: "관계를 세심하게 돌보고, 오래 버티는 힘이 좋은 케어형 파트너입니다.",
      description: "감정 변화에 민감하며 공동체를 안정시키는 역할에 강합니다. 지지형 사용자와 궁합이 좋습니다.",
      tags: ["돌봄", "지속력", "관계 감각"],
      traits: { courage: 55, empathy: 90, curiosity: 64, reliability: 87, playfulness: 58, calm: 82, leadership: 59, hope: 74 },
      interactionLines: { train: ["팔몬이 자세를 바로잡습니다. '천천히라도 계속 가면 결국 강해져.'"], talk: ["팔몬이 미소 짓습니다. '거칠어진 마음은 내가 가라앉혀 줄게.'"], explore: ["팔몬이 변화를 읽습니다. '숨은 길은 사소한 차이에서 보여.'"], rest: ["팔몬이 향기로운 바람을 일으킵니다. '회복도 전진의 일부야.'", "팔몬이 말합니다. '지금 안정되면 다음 선택이 달라져.'"] }
    },
    {
      id: "tentomon", apiName: "Tentomon", nameKo: "텐타몬", stageKo: "성장기", crest: "지식", favoriteAction: "explore",
      evolution: { apiName: "Kabuterimon", nameKo: "캅테리몬", stageKo: "성숙기", unlockedTitle: "분석 확장 진화", note: "관찰과 해석이 공격성과 방어 전략으로 확장됩니다." },
      personality: "분석적이지만 유머를 잃지 않는, 믿음직한 브레인형 파트너입니다.",
      description: "탐구심과 침착함의 균형이 좋고, 정보 수집과 해석에 강합니다. 문제 해결형 사용자와 잘 맞습니다.",
      tags: ["분석가", "관찰력", "브레인"],
      traits: { courage: 58, empathy: 70, curiosity: 95, reliability: 77, playfulness: 71, calm: 80, leadership: 63, hope: 68 },
      interactionLines: { train: ["텐타몬이 계산을 마칩니다. '이번엔 감이 아니라 패턴으로 가죠.'"], talk: ["텐타몬이 더듬이를 세웁니다. '흥미롭군요. 당신은 위기에서 더 정확해집니다.'"], explore: ["텐타몬이 반짝입니다. '미지의 지역 발견. 조사할 가치가 충분합니다.'", "텐타몬이 말합니다. '새로운 데이터는 언제나 옳습니다.'"], rest: ["텐타몬이 느긋하게 말합니다. '휴식은 최고의 업데이트입니다.'"] }
    },
    {
      id: "gatomon", apiName: "Gatomon", nameKo: "가트몬", stageKo: "성장기", crest: "빛", favoriteAction: "train",
      evolution: { apiName: "Angewomon", nameKo: "엔젤우몬", stageKo: "완전체", unlockedTitle: "빛의 심판 진화", note: "냉정한 판단력과 보호 본능이 고차원적으로 발현됩니다." },
      personality: "독립적이고 판단이 빠르며, 냉정함 속에 강한 보호 본능을 가진 파트너입니다.",
      description: "자기 기준이 분명하고 위기 대응이 날카롭습니다. 스스로 서는 사람과 높은 시너지를 냅니다.",
      tags: ["독립성", "냉정한 판단", "빛"],
      traits: { courage: 83, empathy: 70, curiosity: 66, reliability: 80, playfulness: 47, calm: 86, leadership: 74, hope: 74 },
      interactionLines: { train: ["가트몬이 짧게 말합니다. '좋아. 결과로 보여주자.'"], talk: ["가트몬이 말합니다. '강한 사람은 약한 척하지 않아. 그게 네 장점이야.'"], explore: ["가트몬이 앞을 살핍니다. '함정이 있어도 먼저 읽어낼 수 있어.'"], rest: ["가트몬이 시선을 돌린 채 말합니다. '휴식도 전략이야.'"] }
    },
    {
      id: "veemon", apiName: "Veemon", nameKo: "브이몬", stageKo: "성장기", crest: "용기", favoriteAction: "train",
      evolution: { apiName: "ExVeemon", nameKo: "브이드라몬", stageKo: "성숙기", unlockedTitle: "드래곤 펄스 진화", note: "열정과 돌진력이 드래곤 급 파괴력으로 증폭됩니다." },
      personality: "밝고 대담하며, 승부가 걸릴수록 텐션이 올라가는 라이벌형 파트너입니다.",
      description: "승부욕과 낙관성이 공존하며, 좌절을 오래 끌지 않습니다. 강한 추진형 사용자와 잘 맞습니다.",
      tags: ["승부욕", "낙관성", "드래곤 기질"],
      traits: { courage: 90, empathy: 66, curiosity: 76, reliability: 73, playfulness: 82, calm: 42, leadership: 84, hope: 86 },
      interactionLines: { train: ["브이몬이 몸을 풉니다. '좋아, 이건 완전 우리 필드야!'"], talk: ["브이몬이 웃습니다. '진짜 강한 건 다시 덤빌 수 있는 거야.'"], explore: ["브이몬이 뛰어갑니다. '새로운 길이면 더 좋지!'"], rest: ["브이몬이 씩 웃습니다. '쉬었다 가도 속도는 안 죽어.'"] }
    },
    {
      id: "hawkmon", apiName: "Hawkmon", nameKo: "호크몬", stageKo: "성장기", crest: "사랑", favoriteAction: "explore",
      evolution: { apiName: "Aquilamon", nameKo: "아퀼라몬", stageKo: "성숙기", unlockedTitle: "고공 정찰 진화", note: "시야와 판단 범위가 넓어지며 상황 장악력이 상승합니다." },
      personality: "예의 바르지만 호기심이 강하고, 넓은 시야로 판을 읽는 파트너입니다.",
      description: "균형감과 기민함이 좋아 탐색과 조정 역할에 강합니다. 계획적 탐험형과 어울립니다.",
      tags: ["균형감", "예의", "정찰형"],
      traits: { courage: 69, empathy: 74, curiosity: 88, reliability: 77, playfulness: 60, calm: 74, leadership: 67, hope: 78 },
      interactionLines: { train: ["호크몬이 자세를 잡습니다. '균형을 잃지 않으면 더 멀리 날 수 있습니다.'"], talk: ["호크몬이 말합니다. '당신의 품위 있는 결단은 생각보다 강합니다.'"], explore: ["호크몬이 시야를 넓힙니다. '높이 오르면 보이지 않던 길이 나타납니다.'", "호크몬이 정리합니다. '탐색은 속도보다 관측이 먼저입니다.'"], rest: ["호크몬이 날개를 접습니다. '정비 후의 비행이 가장 안정적입니다.'"] }
    },
    {
      id: "armadillomon", apiName: "Armadillomon", nameKo: "아르마몬", stageKo: "성장기", crest: "지식", favoriteAction: "rest",
      evolution: { apiName: "Ankylomon", nameKo: "안킬로몬", stageKo: "성숙기", unlockedTitle: "철벽 방호 진화", note: "튼튼한 생존력과 보호력이 전면에 드러납니다." },
      personality: "느긋해 보이지만 의외로 단단하고, 위기에서 잘 버티는 방어형 파트너입니다.",
      description: "안정감, 꾸준함, 체력형 회복력이 좋습니다. 급하지 않게 오래 가는 사람과 맞습니다.",
      tags: ["방어형", "꾸준함", "생존력"],
      traits: { courage: 62, empathy: 73, curiosity: 58, reliability: 88, playfulness: 52, calm: 86, leadership: 48, hope: 70 },
      interactionLines: { train: ["아르마몬이 몸을 웅크립니다. '급하지 않게 단단해지면 돼.'"], talk: ["아르마몬이 천천히 말합니다. '버티는 것도 실력이란 말이지.'"], explore: ["아르마몬이 지면을 살핍니다. '천천히 보면 놓치는 게 적어.'"], rest: ["아르마몬이 편하게 눕습니다. '지금 쉬면 나중에 더 오래 간다.'", "아르마몬이 말합니다. '안정되면 마음도 더 강해져.'"] }
    },
    {
      id: "guilmon", apiName: "Guilmon", nameKo: "길몬", stageKo: "성장기", crest: "용기", favoriteAction: "train",
      evolution: { apiName: "Growlmon", nameKo: "그라우몬", stageKo: "성숙기", unlockedTitle: "야성 해방 진화", note: "본능적인 전투 감각과 충성심이 거대하게 확장됩니다." },
      personality: "순수하지만 전투 본능이 강하고, 좋아하는 상대에게는 충성도가 높은 파트너입니다.",
      description: "직감형이면서 감정이 선명합니다. 뜨거운 에너지와 솔직함이 큰 장점입니다.",
      tags: ["본능형", "충성", "강한 에너지"],
      traits: { courage: 92, empathy: 68, curiosity: 63, reliability: 75, playfulness: 79, calm: 34, leadership: 80, hope: 82 },
      interactionLines: { train: ["길몬이 들뜬 목소리로 외칩니다. '더 강해질 수 있어! 같이 하자!'"], talk: ["길몬이 고개를 갸웃합니다. '네가 슬프면 나도 뭔가 답답해져.'"], explore: ["길몬이 냄새를 맡습니다. '새로운 기운이 있어. 재밌을 것 같아.'"], rest: ["길몬이 크게 하품합니다. '충전 끝나면 다시 간다!'"] }
    },
    {
      id: "renamon", apiName: "Renamon", nameKo: "레나몬", stageKo: "성장기", crest: "빛", favoriteAction: "talk",
      evolution: { apiName: "Kyubimon", nameKo: "규우비몬", stageKo: "성숙기", unlockedTitle: "정제된 집중 진화", note: "절제와 명료함이 고속의 전투 흐름으로 전환됩니다." },
      personality: "차갑게 보일 수 있지만 집중력과 자존감이 매우 강한 파트너입니다.",
      description: "감정보다 명확한 기준을 먼저 세우고, 스스로를 단련하는 데 익숙합니다. 내면이 강한 사용자와 어울립니다.",
      tags: ["절제", "집중력", "자존감"],
      traits: { courage: 77, empathy: 63, curiosity: 72, reliability: 82, playfulness: 38, calm: 93, leadership: 70, hope: 68 },
      interactionLines: { train: ["레나몬이 말합니다. '군더더기 없는 움직임이 가장 강합니다.'"], talk: ["레나몬이 조용히 바라봅니다. '자신을 이해하는 사람은 쉽게 무너지지 않습니다.'", "레나몬이 덧붙입니다. '당신은 생각보다 이미 많이 단련돼 있습니다.'"], explore: ["레나몬이 주변을 훑습니다. '보이지 않는 흐름을 읽어 봅시다.'"], rest: ["레나몬이 눈을 감습니다. '침묵도 중요한 조율입니다.'"] }
    },
    {
      id: "terriermon", apiName: "Terriermon", nameKo: "테리어몬", stageKo: "성장기", crest: "우정", favoriteAction: "rest",
      evolution: { apiName: "Gargomon", nameKo: "가고몬", stageKo: "성숙기", unlockedTitle: "하이 텐션 진화", note: "장난기와 전투 감각이 동시에 폭발합니다." },
      personality: "가볍고 장난스러워 보여도, 전투에 들어가면 집중력이 확 살아나는 파트너입니다.",
      description: "친화력과 회복력이 좋고, 무거운 분위기를 바꾸는 데 능합니다. 경쾌한 타입의 사용자와 잘 맞습니다.",
      tags: ["장난기", "친화력", "회복형"],
      traits: { courage: 71, empathy: 78, curiosity: 73, reliability: 67, playfulness: 95, calm: 58, leadership: 55, hope: 84 },
      interactionLines: { train: ["테리어몬이 웃습니다. '좋아좋아, 몸 풀고 제대로 가 보자!'"], talk: ["테리어몬이 장난스럽게 말합니다. '너무 딱딱하게 굴면 재미없잖아?'"], explore: ["테리어몬이 이리저리 뜁니다. '새 지역 체크! 분명 재밌는 거 있어.'"], rest: ["테리어몬이 말합니다. '릴랙스, 릴랙스. 컨디션 관리도 실력이지.'", "테리어몬이 기대옵니다. '이 시간, 나쁘지 않네.'"] }
    },
    {
      id: "impmon", apiName: "Impmon", nameKo: "임프몬", stageKo: "성장기", crest: "빛", favoriteAction: "explore",
      evolution: { apiName: "Wizardmon", nameKo: "위자몬", stageKo: "성숙기", unlockedTitle: "트릭스터 각성 진화", note: "예측 불가능한 감각이 정교한 마법 전술로 바뀝니다." },
      personality: "장난스럽고 비꼬는 것 같아도, 속내는 복잡하고 예민한 트릭스터형 파트너입니다.",
      description: "예측 불가능성, 독립성, 순간 판단력이 장점입니다. 틀을 싫어하는 사용자와 잘 맞습니다.",
      tags: ["트릭스터", "독립성", "반전 매력"],
      traits: { courage: 74, empathy: 58, curiosity: 86, reliability: 52, playfulness: 91, calm: 61, leadership: 64, hope: 63 },
      interactionLines: { train: ["임프몬이 웃습니다. '이왕 하는 거, 좀 화끈하게 놀아 보자고.'"], talk: ["임프몬이 툭 말합니다. '네가 생각보다 더 솔직한 건 알고 있어.'"], explore: ["임프몬이 눈을 빛냅니다. '수상한 곳일수록 볼 게 많지.'", "임프몬이 키득댑니다. '이런 예측 불가한 흐름, 싫지 않은데?'"], rest: ["임프몬이 팔짱을 낍니다. '잠깐 숨 고르는 건 인정해 주지.'"] }
    },
    {
      id: "salamon", apiName: "Salamon", nameKo: "플롯트몬", stageKo: "성장기", crest: "빛", favoriteAction: "talk",
      evolution: { apiName: "Gatomon", nameKo: "가트몬", stageKo: "성숙기", unlockedTitle: "빛의 전이 진화", note: "부드러운 감응이 날카로운 보호 본능으로 이어집니다." },
      personality: "순수하고 민감하지만, 관계의 결을 아주 정교하게 읽는 파트너입니다.",
      description: "정서적 감응력과 빛의 이미지가 강합니다. 배려와 교감이 중요한 사용자와 잘 맞습니다.",
      tags: ["순수함", "감응력", "빛의 기운"],
      traits: { courage: 57, empathy: 91, curiosity: 65, reliability: 75, playfulness: 72, calm: 73, leadership: 44, hope: 88 },
      interactionLines: { train: ["플롯트몬이 힘차게 말합니다. '조금씩이라도 함께 강해지자!'"], talk: ["플롯트몬이 다정하게 말합니다. '네 마음의 흔들림이 다 느껴져.'", "플롯트몬이 웃습니다. '그래도 넌 계속 좋은 방향으로 가고 있어.'"], explore: ["플롯트몬이 기운을 느낍니다. '저쪽에 부드러운 빛이 있어.'"], rest: ["플롯트몬이 몸을 기대옵니다. '지금은 편안한 연결이 제일 중요해.'"] }
    },
    {
      id: "wormmon", apiName: "Wormmon", nameKo: "웜몬", stageKo: "성장기", crest: "친절", favoriteAction: "talk",
      evolution: { apiName: "Stingmon", nameKo: "스팅몬", stageKo: "성숙기", unlockedTitle: "충의 진화", note: "섬세한 충성심이 고속 전투 감각으로 연결됩니다." },
      personality: "섬세하고 다정하지만, 믿는 대상을 위해서는 매우 강해지는 파트너입니다.",
      description: "조심스럽고 상냥한 성격이지만 중심이 약한 것은 아닙니다. 유대 중심 사용자와 잘 맞습니다.",
      tags: ["섬세함", "충의", "유대 중심"],
      traits: { courage: 61, empathy: 88, curiosity: 69, reliability: 81, playfulness: 58, calm: 79, leadership: 51, hope: 77 },
      interactionLines: { train: ["웜몬이 작게 다짐합니다. '당신과 함께라면 나도 강해질 수 있어요.'"], talk: ["웜몬이 수줍게 말합니다. '당신이 믿어 주면 더 잘할 수 있어요.'"], explore: ["웜몬이 풀숲을 살핍니다. '작은 흔적을 보면 길이 보여요.'"], rest: ["웜몬이 차분히 숨을 고릅니다. '지금은 연결을 단단하게 할 시간이네요.'"] }
    },
    {
      id: "gammamon", apiName: "Gammamon", nameKo: "감마몬", stageKo: "성장기", crest: "우정", favoriteAction: "explore",
      evolution: { apiName: "BetelGammamon", nameKo: "베텔감마몬", stageKo: "성숙기", unlockedTitle: "순수 충동 진화", note: "호기심과 애착이 폭발적인 파워로 바뀝니다." },
      personality: "호기심이 많고 정이 깊으며, 좋아하는 사람과 함께 성장하는 파트너입니다.",
      description: "신기한 것에 쉽게 끌리고 감정 표현이 솔직합니다. 모험형 사용자와 특히 잘 맞습니다.",
      tags: ["호기심", "순수함", "모험심"],
      traits: { courage: 81, empathy: 77, curiosity: 92, reliability: 68, playfulness: 88, calm: 41, leadership: 65, hope: 89 },
      interactionLines: { train: ["감마몬이 신나 합니다. '더 해 보자! 아직 할 수 있어!'"], talk: ["감마몬이 바로 반응합니다. '네 마음, 나한테는 잘 들려!'"], explore: ["감마몬이 두리번거립니다. '와, 처음 보는 게 엄청 많아!'", "감마몬이 외칩니다. '저쪽이 궁금해!'"], rest: ["감마몬이 몸을 말고 쉽니다. '조금 쉬고 다시 모험 가자.'"] }
    }
  ];

  const QUESTIONS = [
    { prompt: "예상치 못한 문제가 터졌을 때 당신은 먼저 어떻게 움직이나요?", subcopy: "당황한 순간의 첫 반응은 파트너 적합도를 크게 드러냅니다.", answers: [{ title: "일단 앞으로 나가 상황을 직접 바꾼다", body: "위험이 있어도 빠르게 행동하며 주도권을 잡으려 한다.", effects: { courage: 3, leadership: 2, calm: -1 } }, { title: "주변 사람 상태부터 살피며 정리한다", body: "전체 분위기와 감정을 읽으며 손상부터 최소화한다.", effects: { empathy: 3, reliability: 2, leadership: 1 } }, { title: "원인과 패턴을 분석하고 움직인다", body: "급히 반응하기보다 구조를 파악한 뒤 정확히 대응한다.", effects: { curiosity: 2, calm: 3, reliability: 1 } }] },
    { prompt: "새로운 팀에 들어갔을 때 가장 먼저 신경 쓰는 것은?", subcopy: "관계의 시작 방식은 당신이 끌리는 디지몬을 바꿉니다.", answers: [{ title: "분위기를 띄우고 자연스럽게 친해지는 것", body: "먼저 웃고 먼저 말을 건네며 거리감을 줄인다.", effects: { playfulness: 3, empathy: 2, hope: 1 } }, { title: "내가 맡을 수 있는 역할을 빨리 찾는 것", body: "팀에서 필요한 위치를 파악하고 책임을 나눠 가진다.", effects: { reliability: 2, leadership: 2, courage: 1 } }, { title: "관찰하면서 각자 성향을 파악하는 것", body: "표현보다 이해를 우선하며 안전한 거리를 유지한다.", effects: { calm: 2, empathy: 1, curiosity: 2 } }] },
    { prompt: "당신이 가장 에너지를 얻는 순간은 언제인가요?", subcopy: "동기 부여의 방식이 파트너의 전투 스타일과 연결됩니다.", answers: [{ title: "누군가가 내 말에 용기를 얻었을 때", body: "내 존재가 누군가의 힘이 되는 순간이 가장 크다.", effects: { hope: 3, empathy: 2, leadership: 1 } }, { title: "복잡한 문제를 풀어냈을 때", body: "새로운 구조를 이해하거나 해답을 찾는 데 짜릿함을 느낀다.", effects: { curiosity: 3, calm: 1, courage: 1 } }, { title: "몸으로 부딪혀 결과를 만들었을 때", body: "망설임 없이 돌파해낸 직후 가장 살아 있음을 느낀다.", effects: { courage: 3, leadership: 2, playfulness: 1 } }] },
    { prompt: "휴식이 필요할 때 가장 끌리는 방식은?", subcopy: "회복 루틴은 어떤 파트너와 오래 가는지 알려줍니다.", answers: [{ title: "혼자 조용히 정리하는 시간", body: "감정과 생각을 분리하며 페이스를 회복한다.", effects: { calm: 3, reliability: 1, curiosity: 1 } }, { title: "좋아하는 사람과 가볍게 대화하기", body: "정서적 연결에서 큰 회복력을 얻는다.", effects: { empathy: 2, hope: 2, reliability: 1 } }, { title: "새로운 장소나 콘텐츠를 탐험하기", body: "익숙한 틀을 벗어날 때 다시 살아난다.", effects: { curiosity: 2, playfulness: 2, courage: 1 } }] },
    { prompt: "친구가 자신감을 잃었을 때 당신의 반응은?", subcopy: "타인을 회복시키는 방식은 당신의 문장을 보여줍니다.", answers: [{ title: "곁에 앉아 감정을 끝까지 들어준다", body: "정답보다 먼저 공감과 안정감을 제공한다.", effects: { empathy: 3, calm: 1, reliability: 2 } }, { title: "강점을 짚으며 다시 일어서게 만든다", body: "상대가 자기 힘을 기억하게 도와준다.", effects: { hope: 2, leadership: 2, courage: 1 } }, { title: "현실적인 해결 루트를 함께 짠다", body: "작은 실행 계획이 자신감을 되찾게 만든다고 믿는다.", effects: { reliability: 2, curiosity: 1, calm: 2 } }] },
    { prompt: "당신이 생각하는 이상적인 파트너십은?", subcopy: "당신이 원하는 관계의 모양은 추천 1위를 크게 바꿉니다.", answers: [{ title: "함께 앞장서며 서로를 끌어올리는 관계", body: "열정과 추진력이 순환하는 팀워크를 원한다.", effects: { courage: 2, leadership: 3, hope: 1 } }, { title: "말하지 않아도 서로를 믿는 안정적인 관계", body: "오래 가는 신뢰와 차분한 결속이 중요하다.", effects: { reliability: 3, calm: 2, empathy: 1 } }, { title: "서로에게 영감을 주며 넓어지는 관계", body: "새로운 시도와 성장 자극이 있어야 한다.", effects: { curiosity: 2, playfulness: 2, hope: 1 } }] },
    { prompt: "큰 결정을 내려야 할 때 기준이 되는 것은?", subcopy: "판단의 우선순위가 파트너의 성격과 직접 맞물립니다.", answers: [{ title: "내가 지키고 싶은 사람과 가치", body: "관계와 의미가 선택을 결정한다.", effects: { empathy: 2, reliability: 2, courage: 1 } }, { title: "장기적으로 가장 후회 없는 방향", body: "지금 감정보다 지속 가능성과 구조를 본다.", effects: { calm: 2, reliability: 2, leadership: 1 } }, { title: "심장이 더 크게 반응하는 쪽", body: "확신은 논리보다 먼저 몸이 안다고 느낀다.", effects: { courage: 2, playfulness: 1, hope: 2 } }] },
    { prompt: "당신을 가장 잘 설명하는 문장은 무엇인가요?", subcopy: "자기 인식은 파트너 매칭에서 오차를 줄입니다.", answers: [{ title: "나는 사람을 편안하게 만드는 편이다", body: "내 주변은 비교적 안정되고 마음이 풀린다.", effects: { empathy: 2, calm: 2, hope: 1 } }, { title: "나는 재밌는 가능성을 잘 발견한다", body: "남들이 지나치는 아이디어와 변화를 빨리 잡는다.", effects: { curiosity: 2, playfulness: 2, leadership: 1 } }, { title: "나는 위기에서 더 선명해진다", body: "중요한 순간일수록 오히려 집중력이 올라간다.", effects: { courage: 3, calm: 1, leadership: 1 } }] },
    { prompt: "당신이 가장 부담을 느끼는 상황은 어떤 모습인가요?", subcopy: "소진 포인트는 상성이 좋은 파트너를 역으로 가려줍니다.", answers: [{ title: "갈등이 길어지고 감정이 엉킬 때", body: "사람 사이의 균열이 커지면 에너지가 빠진다.", effects: { empathy: 2, reliability: 1, playfulness: -1 } }, { title: "통제할 수 없는 혼란이 오래 이어질 때", body: "정리되지 않은 상황이 길어지면 버겁다.", effects: { calm: 2, reliability: 1, courage: -1 } }, { title: "아무 변화도 없이 반복만 계속될 때", body: "정체된 상태가 가장 답답하다.", effects: { curiosity: 2, playfulness: 1, hope: 1 } }] },
    { prompt: "디지털 월드에 소환된 첫날 밤, 당신은 어떤 선택을 할까요?", subcopy: "첫날밤의 선택이 당신의 파트너를 최종 확정합니다.", answers: [{ title: "내일을 위해 지형과 위험 요소를 먼저 파악한다", body: "생존과 판단을 위해 정보를 최대한 확보한다.", effects: { curiosity: 2, calm: 2, reliability: 1 } }, { title: "파트너와 마음을 맞추는 대화를 나눈다", body: "관계가 안정되어야 어떤 시련도 버틸 수 있다고 믿는다.", effects: { empathy: 2, hope: 2, reliability: 1 } }, { title: "불안하더라도 앞으로의 작전을 직접 세운다", body: "두려움을 행동으로 전환하며 주도권을 잡는다.", effects: { courage: 2, leadership: 2, hope: 1 } }] }
  ];

  const MILESTONES = [
    { threshold: 25, title: "링크 형성", description: "디지바이스 외곽 링이 점등됩니다." },
    { threshold: 50, title: "문장 공명", description: "문장 파편이 반응하며 신뢰가 안정화됩니다." },
    { threshold: 75, title: "전투 동기화", description: "전투 시뮬레이션에서 합이 맞기 시작합니다." },
    { threshold: 100, title: "진화 준비", description: "유대 수치가 가득 차 진화 프로토콜이 열립니다." }
  ];

  return { TRAITS, ACTIONS, DIGIMON_DATA, QUESTIONS, MILESTONES };
})();
