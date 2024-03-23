import { styled } from "styled-components";

interface StackListProps {
  image: string;
  title: string;
  content: string;
}

interface StackListsProps {
  name: string;
  values: StackListProps[]; // 대분류
}

const StackLists = ({ name, values }: StackListsProps) => {
  return (
    <Stacks>
      <SubTitle>
        <MainCategory>{name}</MainCategory>
      </SubTitle>
      <StackUl>
        {values.map((value, idx) => {
          return (
            <StackList key={idx}>
              <img src={value.image} alt="stack icon" />
              <div className="list_detail">
                <h4>{value.title}</h4>
                <p>{value.content}</p>
              </div>
            </StackList>
          );
        })}
      </StackUl>
    </Stacks>
  );
};

export default StackLists;

const Stacks = styled.section`
  width: 100%;
  @media (max-width: 576px) {
    width: 94%;
  }
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 905px) {
    justify-content: center;
  }
`;

const MainCategory = styled.span`
  padding: 0.8rem 2.5rem;
  margin-left: 3rem;
  text-align: center;
  font-size: 1.6rem;
  transition: 700ms ease;
  transform: scale(1);
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(50, 50, 60);
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);

  &:hover {
    transform: scale(1.15);
  }

  @media (max-width: 1060px) {
    margin-left: 4rem;
  }

  @media (max-width: 905px) {
    margin: 0;
  }
`;

const StackUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 13rem;
  gap: 2rem;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 1060px) {
    width: 92%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 905px) {
    width: 92%;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const StackList = styled.li`
  cursor: help;
  position: relative;
  width: 9rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(50, 50, 60);
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  transition: 350ms ease;
  overflow: hidden;

  > img {
    width: 5rem;
  }

  // detail div
  .list_detail {
    opacity: 0;
    width: 18rem;
    height: 100%;
    position: absolute;
    left: 15rem;
    color: rgb(255, 255, 255);
    display: flex;
    gap: 0.2rem;
    flex-direction: column;
    justify-content: center;
    transition:
      left 250ms ease,
      opacity 400ms ease;
    overflow: hidden;

    > h4 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    > p {
      font-size: 1.1rem;
      font-weight: 400;
      padding-right: 1.5rem;
      line-height: 1.5rem;
    }

    @media (max-width: 1060px) {
      opacity: 1;
      left: 9rem;
    }

    @media (max-width: 905px) {
      width: auto;
      position: relative;
      left: auto;
      margin-left: 1.5rem;
    }
  }

  &:hover {
    @media (min-width: 1061px) {
      height: 12rem;
      padding-right: 18rem;

      .list_detail {
        opacity: 1;
        left: 9rem;
      }
    }
  }

  @media (max-width: 1060px) {
    width: auto;
    min-width: 0;
    max-width: 400px;
    height: 12rem;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 50px 1fr;
    box-sizing: border-box;
  }

  @media (max-width: 576px) {
    max-width: 556px;
  }
`;
