import styled from "styled-components"
import { motion } from "framer-motion"
import type { ProjectData } from "@/data/projects"

interface ProjectCardProps {
  project: ProjectData
  index: number
  onClick: () => void
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <Card
      as={motion.div}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={fadeInUp}
      onClick={onClick}
    >
      <CardHeader>
        {project.company && <CompanyBadge>{project.company}</CompanyBadge>}
        <Period>{project.period}</Period>
      </CardHeader>
      <ProjectName>{project.name}</ProjectName>
      <Description>{project.description}</Description>
      <TechTags>
        {project.techStack.slice(0, 4).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
        {project.techStack.length > 4 && (
          <Tag className="more">+{project.techStack.length - 4}</Tag>
        )}
      </TechTags>
    </Card>
  )
}

export default ProjectCard

const Card = styled.div`
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2.4rem;
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
  gap: 0.8rem;
`

const CompanyBadge = styled.span`
  font-size: 1.1rem;
  color: var(--color-primary-light);
  background-color: rgba(124, 92, 252, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-weight: 600;
`

const Period = styled.span`
  font-size: 1.1rem;
  color: var(--color-text-dim);
`

const ProjectName = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.8rem;
`

const Description = styled.p`
  font-size: 1.3rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1.6rem;
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const Tag = styled.span`
  font-size: 1.1rem;
  color: var(--color-text-muted);
  background-color: var(--color-bg-alt);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);

  &.more {
    color: var(--color-text-dim);
  }
`
