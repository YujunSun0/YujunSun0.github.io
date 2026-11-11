import styled from "styled-components"
import { Link } from "react-router-dom"

const NotFoundPage = () => (
  <Main>
    <h1>페이지를 찾을 수 없습니다</h1>
    <p>주소가 바뀌었거나 삭제된 페이지입니다.</p>
    <Link to="/">메인으로 돌아가기 →</Link>
  </Main>
)

export default NotFoundPage

const Main = styled.main`
  max-width: var(--max-width-narrow);
  margin: 0 auto;
  padding: 12rem 2.4rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: 800;
  }

  > p {
    margin: 1.6rem 0 2.4rem;
    font-size: 1.6rem;
    color: var(--color-text-body);
  }
`
