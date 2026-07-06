import { styled } from "styled-components"
import Header from "@components/common/Header"
import Progress from "@components/common/Progress"
import Intro from "@components/intro/Intro"
import Experience from "@components/experience/Experience"
import Project from "@components/project/Project"
import Stack from "@components/stack/Stack"
import Blog from "@components/blog/Blog"
import Contact from "@components/contact/Contact"
import { useEffect, useState } from "react"

const Portfolio = () => {
  const [showButton, setShowButton] = useState<boolean>(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleShowButton = () => {
      setShowButton(window.scrollY > 340)
    }
    window.addEventListener("scroll", handleShowButton)
    return () => window.removeEventListener("scroll", handleShowButton)
  }, [])

  return (
    <Container>
      <Header />
      <Progress />
      <Intro />
      <Experience />
      <Project />
      <Stack />
      <Blog />
      <Contact />
      {showButton && (
        <ScrollTopButton onClick={scrollToTop} type="button">
          ↑
        </ScrollTopButton>
      )}
    </Container>
  )
}

export default Portfolio

const Container = styled.main`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  height: 100%;
  animation: fade-in 0.6s ease;
`

const ScrollTopButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 100;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(124, 92, 252, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(124, 92, 252, 0.4);
  }
`
