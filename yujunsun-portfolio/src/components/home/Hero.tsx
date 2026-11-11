import styled from "styled-components"
import { highlights, profile, profileLinks } from "@/data/profile"

const Hero = () => (
  <Section aria-labelledby="hero-title">
    <Eyebrow>
      {profile.role} · {profile.careerLength}
    </Eyebrow>
    <Title id="hero-title">
      {profile.headline.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </Title>
    <Summary>{profile.summary}</Summary>
    <Links>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      {profileLinks.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          {link.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </a>
      ))}
    </Links>
    <HighlightGrid>
      {highlights.map((item) => (
        <HighlightCard key={item.label}>
          <HighlightValue>{item.value}</HighlightValue>
          <HighlightText>
            {item.label}
            <br />
            {item.detail}
          </HighlightText>
        </HighlightCard>
      ))}
    </HighlightGrid>
  </Section>
)

export default Hero

const Section = styled.section`
  padding: 8.8rem 0 7.2rem;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 720px) {
    padding: 5.6rem 0 4.8rem;
  }
`

const Eyebrow = styled.p`
  margin-bottom: 1.6rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent);
`

const Title = styled.h1`
  font-size: 5.2rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.15rem;

  > span {
    display: block;
  }

  @media (max-width: 720px) {
    font-size: 3.6rem;
    letter-spacing: -0.1rem;
  }
`

const Summary = styled.p`
  margin-top: 2.8rem;
  max-width: 72rem;
  font-size: 1.8rem;
  line-height: 1.75;
  color: var(--color-text-body);

  @media (max-width: 720px) {
    font-size: 1.6rem;
  }
`

const Links = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2.4rem;
  font-size: 1.5rem;
  font-weight: 500;
`

const HighlightGrid = styled.div`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 1.6rem;
`

const HighlightCard = styled.div`
  background-color: var(--color-surface);
  border-radius: 12px;
  padding: 2rem 2.2rem;
`

const HighlightValue = styled.p`
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.05rem;
`

const HighlightText = styled.p`
  margin-top: 0.6rem;
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--color-text-body);
`
