import styled from "styled-components"
import type { DiagramNode, ProjectDiagram as Diagram } from "@/data/projects"

const ArrowIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
)

const NodeText = ({ node }: { node: DiagramNode }) => (
  <>
    <strong>{node.title}</strong>
    {node.description && <NodeDesc>{node.description}</NodeDesc>}
  </>
)

const ProjectDiagram = ({ diagram }: { diagram: Diagram }) => (
  <Figure>
    <Frame>
      {diagram.type === "before-after" ? (
        <BeforeAfter>
          <Column>
            <ColumnLabel>{diagram.beforeLabel}</ColumnLabel>
            <Nodes>
              {diagram.before.map((node) => (
                <BeforeNode key={node.title}>
                  <NodeText node={node} />
                </BeforeNode>
              ))}
            </Nodes>
          </Column>
          <Arrow>
            <ArrowIcon />
          </Arrow>
          <Column>
            <ColumnLabel $accent>{diagram.afterLabel}</ColumnLabel>
            <Nodes>
              {diagram.after.map((node) => (
                <AfterNode key={node.title}>
                  <NodeText node={node} />
                </AfterNode>
              ))}
            </Nodes>
          </Column>
        </BeforeAfter>
      ) : (
        <Flow>
          {diagram.steps.map((step, index) => (
            <FlowStep key={step.title}>
              <StepIndex>{String(index + 1).padStart(2, "0")}</StepIndex>
              <NodeText node={step} />
            </FlowStep>
          ))}
        </Flow>
      )}
    </Frame>
    <Caption>{diagram.caption}</Caption>
  </Figure>
)

export default ProjectDiagram

const Figure = styled.figure`
  margin-top: 5.6rem;
`

const Frame = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 3.2rem 2.8rem;

  @media (max-width: 720px) {
    padding: 2.4rem 1.6rem;
  }
`

const BeforeAfter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  align-items: stretch;
`

const Column = styled.div`
  flex: 1 1 30rem;
  min-width: 0;
`

const ColumnLabel = styled.p<{ $accent?: boolean }>`
  margin-bottom: 1.4rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) =>
    props.$accent ? "var(--color-accent)" : "var(--color-text-muted)"};
`

const Nodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const nodeBase = `
  border-radius: 10px;
  padding: 1.2rem 1.4rem;
  font-size: 1.4rem;
  line-height: 1.5;
`

const BeforeNode = styled.div`
  ${nodeBase}
  border: 1px solid var(--color-border);
`

const AfterNode = styled.div`
  ${nodeBase}
  background-color: var(--color-accent-soft);
`

const NodeDesc = styled.span`
  display: block;
  margin-top: 0.2rem;
  color: var(--color-text-body);
`

const Arrow = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);

  @media (max-width: 720px) {
    flex-basis: 100%;
    transform: rotate(90deg);
  }
`

const Flow = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 1.2rem;
`

const FlowStep = styled.li`
  ${nodeBase}
  background-color: var(--color-accent-soft);
  padding: 1.6rem;
`

const StepIndex = styled.span`
  display: block;
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-accent);
`

const Caption = styled.figcaption`
  margin-top: 1.2rem;
  font-size: 1.4rem;
  color: var(--color-text-muted);
`
