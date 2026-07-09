import styled from "styled-components"
import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import scrollIntersectionObserver from "utils/scrollIntersectionObserver"
import { motion } from "framer-motion"
import { blogPosts, blogLinks } from "@/data/blog"
import LaunchIcon from "@mui/icons-material/Launch"
import { SvgIcon } from "@mui/material"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
}

const Blog = () => {
  const target = useRef(null)
  const navigate = useNavigate()

  const [observe, unobserve] = scrollIntersectionObserver(() => {
    navigate("/#4")
  })

  useEffect(() => {
    if (target.current) observe(target.current)
    return () => {
      if (target.current) unobserve(target.current)
    }
  }, [])

  return (
    <Container id="4" ref={target}>
      <InnerWrapper>
        <SectionTitle
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Blog</h2>
        </SectionTitle>

        <BlogGrid>
          {blogPosts.map((post, i) => (
            <BlogCard
              key={post.title}
              as={motion.a}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeInUp}
            >
              <CardContent>
                <PostDate>{post.date}</PostDate>
                <PostTitle>{post.title}</PostTitle>
                {post.tags && (
                  <TagRow>
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagRow>
                )}
              </CardContent>
              <LinkIcon>
                <SvgIcon component={LaunchIcon} fontSize="small" />
              </LinkIcon>
            </BlogCard>
          ))}
        </BlogGrid>

        <BlogLinkRow>
          <BlogLink
            href={blogLinks.current}
            target="_blank"
            rel="noreferrer"
          >
            블로그 전체 보기 →
          </BlogLink>
        </BlogLinkRow>
      </InnerWrapper>
    </Container>
  )
}

export default Blog

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

const BlogGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: left;
`

const BlogCard = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem 2.4rem;
  transition:
    border-color 0.3s ease,
    transform 0.2s ease;
  text-decoration: none;

  &:hover {
    border-color: var(--color-primary);
    transform: translateX(4px);
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

const PostDate = styled.span`
  font-size: 1.1rem;
  color: var(--color-text-dim);
`

const PostTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-white);
`

const TagRow = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.4rem;
`

const Tag = styled.span`
  font-size: 1rem;
  color: var(--color-text-dim);
  background-color: var(--color-bg-alt);
  padding: 0.2rem 0.6rem;
  border-radius: 3px;
  border: 1px solid var(--color-border);
`

const LinkIcon = styled.div`
  color: var(--color-text-dim);
  flex-shrink: 0;

  > svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`

const BlogLinkRow = styled.div`
  margin-top: 2.4rem;
  text-align: center;
`

const BlogLink = styled.a`
  font-size: 1.4rem;
  color: var(--color-primary-light);
  font-weight: 600;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`
