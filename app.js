/* =============================================
   app.js — 글로벌 여행 가이드 AI
   ============================================= */

// ─── 여행 데이터베이스 ──────────────────────────────
const TRAVEL_DB = {

  // ── 아시아 ──
  "일본": {
    flag: "🇯🇵",
    intro: "가깝고도 매력적인 나라, 일본으로 오세요!",
    continent: "아시아",
    location: "동아시아의 섬나라로, 태평양 북서부에 위치합니다. 홋카이도에서 오키나와까지 국토가 남북으로 길게 뻗어 있으며, 다양한 기후와 절경을 자랑합니다.",
    timezone: { diff: 0, detail: "한국과 시차 없음 (UTC+9 동일)", summer: false },
    currency: { code: "JPY", name: "엔", symbol: "¥", rateKRW: 9.5, note: "100엔 ≒ 약 950원" },
    spots: [
      { icon: "⛩️", name: "후지산", desc: "일본의 상징, 해발 3,776m의 웅장한 성층화산" },
      { icon: "🏯", name: "오사카 성", desc: "오사카를 대표하는 역사적 성곽 & 벚꽃 명소" },
      { icon: "🦌", name: "나라 공원", desc: "야생 사슴이 자유롭게 돌아다니는 국립공원" },
      { icon: "🌸", name: "교토 아라시야마", desc: "대나무 숲과 사찰이 어우러진 전통 일본의 정수" },
    ],
    closing: "🍣 스시와 라멘, 온천까지… 일본은 매번 새로운 감동을 선사합니다! 꼭 한 번 다녀오세요! ✈️",
    emoji: "⛩️",
  },

  "태국": {
    flag: "🇹🇭",
    intro: "미소의 나라, 태국으로 여행을 떠나요!",
    continent: "아시아",
    location: "동남아시아 중심부, 인도차이나반도에 위치합니다. 북쪽의 산악 지형부터 남쪽의 아름다운 열대 해변까지 다양한 자연환경을 갖추고 있습니다.",
    timezone: { diff: -2, detail: "한국보다 2시간 느림 (UTC+7)", summer: false },
    currency: { code: "THB", name: "바트", symbol: "฿", rateKRW: 40, note: "1바트 ≒ 약 40원" },
    spots: [
      { icon: "🛕", name: "왓 프라깨우 (에메랄드 사원)", desc: "방콕의 왕궁 내 위치한 태국 최고의 사원" },
      { icon: "🌊", name: "피피 섬", desc: "크리스탈 맑은 바다와 새하얀 모래사장의 천국" },
      { icon: "🐘", name: "치앙마이 코끼리 보호구역", desc: "윤리적 방식으로 코끼리와 교감하는 특별한 경험" },
      { icon: "🌙", name: "방콕 야시장", desc: "쇼핑과 스트리트 푸드로 가득한 생동감 넘치는 밤" },
    ],
    closing: "🌴 뜨거운 태양 아래 시원한 코코넛 한 잔… 태국의 여유로움이 여러분을 기다립니다! 🙏",
    emoji: "🛕",
  },

  "베트남": {
    flag: "🇻🇳",
    intro: "아오자이의 나라, 베트남으로 오세요!",
    continent: "아시아",
    location: "동남아시아 인도차이나반도 동쪽에 위치한 S자형 나라로, 북쪽의 하노이부터 남쪽의 호찌민까지 지역마다 개성이 뚜렷합니다.",
    timezone: { diff: -2, detail: "한국보다 2시간 느림 (UTC+7)", summer: false },
    currency: { code: "VND", name: "동", symbol: "₫", rateKRW: 0.06, note: "10,000동 ≒ 약 600원" },
    spots: [
      { icon: "🏞️", name: "하롱베이", desc: "에메랄드빛 바다 위 수천 개의 석회암 섬이 만드는 절경, 세계유산" },
      { icon: "🕌", name: "호이안 구시가지", desc: "노란 건물과 등불이 가득한 유네스코 세계문화유산" },
      { icon: "🍜", name: "호찌민 벤탄 시장", desc: "쌀국수·반미·분짜 등 베트남 음식의 진수를 맛볼 수 있는 곳" },
      { icon: "🌾", name: "무랑창 계단식 논", desc: "황금빛 가을 벼와 산악 소수민족의 삶이 어우러지는 장관" },
    ],
    closing: "🍜 한 그릇의 쌀국수와 함께 시작하는 베트남 여행, 절대 후회 없을 거예요! ✈️",
    emoji: "🏞️",
  },

  "중국": {
    flag: "🇨🇳",
    intro: "5천 년 역사의 대국, 중국으로 초대합니다!",
    continent: "아시아",
    location: "동아시아 최대 국가로, 러시아·몽골·인도 등 14개국과 국경을 맞댄 광활한 대륙입니다. 히말라야산맥부터 황하 유역까지 다양한 지형을 품습니다.",
    timezone: { diff: -1, detail: "한국보다 1시간 느림 (UTC+8)", summer: false },
    currency: { code: "CNY", name: "위안", symbol: "¥", rateKRW: 200, note: "1위안 ≒ 약 200원" },
    spots: [
      { icon: "🏯", name: "만리장성", desc: "수천 km에 걸쳐 이어진 인류 최대의 건축물" },
      { icon: "👑", name: "자금성 (고궁)", desc: "베이징 중심에 자리한 명·청 왕조의 궁전" },
      { icon: "🧘", name: "황산", desc: "기암괴석과 운해가 빚어내는 신비로운 절경" },
      { icon: "🐼", name: "청두 판다 기지", desc: "귀여운 대왕판다를 가까이에서 만날 수 있는 성지" },
    ],
    closing: "🐉 광대한 땅에 쌓인 수천 년의 이야기… 중국은 평생 탐험해도 모자란 매력을 지녔습니다! 🚀",
    emoji: "🏯",
  },

  "인도": {
    flag: "🇮🇳",
    intro: "신비와 색채의 나라, 인도로 떠나볼까요!",
    continent: "아시아",
    location: "남아시아 인도반도에 위치하며, 히말라야산맥에서 인도양까지 이어집니다. 기후·문화·언어가 지역마다 극적으로 다양한 대국입니다.",
    timezone: { diff: -3.5, detail: "한국보다 3시간 30분 느림 (UTC+5:30)", summer: false },
    currency: { code: "INR", name: "루피", symbol: "₹", rateKRW: 17, note: "1루피 ≒ 약 17원" },
    spots: [
      { icon: "🕌", name: "타지마할", desc: "사랑을 위해 지어진 세계 7대 불가사의 중 하나" },
      { icon: "🏰", name: "자이푸르 암베르 성", desc: "핑크시티 자이푸르의 언덕 위 웅장한 요새 궁전" },
      { icon: "🌊", name: "고아 해변", desc: "포르투갈 문화와 인도 문화가 뒤섞인 독특한 해변" },
      { icon: "🌅", name: "바라나시 갠지스강", desc: "힌두교 성지, 새벽 의식에서 느끼는 영적 감동" },
    ],
    closing: "🌺 형형색색의 축제와 향신료 향기… 인도는 오감을 깨우는 여행을 선사합니다! 🙏",
    emoji: "🕌",
  },

  // ── 유럽 ──
  "프랑스": {
    flag: "🇫🇷",
    intro: "낭만과 예술의 나라, 프랑스로 초대합니다!",
    continent: "유럽",
    location: "서유럽 중심부에 위치하며, 대서양과 지중해 사이에 자리합니다. 알프스산맥, 피레네산맥 등 다양한 지형을 보유합니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "EUR", name: "유로", symbol: "€", rateKRW: 1740, note: "1유로 ≒ 약 1,740원" },
    spots: [
      { icon: "🗼", name: "에펠탑", desc: "파리의 상징이자 세계적인 야경 명소" },
      { icon: "🎨", name: "루브르 박물관", desc: "세계 3대 박물관 중 하나, 모나리자를 만날 수 있는 곳" },
      { icon: "⛪", name: "몽생미셸", desc: "바닷물에 둘러싸인 신비로운 수도원 섬" },
      { icon: "🍷", name: "부르고뉴 와인 마을", desc: "세계 최고 와인 산지, 초록 포도밭 사이를 거니는 낭만" },
    ],
    closing: "✈️ 생각만 해도 설레지 않나요? 파리의 카페에서 크로와상을 즐기는 상상을 해보세요!",
    emoji: "🗼",
  },

  "영국": {
    flag: "🇬🇧",
    intro: "전통과 현대가 공존하는 영국입니다!",
    continent: "유럽",
    location: "유럽 북서부의 섬나라로, 잉글랜드·스코틀랜드·웨일스·북아일랜드로 구성된 연합왕국입니다.",
    timezone: { diff: -9, detail: "한국보다 9시간 느림 (서머타임 적용 시 8시간 차이)", summer: true },
    currency: { code: "GBP", name: "파운드", symbol: "£", rateKRW: 2100, note: "1파운드 ≒ 약 2,100원" },
    spots: [
      { icon: "🕰️", name: "빅벤 & 국회의사당", desc: "런던을 대표하는 고딕 양식의 랜드마크" },
      { icon: "🎡", name: "런던 아이", desc: "시내 전경을 한눈에 담는 대관람차" },
      { icon: "🏛️", name: "대영 박물관", desc: "인류 역사의 보물창고, 로제타석·이집트 미라 등 전시" },
      { icon: "🏰", name: "에든버러 성", desc: "스코틀랜드 수도를 지키는 천년 요새, 멋진 야경 자랑" },
    ],
    closing: "✈️ 런던의 2층 버스를 타고 거리를 누비는 여행, 정말 멋지겠죠?",
    emoji: "🕰️",
  },

  "이탈리아": {
    flag: "🇮🇹",
    intro: "역사와 미식의 나라, 이탈리아가 기다립니다!",
    continent: "유럽",
    location: "남유럽 지중해로 뻗은 장화 모양의 반도 국가로, 알프스산맥 남쪽에서 시칠리아섬까지 이어집니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "EUR", name: "유로", symbol: "€", rateKRW: 1740, note: "1유로 ≒ 약 1,740원" },
    spots: [
      { icon: "🏟️", name: "콜로세움", desc: "로마 제국의 영광을 간직한 2천 년 역사의 원형 투기장" },
      { icon: "🛶", name: "베네치아 운하", desc: "곤돌라를 타고 수상 골목을 누비는 특별한 경험" },
      { icon: "🗿", name: "피렌체 우피치 미술관", desc: "보티첼리·레오나르도의 걸작을 만나는 르네상스의 성지" },
      { icon: "🌋", name: "아말피 해안", desc: "절벽 위 색색의 마을과 지중해 파도가 어우러진 절경" },
    ],
    closing: "🍕 피자 한 조각, 젤라토 한 스쿱… 이탈리아에서의 매 끼니가 축제입니다! Buon viaggio! 🛫",
    emoji: "🏟️",
  },

  "스페인": {
    flag: "🇪🇸",
    intro: "열정과 축제의 나라, 스페인으로 출발!",
    continent: "유럽",
    location: "남유럽 이베리아반도에 위치하며, 대서양과 지중해가 교차하는 곳에 자리합니다. 유럽에서 두 번째로 큰 나라입니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "EUR", name: "유로", symbol: "€", rateKRW: 1740, note: "1유로 ≒ 약 1,740원" },
    spots: [
      { icon: "🕌", name: "사그라다 파밀리아", desc: "가우디가 설계한 100년 넘게 건축 중인 초현실적 성당" },
      { icon: "🎨", name: "프라도 미술관", desc: "벨라스케스·고야의 명작을 품은 세계 3대 미술관" },
      { icon: "💃", name: "세비야 플라멩코 공연", desc: "열정과 슬픔이 교차하는 스페인 전통 춤 체험" },
      { icon: "🏖️", name: "바르셀로나 해변", desc: "도심 가까이 자리한 지중해 해변에서 즐기는 여유" },
    ],
    closing: "💃 올레! 태양·춤·음악이 함께하는 스페인 여행, 인생 최고의 추억이 될 거예요! 🌞",
    emoji: "💃",
  },

  "독일": {
    flag: "🇩🇪",
    intro: "맥주와 성의 나라, 독일로 떠나볼까요!",
    continent: "유럽",
    location: "중부 유럽에 위치하며, 9개국과 국경을 접하는 유럽의 심장입니다. 북쪽의 발트해 해안부터 남쪽의 알프스까지 다양한 자연을 품습니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "EUR", name: "유로", symbol: "€", rateKRW: 1740, note: "1유로 ≒ 약 1,740원" },
    spots: [
      { icon: "🏰", name: "노이슈반슈타인 성", desc: "동화 속 그대로, 디즈니 성의 실제 모델이 된 낭만적 고성" },
      { icon: "🍺", name: "뮌헨 옥토버페스트", desc: "세계 최대의 맥주 축제, 매년 수백만 명이 찾는 축제" },
      { icon: "🌉", name: "퀼른 대성당", desc: "세계 문화유산, 유럽에서 가장 높은 고딕 성당 중 하나" },
      { icon: "🎸", name: "베를린 브란덴부르크 문", desc: "독일 분단과 통일의 역사를 고스란히 담은 상징적 문" },
    ],
    closing: "🍺 프로스트! 맥주 한 잔과 함께하는 독일 여행, 역사와 낭만이 넘칩니다! Gute Reise! 🚀",
    emoji: "🏰",
  },

  "포르투갈": {
    flag: "🇵🇹",
    intro: "대항해 시대의 낭만, 포르투갈로 오세요!",
    continent: "유럽",
    location: "이베리아반도 서쪽 끝, 대서양을 향해 열린 유럽 최서단 국가입니다. 마데이라·아조레스 군도도 포르투갈 영토입니다.",
    timezone: { diff: -9, detail: "한국보다 9시간 느림 (서머타임 적용 시 8시간 차이)", summer: true },
    currency: { code: "EUR", name: "유로", symbol: "€", rateKRW: 1740, note: "1유로 ≒ 약 1,740원" },
    spots: [
      { icon: "🌊", name: "신트라 왕궁", desc: "울창한 숲 속 동화 같은 왕궁이 펼쳐지는 언덕 마을" },
      { icon: "🎵", name: "리스본 파두 공연", desc: "그리움(사우다드)을 담은 포르투갈 전통 음악, 세계유산" },
      { icon: "🍷", name: "도우루 계곡 와인 농장", desc: "세계 최초 와인 원산지 통제 지역, 황홀한 계단식 포도밭" },
      { icon: "🏄", name: "알가르브 해변", desc: "황금빛 절벽과 에메랄드빛 대서양이 빚어내는 절경" },
    ],
    closing: "🎵 파두의 선율처럼 우수와 아름다움이 공존하는 포르투갈… 반드시 다녀오세요! ✈️",
    emoji: "🌊",
  },

  // ── 아메리카 ──
  "미국": {
    flag: "🇺🇸",
    intro: "거대한 대륙의 매력, 미국으로 떠나볼까요?",
    continent: "북아메리카",
    location: "북아메리카 대륙 중남부에 위치한 세계 최강대국으로, 태평양과 대서양 사이에 자리합니다.",
    timezone: { diff: -14, detail: "동부(뉴욕) 기준 한국보다 14시간 느림 / 서부(LA) 기준 17시간 느림", summer: true },
    currency: { code: "USD", name: "달러", symbol: "$", rateKRW: 1487, note: "1달러 ≒ 약 1,487원" },
    spots: [
      { icon: "🗽", name: "자유의 여신상", desc: "뉴욕의 상징적 랜드마크, 자유와 민주주의의 아이콘" },
      { icon: "🏜️", name: "그랜드 캐니언", desc: "콜로라도강이 만든 대자연의 경이로운 협곡" },
      { icon: "🌆", name: "타임스퀘어", desc: "전 세계의 에너지가 모이는 뉴욕의 심장부" },
      { icon: "🎬", name: "할리우드 명예의 거리", desc: "수천 개의 별이 수놓인 엔터테인먼트의 성지" },
    ],
    closing: "✈️ 드넓은 도로를 달리는 로드트립의 꿈, 미국에서 이뤄보세요!",
    emoji: "🗽",
  },

  "캐나다": {
    flag: "🇨🇦",
    intro: "단풍과 광활한 자연의 나라, 캐나다!",
    continent: "북아메리카",
    location: "북아메리카 최북단을 차지하는 세계 2위의 면적 대국으로, 태평양에서 대서양까지 이어집니다.",
    timezone: { diff: -13, detail: "동부(토론토) 기준 한국보다 13시간 느림 / 서부(밴쿠버) 16시간 느림", summer: true },
    currency: { code: "CAD", name: "캐나다 달러", symbol: "C$", rateKRW: 990, note: "1캐나다 달러 ≒ 약 990원" },
    spots: [
      { icon: "🌊", name: "나이아가라 폭포", desc: "미국과 걸친 세계 3대 폭포, 엄청난 물소리와 물안개" },
      { icon: "🏔️", name: "밴프 국립공원", desc: "에메랄드빛 빙하 호수와 로키산맥의 절경" },
      { icon: "🍁", name: "퀘벡 구시가지", desc: "북미 유일의 성벽 도시, 유럽 느낌이 물씬 풍기는 세계유산" },
      { icon: "🔭", name: "오로라 관측 (유콘)", desc: "눈 앞에 펼쳐지는 초록빛 오로라의 마법 같은 장관" },
    ],
    closing: "🍁 붉게 물든 단풍 숲을 거니는 캐나다 가을 여행… 정말 꿈같지 않나요? ✈️",
    emoji: "🍁",
  },

  "브라질": {
    flag: "🇧🇷",
    intro: "삼바와 아마존의 나라, 브라질로!",
    continent: "남아메리카",
    location: "남아메리카 최대 국가로 대륙 절반가량을 차지합니다. 아마존 열대우림부터 대서양 해안의 황금 해변까지 다양한 지형을 품습니다.",
    timezone: { diff: -12, detail: "브라질리아 기준 한국보다 12시간 느림 (UTC-3)", summer: false },
    currency: { code: "BRL", name: "헤알", symbol: "R$", rateKRW: 260, note: "1헤알 ≒ 약 260원" },
    spots: [
      { icon: "🗿", name: "코르코바도 예수상", desc: "리우데자네이루를 내려다보는 세계 7대 불가사의" },
      { icon: "🏖️", name: "코파카바나 해변", desc: "세계에서 가장 유명한 해변, 삼바의 리듬 속 일상" },
      { icon: "🌿", name: "아마존 열대우림", desc: "지구의 폐, 세계 최대 생태계의 압도적인 경험" },
      { icon: "💧", name: "이과수 폭포", desc: "아르헨티나와 걸친 세계 최대 폭포군의 장엄함" },
    ],
    closing: "🥁 삼바 리듬처럼 열정 넘치는 브라질… 언젠가 카니발 축제 현장에 서 보세요! 🌺",
    emoji: "🗿",
  },

  // ── 오세아니아 ──
  "호주": {
    flag: "🇦🇺",
    intro: "자연과 모험의 땅, 호주로 떠나요!",
    continent: "오세아니아",
    location: "오세아니아 대륙 전체를 차지하는 세계 6위의 면적 국가로, 인도양과 태평양 사이에 자리합니다.",
    timezone: { diff: 1, detail: "시드니 기준 한국보다 1~2시간 빠름 (서머타임 적용 시 2시간)", summer: true },
    currency: { code: "AUD", name: "호주 달러", symbol: "A$", rateKRW: 880, note: "1호주 달러 ≒ 약 880원" },
    spots: [
      { icon: "🎭", name: "시드니 오페라 하우스", desc: "세계적 건축물, 세일 모양의 지붕이 항구를 수놓습니다" },
      { icon: "🪨", name: "울루루 (에어즈록)", desc: "붉게 타오르는 사막의 거대 바위, 원주민 성지" },
      { icon: "🐠", name: "그레이트 배리어 리프", desc: "세계 최대의 산호초 지대, 다이빙의 성지" },
      { icon: "🦘", name: "케언즈 열대우림", desc: "캥거루·코알라와 만나는 세계자연유산 열대림" },
    ],
    closing: "🦘 와우! 캥거루와 함께 달리는 호주 대자연 탐험… 일생에 꼭 한 번 꿈꿔보세요! ✈️",
    emoji: "🎭",
  },

  "뉴질랜드": {
    flag: "🇳🇿",
    intro: "반지의 제왕의 배경, 뉴질랜드로!",
    continent: "오세아니아",
    location: "남태평양에 위치한 섬나라로, 북섬과 남섬 두 큰 섬으로 이루어져 있습니다. 화산·빙하·피오르 등 다양한 지형의 보고입니다.",
    timezone: { diff: 3, detail: "한국보다 3시간 빠름 (서머타임 적용 시 4시간 빠름)", summer: true },
    currency: { code: "NZD", name: "뉴질랜드 달러", symbol: "NZ$", rateKRW: 820, note: "1뉴질랜드 달러 ≒ 약 820원" },
    spots: [
      { icon: "🏔️", name: "밀포드 사운드", desc: "빙하가 깎아낸 절벽과 폭포가 장엄한 피오르 지대, 세계유산" },
      { icon: "🌋", name: "로토루아 온천", desc: "마오리 문화와 지열 온천을 함께 즐기는 특별한 경험" },
      { icon: "🧗", name: "퀸스타운 번지점프", desc: "세계 번지점프 발상지, 짜릿한 액티비티의 성지" },
      { icon: "🌌", name: "테카포 호수 별하늘", desc: "세계 최고 수준의 별하늘, 남반구 은하수가 쏟아지는 명소" },
    ],
    closing: "🌌 영화보다 더 아름다운 뉴질랜드의 풍경… 두 눈으로 직접 확인해 보세요! ✈️",
    emoji: "🏔️",
  },

  // ── 중동 / 아프리카 ──
  "아랍에미리트": {
    flag: "🇦🇪",
    intro: "사막 속 미래도시, 두바이·아부다비로!",
    continent: "중동",
    location: "아라비아반도 동남부, 페르시아만 연안에 위치한 연방국입니다. 드넓은 사막과 현대적 도심이 공존합니다.",
    timezone: { diff: -5, detail: "한국보다 5시간 느림 (UTC+4, 서머타임 없음)", summer: false },
    currency: { code: "AED", name: "디르함", symbol: "د.إ", rateKRW: 410, note: "1디르함 ≒ 약 410원" },
    spots: [
      { icon: "🏙️", name: "부르즈 할리파", desc: "세계 최고층 빌딩(828m), 꼭대기 전망대에서 즐기는 두바이" },
      { icon: "🛍️", name: "두바이 몰 & 분수 쇼", desc: "세계 최대 쇼핑몰과 화려한 음악 분수의 환상적 공연" },
      { icon: "🏜️", name: "사막 사파리", desc: "모래 언덕을 질주하는 짜릿한 4WD & 낙타 탑승 체험" },
      { icon: "🕌", name: "셰이크 자이드 그랜드 모스크", desc: "순백색 대리석과 황금빛 샹들리에가 압도하는 이슬람 성소" },
    ],
    closing: "✨ 사막 위에 세워진 꿈의 도시… 두바이는 상상 그 이상을 보여줄 거예요! 🚀",
    emoji: "🏙️",
  },

  "이집트": {
    flag: "🇪🇬",
    intro: "인류 최대의 유산, 이집트로 시간여행을!",
    continent: "아프리카",
    location: "북아프리카 북동부, 나일강 유역에 위치하며 아시아·아프리카 대륙이 만나는 전략적 요충지입니다.",
    timezone: { diff: -7, detail: "한국보다 7시간 느림 (UTC+2, 서머타임 없음)", summer: false },
    currency: { code: "EGP", name: "이집트 파운드", symbol: "E£", rateKRW: 27, note: "1이집트 파운드 ≒ 약 27원" },
    spots: [
      { icon: "🏺", name: "기자의 피라미드", desc: "4,500년 역사, 고대 세계 7대 불가사의 중 유일하게 남아있는 유적" },
      { icon: "🦁", name: "스핑크스", desc: "피라미드를 지키는 인면수신상, 역사의 수수께끼 그 자체" },
      { icon: "⛵", name: "나일강 크루즈", desc: "유네스코 신전들을 배 위에서 감상하는 황홀한 여정" },
      { icon: "🐬", name: "홍해 다이빙", desc: "세계 최고 수준의 투명한 바다, 형형색색 산호초의 낙원" },
    ],
    closing: "🏺 수천 년의 신비를 품은 이집트… 파라오의 꿈이 깃든 땅을 직접 밟아보세요! ✈️",
    emoji: "🏺",
  },

  "스위스": {
    flag: "🇨🇭",
    intro: "알프스의 웅장한 대자연, 스위스로 떠나요!",
    continent: "유럽",
    location: "중앙유럽에 위치한 내륙국으로, 알프스산맥과 쥐라산맥을 품고 있는 아름다운 자연환경을 자랑합니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "CHF", name: "프랑", symbol: "Fr.", rateKRW: 1902, note: "1프랑 ≒ 약 1,902원" },
    spots: [
      { icon: "🏔️", name: "융프라우요흐", desc: "유럽의 지붕, 만년설과 얼음궁전이 있는 경이로운 빙하 지대" },
      { icon: "🚂", name: "빙하 특급 열차", desc: "알프스의 절경을 가로지르는 세계에서 가장 느린 특급 열차" },
      { icon: "🏰", name: "시용 성", desc: "제네바 호수 위에 떠 있는 듯한 아름다운 중세 고성" },
      { icon: "🧀", name: "그뤼예르", desc: "스위스 전통 치즈 마을에서 즐기는 맛있는 퐁듀" },
    ],
    closing: "🏔️ 숨 막히게 아름다운 알프스의 품속으로… 스위스에서 힐링 여행을 만끽하세요! 🌿",
    emoji: "🏔️",
  },

  "네덜란드": {
    flag: "🇳🇱",
    intro: "풍차와 튤립의 나라, 네덜란드로 초대합니다!",
    continent: "유럽",
    location: "서유럽에 위치하며 북해와 접해 있습니다. 국토의 상당 부분이 해수면보다 낮아 운하와 둑이 발달했습니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "EUR", name: "유로", symbol: "€", rateKRW: 1740, note: "1유로 ≒ 약 1,740원" },
    spots: [
      { icon: "🚲", name: "암스테르담 운하", desc: "자전거를 타고 그림 같은 운하와 다리를 누비는 여유" },
      { icon: "🌷", name: "큐켄호프 공원", desc: "세계 최대의 튤립 축제가 열리는 봄날의 화려한 정원" },
      { icon: "🎨", name: "반 고흐 미술관", desc: "불꽃 같은 삶을 산 천재 화가 반 고흐의 영혼을 만나는 곳" },
      { icon: "🏡", name: "잔세스칸스", desc: "전통 풍차와 나막신 공방이 있는 동화 같은 마을" },
    ],
    closing: "🌷 자전거 두 바퀴로 만나는 자유로움… 네덜란드의 색다른 매력에 빠져보세요! 🚲",
    emoji: "🌷",
  },

  "싱가포르": {
    flag: "🇸🇬",
    intro: "다채로운 매력의 도시국가, 싱가포르로 오세요!",
    continent: "아시아",
    location: "동남아시아 말레이반도 최남단에 위치한 섬나라로, 세계적인 금융 허브이자 깨끗한 도시 환경을 자랑합니다.",
    timezone: { diff: -1, detail: "한국보다 1시간 느림 (UTC+8)", summer: false },
    currency: { code: "SGD", name: "달러", symbol: "S$", rateKRW: 1168, note: "1싱가포르 달러 ≒ 약 1,168원" },
    spots: [
      { icon: "🦁", name: "머라이언 파크", desc: "마리나 베이 샌즈를 배경으로 싱가포르의 상징 머라이언과 인생샷" },
      { icon: "🌳", name: "가든스 바이 더 베이", desc: "아바타를 연상케 하는 거대한 슈퍼트리 전망과 환상적인 야경" },
      { icon: "🎢", name: "유니버설 스튜디오", desc: "아시아 최고의 테마파크에서 즐기는 짜릿한 어트랙션" },
      { icon: "🍜", name: "클락 키", desc: "화려한 나이트라이프와 칠리크랩 등 맛있는 미식의 거리" },
    ],
    closing: "🌃 화려한 야경과 끝없는 즐길 거리… 잠들지 않는 도시 싱가포르가 기다립니다! ✨",
    emoji: "🦁",
  },

  "멕시코": {
    flag: "🇲🇽",
    intro: "정열과 신비의 마야 문명, 멕시코로 출발!",
    continent: "북아메리카",
    location: "북아메리카 남부에 위치하며, 미국과 중미를 잇는 나라입니다. 태평양과 멕시코만에 양면을 접하고 있습니다.",
    timezone: { diff: -15, detail: "멕시코시티 기준 한국보다 15시간 느림", summer: false },
    currency: { code: "MXN", name: "페소", symbol: "$", rateKRW: 85, note: "1페소 ≒ 약 85원 (참고치)" },
    spots: [
      { icon: "🏛️", name: "치첸이트사", desc: "마야 문명의 피라미드 칸쿤 근교 신 7대 불가사의" },
      { icon: "🏖️", name: "칸쿤", desc: "카리브해의 에메랄드빛 바다를 품은 매혹적인 럭셔리 휴양지" },
      { icon: "🌮", name: "멕시코시티 구도심", desc: "식민 시대 건축과 활기찬 길거리 타코가 어우러진 수도" },
      { icon: "💧", name: "세노테", desc: "정글 한가운데 숨겨진 신비로운 천연 우물 수영장" },
    ],
    closing: "🌮 타코 한 입에 마가리타 한 잔! 멕시코의 강렬한 매력을 흠뻑 느껴보세요! 🌵",
    emoji: "🌮",
  },

  "터키": {
    flag: "🇹🇷",
    intro: "동양과 서양의 교차로, 튀르키예(터키)로!",
    continent: "유럽/아시아",
    location: "아시아와 유럽 대륙 사이에 걸쳐 있는 국가로, 역사 깊은 문화와 독특한 자연환경을 자랑합니다.",
    timezone: { diff: -6, detail: "한국보다 6시간 느림 (UTC+3, 서머타임 없음)", summer: false },
    currency: { code: "TRY", name: "리라", symbol: "₺", rateKRW: 43, note: "1리라 ≒ 약 43원 (참고치)" },
    spots: [
      { icon: "🎈", name: "카파도키아", desc: "수많은 열기구가 하늘을 수놓는 기암괴석의 요정 마을" },
      { icon: "🕌", name: "아야 소피아", desc: "이스탄불의 상징, 비잔틴 건축의 최고봉인 박물관 겸 사원" },
      { icon: "🌊", name: "파묵칼레", desc: "하얀 석회붕과 에메랄드빛 온천수가 만들어낸 계단식 절경" },
      { icon: "🛍️", name: "그랜드 바자르", desc: "세계에서 가장 크고 오래된 실내 시장, 양탄자와 향신료 가득" },
    ],
    closing: "☕ 카이막과 터키시 커피의 달콤함… 튀르키예의 기적 같은 풍경 속으로 떠나보세요! 🪂",
    emoji: "🎈",
  },

  "대만": {
    flag: "🇹🇼",
    intro: "미식과 야시장의 천국, 대만으로 떠나요!",
    continent: "아시아",
    location: "동아시아에 위치한 섬나라로, 온화한 기후와 풍부한 식도락 문화를 갖추고 있습니다.",
    timezone: { diff: -1, detail: "한국보다 1시간 느림 (UTC+8)", summer: false },
    currency: { code: "TWD", name: "대만 달러", symbol: "NT$", rateKRW: 47, note: "1대만 달러 ≒ 약 47원" },
    spots: [
      { icon: "🏮", name: "지우펀", desc: "센과 치히로의 행방불명 모티브가 된 아름다운 홍등 거리" },
      { icon: "🍜", name: "스린 야시장", desc: "지파이, 망고빙수 등 다양한 길거리 음식이 가득한 타이베이 최대 야시장" },
      { icon: "🏢", name: "타이베이 101", desc: "타이베이 시내를 한눈에 내려다볼 수 있는 랜드마크 초고층 빌딩" },
      { icon: "🏞️", name: "타이로거 협곡", desc: "대만 동부 화롄에 위치한 대리석 절벽이 장관인 웅장한 국립공원" },
    ],
    closing: "🥟 딤섬과 버블티 한 잔의 여유! 미식과 낭만이 있는 대만 어떠신가요? 🧋",
    emoji: "🏮",
  },

  "필리핀": {
    flag: "🇵🇭",
    intro: "에메랄드빛 바다와 휴양의 천국, 필리핀!",
    continent: "아시아",
    location: "동남아시아에 위치한 섬나라로, 7천여 개의 섬으로 이루어진 아름다운 열대 휴양지입니다.",
    timezone: { diff: -1, detail: "한국보다 1시간 느림 (UTC+8)", summer: false },
    currency: { code: "PHP", name: "페소", symbol: "₱", rateKRW: 24, note: "1페소 ≒ 약 24원" },
    spots: [
      { icon: "🏖️", name: "보라카이 화이트 비치", desc: "고운 백사장과 투명한 바다가 펼쳐지는 세계 3대 비치 중 하나" },
      { icon: "🐠", name: "세부 오슬롭", desc: "거대한 고래상어와 함께 수영할 수 있는 특별한 투어" },
      { icon: "🏝️", name: "팔라완 엘니도", desc: "신비로운 석회암 절벽과 숨겨진 라군이 있는 지상 낙원" },
      { icon: "🏰", name: "인트라무로스", desc: "마닐라 중심에 위치한 스페인 식민지 시대의 성벽 도시" },
    ],
    closing: "🥭 달콤한 망고와 따뜻한 햇살 아래, 완벽한 휴양을 떠나보세요! 🌊",
    emoji: "🏖️",
  },

  "말레이시아": {
    flag: "🇲🇾",
    intro: "다채로운 문화가 어우러진 말레이시아로!",
    continent: "아시아",
    location: "동남아시아 중심에 위치하며, 말레이반도와 보르네오섬 북부에 걸쳐 있는 국가입니다.",
    timezone: { diff: -1, detail: "한국보다 1시간 느림 (UTC+8)", summer: false },
    currency: { code: "MYR", name: "링깃", symbol: "RM", rateKRW: 376, note: "1링깃 ≒ 약 376원" },
    spots: [
      { icon: "🏢", name: "페트로나스 트윈 타워", desc: "쿠알라룸푸르의 상징인 아름다운 쌍둥이 빌딩의 야경" },
      { icon: "🎨", name: "페낭 조지타운", desc: "독특한 벽화식 길거리 예술과 맛집이 어우러진 세계문화유산" },
      { icon: "🐒", name: "바투 동굴", desc: "거대한 무루간 신상과 종유석 동굴이 있는 힌두교 성지" },
      { icon: "🏝️", name: "코타키나발루", desc: "세계 3대 석양을 감상하며 해양 액티비티를 즐기는 휴양지" },
    ],
    closing: "🌴 이슬람 아트와 열대 자연의 조화, 다문화의 매력에 빠져보세요! ✨",
    emoji: "🏢",
  },

  "인도네시아": {
    flag: "🇮🇩",
    intro: "신들의 섬이 있는 곳, 인도네시아로 떠나요!",
    continent: "아시아",
    location: "동남아시아와 오세아니아에 걸쳐 있는 세계 최대의 섬나라로, 자연과 문화의 다양성이 특징입니다.",
    timezone: { diff: -2, detail: "자카르타 기준 한국보다 2시간 느림 (발리는 1시간 느림)", summer: false },
    currency: { code: "IDR", name: "루피아", symbol: "Rp", rateKRW: 0.086, note: "10,000루피아 ≒ 약 860원" },
    spots: [
      { icon: "🌅", name: "발리 우붓", desc: "울창한 열대우림과 계단식 논 속에서 요가와 힐링을 즐길 수 있는 곳" },
      { icon: "🛕", name: "보로부두르 사원", desc: "자바섬에 위치한 세계 최대의 불교 유적 및 일출 명소" },
      { icon: "🌊", name: "발리 꾸따 해변", desc: "초보자부터 전문가까지 서퍼들이 사랑하는 활기찬 서핑 스팟" },
      { icon: "🌋", name: "브로모 화산", desc: "마치 다른 행성에 온 듯한 환상적인 일출을 볼 수 있는 활화산" },
    ],
    closing: "🏄 파도를 가르고 나시고렝을 즐기며 완벽한 발리 감성을 느껴보세요! 🌺",
    emoji: "🌅",
  },

  "남아프리카공화국": {
    flag: "🇿🇦",
    intro: "야생의 대자연과 세련된 도시, 남아공!",
    continent: "아프리카",
    location: "아프리카 대륙 최남단에 위치하며, 대서양과 인도양이 만나는 곳입니다.",
    timezone: { diff: -7, detail: "한국보다 7시간 느림 (UTC+2)", summer: false },
    currency: { code: "ZAR", name: "랜드", symbol: "R", rateKRW: 88, note: "1랜드 ≒ 약 88원" },
    spots: [
      { icon: "⛰️", name: "테이블 마운틴", desc: "케이프타운을 병풍처럼 감싸는 평평한 탁자 모양의 비경" },
      { icon: "🐧", name: "볼더스 해변", desc: "거대한 화강암 바위 사이로 서식하는 아프리카 펭귄 관찰" },
      { icon: "🦁", name: "크루거 국립공원", desc: "빅5 야생동물(사자, 표범, 코끼리, 코뿔소, 물소)을 만나는 사파리 투어" },
      { icon: "🍷", name: "스텔렌보스", desc: "수백 년 역사를 자랑하는 그림 같은 와이너리와 최고급 와인 산지" },
    ],
    closing: "🦁 대자연에서 느끼는 진짜 아프리카의 심장 박동! 잊지 못할 사파리 체험을 떠나보세요 🌍",
    emoji: "⛰️",
  },

  "그리스": {
    flag: "🇬🇷",
    intro: "신화와 푸른바다가 살아 숨쉬는 그리스!",
    continent: "유럽",
    location: "남유럽 발칸반도 남쪽 끝에 위치한 국가로 지중해의 눈부신 섬들을 품고 있습니다.",
    timezone: { diff: -7, detail: "한국보다 7시간 느림 (서머타임 적용시 6시간)", summer: true },
    currency: { code: "EUR", name: "유로", symbol: "€", rateKRW: 1740, note: "1유로 ≒ 약 1,740원" },
    spots: [
      { icon: "🏛️", name: "아테네 파르테논 신전", desc: "서양 문명의 발상지, 고대 아크로폴리스 위에 빛나는 고전 건축의 정수" },
      { icon: "🌅", name: "산토리니 이아 마을", desc: "하얀 벽면과 파란 지붕, 세계에서 가장 로맨틱한 일출·일몰 명소" },
      { icon: "🏖️", name: "자킨토스 나바지오 해변", desc: "드라마 '태양의 후예' 촬영지로 유명한 난파선과 수직 절벽의 코발트블루 해변" },
      { icon: "🗿", name: "메테오라", desc: "하늘 기둥 위 거대한 바위산 꼭대기에 아슬아슬하게 세워진 공중 수도원들" },
    ],
    closing: "☀️ 눈이 시리게 푸른 지중해 바다와 신들의 이야기... 낭만적인 그리스로 떠나요! 🌊",
    emoji: "🏛️",
  },

  "오스트리아": {
    flag: "🇦🇹",
    intro: "클래식 음악과 알프스의 향기, 오스트리아!",
    continent: "유럽",
    location: "중앙유럽 알프스산맥에 위치한 내륙국으로 다뉴브강이 흐릅니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "EUR", name: "유로", symbol: "€", rateKRW: 1740, note: "1유로 ≒ 약 1,740원" },
    spots: [
      { icon: "🎻", name: "빈 쇤부른 궁전", desc: "합스부르크 왕가의 찬란했던 여름 궁전과 웅장한 정원" },
      { icon: "⛰️", name: "할슈타트", desc: "호수와 알프스가 어우러진 동화마을 같은 세계문화유산" },
      { icon: "🎵", name: "잘츠부르크", desc: "모차르트의 고향이자 영화 '사운드 오브 뮤직'의 아름다운 무대" },
      { icon: "🍰", name: "카페 자허", desc: "아인슈패너와 자허토르테를 즐기는 전통 비엔나 커피 하우스" },
    ],
    closing: "🎻 모차르트의 선율과 맛있는 커피. 예술과 낭만이 가득한 오스트리아입니다! ☕",
    emoji: "🎻",
  },

  "헝가리": {
    flag: "🇭🇺",
    intro: "도나우강의 진주, 환상적인 야경의 헝가리!",
    continent: "유럽",
    location: "동유럽에 위치한 내륙국으로 도나우강이 수도 부다페스트를 가로지릅니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "HUF", name: "포린트", symbol: "Ft", rateKRW: 4.1, note: "100포린트 ≒ 약 410원" },
    spots: [
      { icon: "🏰", name: "부다페스트 국회의사당", desc: "황금빛으로 빛나는 유럽 최고의 야경 랜드마크" },
      { icon: "♨️", name: "세체니 온천", desc: "고풍스러운 네오바바로크 양식의 거대한 야외 온천탕" },
      { icon: "⛪", name: "어부의 요새", desc: "다뉴브강과 페스트 지구의 전경을 한눈에 내려다볼 수 있는 하얀 탑" },
      { icon: "🌁", name: "세체니 다리", desc: "부다와 페스트를 잇는 아름답고 역사적인 사자 조각상의 현수교" },
    ],
    closing: "🌉 황금빛으로 물드는 부다페스트의 밤… 평생 잊지 못할 야경을 마주해보세요! ✨",
    emoji: "🏰",
  },

  "체코": {
    flag: "🇨🇿",
    intro: "보헤미아의 낭만, 중세 동화 속 체코로!",
    continent: "유럽",
    location: "중앙유럽의 내륙국으로, 아름다운 중세 건축물과 거리가 잘 보존되어 있습니다.",
    timezone: { diff: -8, detail: "한국보다 8시간 느림 (서머타임 적용 시 7시간 차이)", summer: true },
    currency: { code: "CZK", name: "코루나", symbol: "Kč", rateKRW: 64, note: "1코루나 ≒ 약 64원" },
    spots: [
      { icon: "🌉", name: "카를교", desc: "블타바 강 위를 수놓은 조각상들과 프라하 성의 로맨틱한 풍경" },
      { icon: "🏰", name: "프라하 성", desc: "세계에서 가장 큰 옛 성채로 짙은 중세의 분위기를 간직한 랜드마크" },
      { icon: "🕰️", name: "천문 시계", desc: "수백 년간 프라하의 중심 인파가 모이는 곳이자 정각 시계쇼 관람 명소" },
      { icon: "🍺", name: "필스너 우르켈 양조장", desc: "세계 최초 황금빛 라거 맥주의 본고장 플젠 양조장 투어" },
    ],
    closing: "🍻 눈부신 붉은 지붕들과 시원한 필스너 맥주! 체코의 마법 같은 시간에 빠져보세요 🕰️",
    emoji: "🇨🇿",
  },

  "아르헨티나": {
    flag: "🇦🇷",
    intro: "탱고의 열정과 파타고니아, 아르헨티나!",
    continent: "남아메리카",
    location: "남아메리카 남부에 길게 뻗은 대국으로, 북부의 폭포부터 남부의 빙하까지 대자연의 축소판입니다.",
    timezone: { diff: -12, detail: "한국보다 12시간 느림 (UTC-3)", summer: false },
    currency: { code: "ARS", name: "페소", symbol: "$", rateKRW: 1.7, note: "1페소 ≒ 약 1.7원 (변동폭 매우 큼)" },
    spots: [
      { icon: "💧", name: "이과수 폭포", desc: "악마의 목구멍이라 불리는 압도적인 폭포를 가까이서 체감하는 곳" },
      { icon: "🧊", name: "모레노 빙하", desc: "거대한 푸른 얼음 장벽이 무너지는 장관을 볼 수 있는 파타고니아 세계자연유산" },
      { icon: "💃", name: "보카 지구", desc: "다채로운 원색의 집들과 길거리 탱고 공연이 펼쳐지는 예술가의 거리" },
      { icon: "🥩", name: "와이너리 투어", desc: "멘도사 지역의 최고급 말벡 와인과 아르헨티나 전통 숯불구이 스테이크 조합" },
    ],
    closing: "💃 뜨거운 탱고의 낭만과 파타고니아 빙하 탐험, 세상 끝으로의 여행을 떠나요! 🧊",
    emoji: "💃",
  },

};

// ─── 유사 단어 매핑 ─────────────────────────────
const ALIASES = {
  "france": "프랑스", "paris": "프랑스", "파리": "프랑스",
  "uk": "영국", "england": "영국", "britain": "영국", "london": "영국", "런던": "영국",
  "usa": "미국", "us": "미국", "america": "미국", "뉴욕": "미국", "la": "미국", "new york": "미국",
  "japan": "일본", "tokyo": "일본", "osaka": "일본", "도쿄": "일본", "오사카": "일본",
  "thailand": "태국", "bangkok": "태국", "방콕": "태국",
  "vietnam": "베트남", "hanoi": "베트남", "호치민": "베트남", "하노이": "베트남",
  "china": "중국", "beijing": "중국", "shanghai": "중국", "베이징": "중국", "상하이": "중국",
  "india": "인도", "delhi": "인도", "뭄바이": "인도",
  "italy": "이탈리아", "rome": "이탈리아", "로마": "이탈리아", "베네치아": "이탈리아", "피렌체": "이탈리아",
  "spain": "스페인", "barcelona": "스페인", "마드리드": "스페인",
  "germany": "독일", "berlin": "독일", "munich": "독일", "뮌헨": "독일", "베를린": "독일",
  "portugal": "포르투갈", "lisbon": "포르투갈", "리스본": "포르투갈",
  "canada": "캐나다", "toronto": "캐나다", "vancouver": "캐나다",
  "brazil": "브라질", "rio": "브라질", "리우": "브라질",
  "australia": "호주", "sydney": "호주", "시드니": "호주", "멜버른": "호주",
  "new zealand": "뉴질랜드", "auckland": "뉴질랜드",
  "uae": "아랍에미리트", "dubai": "아랍에미리트", "두바이": "아랍에미리트", "abu dhabi": "아랍에미리트",
  "egypt": "이집트", "cairo": "이집트", "카이로": "이집트",
  "switzerland": "스위스", "취리히": "스위스", "인터라켄": "스위스", "제네바": "스위스",
  "netherlands": "네덜란드", "amsterdam": "네덜란드", "암스테르담": "네덜란드",
  "singapore": "싱가포르", "싱가폴": "싱가포르",
  "mexico": "멕시코", "cancun": "멕시코", "칸쿤": "멕시코",
  "turkey": "터키", "튀르키예": "터키", "istanbul": "터키", "이스탄불": "터키",
  "taiwan": "대만", "타이완": "대만", "taipei": "대만", "타이베이": "대만",
  "philippines": "필리핀", "manila": "필리핀", "마닐라": "필리핀", "cebu": "필리핀", "세부": "필리핀",
  "malaysia": "말레이시아", "kuala lumpur": "말레이시아", "쿠알라룸푸르": "말레이시아",
  "indonesia": "인도네시아", "bali": "인도네시아", "발리": "인도네시아", "자카르타": "인도네시아",
  "south africa": "남아프리카공화국", "남아공": "남아프리카공화국", "cape town": "남아프리카공화국", "케이프타운": "남아프리카공화국",
  "greece": "그리스", "athens": "그리스", "아테네": "그리스", "산토리니": "그리스",
  "austria": "오스트리아", "vienna": "오스트리아", "빈": "오스트리아", "비엔나": "오스트리아",
  "hungary": "헝가리", "budapest": "헝가리", "부다페스트": "헝가리",
  "czech": "체코", "prague": "체코", "프라하": "체코",
  "argentina": "아르헨티나", "buenos aires": "아르헨티나", "부에노스아이레스": "아르헨티나",
};

// ─── 유틸리티 ────────────────────────────────────
function now() {
  return new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
}

function resolveKey(input) {
  const trimmed = input.trim().toLowerCase();
  if (TRAVEL_DB[input.trim()]) return input.trim();
  if (ALIASES[trimmed]) return ALIASES[trimmed];
  // 부분 일치
  for (const key of Object.keys(TRAVEL_DB)) {
    if (key.includes(input.trim()) || input.trim().includes(key)) return key;
  }
  for (const [alias, key] of Object.entries(ALIASES)) {
    if (alias.includes(trimmed) || trimmed.includes(alias)) return key;
  }
  return null;
}

// ─── DOM 헬퍼 ────────────────────────────────────
const chatContainer = document.getElementById('chatContainer');
const userInput     = document.getElementById('userInput');
const sendBtn       = document.getElementById('sendBtn');

document.getElementById('welcomeTime').textContent = now();

// 엔터 키 지원
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
});

function scrollBottom() {
  setTimeout(() => chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' }), 50);
}

// ─── 메시지 추가 함수 ────────────────────────────
function addUserMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'message user-message';
  msg.innerHTML = `
    <div class="avatar user-avatar">👤</div>
    <div class="bubble user-bubble">
      <div class="bubble-header" style="justify-content:flex-end">
        <span class="timestamp">${now()}</span>
        <span class="sender-name" style="color:var(--accent2)">나</span>
      </div>
      <div class="bubble-content"><p>${escapeHtml(text)}</p></div>
    </div>`;
  chatContainer.appendChild(msg);
  scrollBottom();
}

function addTypingIndicator() {
  const id = 'typing-' + Date.now();
  const msg = document.createElement('div');
  msg.className = 'message ai-message typing-bubble';
  msg.id = id;
  msg.innerHTML = `
    <div class="avatar ai-avatar">🤖</div>
    <div class="bubble ai-bubble">
      <div class="bubble-content">
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
        <span class="typing-text">여행 정보를 찾고 있어요…</span>
      </div>
    </div>`;
  chatContainer.appendChild(msg);
  scrollBottom();
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function addAIMessage(htmlContent, isUnknown = false) {
  const msg = document.createElement('div');
  msg.className = 'message ai-message';
  const bubbleClass = isUnknown ? 'ai-bubble unknown-bubble' : 'ai-bubble';
  msg.innerHTML = `
    <div class="avatar ai-avatar">🤖</div>
    <div class="bubble ${bubbleClass}">
      <div class="bubble-header">
        <span class="sender-name">글로벌 여행 가이드</span>
        <span class="timestamp">${now()}</span>
      </div>
      <div class="bubble-content">${htmlContent}</div>
    </div>`;
  chatContainer.appendChild(msg);
  scrollBottom();
}

// ─── 여행 정보 카드 렌더링 ────────────────────────
function buildTravelCard(data) {
  const { flag, intro, continent, location, timezone, currency, spots, closing, emoji } = data;

  const tzSign  = timezone.diff === 0 ? '' : timezone.diff > 0 ? '+' : '';
  const fxLine  = `<span class="fx-value">1${currency.name}(${currency.code}) ${currency.symbol} ≒ ${currency.rateKRW.toLocaleString()}원</span><br><small style="color:var(--text-muted)">${currency.note}</small>`;
  const tzLine  = `<span class="time-value">${timezone.diff === 0 ? '시차 없음' : `${Math.abs(timezone.diff)}시간 느림`}</span><br><small style="color:var(--text-muted)">${timezone.detail}</small>`;

  const spotsHtml = spots.map(s => `
    <li>
      <span style="font-size:20px">${s.icon}</span>
      <div><strong>${s.name}</strong><br><span style="color:var(--text-muted);font-size:13px">${s.desc}</span></div>
    </li>`).join('');

  return `
    <div class="travel-card">
      <div>
        <div class="travel-card-title">${flag} ${intro}</div>
        <small style="color:var(--text-dim)">${continent} 지역</small>
      </div>

      <div class="info-section section-location">
        <div class="section-label">📍 위치 &amp; 지리적 특징</div>
        <div class="section-value">${location}</div>
      </div>

      <div class="info-section section-time">
        <div class="section-label">⏰ KST 기준 시차</div>
        <div class="section-value">${tzLine}</div>
      </div>

      <div class="info-section section-fx">
        <div class="section-label">💵 환율 정보</div>
        <div class="section-value">${fxLine}</div>
      </div>

      <div class="info-section section-spots">
        <div class="section-label">🗼 추천 관광지</div>
        <div class="section-value"><ul>${spotsHtml}</ul></div>
      </div>

      <div class="travel-closing">${closing}</div>
    </div>`;
}

function buildUnknownCard(query) {
  return `
    <p>😅 <strong>'${escapeHtml(query)}'</strong>에 대한 정보를 아직 준비 중이에요!</p>
    <p style="margin-top:8px">아래 나라들은 지금 바로 안내해 드릴 수 있어요 😊</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px">
      ${Object.keys(TRAVEL_DB).map(k => `<button class="quick-btn" onclick="sendQuick('${k}')">${TRAVEL_DB[k].flag} ${k}</button>`).join('')}
    </div>`;
}

// ─── 메인 핸들러 ──────────────────────────────────
function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;

  userInput.value = '';
  sendBtn.disabled = true;
  addUserMessage(text);

  const typingId = addTypingIndicator();

  setTimeout(() => {
    removeTyping(typingId);
    sendBtn.disabled = false;

    const key = resolveKey(text);
    if (key && TRAVEL_DB[key]) {
      addAIMessage(buildTravelCard(TRAVEL_DB[key]));
    } else {
      addAIMessage(buildUnknownCard(text), true);
    }
  }, 1200 + Math.random() * 600);
}

function sendQuick(country) {
  userInput.value = country;
  handleSend();
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── 배경 파티클 생성 ────────────────────────────
function createParticles() {
  const container = document.getElementById('bgParticles');
  const colors = ['#3b82f6','#06b6d4','#8b5cf6','#10b981','#f59e0b'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 2 + Math.random() * 4;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${12 + Math.random() * 20}s;
      animation-delay: ${Math.random() * 15}s;
    `;
    container.appendChild(p);
  }
}

// ─── 노을 배경 애니메이션 생성 ────────────────────────
function createSunsetScene() {
  const container = document.getElementById('bgParticles');
  
  // 별 생성
  for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.className = 'star-el';
    const size = 1 + Math.random() * 2.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 60}%;
      left: ${Math.random() * 100}%;
      animation-duration: ${3 + Math.random() * 5}s;
      animation-delay: ${Math.random() * 3}s;
    `;
    container.appendChild(star);
  }

  // 구름 생성
  for (let i = 0; i < 6; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud-el';
    const width = 100 + Math.random() * 200;
    const height = width * 0.3;
    cloud.style.cssText = `
      width: ${width}px;
      height: ${height}px;
      top: ${5 + Math.random() * 40}%;
      background: rgba(255,255,255,${0.03 + Math.random() * 0.05});
      animation-duration: ${40 + Math.random() * 60}s;
      animation-delay: -${Math.random() * 40}s;
    `;
    container.appendChild(cloud);
  }

  // 태양 생성
  const sun = document.createElement('div');
  sun.className = 'sun-glow';
  container.appendChild(sun);

  // 비행기 생성
  const plane = document.createElement('div');
  plane.className = 'airplane-el';
  plane.style.cssText = `
    top: ${20 + Math.random() * 30}%;
    animation-duration: ${25 + Math.random() * 10}s;
  `;
  plane.innerHTML = `
    <span class="contrail"></span>
    <span class="plane-body" style="font-size:24px">✈️</span>
  `;
  container.appendChild(plane);
}

createParticles();
createSunsetScene();
