export interface ProjectData {
  id: string
  category: "company" | "side"
  company?: string
  name: string
  period: string
  description: string
  details: string[]
  techStack: string[]
  siteUrl?: string
  githubUrl?: string
}

export const projectsData: ProjectData[] = [
  {
    id: "totalseller-migration",
    category: "company",
    company: "주식회사 토탈셀러",
    name: "토탈셀러 마이그레이션",
    period: "2025.05 ~ 2026.03",
    description:
      "PHP 기반 레거시 서비스를 Next.js(App Router) + TypeScript로 전면 마이그레이션",
    details: [
      "페이지 특성에 따라 SSR, RSC, CSR 렌더링 전략을 분리 적용하여 사용자 경험과 데이터 처리 효율 최적화",
      "공통 레이아웃 및 데이터 패칭 구조 표준화로 유지보수 복잡도 감소",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "zustand", "TanStack Query"],
  },
  {
    id: "partner-centralization",
    category: "company",
    company: "주식회사 토탈셀러",
    name: "협업체 상담 신청 페이지 중앙화",
    period: "2025.05 ~ 2026.03",
    description:
      "파트너사별로 개별 운영되던 30개 이상의 상담 신청 페이지를 단일 플랫폼으로 통합",
    details: [
      "동적 라우팅 및 서브도메인 구조를 활용하여 신규 파트너 추가 시 개발 작업 없이 확장 가능한 구조 설계",
      "신규 사이트 제작 시간을 5시간 → 5분 이내로 약 96% 단축",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    id: "open-market",
    category: "company",
    company: "주식회사 토탈셀러",
    name: "오픈/중개몰 서비스",
    period: "2025.11 ~ 2026.03",
    description: "셀러 입점 기반 마켓플레이스 구축",
    details: [
      "장바구니/결제 전환 구간에서 중복 요청을 UI 단계에서 차단하고 재고·구매제한 위반을 사전 보정",
      "옵션/수량 단계에서 실시간 한도 안내로 결제 실패 및 이탈 부담 완화",
      "자동완성 디바운싱, 무한 스크롤 조건 분리로 검색 UX 최적화",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "zustand", "TanStack Query"],
  },
  {
    id: "seldoc-subscription",
    category: "company",
    company: "주식회사 토탈셀러",
    name: "셀독 구독·결제 서비스",
    period: "2025.05 ~ 2026.03",
    description: "셀러를 위한 광고·운영 대행형 구독 서비스",
    details: [
      "레거시 PHP 구간 할인·쿠폰·부가세 계산을 이식하여 견적·실청구 불일치 리스크 감소",
      "빌링키 기반 최초/재결제 분기 처리 및 아임포트 스크립트 지연 로딩 캡슐화",
      "최근 구독 생성 시각 기준 단시간 중복 결제 방지",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "아임포트"],
  },
  {
    id: "blog-quiz-campaign",
    category: "company",
    company: "주식회사 토탈셀러",
    name: "블로그 퀴즈 · 캠페인 운영 도구",
    period: "2025.11 ~ 2026.01",
    description:
      "시의성 있는 활동을 웹에서 진행·집계하고, 운영이 결과를 확인·공유할 수 있는 서비스",
    details: [
      "Headless CMS(Strapi) 도입으로 마케팅팀 자체 콘텐츠 관리 환경 구축",
      "force-dynamic SSR로 Strapi 활성 퀴즈를 실시간 반영",
      "Playwright 시나리오 테스트 + k6 동시 접속 약 2,000명 부하 테스트 가이드 구축",
    ],
    techStack: ["Next.js", "TypeScript", "Strapi", "Playwright", "k6"],
  },
  {
    id: "totalsourcing",
    category: "company",
    company: "주식회사 토탈셀러",
    name: "토탈소싱기",
    period: "2025.11",
    description: "네이버/쿠팡 키워드 검색량 및 경쟁도 분석 프로그램",
    details: [
      "네이버 DataLab/검색광고 API + 쿠팡 크롤링 서버(FastAPI) 연동",
      "TanStack Query 캐싱(5분) + Redis 백엔드 캐싱으로 API 호출 최적화",
      "최근 검색 기록 LocalStorage 저장 및 비동기 폴링 구조 적용",
    ],
    techStack: ["Next.js", "TypeScript", "TanStack Query", "FastAPI"],
  },
  {
    id: "lecture-service",
    category: "company",
    company: "주식회사 토탈셀러",
    name: "온라인/오프라인 강의 서비스",
    period: "2025.12 ~ 2026.01",
    description:
      "셀러 교육 강의를 결제 신청으로 받고, 유형별로 오프라인·ZOOM·VOD 수강까지 이어주는 서비스",
    details: [
      "ReactPlayer 기반 커스텀 플레이어에서 시청 구간 API 동기화 및 이어보기 구현",
      "아임포트 일회성 카드 결제 처리 및 쿠폰 할인율 반영 UX 구현",
    ],
    techStack: ["Next.js", "TypeScript", "ReactPlayer", "아임포트"],
  },
  {
    id: "holomedia",
    category: "company",
    company: "(주)혜안파트너스",
    name: "HOLOMEDIA 플랫폼",
    period: "2024.12 ~ 2025.05",
    description: "크리에이터·팬 미디어 플랫폼 프론트엔드 전담 개발",
    details: [
      "React + TypeScript + Vite 기반 SPA 구조로 플랫폼 구축",
      "HLS 스트리밍 플레이어 구현 (브라우저별 처리 분리, 자동 복구 로직)",
      "NICE 본인인증 + postMessage 연동, 단계적 접근 제어 구조",
      "Masonry 그리드 기반 영상·업로더 카드 혼합 피드 설계",
      "i18next 기반 4개 언어(ko/en/jp/zh) 지원",
      "Firebase Storage 기반 미디어 업로드 구현",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Redux",
      "i18next",
      "Firebase",
      "AWS S3",
    ],
  },
  {
    id: "salog",
    category: "side",
    name: "Salog",
    period: "2023.11 ~ 2024.02",
    description: "가계부와 일기를 기록하는 웹 서비스 (팀 프로젝트 3인)",
    details: [
      "Redux-toolkit + Redux-persist를 활용한 상태 관리",
      "OAuth 2.0 소셜 로그인 및 PWA 구현",
      "AWS S3 + CloudFront를 이용한 HTTPS 배포",
    ],
    techStack: [
      "React",
      "TypeScript",
      "styled-components",
      "Redux",
      "Firebase",
      "AWS",
    ],
    siteUrl: "https://www.salog.kro.kr/",
    githubUrl: "https://github.com/YujunSun0/salog-FE/tree/dev/fe",
  },
]
