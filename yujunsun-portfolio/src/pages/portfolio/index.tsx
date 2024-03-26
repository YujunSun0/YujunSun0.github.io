import About from "components/about/About";
import { styled } from "styled-components";
import Landing from "components/landing/Landing";
import Header from "components/common/Header";
import Stack from "components/stack/Stack";
import { useEffect, useState } from "react";
import Project from "components/project/Project";
import Contact from "components/contact/Contact";

const Portfolio = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Top 버튼을 위한 스크롤 감지
    const handleShowButton = () => {
      if (window.scrollY > 340) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <Container>
      <Header />
      <Landing />
      <About />
      <Stack />
      <Project />
      <Contact />
      {showButton && (
        <div className="scroll__container">
          <button id="top" onClick={scrollToTop} type="button">
            Top
          </button>
        </div>
      )}
    </Container>
  );
};

export default Portfolio;

const Container = styled.main`
  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  height: 100%;
  animation: fade-in 1s;

  .scroll__container {
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 1;
  }
  #top {
    font-weight: bold;
    font-size: 15px;
    padding: 15px 10px;
    background-color: #000;
    color: #fff;
    border: 1px solid rgb(210, 204, 193);
    border-radius: 50%;
    outline: none;
    transform: scale(1);
    transition: 700ms ease;
    cursor: pointer;
  }
  #top:hover {
    transform: scale(1.05);
    color: violet;
  }
`;
