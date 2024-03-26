import { styled } from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SvgIcon } from "@mui/material";
import ProjectLists from "./ProjectLists";
import portfolio1 from "assets/portfolio/portfolio1.png";
import portfolio2 from "assets/portfolio/portfolio2.png";
import portfolio3 from "assets/portfolio/portfolio3.png";
import portfolio4 from "assets/portfolio/portfolio4.png";
import salog1 from "assets/salog/salog1.png";
import salog2 from "assets/salog/salog2.png";
import salog3 from "assets/salog/salog3.png";
import salog4 from "assets/salog/salog4.png";
import salog5 from "assets/salog/salog5.png";
import salog6 from "assets/salog/salog6.png";
import salog7 from "assets/salog/salog7.png";
import wt1 from "assets/wt/wt1.png";
import wt2 from "assets/wt/wt2.png";
import wt3 from "assets/wt/wt3.png";
import wt4 from "assets/wt/wt4.png";
import wt5 from "assets/wt/wt5.png";
import html5 from "assets/html5.png";
import css3 from "assets/css3.png";
import ts from "../../assets/ts.png";
import reactjs from "../../assets/reactjs.png";
import styledComponents from "../../assets/StyledComponents.svg";
import { useEffect, useRef, useState } from "react";
import redux from "../../assets/Redux.svg";
import firebase from "assets/Firebase-Dark.svg";
import AWS from "assets/AWS-Dark.svg";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { useNavigate } from "react-router-dom";

const Project = () => {
  // 개인 포트폴리오 사이트 데이터
  const portfolioImages = [portfolio1, portfolio2, portfolio3, portfolio4];
  const portfolioLeft = {
    projectType: "개인 프로젝트",
    projectName: "개인 포트폴리오 사이트",
    projectDate: "2024.03.18 ~ 2024.03.25",
    projectSite: "https://yujunsun0.github.io/",
    projectGithub: "https://github.com/YujunSun0/YujunSun0.github.io/tree/main",
  };
  const portfolioDetail = {
    projectExplain: `
          <span class="strong">포트폴리오 용으로 제작한 웹사이트</span>입니다.
          한 페이지에서 편리한 정보 조회가 가능하도록 제작했으며,
          <span class="strong">반응형 웹</span>으로 제작되어 모든 환경에서
          볼 수 있습니다.
          <br />
          <br />
          개발 기간을 짧게 잡아 진행하였고
          <span class="strong">재사용 가능한 컴포넌트</span>를 만들어
          유지보수에 용이하게 만들었습니다.
        `,
    projectStacks: [html5, css3, ts, reactjs, styledComponents],
    projectReview: `
          이번 프로젝트는 앞으로도 업데이트해 나가야 할 사이트이므로
          <span class="strong">유지보수하기 좋은 코드</span>를 작성하려
          노력했으며, 사용자의 유입과 경험을 위해
          <span class="strong">SEO & UI/UX</span>에 신경썼습니다.
          <br />
          <br />
          주요 기능들을 라이브러리 없이 구현하여 기술적 이해도를 높이고, 브라우저 렌더링이 대해 생각해보는 계기가 되었습니다.
          <br/>
          <br/>
          이를 계기로 추후 <span class="code_block">Next.js</span>를 학습하여 migration 할 예정입니다.
        `,
  };

  // salog 사이트 데이터
  const salogImages = [salog1, salog2, salog3, salog4, salog5, salog6, salog7];
  const salogLeft = {
    projectType: "팀 프로젝트 (3人)",
    projectName: "Salog",
    projectDate: "2023.11.17 ~ 2024.02.24",
    projectSite: "https://www.salog.kro.kr/",
    projectGithub: "https://github.com/kimtjrgus/salog",
  };
  const salogDetail = {
    projectExplain: `
    <span class="strong">Salog</span>는 <span class="strong">가계부와 일기를 기록</span>하는 사이트입니다.
    <br /> 
    <br /> 
    해당 프로젝트를 시작하기 전 낭비라 생각되는 지출을 자주 하게되어 가계부를 작성하려 했으며, 이를 웹앱으로 제작해도 좋겠다 생각하여 프로젝트를 진행하게 되었습니다. 
    `,
    projectStacks: [
      html5,
      css3,
      ts,
      reactjs,
      styledComponents,
      redux,
      firebase,
      AWS,
    ],
    projectReview: `
         상태관리 라이브러리로 <span class="code_block">Redux-toolkit</span>을 사용하면서 장단점을 알게되었고, 리덕스 상태를 지속적으로 저장 및 복원하기 위한 <span class="code_block">Redux-persist</span>를 경험해 볼 수 있었습니다.
         <br />
         <br />
         HTTPS 배포 경험을 통하여 <span class="code_block">AWS S3</span>와 <span class="code_block">CloudFront</span>를 함께사용해 볼 수 있었으며, <span class="strong">PWA(Progressive Web Apps)와 OAuth 2.0를 이용한 소셜로그인</span>을 구현할 수 있었습니다.
        `,
  };
  // wr!eating 사이트 데이터
  const wtImages = [wt1, wt2, wt3, wt4, wt5];
  const wtLeft = {
    projectType: "팀 프로젝트 (6人)",
    projectName: "Wr!eating",
    projectDate: "2023.04.28 ~ 2023.05.31",
    projectSite:
      "http://fe-004-s3-bucket.s3-website.ap-northeast-2.amazonaws.com/",
    projectGithub: "https://github.com/codestates-seb/seb43_main_004",
  };
  const wtDetail = {
    projectExplain: `
    <span class="strong">Wr!eating</span>은 write + eating의 합성어로 <span class="strong">"식단 일기"</span>를 작성하는 서비스입니다.
    <br />
    <br />
    부트캠프에서 진행한 프로젝트로, <span class="strong">대부분의 시간을 앉아서 지내야 하는 수강생</span>들을 목표 타깃으로 선정하였습니다.
    `,
    projectStacks: [html5, css3, ts, reactjs, styledComponents, AWS],
    projectReview: `
         React hooks 중 평소 사용하던 <span class="code_block">useState</span>, <span class="code_block">useEffect</span>에 대한 <span class="strong">동작 원리</span>를 생각해보는 계기가 되었습니다.
         <br />
         <br />
         기획 및 배포단계에 생각보다 많은 시간을 사용하여 <span class="strong">시간 배분에 대한 아쉬움</span>을 느꼈으며, 이를 통해 <span class="strong">Agile 방법론</span>의 중요성을 느꼈습니다.
        `,
  };

  const [isVisible, setIsVisible] = useState<number>(0);
  const [start, end] = [0, 2]; // 리스트의 시작과 끝 Idx를 저장

  const target = useRef(null);
  const navigate = useNavigate();
  const listRef = useRef<any>([]);

  const [observe, unobserve] = useIntersectionObserver(() => {
    navigate("/#3");
  });

  const handleClickBackBtn = () => {
    setIsVisible((prev) => {
      if (prev === start) {
        return end;
      } else {
        return prev - 1;
      }
    });
  };

  const handleClickForwardBtn = () => {
    setIsVisible((prev) => {
      if (prev === end) {
        return start;
      } else {
        return prev + 1;
      }
    });
  };

  const handleClickNavLi = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setIsVisible(Number(target.id));
  };

  useEffect(() => {
    if (target.current !== null && target.current !== undefined) {
      observe(target.current);
    }

    return () => {
      if (target.current !== null && target.current !== undefined) {
        unobserve(target.current);
      }
    };
  }, []);

  return (
    <Container id="3" ref={target}>
      <ProjectWrapper>
        <SectionTitle>
          <h3>PROJECT</h3>
        </SectionTitle>
        <ListsWrapper>
          <SvgIcon
            className="arrow_back_icon"
            component={ArrowBackIosIcon}
            onClick={handleClickBackBtn}
          />
          {/* 개인 포트폴리오 사이트 */}
          <ProjectLists
            isVisible={isVisible}
            id={"0"}
            images={portfolioImages}
            projectInfo={portfolioLeft}
            projectDetail={portfolioDetail}
          />
          {/* salog 사이트 */}
          <ProjectLists
            isVisible={isVisible}
            id={"1"}
            images={salogImages}
            projectInfo={salogLeft}
            projectDetail={salogDetail}
          />
          {/* wr!eating 사이트 */}
          <ProjectLists
            isVisible={isVisible}
            id={"2"}
            images={wtImages}
            projectInfo={wtLeft}
            projectDetail={wtDetail}
          />
          <SvgIcon
            className="arrow_forward_icon"
            component={ArrowForwardIosIcon}
            onClick={handleClickForwardBtn}
          />
        </ListsWrapper>
        <NavList>
          <SvgIcon
            className="arrow_back_icon_mobile"
            component={ArrowBackIosIcon}
            onClick={handleClickBackBtn}
          />
          <li
            id="0"
            ref={(el) => (listRef.current[0] = el)}
            className={`${listRef?.current[0]?.id === isVisible.toString() ? "active" : ""}`}
            onClick={handleClickNavLi}
          ></li>
          <li
            id="1"
            ref={(el) => (listRef.current[1] = el)}
            className={`${listRef?.current[1]?.id === isVisible.toString() ? "active" : ""}`}
            onClick={handleClickNavLi}
          ></li>
          <li
            id="2"
            ref={(el) => (listRef.current[2] = el)}
            className={`${listRef?.current[2]?.id === isVisible.toString() ? "active" : ""}`}
            onClick={handleClickNavLi}
          ></li>
          <SvgIcon
            className="arrow_forward_icon_mobile"
            component={ArrowForwardIosIcon}
            onClick={handleClickForwardBtn}
          />
        </NavList>
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
  padding: 0 2rem;
`;

const ListsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 5rem;

  @keyframes nav_back_animation {
    0% {
      transform: translateX(0px);
    }

    50% {
      transform: translateX(15px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  @keyframes nav_forward_animation {
    0% {
      transform: translateX(0px);
    }

    50% {
      transform: translateX(-15px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  .arrow_back_icon {
    cursor: pointer;
    width: 65px;
    height: 65px;
    filter: invert(60%);
    transition: 500ms ease;
    animation: nav_back_animation 1600ms ease-in-out infinite;

    &:hover {
      filter: invert(90%);
    }
  }

  .arrow_forward_icon {
    cursor: pointer;
    width: 65px;
    height: 65px;
    filter: invert(60%);
    transition: 500ms ease;
    animation: nav_forward_animation 1600ms ease-in-out infinite;

    &:hover {
      filter: invert(90%);
    }
  }

  @media (max-width: 768px) {
    .arrow_back_icon,
    .arrow_forward_icon {
      display: none !important;
    }
  }
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .arrow_back_icon_mobile,
  .arrow_forward_icon_mobile {
    display: none;
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    filter: invert(60%);
    transition: 500ms ease;

    &:hover {
      filter: invert(90%);
    }

    @media (max-width: 768px) {
      display: block;
    }
  }

  > li {
    position: relative;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    cursor: pointer;
    transition: 500ms ease;
    background-color: gray;
  }

  .active {
    transform: scale(1.15);
    background-color: white;
  }
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
