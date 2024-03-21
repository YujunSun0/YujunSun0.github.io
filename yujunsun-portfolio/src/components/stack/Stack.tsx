import { styled } from "styled-components";
import StackLists from "./StackLists";
// 이미지 불러오기
import html5 from "assets/html5.png";
import css3 from "assets/css3.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import reactjs from "../../assets/reactjs.png";
import styledComponents from "../../assets/StyledComponents.svg";
import redux from "../../assets/Redux.svg";
import figma from "assets/Figma-Dark.svg";
import vscode from "assets/VSCode-Dark.svg";
import git from "assets/Git.svg";
import postman from "assets/Postman.svg";
import aws from "assets/AWS-Dark.svg";
import firebase from "assets/Firebase-Dark.svg";

const Stack = () => {
  // frontendData 배열
  const frontendData = [
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
      title: "Javascript",
      content:
        "ES6+ 문법을 사용하며, 함수형 프로그래밍의 개념을 이해하고 활용합니다.",
    },
    {
      image: ts,
      title: "Typescript",
      content:
        "원시/객체 타입을 이해하고, 인터페이스와 제네릭을 이용하여 타입을 더 유연하게 사용합니다.",
    },
    {
      image: reactjs,
      title: "React",
      content:
        "함수형 컴포넌트를 통해 hooks를 사용하며, 재사용 가능한 컴포넌트를 만듭니다.",
    },
    {
      image: styledComponents,
      title: "Styled-components",
      content:
        "CSS-in-JS 방식으로 스타일을 정의하고, 디자인 시스템을 적용하여 재사용 컴포넌트를 만듭니다.",
    },
    {
      image: redux,
      title: "Redux-toolkit",
      content:
        "store & slice로 상태를 관리하며, redux-persist를 이용하여 브라우저에서 데이터를 반 영구적으로 유지할 수 있습니다.",
    },
  ];

  // toolsData 배열
  const toolsData = [
    {
      image: figma,
      title: "Figma",
      content: "UI/UX 디자인 및 프로토타입을 제작할 수 있습니다.",
    },
    {
      image: vscode,
      title: "VS Code",
      content:
        "개발 시 사용하는 툴이며, 여러 확장 프로그램들을 사용하여 효율적으로 개발합니다.",
    },
    {
      image: git,
      title: "Git",
      content:
        "Github와 함께 사용하며, 로컬 & 원격 저장소를 이용한 버전 관리 및 협업이 가능합니다.",
    },
    {
      image: postman,
      title: "Postman",
      content: "REST API 테스트 및 공유 시 사용하는 툴입니다.",
    },
  ];

  // devOpsData 배열
  const devOpsData = [
    {
      image: aws,
      title: "AWS",
      content:
        "EC2를 통한 인스턴스 생성, S3, cloudfront, ACM을 이용한 HTTPS 배포를 경험했습니다.",
    },
    {
      image: firebase,
      title: "Firebase",
      content:
        "serverless 웹을 개발해봤으며, storage를 이용하여 이미지 업로드를 경험해봤습니다.",
    },
  ];

  return (
    <Container>
      <StackWrapper>
        <SectionTitle>
          <h3>Tech Stack</h3>
        </SectionTitle>
        <p className="title_detail">
          아이콘에 마우스를 올리면 자세한 설명이 나옵니다.
        </p>
        <StackLists name="# FrontEnd-Skill" values={frontendData} />
        <StackLists name="# Tools" values={toolsData} />
        <StackLists name="# DevOps" values={devOpsData} />
      </StackWrapper>
    </Container>
  );
};

export default Stack;

const Container = styled.article`
  width: 100%;
  padding: 8rem 2rem;
  margin: 0 auto;
  background-color: rgb(21, 24, 27);
`;

const StackWrapper = styled.div`
  max-width: 95rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title_detail {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgb(255, 255, 255);
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.div`
  display: table;
  font-size: 3.8rem;
  font-weight: 500;
  border-bottom: 2px solid #cccccc;
  color: rgb(156, 107, 212);
  padding-bottom: 1.5rem;
  margin: 0 auto 4.5rem;
  letter-spacing: 4px;
`;
