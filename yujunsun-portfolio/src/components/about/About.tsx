import styled from "styled-components";
import Info from "./Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
  return (
    <Container>
      <SectionTitle>
        <h3>ABOUT ME</h3>
      </SectionTitle>
      <AboutMain>
        <li>
          <span className="underline">웹의 화면 구성 및 기능을 구현</span>
          하는 것에 흥미가 생겨 <span className="strong">FE 개발자</span>라는
          직종에 관심을 가지게 되었습니다.
        </li>
        <li>
          <span className="strong">좋은 코드</span>를 작성하기 위해 항상
          생각하며, 개발자로서{" "}
          <span className="underline">
            다양한 경험을 하며 <span className="strong">성장</span>
          </span>
          하는 것을 목표로 합니다.
        </li>
      </AboutMain>
      <InfoWrapper>
        <Info icon={AccountCircleIcon} title={"이름"} body={"선유준"} />
        <Info icon={CalendarMonthIcon} title={"생년월일"} body={"2002.01.28"} />
        <Info icon={PlaceIcon} title={"주소지"} body={"인천광역시 부평구"} />
        <Info icon={SmartphoneIcon} title={"연락처"} body={"010-8579-6705"} />
        <Info icon={EmailIcon} title={"이메일"} body={"yujunsun0@gmail.com"} />
        <Info icon={SchoolIcon} title={"교육"} body={"코드스테이츠\nFE 43기"} />
      </InfoWrapper>
    </Container>
  );
};

export default About;

const Container = styled.article`
  width: 100%;
  max-width: 80rem;
  height: 100%;
  padding: 8rem 2rem;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  display: table;
  font-size: 3.6rem;
  font-weight: 600;
  border-bottom: 2px solid #cccccc;
  padding-bottom: 1.5rem;
  margin: 0 auto 7.5rem;
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
    background-image: linear-gradient(90deg, #95dac1, #fffd7f);
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }
`;

const InfoWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10rem;
`;
