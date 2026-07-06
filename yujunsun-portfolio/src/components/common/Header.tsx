import styled from "styled-components"
import { HashLink } from "react-router-hash-link"
import { useEffect, useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { SvgIcon } from "@mui/material"

const navItems = [
  { label: "INTRO", hash: "#0" },
  { label: "EXPERIENCE", hash: "#1" },
  { label: "PROJECTS", hash: "#2" },
  { label: "STACK", hash: "#3" },
  { label: "BLOG", hash: "#4" },
  { label: "CONTACT", hash: "#5" },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev)
  }

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const width = window.innerWidth
    const yOffset = width > 905 ? -60 : width > 576 ? -50 : -45
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Container $isScrolled={isScrolled} $menuOpen={menuOpen}>
      <HeaderInner>
        <Logo>
          <HashLink to="#" onClick={() => setMenuOpen(false)}>
            YujunSun
          </HashLink>
        </Logo>

        {isMobile ? (
          <MobileToggle onClick={handleMenuToggle}>
            <SvgIcon component={menuOpen ? CloseIcon : MenuIcon} />
          </MobileToggle>
        ) : (
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.hash}>
                <NavLink
                  to={`/${item.hash}`}
                  scroll={scrollWithOffset}
                  $isScrolled={isScrolled}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        )}
      </HeaderInner>

      {isMobile && (
        <MobileMenu $menuOpen={menuOpen}>
          {navItems.map((item) => (
            <MobileNavItem key={item.hash}>
              <NavLink
                to={`/${item.hash}`}
                scroll={scrollWithOffset}
                $isScrolled={true}
              >
                {item.label}
              </NavLink>
            </MobileNavItem>
          ))}
        </MobileMenu>
      )}
    </Container>
  )
}

export default Header

const Container = styled.header<{ $isScrolled: boolean; $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
  background-color: ${(props) =>
    props.$isScrolled || props.$menuOpen
      ? "rgba(15, 17, 20, 0.95)"
      : "transparent"};
  backdrop-filter: ${(props) =>
    props.$isScrolled ? "blur(8px)" : "none"};
  border-bottom: ${(props) =>
    props.$isScrolled ? "1px solid var(--color-border)" : "none"};
  transition: all 0.3s ease;
`

const HeaderInner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  height: 6rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  > a {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-white);
    letter-spacing: -0.5px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`

const MobileToggle = styled.button`
  background: transparent;
  color: var(--color-text);
  padding: 0.4rem;

  > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const NavItem = styled.li`
  list-style: none;
`

const NavLink = styled(HashLink)<{ $isScrolled: boolean }>`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-muted);
  padding: 0.6rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;

  &:hover {
    color: var(--color-white);
    background-color: rgba(255, 255, 255, 0.06);
  }
`

const MobileMenu = styled.div<{ $menuOpen: boolean }>`
  max-height: ${(props) => (props.$menuOpen ? "40rem" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  border-top: ${(props) =>
    props.$menuOpen ? "1px solid var(--color-border)" : "none"};
`

const MobileNavItem = styled.div`
  padding: 0.4rem 2rem;

  > a {
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-text-muted);
    padding: 1.2rem 0;
    border-bottom: 1px solid var(--color-border);
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-white);
    }
  }

  &:last-child > a {
    border-bottom: none;
  }
`
