import { styled } from "styled-components";
import ProjectLists from "./ProjectLists";
import portfolioLanding from "assets/landing.png";
import html5 from "assets/html5.png";
import css3 from "assets/css3.png";
import ts from "../../assets/ts.png";
import reactjs from "../../assets/reactjs.png";
import styledComponents from "../../assets/StyledComponents.svg";
// import js from "../../assets/js.png";
// import redux from "../../assets/Redux.svg";
// import firebase from "assets/Firebase-Dark.svg";

const Project = () => {
  // 개인 포트폴리오 사이트 데이터
  const portfolioImages = [
    portfolioLanding,
    portfolioLanding,
    portfolioLanding,
    portfolioLanding,
    portfolioLanding,
  ];
  const portfolioLeft = {
    projectType: "개인 프로젝트",
    projectName: "개인 포트폴리오 사이트",
    projectDate: "2024.03.17 ~ 2024.03.25",
  };
  const portfolioDetail = {
    projectExplain: "",
    projectStacks: [html5, css3, ts, reactjs, styledComponents],
    projectReview: "",
  };

  return (
    <Container id="3">
      <ProjectWrapper>
        <SectionTitle>
          <h3>PROJECT</h3>
        </SectionTitle>
        <ProjectLists
          images={portfolioImages}
          projectInfo={portfolioLeft}
          projectDetail={portfolioDetail}
        />
      </ProjectWrapper>
    </Container>
  );
};

export default Project;

const Container = styled.section`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  width: 100%;
  padding: 8rem 0;
  background-image: linear-gradient(60deg, #29323c 0%, #292929 100%);
  background-size: 400%, 400%;
  animation: gradient 15s ease infinite;
`;

const ProjectWrapper = styled.div`
  max-width: 95rem;
  height: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  display: table;
  font-size: 3.8rem;
  font-weight: 500;
  border-bottom: 2px solid #cccccc;
  color: #ffffff;
  padding-bottom: 1.5rem;
  margin: 0 auto 4.5rem;
  letter-spacing: 4px;
`;
