import styled from "styled-components";

const Header = () => {
  return <Container>헤더</Container>;
};

export default Header;

const Container = styled.header`
  width: 100vw;
  min-height: 4.4rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 500;
  /* background: rgba(0, 0, 0, 0.6); */
  background: transparent;
  backdrop-filter: blur(3px);
  font-size: 2rem;
  color: #fff;
`;
