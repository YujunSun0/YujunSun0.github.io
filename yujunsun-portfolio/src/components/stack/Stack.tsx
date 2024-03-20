import { styled } from "styled-components";

const Stack = () => {
  return (
    <Container>
      <StackWrapper>
        <SectionTitle>
          <h3>Tech Stack</h3>
        </SectionTitle>
        <p className="title_detail">
          아이콘에 마우스를 올리면 자세한 설명이 나옵니다.
        </p>
        <Stacks>
          <SubTitle>
            <MainCategory># FrontEnd-Skill</MainCategory>
          </SubTitle>
          <StackLists>
            <StackList>
              <img src="assets/html5.png" alt="html5 icon" />
              <div className="list_detail">
                <h4>HTML5</h4>
                <p>
                  웹 접근성 & 웹 표준을 준수하며 시맨틱 태그를 사용하여 마크업
                  합니다.
                </p>
              </div>
            </StackList>
            <StackList>
              <img src="assets/css3.png" alt="css3 icon" />
              <div className="list_detail">
                <h4>CSS3</h4>
                <p>
                  flexbox, grid를 사용한 레이아웃을 만들고 미디어 쿼리를 통해
                  반응형 웹을 제작합니다.
                </p>
              </div>
            </StackList>
            <StackList>
              <img src="assets/js.png" alt="javascript icon" />
              <div className="list_detail">
                <h4>Javascript</h4>
                <p>
                  ES6+ 문법을 사용하며, 함수형 프로그래밍의 개념을 이해하고
                  활용합니다.
                </p>
              </div>
            </StackList>
            <StackList>
              <img src="assets/ts.png" alt="typescript icon" />
              <div className="list_detail">
                <h4>Typescript</h4>
                <p>
                  원시/객체 타입을 이해하고, 인터페이스와 제네릭을 이용하여
                  재사용 가능한 컴포넌트를 만듭니다.
                </p>
              </div>
            </StackList>
            <StackList>
              <img src="assets/reactjs.png" alt="react icon" />
              <div className="list_detail">
                <h4>React</h4>
                <p>내일 작성 예정</p>
              </div>
            </StackList>
            <StackList>
              <img
                src="assets/StyledComponents.svg"
                alt="styled-components icon"
              />
              <div className="list_detail">
                <h4>styled-components</h4>
                <p>내일 작성 예정</p>
              </div>
            </StackList>
            <StackList>
              <img src="assets/Redux.svg" alt="redux icon" />
            </StackList>
          </StackLists>
        </Stacks>
      </StackWrapper>
    </Container>
  );
};

export default Stack;

const Container = styled.article`
  width: 100%;
  padding: 8rem 2rem;
  margin: 0 auto;
  background-color: rgb(21, 24, 27);
`;

const StackWrapper = styled.div`
  max-width: 95rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title_detail {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgb(255, 255, 255);
  }
`;

const SectionTitle = styled.div`
  display: table;
  font-size: 3.8rem;
  font-weight: 500;
  border-bottom: 2px solid #cccccc;
  color: rgb(156, 107, 212);
  padding-bottom: 1.5rem;
  margin: 0 auto 4.5rem;
  letter-spacing: 4px;
`;

const Stacks = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 3rem;
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
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);

  &:hover {
    transform: scale(1.15);
  }
`;

const StackLists = styled.ul`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 13rem;
  gap: 3.5rem;
  padding: 0 3rem;
`;

const StackList = styled.li`
  position: relative;
  width: 9rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(50, 50, 60);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  transition: 350ms ease;
  overflow: hidden;

  > img {
    width: 5rem;
  }

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
      font-size: 1.6rem;
      font-weight: 700;
    }

    > p {
      font-size: 1.2rem;
      font-weight: 400;
      padding-right: 1.5rem;
      line-height: 1.5rem;
    }
  }

  &:hover {
    height: 12rem;
    padding-right: 18rem;

    .list_detail {
      opacity: 1;
      left: 9rem;
    }
  }
`;
