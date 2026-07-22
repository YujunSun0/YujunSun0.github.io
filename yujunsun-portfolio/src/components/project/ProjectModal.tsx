import styled, { keyframes } from "styled-components"
import { useEffect } from "react"
import type { ProjectData } from "@/data/projects"
import { hasProjectImages } from "@/data/projects"
import CloseIcon from "@mui/icons-material/Close"
import LaunchIcon from "@mui/icons-material/Launch"
import GitHubIcon from "@mui/icons-material/GitHub"
import { SvgIcon } from "@mui/material"
import ProjectImageGallery from "./ProjectImageGallery"

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
      <Panel onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <StickyTop>
          <TopLeft>
            <CloseButton onClick={onClose} aria-label="닫기">
              <SvgIcon component={CloseIcon} />
            </CloseButton>
            {(project.company || project.period) && (
              <MetaRow>
                {project.company && (
                  <CompanyBadge>{project.company}</CompanyBadge>
                )}
                <Period>{project.period}</Period>
              </MetaRow>
            )}
          </TopLeft>

          {(project.siteUrl || project.githubUrl) && (
            <LinkRow>
              {project.siteUrl && (
                <LinkButton
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgIcon component={LaunchIcon} fontSize="small" />
                  사이트
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
        </StickyTop>

        <ScrollBody>
          {hasProjectImages(project) && (
            <ProjectImageGallery images={project.images} />
          )}

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
        </ScrollBody>
      </Panel>
    </Overlay>
  )
}

export default ProjectModal

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 0.2s ease;
`

const Panel = styled.div`
  width: min(56rem, 100vw);
  height: 100%;
  background-color: var(--color-bg-card);
  border-left: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.28s ease;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.35);

  @media (max-width: 576px) {
    width: 100vw;
  }
`

const StickyTop = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 1.4rem 2rem;
  background-color: rgba(28, 32, 40, 0.96);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
`

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
  flex: 1;
`

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  min-width: 0;
`

const CompanyBadge = styled.span`
  font-size: 1.1rem;
  color: var(--color-primary-light);
  background-color: rgba(124, 92, 252, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-weight: 600;
  white-space: nowrap;
`

const Period = styled.span`
  font-size: 1.1rem;
  color: var(--color-text-dim);
  white-space: nowrap;
`

const CloseButton = styled.button`
  flex-shrink: 0;
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
    width: 2.2rem;
    height: 2.2rem;
  }
`

const LinkRow = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-white);
  background: var(--color-primary);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: opacity 0.2s ease;
  white-space: nowrap;

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
    width: 1.5rem;
    height: 1.5rem;
  }
`

const ScrollBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem 2.4rem 3.2rem;

  &::-webkit-scrollbar {
    display: block;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-border);
    border-radius: 4px;
  }
`

const ProjectTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 1rem;
  line-height: 1.3;
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
  margin-bottom: 1.6rem;
`

const Tag = styled.span`
  font-size: 1.2rem;
  color: var(--color-text-muted);
  background-color: var(--color-bg-alt);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
`
