import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

const Header = () => {
  const [over, setOver] = useState<boolean>(false);

  // 커스텀 스크롤 함수 (header의 높이가 70이여서 이를 제외한 만큼 스크롤)
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  useEffect(() => {
    // 스크롤 감지
    const handleShowButton = () => {
      if (window.scrollY > 260) {
        setOver(true);
      } else {
        setOver(false);
      }
    };
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <Container data-header>
      <HeaderContainer $over={over}>
        <nav className="left">
          <HashLink to="#">YujunSun&apos;s portfolio</HashLink>
        </nav>
        <nav className="right">
          <ul className="nav_ul">
            <li className="nav_li">
              <NavStyle to="/#1" $over={over} scroll={scrollWithOffset}>
                ABOUT
              </NavStyle>
            </li>
            <li className="nav_li">
              <NavStyle to="/#2" $over={over} scroll={scrollWithOffset}>
                STACK
              </NavStyle>
            </li>
            <li className="nav_li">
              <NavStyle to="/#3" $over={over} scroll={scrollWithOffset}>
                PROJECT
              </NavStyle>
            </li>
            <li className="nav_li">
              <NavStyle to="/#4" $over={over} scroll={scrollWithOffset}>
                CONTACT
              </NavStyle>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 7rem;
  z-index: 500;
`;

const HeaderContainer = styled.div<{ $over: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.$over ? "white" : "transparent")};
  backdrop-filter: blur(3px);
  box-shadow: ${(props) =>
    props.$over ? "0 1px .3rem hsla(0,0%,80%,.8)" : ""};
  color: ${(props) => (props.$over ? "eee" : "hsla(0,0%,100%,.7)")};
  font-weight: 700;

  .left {
    cursor: pointer;
    padding-left: 1rem;
    font-size: 2.2rem;
    transform: scale(1);
    transition: 400ms ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .nav_ul {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem; // 가상 선택자에 margin-top을 주어 영역이 올라갔기 때문에 조절해주는 스타일
  }

  .nav_li {
    cursor: pointer;
    padding: 0.6rem 1rem;
    transform: scale(1);
    transition: 700ms ease;
    margin-bottom: 0.5rem;

    &:hover {
      transform: scale(1.12);
    }

    &::after {
      display: block;
      content: "";
      border-bottom: ${(props) =>
        props.$over ? "2px solid black" : "2px solid white"};
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    .focus::after {
      transform: scaleX(1);
    }
  }
`;

const NavStyle = styled(HashLink)<{ $over: boolean }>`
  padding-bottom: 0.5rem;

  &::after {
    margin-top: 0.5rem;
    display: block;
    content: "";
    border-bottom: ${(props) =>
      props.$over ? "2px solid black" : "2px solid white"};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
