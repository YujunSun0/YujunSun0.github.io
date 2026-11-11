import styled from "styled-components"
import { skillGroups } from "@/data/skills"
import SectionLabel from "@/components/common/SectionLabel"

const SkillsSection = () => (
  <Section id="skills" aria-labelledby="skills-title">
    <SectionLabel id="skills-title">기술</SectionLabel>
    <List>
      {skillGroups.map((group) => (
        <div key={group.category}>
          <Term>{group.category}</Term>
          <Desc>{group.items}</Desc>
        </div>
      ))}
    </List>
  </Section>
)

export default SkillsSection

const Section = styled.section`
  padding-top: 9.6rem;
`

const List = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 2.8rem 3.2rem;
`

const Term = styled.dt`
  font-size: 1.4rem;
  font-weight: 700;
`

const Desc = styled.dd`
  margin-top: 0.8rem;
  font-size: 1.5rem;
  line-height: 1.7;
  color: var(--color-text-body);
`
