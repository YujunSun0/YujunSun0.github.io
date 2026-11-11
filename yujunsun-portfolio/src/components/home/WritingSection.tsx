import styled from "styled-components"
import { blogLinks, blogPosts } from "@/data/blog"
import SectionLabel from "@/components/common/SectionLabel"

const WritingSection = () => (
  <Section id="writing" aria-labelledby="writing-title">
    <SectionLabel id="writing-title">글</SectionLabel>
    <List>
      {blogPosts.map((post) => (
        <li key={post.url}>
          <PostLink href={post.url} target="_blank" rel="noreferrer">
            <span>{post.title}</span>
            <Meta>
              {post.tags?.[0] && `${post.tags[0]} · `}
              {post.date}
            </Meta>
          </PostLink>
        </li>
      ))}
    </List>
    <More>
      <a href={blogLinks.current} target="_blank" rel="noreferrer">
        블로그에서 전체 글 보기 →
      </a>
    </More>
  </Section>
)

export default WritingSection

const Section = styled.section`
  padding-top: 9.6rem;
`

const List = styled.ul`
  list-style: none;
  border-top: 1px solid var(--color-border);

  > li {
    border-bottom: 1px solid var(--color-border);
  }
`

const PostLink = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.4rem 1.6rem;
  padding: 1.8rem 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);

  &:hover {
    color: var(--color-accent);
    text-decoration: none;
  }
`

const Meta = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-text-muted);
`

const More = styled.p`
  margin-top: 2rem;
  font-size: 1.4rem;
`
