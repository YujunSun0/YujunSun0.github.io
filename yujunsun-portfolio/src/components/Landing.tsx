import TextTypingAni from "src/utils/TextTypingAni";
import { styled } from "styled-components";

const Landing = () => {
  return (
    <Container>
      <TextTypingAni text={"FrontEnd Developer 선유준입니다."} />
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("assets/desk-593327_1280.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @keyframes blink {
    0%,
    100% {
      border-color: transparent;
    }

    50% {
      border-color: #fff;
    }
  }

  > h3 {
    font-family: var(--font-JalnanGothic);
    font-size: 4vw;
    color: white;
    border-right: 0.1em solid #fff;
    letter-spacing: 0.3rem;
    padding-top: 0.2em;

    -webkit-animation: blink 1s step-end infinite;
    animation: blink 1s step-end infinite;
  }
`;
