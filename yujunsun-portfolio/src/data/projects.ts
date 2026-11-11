import sourcingHome from "@assets/projects/sourcing/01-home-sourcing.png"
import sourcingGraph from "@assets/projects/sourcing/02-graph-sourcing.png"
import blogQuizMain from "@assets/projects/blog-quiz/01-main-blog.png"
import blogQuizResult from "@assets/projects/blog-quiz/02-result-blog.png"
import blogQuizStrapi from "@assets/projects/blog-quiz/03-strapi-blog.png"

export interface ProjectImage {
  src: string
  alt: string
  caption: string
}

export interface DiagramNode {
  title: string
  description?: string
}

/** 화면 캡처가 없는 프로젝트는 구조도로 설명합니다. */
export type ProjectDiagram =
  | {
      type: "before-after"
      beforeLabel: string
      before: DiagramNode[]
      afterLabel: string
      after: DiagramNode[]
      caption: string
    }
  | {
      type: "flow"
      steps: DiagramNode[]
      caption: string
    }

export type TaskStepLabel = "상황" | "문제" | "판단" | "구현" | "해결" | "결과"

export interface ProjectTask {
  title: string
  steps: Array<{ label: TaskStepLabel; text: string }>
}

export interface ProjectMetaItem {
  label: string
  lines: string[]
}

export interface ProjectDetail {
  slug: string
  company: string
  period: string
  name: string
  /** 목록에 보이는 한 줄 성과 */
  outcome: string
  /** 목록에 보이는 한 줄 설명 */
  summary: string
  /** 상세 페이지 상단 도입 문단 */
  lead: string
  meta: ProjectMetaItem[]
  images?: ProjectImage[]
  diagram?: ProjectDiagram
  tasks: ProjectTask[]
  /** 아직 작성하지 않았다면 비워두면 섹션이 숨겨집니다. */
  learnings?: string
  /** 상세 페이지 상단에 표시할 외부 링크 (사이트, GitHub 등) */
  links?: Array<{ label: string; href: string }>
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "partner-platform",
    company: "주식회사 토탈셀러",
    period: "2025.05 – 2026.03",
    name: "협업체 상담 신청 플랫폼",
    outcome: "30+ 파트너사 상담 페이지를 하나로 통합, 온보딩 리드타임 90% 단축",
    summary:
      "파트너별로 따로 만들던 페이지를 동적 라우팅·서브도메인 기반으로 합쳐, 신규 파트너 추가 시 개발 작업을 없앴습니다.",
    lead: "30개 이상의 파트너사가 각자 따로 운영하던 상담 신청 페이지를 하나의 플랫폼으로 통합했습니다. 신규 파트너를 추가할 때마다 반복되던 개발 작업을 없애, 온보딩 리드타임을 90% 줄였습니다.",
    meta: [
      { label: "역할", lines: ["프론트엔드 개발"] },
      { label: "성과", lines: ["온보딩 리드타임 90% 단축", "파트너 30+ 통합"] },
      { label: "기술", lines: ["Next.js, TypeScript,", "Tailwind CSS"] },
      { label: "서비스", lines: ["운영 종료", "화면 대신 구조도로 설명"] }
    ],
    diagram: {
      type: "before-after",
      beforeLabel: "BEFORE · 파트너마다 별도 페이지",
      before: [
        { title: "파트너 A 상담 페이지", description: "개별 개발·배포" },
        { title: "파트너 B 상담 페이지", description: "개별 개발·배포" },
        { title: "… 30개 이상", description: "추가할 때마다 개발 작업 반복" }
      ],
      afterLabel: "AFTER · 하나의 플랫폼",
      after: [
        {
          title: "파트너 설정",
          description: "파트너별로 다른 부분만 데이터로 관리"
        },
        {
          title: "단일 Next.js 앱",
          description: "동적 라우팅으로 파트너별 화면 생성"
        },
        { title: "서브도메인", description: "파트너마다 고유 주소로 접속" }
      ],
      caption:
        "신규 파트너는 설정만 추가하면 페이지가 생깁니다. 서비스가 종료되어 화면 캡처 대신 구조로 설명합니다."
    },
    tasks: [
      {
        title: "반복되던 파트너 페이지 개발을 설정으로 바꾸기",
        steps: [
          {
            label: "상황",
            text: "파트너사마다 상담 신청 페이지를 따로 만들어 운영했습니다. 내용은 거의 같은데도 새 파트너가 생길 때마다 페이지를 새로 만들고 배포하는 개발 작업이 반복됐습니다."
          },
          {
            label: "판단",
            text: "파트너별로 달라지는 부분만 데이터로 분리하면, 페이지 자체는 하나로 유지할 수 있다고 판단했습니다."
          },
          {
            label: "구현",
            text: "동적 라우팅과 서브도메인을 활용해 하나의 앱이 파트너별 상담 페이지를 만들도록 구성했습니다."
          },
          {
            label: "결과",
            text: "신규 파트너 추가 시 개발 작업이 사라져 온보딩 리드타임 90% 단축, 30개 이상 파트너를 한 곳에서 운영"
          }
        ]
      }
    ]
  },
  {
    slug: "content-management",
    company: "주식회사 토탈셀러",
    period: "2025.11 – 2026.01",
    name: "콘텐츠 관리 시스템",
    outcome:
      "개발팀 의존 없이 운영자가 직접 관리, 콘텐츠 반영 리드타임 50% 단축",
    summary:
      "Strapi 기반 CMS와 권한 체계를 설계·구현하고, 블로그 퀴즈·캠페인 운영에 적용했습니다.",
    lead: "개발팀에 요청해야만 바꿀 수 있던 콘텐츠를 운영자가 직접 관리할 수 있도록 Strapi 기반 CMS를 도입했습니다. 이를 바탕으로 블로그 퀴즈·캠페인을 웹에서 진행하고 결과를 집계하는 서비스를 만들었습니다.",
    meta: [
      { label: "역할", lines: ["프론트엔드 개발", "CMS 설계·구축"] },
      { label: "성과", lines: ["콘텐츠 반영 리드타임 50% 단축"] },
      {
        label: "기술",
        lines: ["Next.js, TypeScript,", "Strapi, Playwright, k6"]
      },
      { label: "서비스", lines: ["운영 종료", "아래는 운영 당시 캡처"] }
    ],
    images: [
      {
        src: blogQuizStrapi,
        alt: "Strapi 퀴즈 등록 화면",
        caption: "Strapi — 운영자가 직접 퀴즈 등록"
      },
      {
        src: blogQuizMain,
        alt: "블로그 퀴즈 메인 페이지",
        caption: "퀴즈 메인"
      },
      {
        src: blogQuizResult,
        alt: "블로그 퀴즈 결과 페이지",
        caption: "결과 페이지"
      }
    ],
    tasks: [
      {
        title: "콘텐츠 수정의 개발 의존 없애기",
        steps: [
          {
            label: "상황",
            text: "콘텐츠를 바꾸려면 개발팀에 요청하고 배포를 기다려야 해서, 운영 일정이 개발 일정에 묶여 있었습니다."
          },
          {
            label: "구현",
            text: "Headless CMS(Strapi)를 도입하고, 운영자가 맡은 콘텐츠만 다룰 수 있도록 권한 체계를 설계·구현했습니다."
          },
          {
            label: "결과",
            text: "콘텐츠 수정의 개발 의존성을 없애 콘텐츠 반영 리드타임 50% 단축"
          }
        ]
      },
      {
        title: "등록한 퀴즈를 배포 없이 바로 반영하기",
        steps: [
          {
            label: "구현",
            text: "퀴즈 페이지를 force-dynamic SSR로 구성해, Strapi에서 활성화한 퀴즈가 별도 배포 없이 바로 반영되도록 했습니다."
          },
          {
            label: "구현",
            text: "Playwright 시나리오 테스트와 k6 동시 접속 약 2,000명 부하 테스트 가이드를 만들어, 캠페인 오픈 전에 주요 흐름과 부하를 검증할 수 있게 했습니다."
          }
        ]
      }
    ]
  },
  {
    slug: "seldoc-subscription",
    company: "주식회사 토탈셀러",
    period: "2025.05 – 2026.03",
    name: "셀독 구독·결제 서비스",
    outcome:
      "PHP에 흩어진 가격 계산을 React로 이관해 견적·실결제 금액 불일치 방지",
    summary:
      "쿠폰 검증 API와 같은 기준으로 계산하도록 구성하고, 빌링키 정기결제와 중복 결제 방지를 구현했습니다.",
    lead: "셀러를 위한 광고·운영 대행형 구독 서비스입니다. 레거시 PHP에 흩어져 있던 할인·쿠폰·부가세 계산을 분석해 React로 옮기고, 견적 금액과 실제 결제 금액이 어긋나지 않도록 계산 기준을 하나로 맞췄습니다.",
    meta: [
      { label: "역할", lines: ["프론트엔드 개발"] },
      { label: "성과", lines: ["견적·실결제 불일치 방지", "중복 결제 방지"] },
      {
        label: "기술",
        lines: ["Next.js, TypeScript,", "Tailwind CSS, 아임포트"]
      },
      { label: "서비스", lines: ["운영 종료", "화면 대신 구조도로 설명"] }
    ],
    diagram: {
      type: "before-after",
      beforeLabel: "BEFORE · 계산 기준이 여러 곳",
      before: [
        { title: "PHP 여러 구간", description: "할인·쿠폰·부가세 계산이 분산" },
        {
          title: "화면의 견적 금액",
          description: "서버 검증과 계산 기준이 다를 수 있음"
        },
        { title: "결과", description: "견적과 실제 결제 금액 불일치 위험" }
      ],
      afterLabel: "AFTER · 하나의 계산 기준",
      after: [
        {
          title: "React 계산 로직",
          description: "할인 → 쿠폰 → 부가세 순서로 이관"
        },
        {
          title: "쿠폰 검증 API 기준",
          description: "서버 검증과 같은 기준으로 계산"
        },
        { title: "결과", description: "보이는 견적 = 실제 결제 금액" }
      ],
      caption:
        "가격 계산을 한 곳으로 모으고, 서버 검증과 같은 기준을 따르도록 맞췄습니다."
    },
    tasks: [
      {
        title: "견적 금액과 실제 결제 금액 맞추기",
        steps: [
          {
            label: "상황",
            text: "할인·쿠폰·부가세 계산이 레거시 PHP 여러 구간에 흩어져 있어, 화면에 보이는 견적과 실제 청구 금액이 어긋날 위험이 있었습니다."
          },
          {
            label: "구현",
            text: "레거시 계산 로직을 분석해 React로 이관하고, 쿠폰 검증 API와 동일한 기준으로 계산하도록 구성했습니다."
          },
          {
            label: "결과",
            text: "견적 금액과 실제 결제 금액의 불일치 방지"
          }
        ]
      },
      {
        title: "정기결제와 중복 결제 방지",
        steps: [
          {
            label: "구현",
            text: "빌링키 기반으로 최초 결제와 재결제를 분기 처리하고, 아임포트 스크립트 지연 로딩을 하나의 모듈로 캡슐화했습니다."
          },
          {
            label: "구현",
            text: "최근 구독 생성 시각을 기준으로 짧은 시간 안의 중복 결제 요청을 막았습니다."
          }
        ]
      }
    ]
  },
  {
    slug: "keyword-analysis",
    company: "주식회사 토탈셀러",
    period: "2025.11",
    name: "마케팅 키워드 분석 서비스",
    outcome: "캐시 우선 조회와 비동기 폴링으로 중복 크롤링 요청 감소",
    summary:
      "네이버·쿠팡 데이터로 상품 키워드의 검색량과 경쟁도를 분석하는 서비스를 구축했습니다.",
    lead: "네이버·쿠팡 데이터로 상품 키워드의 검색량과 경쟁도를 분석하는 서비스입니다. 캐시 우선 조회로 중복 크롤링 요청을 줄이고, 오래 걸리는 분석은 비동기 폴링으로 추적해 사용자가 이탈 없이 결과를 받도록 만들었습니다.",
    meta: [
      { label: "역할", lines: ["프론트엔드 개발"] },
      { label: "성과", lines: ["중복 크롤링 요청 감소"] },
      {
        label: "기술",
        lines: ["Next.js, TypeScript,", "TanStack Query, FastAPI"]
      },
      { label: "서비스", lines: ["운영 종료", "아래는 운영 당시 캡처"] }
    ],
    images: [
      {
        src: sourcingHome,
        alt: "키워드 분석 서비스 메인 화면",
        caption: "메인 — 키워드 입력과 최근 검색 기록"
      },
      {
        src: sourcingGraph,
        alt: "키워드 분석 결과 화면",
        caption: "결과 — 검색량 추이와 경쟁도"
      }
    ],
    tasks: [
      {
        title: "같은 키워드를 매번 다시 크롤링하지 않기",
        steps: [
          {
            label: "상황",
            text: "쿠팡 데이터는 크롤링 서버(FastAPI)를 거쳐 가져와야 해서, 같은 키워드를 반복 조회할 때마다 크롤링이 새로 실행됐습니다."
          },
          {
            label: "판단",
            text: "키워드 지표는 짧은 시간 안에 크게 바뀌지 않는다고 보고, 최신 데이터보다 캐시를 먼저 확인하는 방식을 택했습니다."
          },
          {
            label: "구현",
            text: "클라이언트는 TanStack Query로 5분간 캐시하고, 백엔드는 Redis 캐시를 두어 캐시가 있으면 크롤링 없이 응답하게 했습니다. 네이버 DataLab·검색광고 API와 쿠팡 크롤링 서버를 연동하고, 최근 검색 기록은 LocalStorage에 남겼습니다."
          },
          {
            label: "결과",
            text: "중복 크롤링 요청 감소"
          }
        ]
      },
      {
        title: "오래 걸리는 분석을 기다리게 만들지 않기",
        steps: [
          {
            label: "상황",
            text: "크롤링이 포함된 분석은 시간이 걸려, 요청 하나로 결과를 기다리면 사용자가 이탈할 수 있었습니다."
          },
          {
            label: "구현",
            text: "분석 작업의 완료 여부를 주기적으로 확인하는 비동기 폴링 구조를 설계했습니다."
          },
          {
            label: "결과",
            text: "분석 완료 여부를 안정적으로 추적하고, 사용자가 화면을 떠나지 않고 결과를 확인"
          }
        ]
      }
    ]
  },
  {
    slug: "seller-marketplace",
    company: "주식회사 토탈셀러",
    period: "2025.11 – 2026.03",
    name: "셀러 입점형 온라인 쇼핑몰",
    outcome: "주문·재고 검증과 화면 상태를 함께 설계해 구매 흐름 안정성 향상",
    summary:
      "상품 조회·구매부터 주문 관리, 관리자 페이지, 셀러 입점까지 쇼핑몰 전반의 기능을 개발했습니다.",
    lead: "상품을 판매하는 셀러가 입점하고 고객이 상품을 구매하는 쇼핑몰입니다. 상품 조회·구매부터 주문 관리, 관리자 페이지, 셀러 입점까지 사용자·관리자 기능 전반을 개발했고, 장바구니·결제 구간에서 주문 정보가 어긋나지 않도록 검증 로직과 화면 상태를 함께 설계했습니다.",
    meta: [
      { label: "역할", lines: ["프론트엔드 개발", "사용자·관리자 화면 전반"] },
      { label: "성과", lines: ["구매 흐름 안정성 향상"] },
      {
        label: "기술",
        lines: ["Next.js, TypeScript,", "Zustand, TanStack Query"]
      },
      { label: "서비스", lines: ["운영 종료", "화면 대신 구조도로 설명"] }
    ],
    diagram: {
      type: "flow",
      steps: [
        { title: "옵션·수량 선택", description: "구매 한도를 실시간으로 안내" },
        { title: "장바구니", description: "재고·구매제한 위반을 미리 보정" },
        { title: "결제 요청", description: "중복 요청을 UI 단계에서 차단" },
        { title: "주문 생성", description: "검증을 통과한 주문만 결제로 진행" }
      ],
      caption: "구매 흐름의 각 단계에서 어떤 검증을 했는지 보여줍니다."
    },
    tasks: [
      {
        title: "장바구니·결제 구간에서 주문 정보가 어긋나지 않게 하기",
        steps: [
          {
            label: "상황",
            text: "장바구니에서 결제로 넘어가는 구간에서 요청이 중복되거나, 재고·구매제한과 맞지 않는 주문이 결제 단계까지 넘어갈 수 있었습니다."
          },
          {
            label: "구현",
            text: "결제 전환 구간의 중복 요청을 UI 단계에서 차단하고, 재고·구매제한 위반은 결제 전에 미리 보정했습니다. 옵션·수량 단계에서는 구매 한도를 실시간으로 안내했습니다."
          },
          {
            label: "결과",
            text: "결제 실패와 이탈 부담을 줄이고 구매 흐름의 안정성 향상"
          }
        ]
      },
      {
        title: "검색 UX 다듬기",
        steps: [
          {
            label: "구현",
            text: "자동완성에 디바운싱을 적용하고, 무한 스크롤의 다음 페이지 요청 조건을 분리해 불필요한 요청을 줄였습니다."
          }
        ]
      }
    ]
  }
]

export const getProjectBySlug = (slug: string | undefined) =>
  projectDetails.find((project) => project.slug === slug)
