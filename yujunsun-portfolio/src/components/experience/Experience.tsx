import styled from "styled-components"
import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import scrollIntersectionObserver from "utils/scrollIntersectionObserver"
import { motion } from "framer-motion"
import { experienceData, techStackMap } from "@/data/experience"
import StarOutlineIcon from "@mui/icons-material/StarOutline"
import { SvgIcon } from "@mui/material"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const getTechLabel = (key: string) => techStackMap[key]?.label ?? key

const getTechInitial = (key: string) => {
  const label = getTechLabel(key)
  return label.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase()
}

const Experience = () => {
  const target = useRef(null)
  const navigate = useNavigate()

  const [observe, unobserve] = scrollIntersectionObserver(() => {
    navigate("/#1")
  })

  useEffect(() => {
    if (target.current) observe(target.current)
    return () => {
      if (target.current) unobserve(target.current)
    }
  }, [])

  return (
    <Container id="1" ref={target}>
      <InnerWrapper>
        <SectionTitle
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Experience</h2>
        </SectionTitle>

        <GroupCard
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <GroupHeader>
            <GroupLabel>
              <span className="label">{experienceData.groupLabel}</span>
              <span className="period">
                {experienceData.groupPeriod} ({experienceData.groupDuration})
              </span>
            </GroupLabel>
            <GroupNote>{experienceData.note}</GroupNote>
          </GroupHeader>

          <TimelineSection>
            <TimelineList>
              {experienceData.companies.map((company, idx) => (
                <TimelineItem key={company.company}>
                  <TimelineLeft>
                    <StarIcon>
                      <SvgIcon component={StarOutlineIcon} />
                    </StarIcon>
                    <PeriodText>
                      <span className="period">{company.period}</span>
                      <span className="duration">({company.duration})</span>
                    </PeriodText>
                  </TimelineLeft>

                  <TimelineRight>
                    <CompanyName>{company.company}</CompanyName>
                    <RoleMeta>
                      {company.role} · {company.position} ·{" "}
                      {company.employmentType}
                    </RoleMeta>

                    <TechStackRow>
                      {company.techStack.map((tech) => {
                        const stack = techStackMap[tech]
                        return (
                          <TechBadge key={tech} title={getTechLabel(tech)}>
                            {stack?.image ? (
                              <img src={stack.image} alt={stack.label} />
                            ) : (
                              <span className="initial">
                                {getTechInitial(tech)}
                              </span>
                            )}
                          </TechBadge>
                        )
                      })}
                    </TechStackRow>

                    <HighlightBox>
                      <HighlightTitle>주요 업무 내용</HighlightTitle>
                      <HighlightList>
                        {company.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </HighlightList>
                    </HighlightBox>
                  </TimelineRight>

                  {idx < experienceData.companies.length - 1 && (
                    <TimelineConnector />
                  )}
                </TimelineItem>
              ))}
            </TimelineList>
          </TimelineSection>
        </GroupCard>
      </InnerWrapper>
    </Container>
  )
}

export default Experience

const Container = styled.section`
  width: 100%;
  padding: 8rem 2rem;
  background-color: var(--color-bg);
`

const InnerWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
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

const GroupCard = styled.div`
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
`

const GroupHeader = styled.div`
  padding: 2.4rem 3rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 576px) {
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
  }
`

const GroupLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  .label {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-white);
  }

  .period {
    font-size: 1.3rem;
    color: var(--color-text-muted);
  }
`

const GroupNote = styled.span`
  font-size: 1.2rem;
  color: var(--color-text-dim);
  background-color: var(--color-bg-alt);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
`

const TimelineSection = styled.div`
  padding: 3rem;

  @media (max-width: 576px) {
    padding: 2rem;
  }
`

const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 3rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`

const TimelineLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 0.6rem;
  padding-top: 0.6rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const StarIcon = styled.div`
  flex-shrink: 0;
  color: var(--color-text-dim);
  margin-top: 0.2rem;

  > svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`

const PeriodText = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text);
  text-align: right;
  line-height: 1.5;

  .period {
    display: block;
  }

  .duration {
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-text-dim);
    margin-top: 0.2rem;
  }

  @media (max-width: 768px) {
    text-align: left;

    .period,
    .duration {
      display: inline;
    }

    .duration {
      margin-top: 0;
      margin-left: 0.4rem;
    }
  }
`

const TimelineRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const CompanyName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.3;
`

const RoleMeta = styled.p`
  font-size: 1.3rem;
  color: var(--color-text-muted);
`

const TechStackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.4rem;
`

const TechBadge = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 8px;
  background-color: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
  }

  > img {
    width: 2.2rem;
    height: 2.2rem;
    object-fit: contain;
  }

  .initial {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-primary-light);
    letter-spacing: -0.02em;
  }
`

const HighlightBox = styled.div`
  margin-top: 0.8rem;
  padding: 2rem 2.4rem;
  background-color: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: 12px;
`

const HighlightTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-dim);
  margin-bottom: 1.2rem;
`

const HighlightList = styled.ul`
  > li {
    font-size: 1.3rem;
    color: var(--color-text-muted);
    line-height: 1.8;
    padding-left: 1.6rem;
    position: relative;
    margin-bottom: 0.6rem;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--color-primary-light);
    }
  }
`

const TimelineConnector = styled.div`
  display: none;
`
