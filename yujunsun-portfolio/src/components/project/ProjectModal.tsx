import styled from "styled-components"
import { useEffect } from "react"
import type { ProjectData } from "@/data/projects"
import CloseIcon from "@mui/icons-material/Close"
import LaunchIcon from "@mui/icons-material/Launch"
import GitHubIcon from "@mui/icons-material/GitHub"
import { SvgIcon } from "@mui/material"

interface ProjectModalProps {
  project: ProjectData
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            {project.company && (
              <CompanyBadge>{project.company}</CompanyBadge>
            )}
            <Period>{project.period}</Period>
          </div>
          <CloseButton onClick={onClose}>
            <SvgIcon component={CloseIcon} />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>

          <SectionLabel>주요 성과 및 기여</SectionLabel>
          <DetailList>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </DetailList>

          <SectionLabel>기술 스택</SectionLabel>
          <TechTags>
            {project.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </TechTags>

          {(project.siteUrl || project.githubUrl) && (
            <LinkRow>
              {project.siteUrl && (
                <LinkButton
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgIcon component={LaunchIcon} fontSize="small" />
                  사이트 보기
                </LinkButton>
              )}
              {project.githubUrl && (
                <LinkButton
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="github"
                >
                  <SvgIcon component={GitHubIcon} fontSize="small" />
                  GitHub
                </LinkButton>
              )}
            </LinkRow>
          )}
        </ModalBody>
      </ModalContainer>
    </Overlay>
  )
}

export default ProjectModal

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const ModalContainer = styled.div`
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  max-width: 64rem;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-border);
    border-radius: 4px;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.4rem 3rem 0;

  > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }
`

const CompanyBadge = styled.span`
  font-size: 1.2rem;
  color: var(--color-primary-light);
  background-color: rgba(124, 92, 252, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-weight: 600;
`

const Period = styled.span`
  font-size: 1.2rem;
  color: var(--color-text-dim);
`

const CloseButton = styled.button`
  background: transparent;
  color: var(--color-text-muted);
  padding: 0.4rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-bg-alt);
    color: var(--color-white);
  }

  > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

const ModalBody = styled.div`
  padding: 2rem 3rem 3rem;
`

const ProjectTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
  font-size: 1.4rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2.4rem;
`

const SectionLabel = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.2rem;
  margin-top: 0.4rem;
`

const DetailList = styled.ul`
  margin-bottom: 2.4rem;

  > li {
    font-size: 1.3rem;
    color: var(--color-text-muted);
    line-height: 1.8;
    padding-left: 1.6rem;
    position: relative;
    margin-bottom: 0.8rem;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--color-primary-light);
    }
  }
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.4rem;
`

const Tag = styled.span`
  font-size: 1.2rem;
  color: var(--color-text-muted);
  background-color: var(--color-bg-alt);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
`

const LinkRow = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  padding-top: 0.8rem;
  border-top: 1px solid var(--color-border);
`

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-white);
  background: var(--color-primary);
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &.github {
    background: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text);

    &:hover {
      border-color: var(--color-text-muted);
    }
  }

  > svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`
