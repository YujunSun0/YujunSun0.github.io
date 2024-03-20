import About from "src/components/about/About";
import { styled } from "styled-components";
import Landing from "src/components/landing/Landing";
import Header from "src/components/common/Header";

const Portfolio = () => {
  return (
    <Container>
      <Header />
      <Landing />
      <About />
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
`;
