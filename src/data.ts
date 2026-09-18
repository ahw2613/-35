import { NavItem, SignatureItem, BeforeAfterItem, YoutubeItem, ReviewItem, SpecialPointItem } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    title: '병원소개',
    id: 'about',
    subItems: [
      { title: '리뉴업 철학', path: '#about', desc: '본질에 집중하는 안티에이징 & 성형' },
      { title: '의료진 소개', path: '#doctor', desc: '성형외과 전문의 손승태 대표원장' },
      { title: '안전 시스템', path: '#safety', desc: '무사고 마취 모니터링 및 응급 시스템' },
      { title: '오시는 길', path: '#footer', desc: '강남구 위치 안내 및 진료 시간' },
    ]
  },
  {
    title: '얼굴지방',
    id: 'face-fat',
    subItems: [
      { title: '풀페이스 지방이식', path: '#signature', desc: '자연스러운 볼륨과 입체감' },
      { title: '미니 지방이식', path: '#signature', desc: '꺼진 부위 정밀 맞춤 교정' },
      { title: '지방흡입/얼굴축소', path: '#signature', desc: '매끄러운 윤곽 라인 완성' },
    ]
  },
  {
    title: '리프팅',
    id: 'lifting',
    subItems: [
      { title: '리뉴업 울쎄라', path: '#signature', desc: '근막층까지 전달되는 프리미엄 초음파 리프팅' },
      { title: '써마지 FLX', path: '#signature', desc: '콜라겐 재생을 통한 피부 탄력 타이트닝' },
      { title: '안면거상/미니거상', path: '#signature', desc: '처진 조직을 근본적으로 끌어올리는 수술' },
      { title: '실리프팅', path: '#signature', desc: '즉각적인 처짐 개선 및V라인 탄력' },
    ]
  },
  {
    title: '이마',
    id: 'forehead',
    subItems: [
      { title: '내비게이션 이마거상', path: '#signature', desc: '최소 절개로 확실한 주름 개선 및 눈썹 교정' },
      { title: '이마 지방이식', path: '#signature', desc: '도자기처럼 매끄러운 곡선 라인' },
    ]
  },
  {
    title: '눈',
    id: 'eyes',
    subItems: [
      { title: '자연유착/절개 쌍꺼풀', path: '#signature', desc: '풀림 없이 선명하고 또렷한 눈매' },
      { title: '눈매교정', path: '#signature', desc: '졸린 눈을 시원하고 자연스럽게' },
      { title: '트임성형 (앞/뒤/밑트임)', path: '#signature', desc: '시원하고 조화로운 눈꼬리 확장' },
      { title: '상안검 / 하안검', path: '#signature', desc: '눈가 처짐과 주름을 젊고 탄력 있게' },
    ]
  },
  {
    title: '코',
    id: 'nose',
    subItems: [
      { title: '리뉴업 프리미엄 코성형', path: '#signature', desc: '비율과 기능까지 고려한 맞춤 코 디자인' },
      { title: '콧대/코끝 성형', path: '#signature', desc: '어느 각도에서도 완벽한 입체 라인' },
      { title: '구축코/재수술', path: '#signature', desc: '정밀 진단을 통한 근본적인 원인 해결' },
    ]
  },
  {
    title: '인중/입술',
    id: 'lip',
    subItems: [
      { title: '인중축소술', path: '#signature', desc: '동안 비율을 완성하는 세련된 인중 길이' },
      { title: '입술성형/입꼬리수술', path: '#signature', desc: '미소가 아름다운 입술 볼륨과 각도' },
    ]
  },
  {
    title: '바디라인',
    id: 'body',
    subItems: [
      { title: '스마트 지방흡입', path: '#signature', desc: '군살 없는 매끄러운 바디 실루엣' },
      { title: '바디 탄력 타이트닝', path: '#signature', desc: '탄력 잃은 바디 피부 리프팅' },
    ]
  },
  {
    title: '시술',
    id: 'treatments',
    subItems: [
      { title: '보톡스 / 필러', path: '#signature', desc: '정품 정량 프리미엄 볼륨 & 주름 개선' },
      { title: '스킨보스터 (리쥬란 등)', path: '#signature', desc: '속부터 차오르는 건강한 피부 광채' },
      { title: '피부 레이저 토닝', path: '#signature', desc: '맑고 투명한 피부 톤 완성' },
    ]
  },
  {
    title: '후기/전후사진',
    id: 'gallery',
    subItems: [
      { title: '리얼 전후사진', path: '#before-after', desc: '직접 검증하는 극적인 변화' },
      { title: '셀피 고객 후기', path: '#reviews', desc: '실제 고객들의 생생한 만족도 스토리' },
      { title: '리얼 모델 갤러리', path: '#real-model', desc: '리뉴업의 뮤즈들이 전하는 메시지' },
    ]
  },
  {
    title: '상담/예약',
    id: 'contact',
    subItems: [
      { title: '온라인 상담', path: '#contact', desc: '1:1 비대면 맞춤 상담 신청' },
      { title: '간편 예약', path: '#contact', desc: '원하는 날짜와 시간 예약' },
      { title: '오시는 길 & 진료시간', path: '#footer', desc: '강남역 위치 및 연락처' },
    ]
  }
];

export const SIGNATURE_ITEMS: SignatureItem[] = [
  {
    id: 'sig-1',
    category: 'LIFTING & ANTI-AGING',
    title: '리뉴업 울쎄라 토탈 리프팅',
    subtitle: '과함 없이 깊이 있는 탄력 리프팅',
    description: '피부 깊은 SMAS층까지 정확하게 초음파 에너지를 전달하여, 처진 조직을 근본적으로 끌어올리고 콜라겐 재생을 유도합니다.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85',
    tag: 'SIGNATURE 01'
  },
  {
    id: 'sig-2',
    category: 'FACIAL CONTOURING',
    title: '풀페이스 하이엔드 지방이식',
    subtitle: '입체감과 결을 살리는 정밀 볼륨',
    description: '단순한 볼륨 주입이 아닌 얼굴 전체의 비율과 황금 골격을 분석하여 자연스럽고 생기 있는 동안 입체감을 완성합니다.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    tag: 'SIGNATURE 02'
  },
  {
    id: 'sig-3',
    category: 'FOREHEAD SURGERY',
    title: '내비게이션 미니 이마거상',
    subtitle: '시원한 눈썹 라인과 주름 개선 동시 완성',
    description: '최소 절개로 이마 피부와 눈썹의 위치를 이상적으로 교정하며, 회복 기간을 대폭 단축한 리뉴업 특화 수술입니다.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85',
    tag: 'SIGNATURE 03'
  },
  {
    id: 'sig-4',
    category: 'NOSE ARCHITECTURE',
    title: '오리지널 프로파일 코성형',
    subtitle: '어느 각도에서도 무너짐 없는 조화',
    description: '개개인의 얼굴 골격과 콧대 선을 정밀 계측하여, 인위적이지 않고 자연스럽게 스며드는 이상적인 코 라인을 디자인합니다.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    tag: 'SIGNATURE 04'
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    category: '리프팅/안티에이징',
    title: '울쎄라 + 미니거상 3개월 차',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    summary: '턱라인 처짐이 개선되고 매끄러운 V라인 윤곽을 되찾았습니다.',
    doctor: '손승태 대표원장'
  },
  {
    id: 'ba-2',
    category: '지방이식/볼륨',
    title: '풀페이스 지방이식 2개월 차',
    beforeImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    summary: '꺼진 관자와 앞볼에 자연스러운 생기와 볼륨이 채워졌습니다.',
    doctor: '손승태 대표원장'
  },
  {
    id: 'ba-3',
    category: '코성형',
    title: '맞춤 코성형 + 코끝 교정 6개월 차',
    beforeImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    summary: '콧대 라인이 곧고 슬림하게 정돈되어 이목구비가 또렷해졌습니다.',
    doctor: '손승태 대표원장'
  }
];

export const YOUTUBE_ITEMS: YoutubeItem[] = [
  {
    id: 'yt-1',
    title: '[리뉴업 TV] 성형외과 전문의가 말하는 자연스러운 동안 리프팅의 기준',
    views: '조회수 18.4만회',
    duration: '12:40',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    url: 'https://youtube.com'
  },
  {
    id: 'yt-2',
    title: '내 얼굴에 맞는 지방이식 양은 얼마일까요? 과유불급 볼륨 디자인',
    views: '조회수 9.2만회',
    duration: '08:15',
    thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    url: 'https://youtube.com'
  },
  {
    id: 'yt-3',
    title: '울쎄라와 써마지, 나에게 더 잘 맞는 프리미엄 리프팅 선택 법',
    views: '조회수 24.1만회',
    duration: '15:22',
    thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    url: 'https://youtube.com'
  }
];

export const REVIEW_ITEMS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: '김*영 고객님',
    procedure: '울쎄라 + 풀페이스 지방이식',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    quote: '이제 필터 없이도 빛이 자연스럽게 얼굴에 머물러요. 과하게 티 나지 않고 원래 내 얼굴인 것처럼 고급스러운 변화를 원했는데 완벽해요.',
    rating: 5
  },
  {
    id: 'rev-2',
    author: '박*진 고객님',
    procedure: '내비게이션 이마거상',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    quote: '눈썹과 이마 주름이 한 번에 해결되면서 인상이 훨씬 부드럽고 고급스러워졌습니다. 원장님 꼼꼼한 상담 덕분에 안심하고 받았어요.',
    rating: 5
  },
  {
    id: 'rev-3',
    author: '이지* 고객님',
    procedure: '리뉴업 코성형 재수술',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    quote: '재수술이라 걱정이 정말 많았는데, 제 얼굴 비율에 맞게 원인이 무엇이었는지 정확히 짚어주셔서 믿고 맡겼습니다. 대만족이에요!',
    rating: 5
  }
];

export const SPECIAL_POINTS: SpecialPointItem[] = [
  {
    number: '01',
    enTitle: 'SPECIALIST DOCTOR',
    krTitle: '오직 본질에 집중하는 성형외과 전문의',
    description: '풍부한 임상 경험과 미적 감각을 겸비한 대표원장이 상담부터 수술, 사후 관리까지 1:1 맞춤 전담 케어를 진행합니다.',
    detail: '획일적인 공장형 수술을 지양하고, 개개인이 가진 고유의 골격과 선을 분석하여 가장 조화롭고 안전한 아름다움을 디자인합니다.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    number: '02',
    enTitle: 'SAFETY SYSTEM',
    krTitle: '타협 없는 무사고 안전 시스템',
    description: '환자의 안전을 최우선으로 생각하며, 첨단 응급 의료 장비와 대학병원 급 마취 모니터링 시스템을 완비하고 있습니다.',
    detail: '마취통증의학과 전문의 상주 하에 실시간 바이탈 사인 모니터링, 정전 대비 무정전 전원 공급 장치(UPS) 및 철저한 멸균 소독 시스템을 가동합니다.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80'
  },
  {
    number: '03',
    enTitle: 'CUSTOMIZED SURGERY',
    krTitle: '정밀 진단 기반 맞춤 설계',
    description: '3D 뼈 구조 분석과 피부 탄력도 측정을 통해 겉으로 드러나지 않는 구조적 원인까지 정확하게 진단합니다.',
    detail: '불필요한 수술은 권하지 않으며, 꼭 필요한 최적의 솔루션만을 제안하여 빠르고 만족도 높은 회복을 이끌어냅니다.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80'
  },
  {
    number: '04',
    enTitle: 'RESEARCH / EXPERTISE',
    krTitle: '끊임없는 학술 연구와 기술 발전',
    description: '국내외 학회 활동 및 안티에이징/성형 트렌드 연구를 통해 최신 시술법과 안전한 수술 노하우를 끊임없이 발전시킵니다.',
    detail: '더 나은 결과와 정교한 테크닉을 위해 멈추지 않고 연구하며, 글로벌 스탠다드에 부합하는 의료 서비스를 제공합니다.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
  }
];

export const SAFETY_ITEMS = [
  { title: '실시간 마취 모니터링', desc: '마취통증의학과 전문의 실시간 상주 및 바이탈 체크' },
  { title: '수술실 CCTV 참관 시스템', desc: '대리수술 원천 방지 및 투명하고 정직한 진료' },
  { title: '에어샤워 및 클린룸', desc: '대학병원급 무균 공기 정화 시스템으로 감염 제로' },
  { title: '응급처치 장비 완비', desc: '제세동기(AED), 응급기도 확보 기구 등 철저한 대비' },
  { title: '무정전 전원 시스템 (UPS)', desc: '정전 시에도 안정적인 전력 공급 유지' },
  { title: '철저한 멸균 소독', desc: '1회용 소모품 사용 원칙 및 고압 멸균 소독' }
];
