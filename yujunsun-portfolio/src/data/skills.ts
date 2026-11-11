export interface SkillGroup {
  category: string
  items: string
}

export const skillGroups: SkillGroup[] = [
  { category: "Core", items: "TypeScript, JavaScript, React, Next.js (App Router)" },
  { category: "State & Data", items: "TanStack Query, Zustand, Redux" },
  { category: "Styling", items: "Tailwind CSS, styled-components" },
  { category: "Backend & CMS", items: "NestJS, Node.js, Strapi, Supabase, PostgreSQL" },
  { category: "Test", items: "Playwright, k6" },
  { category: "Infra", items: "Vercel, AWS" },
]
