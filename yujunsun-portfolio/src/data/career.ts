export interface CareerBullet {
  title?: string
  text: string
}

export interface Company {
  name: string
  period: string
  position: string
  description?: string
  stack?: string
  /** projects.ts의 slug — 상세 페이지가 있는 프로젝트 */
  projectSlugs?: string[]
  /** 상세 페이지 없이 한 줄로 보여줄 작업 */
  bullets?: CareerBullet[]
  bulletsLabel?: string
}

export const companies: Company[] = [
  {
    name: "주식회사 토탈셀러",
    period: "2025.05 – 2026.03",
    position: "대리",
    description:
      "셀러 대상 광고·운영 대행 및 커머스 서비스. 프론트엔드 개발과 서비스 운영 전반 담당.",
    stack: "React · Next.js · TypeScript · Tailwind CSS · AWS",
    projectSlugs: [
      "partner-platform",
      "content-management",
      "seldoc-subscription",
      "keyword-analysis",
      "seller-marketplace",
    ],
    bulletsLabel: "그 외 작업",
    bullets: [
      { text: "PHP 기반 레거시 서비스를 Next.js(App Router) + TypeScript로 전면 마이그레이션" },
      { text: "온라인·오프라인 강의 서비스 — ReactPlayer 기반 이어보기, 아임포트 결제" },
    ],
  },
  {
    name: "(주)혜안파트너스",
    period: "2024.12 – 2025.05",
    position: "주임",
    description: "크리에이터·팬 미디어 플랫폼 프론트엔드 개발.",
    stack: "React · JavaScript · Node.js · AWS",
    bullets: [
      {
        title: "영상 스트리밍",
        text: "HLS 기반 플레이어 구현, 브라우저별 재생 환경 차이 대응",
      },
      {
        title: "성인인증·접근 권한",
        text: "NICE 인증 팝업과 postMessage 연동 후 서버 검증까지 거치는 흐름, 로그인·성인인증·관리자 권한 단계 분리",
      },
      {
        title: "다국어·배포",
        text: "i18next로 한·영·일·중 4개 언어 지원, 접속 국가별 기본 언어 설정",
      },
    ],
  },
  {
    name: "스마트하우스",
    period: "2024.08 – 2024.12",
    position: "주임",
    bullets: [
      { text: "CAFE24·IMWEB 기반 자사몰 UI·기능 개발 및 운영 이슈 대응" },
      { text: "PHP 기반 토탈셀러 서비스 기능 수정 및 오류 대응" },
    ],
  },
]
