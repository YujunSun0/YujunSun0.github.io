import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { profile } from "@/data/profile"

const navItems = [
  { label: "경력", hash: "career" },
  { label: "개인 프로젝트", hash: "side" },
  { label: "기술", hash: "skills" },
  { label: "글", hash: "writing" },
]

const SiteHeader = () => {
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  return (
    <Header>
      <Inner>
        <Logo to="/">YujunSun</Logo>
        <Nav aria-label="주요 섹션">
          {navItems.map((item) =>
            isHome ? (
              <NavAnchor key={item.hash} href={`#${item.hash}`}>
                {item.label}
              </NavAnchor>
            ) : (
              <NavLink key={item.hash} to={`/#${item.hash}`}>
                {item.label}
              </NavLink>
            )
          )}
          {profile.resumeUrl && (
            <ResumeLink href={profile.resumeUrl} download>
              이력서 PDF
            </ResumeLink>
          )}
        </Nav>
      </Inner>
    </Header>
  )
}

export default SiteHeader

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
`

const Inner = styled.div`
  max-width: var(--max-width);
  min-height: var(--header-height);
  margin: 0 auto;
  padding: 1.2rem 2.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 2.4rem;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--color-text);

  &:hover {
    color: var(--color-text);
    text-decoration: none;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 2rem;
  font-size: 1.4rem;
  font-weight: 500;
`

const navLinkStyle = `
  color: var(--color-text-body);

  &:hover {
    color: var(--color-text);
  }
`

const NavAnchor = styled.a`
  ${navLinkStyle}
`

const NavLink = styled(Link)`
  ${navLinkStyle}
`

const ResumeLink = styled.a`
  color: #ffffff;
  background-color: var(--color-text);
  padding: 0.6rem 1.2rem;
  border-radius: 6px;

  &:hover {
    color: #ffffff;
    text-decoration: none;
    opacity: 0.85;
  }
`
