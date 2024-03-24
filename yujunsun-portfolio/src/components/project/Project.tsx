import { styled } from "styled-components";
import ProjectLists from "./ProjectLists";
import portfolioLanding from "assets/landing.png";

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
  return (
    <Container id="3">
      <ProjectWrapper>
        <SectionTitle>
          <h3>PROJECT</h3>
        </SectionTitle>
        <ProjectLists images={portfolioImages} projectInfo={portfolioLeft} />
      </ProjectWrapper>
    </Container>
  );
};

export default Project;

const Container = styled.article`
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
