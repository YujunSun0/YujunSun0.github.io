import { styled } from "styled-components"
import StackLists from "./StackLists"
import { frontendData, toolsData, devOpsData } from "@/data/stacks"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import useIntersectionObserver from "utils/scrollIntersectionObserver"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const Stack = () => {
  const target = useRef(null)
  const navigate = useNavigate()

  const [observe, unobserve] = useIntersectionObserver(() => {
    navigate("/#3")
  })

  useEffect(() => {
    if (target.current) observe(target.current)
    return () => {
      if (target.current) unobserve(target.current)
    }
  }, [])

  return (
    <Container id="3" ref={target}>
      <InnerWrapper>
        <SectionTitle
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Tech Stack</h2>
        </SectionTitle>
        <StackLists name="# FrontEnd" values={frontendData} />
        <StackLists name="# Tools" values={toolsData} />
        <StackLists name="# DevOps" values={devOpsData} />
      </InnerWrapper>
    </Container>
  )
}

export default Stack

const Container = styled.section`
  width: 100%;
  padding: 8rem 2rem;
  background-color: var(--color-bg);
`

const InnerWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const SectionTitle = styled.div`
  margin-bottom: 4rem;
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
