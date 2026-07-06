export interface BlogPost {
  title: string
  date: string
  url: string
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    title: "PHP 레거시를 Next.js로 마이그레이션한 경험",
    date: "2025",
    url: "https://velog.io/@yujunsun0/posts",
    tags: ["Next.js", "마이그레이션"],
  },
  {
    title: "30+ 파트너사 페이지 중앙화 설계",
    date: "2025",
    url: "https://velog.io/@yujunsun0/posts",
    tags: ["아키텍처", "자동화"],
  },
  {
    title: "HLS 스트리밍 플레이어 구현기",
    date: "2025",
    url: "https://velog.io/@yujunsun0/posts",
    tags: ["HLS", "미디어"],
  },
]

export const blogLinks = {
  current: "https://velog.io/@yujunsun0/posts",
  previous: "https://velog.io/@yujunsun0/posts",
}
