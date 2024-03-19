import About from "src/components/About";
import { styled } from "styled-components";
import Landing from "src/components/Landing";

const Portfolio = () => {
  return (
    <Container>
      <Landing />
      <About />
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  height: 100%;
`;
