import TextTypingAni from "utils/TextTypingAni";
import { styled } from "styled-components";
import myImage from "assets/desk-593327_1280.jpg";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "hooks/useIntersectionObserver";

const Landing = () => {
  const target = useRef(null);
  const navigate = useNavigate();

  const [observe, unobserve] = useIntersectionObserver(() => {
    navigate("/#0");
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
    <Container id="0" ref={target}>
      <TextTypingAni text={"FrontEnd Developer 선유준입니다."} />
    </Container>
  );
};

export default Landing;

const Container = styled.section`
  @keyframes blink {
    0%,
    100% {
      border-color: transparent;
    }

    50% {
      border-color: #fff;
    }
  }
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${myImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  > h3 {
    font-family: var(--font-JalnanGothic);
    font-size: 4vw;
    color: white;
    border-right: 0.1em solid #fff;
    letter-spacing: 0.3rem;
    padding-top: 0.2em;
    min-height: 4vw;

    -webkit-animation: blink 1s step-end infinite;
    animation: blink 1s step-end infinite;
  }
`;
