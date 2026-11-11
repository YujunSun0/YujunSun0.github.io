import styled from "styled-components"
import Hero from "@components/home/Hero"
import CareerSection from "@components/home/CareerSection"
import SideProjectsSection from "@components/home/SideProjectsSection"
import SkillsSection from "@components/home/SkillsSection"
import WritingSection from "@components/home/WritingSection"

const HomePage = () => (
  <Main>
    <Hero />
    <CareerSection />
    <SideProjectsSection />
    <SkillsSection />
    <WritingSection />
  </Main>
)

export default HomePage

const Main = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2.4rem 9.6rem;
`
