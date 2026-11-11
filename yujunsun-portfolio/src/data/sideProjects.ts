import deepdevMain from "@assets/projects/deepdev/01-main-deepdev.png"
import blogMain from "@assets/projects/blog/01-main-tech.png"

export interface SideProject {
  name: string
  status: "live" | "preparing"
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
    published: true,
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
    published: true,
  },
  {
    name: "audio-studio",
    status: "preparing",
    description: "",
    stack: "",
    published: false,
  },
  {
    name: "onginote",
    status: "preparing",
    description: "",
    stack: "",
    published: false,
  },
]
