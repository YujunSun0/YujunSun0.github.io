import styled from "styled-components"
import type { ProjectTask } from "@/data/projects"

const ProjectTaskSection = ({ task, index }: { task: ProjectTask; index: number }) => {
  const headingId = `task-${index}`

  return (
    <Section aria-labelledby={headingId}>
      <Title id={headingId}>{task.title}</Title>
      <Steps>
        {task.steps.map((step, stepIndex) => (
          <Step key={`${step.label}-${stepIndex}`}>
            <StepLabel $result={step.label === "결과"}>{step.label}</StepLabel>
            <StepText $result={step.label === "결과"}>{step.text}</StepText>
          </Step>
        ))}
      </Steps>
    </Section>
  )
}

export default ProjectTaskSection

const Section = styled.section`
  margin-top: 6.4rem;
`

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.05rem;

  @media (max-width: 720px) {
    font-size: 2rem;
  }
`

const Steps = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Step = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 2.4rem;
`

const StepLabel = styled.p<{ $result: boolean }>`
  flex: 0 0 7.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.8;
  color: ${(props) => (props.$result ? "var(--color-accent)" : "var(--color-text-muted)")};

  @media (max-width: 720px) {
    flex-basis: 100%;
  }
`

const StepText = styled.p<{ $result: boolean }>`
  flex: 999 1 40rem;
  min-width: 0;
  font-size: 1.6rem;
  line-height: 1.8;
  font-weight: ${(props) => (props.$result ? 500 : 400)};
`
