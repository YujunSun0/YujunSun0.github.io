import styled from "styled-components"
import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import scrollIntersectionObserver from "utils/scrollIntersectionObserver"
import { motion } from "framer-motion"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import PhoneIcon from "@mui/icons-material/Phone"
import { SvgIcon } from "@mui/material"

const coreStrengths = [
  {
    title: "레거시 마이그레이션",
    description:
      "PHP 기반 레거시 서비스를 Next.js(App Router) + TypeScript로 전면 마이그레이션하여 유지보수성과 확장성을 확보했습니다.",
  },
  {
    title: "운영 자동화",
    description:
      "30+ 파트너사 페이지를 단일 플랫폼으로 통합하고, 사이트 생성 시간을 5시간에서 5분으로 약 96% 단축했습니다.",
  },
  {
    title: "서비스 구조 설계",
    description:
      "SSR/RSC/CSR 렌더링 전략 분리, 공통 레이아웃 및 데이터 패칭 구조 표준화로 서비스 품질을 높였습니다.",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
}

const Intro = () => {
  const target = useRef(null)
  const navigate = useNavigate()

  const [observe, unobserve] = scrollIntersectionObserver(() => {
    navigate("/#0")
  })

  useEffect(() => {
    if (target.current) observe(target.current)
    return () => {
      if (target.current) unobserve(target.current)
    }
  }, [])

  return (
    <Container id="0" ref={target}>
      <InnerWrapper>
        <Heading>안녕하세요, 프론트엔드 개발자 선유준입니다.</Heading>

        <ContactRow>
          <ContactItem
            href="mailto:yujunsun0@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon component={EmailIcon} fontSize="small" />
            <span>yujunsun0@gmail.com</span>
          </ContactItem>
          <ContactItem
            href="https://github.com/YujunSun0"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon component={GitHubIcon} fontSize="small" />
            <span>GitHub</span>
          </ContactItem>
          <ContactItem
            href="https://velog.io/@yujunsun0/posts"
            target="_blank"
            rel="noreferrer"
          >
            <VelogIcon>V</VelogIcon>
            <span>Velog</span>
          </ContactItem>
          <ContactItem as="span">
            <SvgIcon component={PhoneIcon} fontSize="small" />
            <span>010-8579-6705</span>
          </ContactItem>
        </ContactRow>

        <Philosophy>서비스를 이해하고 문제를 해결하는 개발자</Philosophy>

        <Bio>
          1년 7개월간 커머스 및 콘텐츠 플랫폼 서비스를 개발하며 신규 기능
          개발부터 레거시 마이그레이션, 운영 자동화까지 다양한 문제를
          해결해왔습니다. 사용자에게는 더 나은 경험을, 운영 조직에는 더 높은
          생산성을 제공할 수 있는 서비스 구조를 만드는 데 관심이 많습니다.
        </Bio>

        <StrengthGrid>
          {coreStrengths.map((strength, i) => (
            <StrengthCard
              key={strength.title}
              as={motion.div}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h4>{strength.title}</h4>
              <p>{strength.description}</p>
            </StrengthCard>
          ))}
        </StrengthGrid>
      </InnerWrapper>
    </Container>
  )
}

export default Intro

const Container = styled.section`
  width: 100%;
  background-color: var(--color-bg);
  padding: 8rem 2rem;

  @media (max-width: 768px) {
    padding: 7rem 2rem;
  }
`

const InnerWrapper = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  text-align: center;
`

const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
`

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  color: var(--color-text-muted);
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary-light);
  }

  > svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`

const VelogIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-text-muted);
  border: 1.5px solid var(--color-text-muted);
  border-radius: 3px;
`

const Philosophy = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-primary-light);
  margin-top: 0.8rem;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`

const Bio = styled.p`
  font-size: 1.4rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  max-width: 72rem;

  @media (max-width: 576px) {
    font-size: 1.3rem;
  }
`

const StrengthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1.6rem;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`

const StrengthCard = styled.div`
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2.4rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
  }

  > h4 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: 1rem;
  }

  > p {
    font-size: 1.3rem;
    color: var(--color-text-muted);
    line-height: 1.7;
  }
`
