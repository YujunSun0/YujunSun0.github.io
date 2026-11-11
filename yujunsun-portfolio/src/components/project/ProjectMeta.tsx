import styled from "styled-components"
import type { ProjectMetaItem } from "@/data/projects"

const ProjectMeta = ({ items }: { items: ProjectMetaItem[] }) => (
  <List>
    {items.map((item) => (
      <div key={item.label}>
        <Term>{item.label}</Term>
        <Desc>
          {item.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </Desc>
      </div>
    ))}
  </List>
)

export default ProjectMeta

const List = styled.dl`
  margin-top: 4rem;
  background-color: var(--color-surface);
  border-radius: 14px;
  padding: 2.4rem 2.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 2rem 2.8rem;
`

const Term = styled.dt`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-text-muted);
`

const Desc = styled.dd`
  margin-top: 0.6rem;
  font-size: 1.5rem;
  line-height: 1.6;

  > span {
    display: block;
  }
`
