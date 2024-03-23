import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SvgIcon } from "@mui/material";

const Header = () => {
  const [over, setOver] = useState<boolean>(window.innerWidth <= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // 커스텀 스크롤 함수 (header의 높이가 70이여서 이를 제외한 만큼 스크롤)
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const width = window.innerWidth;
    const yOffset = width > 905 ? -70 : width > 576 ? -56 : -49;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    // 스크롤 감지
    const handleShowButton = () => {
      if (window.innerWidth <= 768 || window.scrollY > 200) {
        setOver(true);
      } else {
        setOver(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setOver(true);
      } else {
        setOver(false);
        setIsMobile(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container
      data-header
      $over={over}
      $isMobile={isMobile}
      $menuOpen={menuOpen}
    >
      <HeaderContainer $over={over} $isMobile={isMobile}>
        <nav className="left">
          <HashLink
            to="#"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            YujunSun&apos;s portfolio
          </HashLink>
        </nav>
        <nav className="right">
          {isMobile ? (
            <SvgIcon component={MenuIcon} onClick={handleMenuToggle} />
          ) : (
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
          )}
        </nav>
      </HeaderContainer>
      <MobileMenu>
        <ul className="mobile_nav_ul">
          <li className="mobile_nav_li">
            <NavStyle to="/#1" $over={over} scroll={scrollWithOffset}>
              ABOUT
            </NavStyle>
          </li>
          <li className="mobile_nav_li">
            <NavStyle to="/#2" $over={over} scroll={scrollWithOffset}>
              STACK
            </NavStyle>
          </li>
          <li className="mobile_nav_li">
            <NavStyle to="/#3" $over={over} scroll={scrollWithOffset}>
              PROJECT
            </NavStyle>
          </li>
          <li className="mobile_nav_li">
            <NavStyle to="/#4" $over={over} scroll={scrollWithOffset}>
              CONTACT
            </NavStyle>
          </li>
        </ul>
      </MobileMenu>
    </Container>
  );
};

export default Header;

const Container = styled.header<{
  $over: boolean;
  $isMobile: boolean;
  $menuOpen: boolean;
}>`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
  box-shadow: ${(props) =>
    props.$over && props.$isMobile ? "0 1px .3rem hsla(0,0%,80%,.8)" : ""};

  .mobile_nav_ul {
    overflow: hidden;
    background: white;
    font-size: 1.6rem;
    max-height: ${(props) => (props.$menuOpen ? "19.2rem" : "0")};
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: max-height 0.2s ease;

    > li {
      padding: 1rem 0;
      transform: scale(1);
      transition: 700ms ease;

      &:hover {
        transform: scale(1.12);
      }
    }
  }
`;

const HeaderContainer = styled.div<{ $over: boolean; $isMobile: boolean }>`
  width: 100%;
  height: 7rem;
  position: relative;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.$isMobile || window.scrollY > 200 ? "white" : "transparent"};
  backdrop-filter: blur(3px);
  box-shadow: ${(props) =>
    window.scrollY > 200 && !props.$isMobile
      ? "0 1px .3rem hsla(0,0%,80%,.8)"
      : ""};
  color: ${(props) =>
    props.$isMobile || window.scrollY > 200 ? "#000" : "hsla(0,0%,100%,.7)"};
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

  .right {
    > svg {
      cursor: pointer;
      width: 3rem;
      height: 3rem;
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

const MobileMenu = styled.div``;
