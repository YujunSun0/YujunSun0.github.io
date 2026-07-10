import html5 from "@assets/stacks/html5.png"
import css3 from "@assets/stacks/css3.png"
import js from "@assets/stacks/js.png"
import ts from "@assets/stacks/ts.png"
import reactjs from "@assets/stacks/reactjs.png"
import styledComponents from "@assets/stacks/StyledComponents.svg"
import figma from "@assets/stacks/Figma-Dark.svg"
import vscode from "@assets/stacks/VSCode-Dark.svg"
import git from "@assets/stacks/Git.svg"
import postman from "@assets/stacks/Postman.svg"
import aws from "@assets/stacks/AWS-Dark.svg"
import firebase from "@assets/stacks/Firebase-Dark.svg"
import nextjs from "@assets/stacks/nextjs.jpg"
import tailwind from "@assets/stacks/Tailwind.svg"
import zustand from "@assets/stacks/zustand.svg"
import tanstackQuery from "@assets/stacks/Tanstack-query.webp"
import storybook from "@assets/stacks/storybook.svg"
import strapi from "@assets/stacks/Strapi.monogram.logo.svg"
import vercel from "@assets/stacks/vercel.svg"

export interface StackItem {
  image: string
  title: string
  content: string
}

export const frontendData: StackItem[] = [
  {
    image: html5,
    title: "HTML5",
    content:
      "웹 접근성 & 웹 표준을 준수하며 시맨틱 태그를 사용하여 마크업합니다.",
  },
  {
    image: css3,
    title: "CSS3",
    content:
      "flexbox, grid를 사용한 레이아웃을 만들고 미디어 쿼리를 통해 반응형 웹을 제작합니다.",
  },
  {
    image: js,
    title: "JavaScript",
    content:
      "ES6+ 문법을 사용하며, 함수형 프로그래밍의 개념을 이해하고 활용합니다.",
  },
  {
    image: ts,
    title: "TypeScript",
    content:
      "인터페이스와 제네릭을 활용하며, 프로덕션 환경에서 타입 안전한 코드를 작성합니다.",
  },
  {
    image: reactjs,
    title: "React",
    content:
      "함수형 컴포넌트와 hooks를 활용하며, 재사용 가능한 컴포넌트 설계를 지향합니다.",
  },
  {
    image: nextjs,
    title: "Next.js",
    content:
      "App Router 기반 SSR/RSC/CSR 렌더링 전략을 분리 적용하며, 프로덕션 서비스를 구축한 경험이 있습니다.",
  },
  {
    image: styledComponents,
    title: "styled-components",
    content:
      "CSS-in-JS 방식으로 컴포넌트 단위 스타일링을 하며, 테마 시스템을 적용합니다.",
  },
  {
    image: tailwind,
    title: "TailwindCSS",
    content:
      "유틸리티 퍼스트 CSS로 빠른 UI 개발 및 일관된 디자인 시스템을 구현합니다.",
  },
  {
    image: zustand,
    title: "Redux / zustand",
    content:
      "상태 관리 라이브러리를 상황에 맞게 선택하여 사용하며, 도메인 단위 store 분리 경험이 있습니다.",
  },
  {
    image: tanstackQuery,
    title: "TanStack Query",
    content:
      "서버 상태 관리와 캐싱 전략을 적용하여 효율적인 데이터 패칭을 구현합니다.",
  },
]

export const toolsData: StackItem[] = [
  {
    image: figma,
    title: "Figma",
    content: "UI/UX 디자인 및 프로토타입을 제작할 수 있습니다.",
  },
  {
    image: vscode,
    title: "VS Code",
    content:
      "확장 프로그램을 활용하여 효율적인 개발 환경을 구성합니다.",
  },
  {
    image: git,
    title: "Git",
    content:
      "Github를 활용한 버전 관리 및 브랜치 전략 기반 협업이 가능합니다.",
  },
  {
    image: postman,
    title: "Postman",
    content: "REST API 테스트 및 문서화에 활용합니다.",
  },
  {
    image: storybook,
    title: "Storybook",
    content: "UI 컴포넌트 개발 및 문서화, 시각적 테스트에 활용합니다.",
  },
  {
    image: strapi,
    title: "Strapi",
    content: "Headless CMS로 콘텐츠 관리 시스템을 구축한 경험이 있습니다.",
  },
]

export const devOpsData: StackItem[] = [
  {
    image: vercel,
    title: "Vercel",
    content:
      "Next.js 프로젝트의 CI/CD 및 프리뷰 배포에 활용합니다.",
  },
  {
    image: aws,
    title: "AWS",
    content:
      "EC2, S3, CloudFront, ACM을 이용한 인프라 구축 및 HTTPS 배포 경험이 있습니다.",
  },
  {
    image: firebase,
    title: "Firebase",
    content:
      "Storage 기반 파일 업로드 및 서버리스 환경 구축 경험이 있습니다.",
  },
]
