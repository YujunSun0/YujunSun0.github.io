import styled from "styled-components"
import { profile, profileLinks } from "@/data/profile"

const SiteFooter = () => (
  <Footer>
    <Inner>
      <span>© 2026 {profile.name}</span>
      <Links>
        <a href={`mailto:${profile.email}`}>Email</a>
        {profileLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </Links>
    </Inner>
  </Footer>
)

export default SiteFooter

const Footer = styled.footer`
  border-top: 1px solid var(--color-border);
`

const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 2.4rem;
  justify-content: space-between;
  font-size: 1.4rem;
  color: var(--color-text-muted);
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 2rem;
`
