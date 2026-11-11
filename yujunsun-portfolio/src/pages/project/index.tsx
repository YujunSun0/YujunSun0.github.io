import { useEffect } from "react"
import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import { projectDetails, type ProjectDetail } from "@/data/projects"
import { sideProjectDetails } from "@/data/sideProjectDetails"
import ProjectMeta from "@components/project/ProjectMeta"
import ProjectGallery from "@components/project/ProjectGallery"
import ProjectDiagram from "@components/project/ProjectDiagram"
import ProjectTaskSection from "@components/project/ProjectTaskSection"
import NotFoundPage from "@pages/not-found"

type ProjectKind = "career" | "side"

const KIND_CONFIG: Record<
  ProjectKind,
  {
    list: ProjectDetail[]
    basePath: string
    listPath: string
    listLabel: string
  }
> = {
  career: {
    list: projectDetails,
    basePath: "/projects",
    listPath: "/#career",
    listLabel: "전체 경력"
  },
  side: {
    list: sideProjectDetails,
    basePath: "/side-projects",
    listPath: "/#side",
    listLabel: "개인 프로젝트"
  }
}

const ProjectPage = ({ kind = "career" }: { kind?: ProjectKind }) => {
  const { slug } = useParams()
  const { list, basePath, listPath, listLabel } = KIND_CONFIG[kind]
  const project = list.find((item) => item.slug === slug)

  useEffect(() => {
    if (project) document.title = `${project.name} | 선유준 포트폴리오`
  }, [project])

  if (!project) return <NotFoundPage />

  const index = list.indexOf(project)
  const prev = list[index - 1]
  const next = list[index + 1]

  return (
    <Main>
      <TopBar>
        <Link to={listPath}>← {listLabel}</Link>
        <Counter>
          프로젝트 {index + 1} / {list.length}
        </Counter>
      </TopBar>

      <Eyebrow>
        {project.company} · {project.period}
      </Eyebrow>
      <Title>{project.name}</Title>
      <Lead>{project.lead}</Lead>
      {project.links && project.links.length > 0 && (
        <ExternalLinks>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </ExternalLinks>
      )}

      <ProjectMeta items={project.meta} />
      {project.images && project.images.length > 0 && (
        <ProjectGallery images={project.images} />
      )}
      {project.diagram && <ProjectDiagram diagram={project.diagram} />}

      {project.tasks.map((task, taskIndex) => (
        <ProjectTaskSection key={task.title} task={task} index={taskIndex} />
      ))}

      {project.learnings && (
        <Learnings aria-labelledby="learnings-title">
          <h2 id="learnings-title">배운 점</h2>
          <p>{project.learnings}</p>
        </Learnings>
      )}

      <Pager aria-label="프로젝트 이동">
        {prev ? (
          <PagerLink to={`${basePath}/${prev.slug}`}>
            <span>← 이전 프로젝트</span>
            <strong>{prev.name}</strong>
          </PagerLink>
        ) : (
          <PagerLink to={listPath}>
            <span>← 목록</span>
            <strong>{listLabel}</strong>
          </PagerLink>
        )}
        {next ? (
          <PagerLink to={`${basePath}/${next.slug}`} $alignEnd>
            <span>다음 프로젝트 →</span>
            <strong>{next.name}</strong>
          </PagerLink>
        ) : (
          <PagerLink to={listPath} $alignEnd>
            <span>목록 →</span>
            <strong>{listLabel}</strong>
          </PagerLink>
        )}
      </Pager>
    </Main>
  )
}

export default ProjectPage

const Main = styled.main`
  max-width: var(--max-width-narrow);
  margin: 0 auto;
  padding: 3.2rem 2.4rem 9.6rem;
`

const TopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 2.4rem;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 700;
`

const Counter = styled.span`
  font-weight: 400;
  color: var(--color-text-muted);
`

const Eyebrow = styled.p`
  margin-top: 4.8rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-accent);
`

const Title = styled.h1`
  margin-top: 1.2rem;
  font-size: 4rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.1rem;

  @media (max-width: 720px) {
    font-size: 3.2rem;
  }
`

const Lead = styled.p`
  margin-top: 2rem;
  font-size: 1.8rem;
  line-height: 1.75;
  color: var(--color-text-body);

  @media (max-width: 720px) {
    font-size: 1.6rem;
  }
`

const ExternalLinks = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  > a {
    display: inline-flex;
    align-items: center;
    padding: 0.9rem 1.6rem;
    border: 1px solid var(--color-border-strong);
    border-radius: 999px;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-text);

    &:hover {
      color: var(--color-accent);
      border-color: var(--color-accent);
      text-decoration: none;
    }
  }
`

const Learnings = styled.section`
  margin-top: 6.4rem;
  padding-top: 4rem;
  border-top: 1px solid var(--color-border);

  > h2 {
    font-size: 1.8rem;
    font-weight: 800;
  }

  > p {
    margin-top: 1.4rem;
    font-size: 1.6rem;
    line-height: 1.8;
    color: var(--color-text-body);
  }
`

const Pager = styled.nav`
  margin-top: 6.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`

const PagerLink = styled(Link)<{ $alignEnd?: boolean }>`
  flex: 1 1 24rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.8rem 2rem;
  color: var(--color-text);
  text-align: ${(props) => (props.$alignEnd ? "right" : "left")};
  transition: border-color 0.15s ease;

  &:hover {
    color: var(--color-text);
    text-decoration: none;
    border-color: var(--color-border-strong);
  }

  > span {
    display: block;
    font-size: 1.3rem;
    color: var(--color-text-muted);
  }

  > strong {
    display: block;
    margin-top: 0.4rem;
    font-size: 1.6rem;
  }
`
