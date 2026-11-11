import deepdevMain from "@assets/projects/deepdev/01-main-deepdev.png"
import blogMain from "@assets/projects/blog/01-main-tech.png"
import audioStudioMain from "@assets/projects/audio-studio/01-main-audio-studio.png"
import onginoteLogin from "@assets/projects/onginote/01-login-onginote.png"

export type SideProjectStatus = "live" | "local" | "prototype"

export interface SideProject {
  name: string
  status: SideProjectStatus
  description: string
  stack: string
  image?: { src: string; alt: string }
  siteUrl?: string
  githubUrl?: string
  /** false면 화면에 표시하지 않습니다. 내용을 채운 뒤 true로 바꾸세요. */
  published: boolean
}

export const sideProjects: SideProject[] = [
  {
    name: "DeepDev",
    status: "live",
    description:
      "개념 그래프 기반 AI 학습 플랫폼. 숙련도 측정부터 인증·결제·배포까지 혼자 구축했습니다.",
    stack: "Next.js · NestJS · PostgreSQL",
    image: { src: deepdevMain, alt: "DeepDev 메인 화면" },
    siteUrl: "https://deepdev.info/",
    githubUrl: "https://github.com/YujunSun0/DeepDev",
    published: true
  },
  {
    name: "개인 기술 블로그",
    status: "live",
    description:
      "기술 블로그·갤러리·관리자 CMS를 설계·구현하고 운영 중입니다. Supabase Auth 기반 권한 관리와 SEO를 적용했습니다.",
    stack: "Next.js · Supabase · Vercel",
    image: { src: blogMain, alt: "개인 기술 블로그 메인 화면" },
    siteUrl: "https://yujunsun.tech/",
    githubUrl: "https://github.com/YujunSun0/Personal-Blog",
    published: true
  },
  {
    name: "Audio Studio",
    status: "local",
    description:
      "YouTube 링크 하나로 MP3 추출과 AI 보컬 분리까지 처리하는 로컬 웹앱. fp16·overlap 튜닝으로 분리 속도를 약 4배 높였고, SSE 진행률 표시와 Web Audio API 기반 트랙 믹서를 직접 구현했습니다.",
    stack: "React · TypeScript · FastAPI · PyTorch · Web Audio API",
    image: { src: audioStudioMain, alt: "Audio Studio 메인 화면" },
    githubUrl: "https://github.com/YujunSun0/audio-studio",
    published: true
  },
  {
    name: "온기노트",
    status: "prototype",
    description:
      "캐릭터와 함께하는 연애·인간관계 고민 상담 웹앱. 메시지마다 답변 모드를 판단하는 2단계 LLM 구조를 설계했고, 프롬프트 캐싱과 사용량 한도로 비용을 관리하며 Supabase RLS로 본인 데이터만 접근하도록 했습니다.",
    stack: "Next.js · TypeScript · Supabase · Claude API",
    image: { src: onginoteLogin, alt: "온기노트 로그인 화면" },
    published: true
  }
]
