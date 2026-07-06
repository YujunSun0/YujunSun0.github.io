export interface CompanyExperience {
  company: string
  period: string
  duration: string
  role: string
  position: string
  employmentType: string
  highlights: string[]
}

export interface ExperienceGroup {
  groupLabel: string
  groupPeriod: string
  groupDuration: string
  note: string
  companies: CompanyExperience[]
}

export const experienceData: ExperienceGroup = {
  groupLabel: "동일 사업장 연속 근무",
  groupPeriod: "2024.08 ~ 2026.03",
  groupDuration: "1년 7개월",
  note: "사업 확장으로 인한 법인 전환",
  companies: [
    {
      company: "주식회사 토탈셀러",
      period: "2025.05 ~ 2026.03",
      duration: "8개월",
      role: "전략기획1팀",
      position: "대리",
      employmentType: "정규직",
      highlights: [
        "PHP 기반 레거시 서비스를 Next.js(App Router) + TypeScript로 전면 마이그레이션",
        "30개 이상 파트너사 상담 신청 페이지를 단일 플랫폼으로 통합, 사이트 생성 시간 96% 단축 (5시간 → 5분)",
        "Headless CMS(Strapi) 도입으로 마케팅팀 자체 콘텐츠 관리 환경 구축",
        "셀러 입점 기반 마켓플레이스(오픈/중개몰) 프론트엔드 개발",
        "구독/결제 서비스, 키워드 분석 도구, 강의 플랫폼 등 다수 서비스 구축",
      ],
    },
    {
      company: "(주)혜안파트너스",
      period: "2024.12 ~ 2025.05",
      duration: "6개월",
      role: "전략기획1팀",
      position: "주임",
      employmentType: "계약직",
      highlights: [
        "HOLOMEDIA 크리에이터/팬 미디어 플랫폼 풀스택 개발",
        "HLS 스트리밍 플레이어 구현 (브라우저별 처리 분리, 자동 복구 로직)",
        "NICE 본인인증 연동 및 단계적 접근 제어 구조 구축",
        "Masonry 그리드 기반 멀티플랫폼 피드 설계",
        "i18next 기반 4개 언어 지원 및 결제 로직 구현 (국내/해외)",
      ],
    },
    {
      company: "스마트하우스",
      period: "2024.08 ~ 2024.12",
      duration: "5개월",
      role: "마케팅팀",
      position: "주임",
      employmentType: "계약직",
      highlights: [
        "CAFE24, IMWEB 기반 자사몰 개발 및 유지보수",
        "UI 컴포넌트 커스터마이징을 통한 사용자 경험 개선",
        "운영 중 발생하는 이슈 대응 및 기능 수정",
      ],
    },
  ],
}
