import { styled } from "styled-components"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import scrollIntersectionObserver from "utils/scrollIntersectionObserver"
import { motion } from "framer-motion"
import { projectsData } from "@/data/projects"
import type { ProjectData } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  )
  const [filter, setFilter] = useState<"company" | "side">("company")

  const target = useRef(null)
  const navigate = useNavigate()

  const [observe, unobserve] = scrollIntersectionObserver(() => {
    navigate("/#2")
  })

  useEffect(() => {
    if (target.current) observe(target.current)
    return () => {
      if (target.current) unobserve(target.current)
    }
  }, [])

  const filteredProjects = projectsData.filter((p) => p.category === filter)

  return (
    <Container id="2" ref={target}>
      <InnerWrapper>
        <SectionTitle
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Projects</h2>
        </SectionTitle>

        <FilterRow>
          <FilterButton
            $isActive={filter === "company"}
            onClick={() => setFilter("company")}
          >
            회사 프로젝트
          </FilterButton>
          <FilterButton
            $isActive={filter === "side"}
            onClick={() => setFilter("side")}
          >
            사이드 프로젝트
          </FilterButton>
        </FilterRow>

        <ProjectGrid>
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </ProjectGrid>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </InnerWrapper>
    </Container>
  )
}

export default Project

const Container = styled.section`
  width: 100%;
  padding: 8rem 2rem;
  background-color: var(--color-bg-alt);
`

const InnerWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`

const SectionTitle = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  > h2 {
    font-size: 2.8rem;
    color: var(--color-white);
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background: var(--color-accent-gradient);
      margin-top: 0.8rem;
      border-radius: 2px;
    }
  }
`

const FilterRow = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`

const FilterButton = styled.button<{ $isActive: boolean }>`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.6rem 1.6rem;
  border-radius: 20px;
  border: 1px solid
    ${(props) => (props.$isActive ? "var(--color-primary)" : "var(--color-border)")};
  background-color: ${(props) =>
    props.$isActive ? "var(--color-primary)" : "transparent"};
  color: ${(props) =>
    props.$isActive ? "var(--color-white)" : "var(--color-text-muted)"};
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-white);
  }
`

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
