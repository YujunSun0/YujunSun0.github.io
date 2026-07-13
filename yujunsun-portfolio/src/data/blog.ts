export interface BlogPost {
  title: string
  date: string
  url: string
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    title:
      "로그인 깜빡임을 완전히 없애고 싶어서 - HttpOnly 쿠키 + SSR로 해결한 이야기",
    date: "2026.01.19",
    url: "https://yujunsun.tech/posts/b58a8236-458b-4d86-9d27-7591cb699e1d",
    tags: ["Next.js", "SSR", "Authentication"],
  },
  {
    title: "무조건 스켈레톤을 보여주는게 정말 좋을까? - 지연 로딩으로 UX 개선하기",
    date: "2025.12.26",
    url: "https://yujunsun.tech/posts/058c71a0-8c77-4237-bd5b-dfe0a9e7560b",
    tags: ["React", "Next.js", "UX"],
  },
  {
    title: "[React] 번들 사이즈를 줄여보자",
    date: "2024.04.15",
    url: "https://velog.io/@yujunsun0/React-%EB%B2%88%EB%93%A4-%EC%82%AC%EC%9D%B4%EC%A6%88%EB%A5%BC-%EC%A4%84%EC%97%AC%EB%B3%B4%EC%9E%90",
    tags: ["React", "최적화"],
  },
]

export const blogLinks = {
  current: "https://yujunsun.tech/",
  archive: "https://velog.io/@yujunsun0/posts",
}
