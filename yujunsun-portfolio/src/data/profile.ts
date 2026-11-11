export interface Highlight {
  value: string
  label: string
  detail: string
}

export interface ProfileLink {
  label: string
  href: string
}

export const profile = {
  name: "선유준",
  role: "Frontend Engineer",
  careerLength: "경력 1년 8개월",
  headline: ["서비스의 문제를 발견하고", "구조적으로 개선합니다."],
  summary:
    "연매출 300억 규모 이커머스 기업에서 초기 개발팀의 프론트엔드를 단독으로 맡아, 신규 기능 개발부터 레거시 마이그레이션, 운영 자동화까지 해결해왔습니다. 반복되는 개발·운영 비효율을 찾아 구조로 바꾸고, 개발 리소스와 운영 리드타임을 줄이는 데 집중합니다.",
  email: "cons202@gmail.com",
  /** public/ 아래에 이력서 PDF를 넣고 경로를 적으면 헤더에 다운로드 버튼이 표시됩니다. 예: "/resume.pdf" */
  resumeUrl: "/resume.pdf" as string | null
}

export const profileLinks: ProfileLink[] = [
  { label: "GitHub", href: "https://github.com/YujunSun0" },
  { label: "Blog", href: "https://yujunsun.tech/" }
]

export const highlights: Highlight[] = [
  {
    value: "90%",
    label: "파트너 온보딩 리드타임 단축",
    detail: "30+ 상담 페이지 단일 플랫폼 통합"
  },
  {
    value: "50%",
    label: "콘텐츠 반영 리드타임 단축",
    detail: "Strapi CMS·권한 체계 구축"
  },
  {
    value: "PHP → React",
    label: "결제 금액 계산 로직 이관",
    detail: "견적·실결제 금액 불일치 방지"
  }
]
