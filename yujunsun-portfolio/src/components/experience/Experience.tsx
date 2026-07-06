import styled from "styled-components"
import { useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import scrollIntersectionObserver from "utils/scrollIntersectionObserver"
import { motion } from "framer-motion"
import { experienceData } from "@/data/experience"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { SvgIcon } from "@mui/material"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const Experience = () => {
  const target = useRef(null)
  const navigate = useNavigate()
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  const [observe, unobserve] = scrollIntersectionObserver(() => {
    navigate("/#1")
  })

  useEffect(() => {
    if (target.current) observe(target.current)
    return () => {
      if (target.current) unobserve(target.current)
    }
  }, [])

  const toggleExpand = (idx: number) => {
    setExpandedIdx((prev) => (prev === idx ? null : idx))
  }

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

          <CompanyList>
            {experienceData.companies.map((company, idx) => (
              <CompanyItem key={company.company}>
                <CompanyHeader onClick={() => toggleExpand(idx)}>
                  <CompanyInfo>
                    <h3 className="company-name">{company.company}</h3>
                    <span className="meta">
                      {company.role} · {company.position} · {company.employmentType}
                    </span>
                    <span className="period">
                      {company.period} ({company.duration})
                    </span>
                  </CompanyInfo>
                  <ExpandButton $isExpanded={expandedIdx === idx}>
                    <SvgIcon component={ExpandMoreIcon} />
                  </ExpandButton>
                </CompanyHeader>

                <HighlightList $isExpanded={expandedIdx === idx}>
                  {company.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </HighlightList>

                {idx < experienceData.companies.length - 1 && <Divider />}
              </CompanyItem>
            ))}
          </CompanyList>
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

const CompanyList = styled.div`
  padding: 0.8rem 0;
`

const CompanyItem = styled.div`
  padding: 0 3rem;

  @media (max-width: 576px) {
    padding: 0 2rem;
  }
`

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .company-name {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-white);
  }

  .meta {
    font-size: 1.2rem;
    color: var(--color-text-muted);
  }

  .period {
    font-size: 1.2rem;
    color: var(--color-text-dim);
  }
`

const ExpandButton = styled.div<{ $isExpanded: boolean }>`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isExpanded ? "rotate(180deg)" : "rotate(0)")};
  color: var(--color-text-muted);

  > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

const HighlightList = styled.ul<{ $isExpanded: boolean }>`
  max-height: ${(props) => (props.$isExpanded ? "50rem" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease;
  padding-bottom: ${(props) => (props.$isExpanded ? "1.6rem" : "0")};

  > li {
    font-size: 1.3rem;
    color: var(--color-text-muted);
    line-height: 1.8;
    padding-left: 1.6rem;
    position: relative;
    margin-bottom: 0.6rem;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--color-primary-light);
    }
  }
`

const Divider = styled.div`
  height: 1px;
  background-color: var(--color-border);
`
