import { styled } from "styled-components"
import type { StackItem } from "@/data/stacks"

interface StackListsProps {
  name: string
  values: StackItem[]
}

const StackLists = ({ name, values }: StackListsProps) => {
  return (
    <Stacks>
      <SubTitle>
        <MainCategory>{name}</MainCategory>
      </SubTitle>
      <StackGrid>
        {values.map((value) => (
          <StackCard key={value.title}>
            {value.image ? (
              <IconWrapper>
                <img src={value.image} alt={value.title} />
              </IconWrapper>
            ) : (
              <IconPlaceholder>{value.title[0]}</IconPlaceholder>
            )}
            <CardInfo>
              <h4>{value.title}</h4>
              <p>{value.content}</p>
            </CardInfo>
          </StackCard>
        ))}
      </StackGrid>
    </Stacks>
  )
}

export default StackLists

const Stacks = styled.section`
  width: 100%;
  margin-bottom: 2rem;
`

const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`

const MainCategory = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-primary-light);
`

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: 1.2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const StackCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 1.6rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
  }
`

const IconWrapper = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const IconPlaceholder = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-gradient);
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-white);
`

const CardInfo = styled.div`
  > h4 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: 0.3rem;
  }

  > p {
    font-size: 1.2rem;
    color: var(--color-text-muted);
    line-height: 1.6;
  }
`
