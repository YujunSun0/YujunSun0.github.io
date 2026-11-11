import styled from "styled-components"
import { Link } from "react-router-dom"
import { companies, type Company } from "@/data/career"
import { getProjectBySlug, type ProjectDetail } from "@/data/projects"
import SectionLabel from "@/components/common/SectionLabel"

const CareerSection = () => (
  <Section id="career" aria-labelledby="career-title">
    <SectionLabel id="career-title">경력</SectionLabel>
    {companies.map((company) => (
      <CompanyBlock key={company.name} company={company} />
    ))}
  </Section>
)

export default CareerSection

const CompanyBlock = ({ company }: { company: Company }) => {
  const projects = (company.projectSlugs ?? [])
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is ProjectDetail => project !== undefined)

  return (
    <CompanyRow>
      <CompanySide>
        <CompanyName>{company.name}</CompanyName>
        <CompanyPeriod>
          {company.period} · {company.position}
        </CompanyPeriod>
        {company.description && (
          <CompanyDesc>{company.description}</CompanyDesc>
        )}
        {company.stack && <CompanyStack>{company.stack}</CompanyStack>}
      </CompanySide>

      <CompanyBody>
        {projects.length > 0 && (
          <ProjectList>
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectLink to={`/projects/${project.slug}`}>
                  <ProjectHead>
                    <ProjectName>{project.name}</ProjectName>
                    <More aria-hidden="true">자세히 →</More>
                  </ProjectHead>
                  <ProjectOutcome>{project.outcome}</ProjectOutcome>
                  <ProjectSummary>{project.summary}</ProjectSummary>
                </ProjectLink>
              </li>
            ))}
          </ProjectList>
        )}

        {company.bullets && company.bullets.length > 0 && (
          <BulletBlock $withProjects={projects.length > 0}>
            {company.bulletsLabel && (
              <BulletLabel>{company.bulletsLabel}</BulletLabel>
            )}
            <Bullets>
              {company.bullets.map((bullet) => (
                <li key={bullet.text}>
                  {bullet.title && <strong>{bullet.title}</strong>}
                  {bullet.title && " — "}
                  {bullet.text}
                </li>
              ))}
            </Bullets>
          </BulletBlock>
        )}
      </CompanyBody>
    </CompanyRow>
  )
}

const Section = styled.section`
  padding-top: 7.2rem;
`

const CompanyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem 4.8rem;
  padding: 5.6rem 0;
  border-bottom: 1px solid var(--color-border);

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const CompanySide = styled.div`
  flex: 0 0 24rem;

  @media (max-width: 720px) {
    flex-basis: 100%;
  }
`

const CompanyName = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
`

const CompanyPeriod = styled.p`
  margin-top: 0.8rem;
  font-size: 1.4rem;
  color: var(--color-text-muted);
`

const CompanyDesc = styled.p`
  margin-top: 1.2rem;
  font-size: 1.4rem;
  line-height: 1.7;
  color: var(--color-text-body);
`

const CompanyStack = styled.p`
  margin-top: 1.2rem;
  font-size: 1.3rem;
  color: var(--color-text-muted);
`

const CompanyBody = styled.div`
  flex: 999 1 56rem;
  min-width: 0;
`

const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const ProjectLink = styled(Link)`
  display: block;
  padding: 2rem;
  margin: 0 -2rem;
  border-radius: 12px;
  color: var(--color-text);
  transition: background-color 0.15s ease;

  &:hover {
    color: var(--color-text);
    text-decoration: none;
    background-color: var(--color-surface);
  }

  @media (max-width: 720px) {
    padding: 1.6rem 1.2rem;
    margin: 0 -1.2rem;
  }
`

const ProjectHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.4rem 1.6rem;
`

const ProjectName = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
`

const More = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-accent);
`

const ProjectOutcome = styled.p`
  margin-top: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
`

const ProjectSummary = styled.p`
  margin-top: 0.6rem;
  font-size: 1.4rem;
  line-height: 1.7;
  color: var(--color-text-body);
`

const BulletBlock = styled.div<{ $withProjects: boolean }>`
  margin-top: ${(props) => (props.$withProjects ? "3.2rem" : "0")};
`

const BulletLabel = styled.p`
  margin-bottom: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-muted);
`

const Bullets = styled.ul`
  padding-left: 2rem;
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.6rem;
  line-height: 1.7;
`
