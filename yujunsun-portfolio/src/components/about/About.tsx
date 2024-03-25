import styled from "styled-components";
import Info from "./Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const target = useRef(null);
  const navigate = useNavigate();

  const [observe, unobserve] = useIntersectionObserver(() => {
    navigate("/#1");
  });

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
    <Container id="1" ref={target}>
      <AboutWrapper>
        <SectionTitle>
          <h3>ABOUT ME</h3>
        </SectionTitle>
        <AboutMain>
          <li>
            <span className="block">
              <span className="underline">웹의 화면 구성 및 기능을 구현</span>
              하는 것에 흥미가 생겨
            </span>{" "}
            <span className="strong">FE 개발자</span>라는 직종에 관심을 가지게
            되었습니다.
          </li>
          <li>
            <span className="block">
              <span className="strong">좋은 코드</span>를 작성하기 위해 항상
              생각하며,
            </span>{" "}
            개발자로서{" "}
            <span className="underline">
              다양한 경험을 하며 <span className="strong">성장</span>
            </span>
            하는 것을 목표로 합니다.
          </li>
        </AboutMain>
        <InfoWrapper>
          <Info icon={AccountCircleIcon} title={"이름"} body={"선유준"} />
          <Info
            icon={CalendarMonthIcon}
            title={"생년월일"}
            body={"2002.01.28"}
          />
          <Info icon={PlaceIcon} title={"주소지"} body={"인천광역시 부평구"} />
          <Info icon={SmartphoneIcon} title={"연락처"} body={"010-8579-6705"} />
          <Info
            icon={EmailIcon}
            title={"이메일"}
            body={"yujunsun0@gmail.com"}
          />
          <Info
            icon={SchoolIcon}
            title={"교육"}
            body={"코드스테이츠\nFE 43기"}
          />
        </InfoWrapper>
      </AboutWrapper>
    </Container>
  );
};

export default About;

const Container = styled.section`
  width: 100%;
  padding: 8rem 0;
  background-color: #fff;
`;

const AboutWrapper = styled.div`
  max-width: 80rem;
  height: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  display: table;
  font-size: 3.6rem;
  font-weight: 600;
  color: #000;
  border-bottom: 2px solid #cccccc;
  padding-bottom: 1.5rem;
  margin: 0 auto 7.5rem;
  letter-spacing: 4px;

  @media (max-width: 905px) {
    margin: 0 auto 3.5rem;
  }
`;

const AboutMain = styled.ul`
  width: 100%;
  margin: 0 auto 7.5rem;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  align-items: center;
  opacity: 0.8;

  > li {
    font-size: 1.8rem;
    font-weight: 500;
    white-space: pre-wrap;
  }

  .strong {
    font-size: 2.2rem;
    font-weight: 700;
  }

  .underline {
    /* background-image: linear-gradient(90deg, #95dac1, #fffd7f); */
    background-image: linear-gradient(
      127deg,
      rgba(146, 124, 249, 1) 0%,
      rgba(205, 219, 255, 0.9066220238095238) 98%
    );
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }

  @media (max-width: 905px) {
    .block {
      display: block;
    }

    > li {
      text-align: center;
      line-height: 3rem;
    }
  }
`;

const InfoWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10rem;
  transition: 600ms ease;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
