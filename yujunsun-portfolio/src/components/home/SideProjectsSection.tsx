import styled from "styled-components"
import { Link } from "react-router-dom"
import { sideProjects, type SideProjectStatus } from "@/data/sideProjects"
import SectionLabel from "@/components/common/SectionLabel"

const statusLabel: Record<SideProjectStatus, string> = {
  live: "운영 중",
  local: "로컬 실행",
  prototype: "프로토타입"
}

const SideProjectsSection = () => {
  const visible = sideProjects.filter((project) => project.published)
  if (visible.length === 0) return null

  return (
    <Section id="side" aria-labelledby="side-title">
      <SectionLabel id="side-title">개인 프로젝트</SectionLabel>
      <Grid>
        {visible.map((project) => {
          const detailPath = project.detailSlug
            ? `/side-projects/${project.detailSlug}`
            : undefined
          const thumb = project.image ? (
            <Thumb
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
            />
          ) : (
            <ThumbPlaceholder aria-hidden="true" />
          )

          return (
            <Card key={project.name}>
              {detailPath ? (
                <ThumbLink to={detailPath} tabIndex={-1} aria-hidden="true">
                  {thumb}
                </ThumbLink>
              ) : (
                thumb
              )}
              <CardBody>
                <TitleRow>
                  <Name>
                    {detailPath ? (
                      <Link to={detailPath}>{project.name}</Link>
                    ) : (
                      project.name
                    )}
                  </Name>
                  <Status $status={project.status}>
                    {statusLabel[project.status]}
                  </Status>
                </TitleRow>
                <Desc>{project.description}</Desc>
                {project.stack && <Stack>{project.stack}</Stack>}
                {(detailPath ?? project.siteUrl ?? project.githubUrl) && (
                  <Links>
                    {detailPath && (
                      <DetailLink to={detailPath}>자세히 보기 →</DetailLink>
                    )}
                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        사이트
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </Links>
                )}
              </CardBody>
            </Card>
          )
        })}
      </Grid>
    </Section>
  )
}

export default SideProjectsSection

const Section = styled.section`
  padding-top: 9.6rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  border: 1px solid var(--color-border);
  border-radius: 14px;
  overflow: hidden;
`

const ThumbLink = styled(Link)`
  display: block;
  overflow: hidden;

  > img {
    transition: transform 0.2s ease;
  }

  &:hover > img {
    transform: scale(1.02);
  }
`

const Thumb = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
`

const ThumbPlaceholder = styled.div`
  aspect-ratio: 16 / 10;
  background-color: var(--color-surface);
`

const CardBody = styled.div`
  padding: 2rem 2.2rem 2.4rem;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const Name = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;

  > a {
    color: var(--color-text);

    &:hover {
      color: var(--color-accent);
      text-decoration: none;
    }
  }
`

const Status = styled.span<{ $status: SideProjectStatus }>`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.2rem 0.8rem;
  border-radius: 999px;
  color: ${(props) =>
    props.$status === "live"
      ? "var(--color-success)"
      : "var(--color-text-muted)"};
  background-color: ${(props) =>
    props.$status === "live"
      ? "var(--color-success-soft)"
      : "var(--color-neutral-soft)"};
`

const Desc = styled.p`
  margin-top: 0.8rem;
  font-size: 1.5rem;
  line-height: 1.7;
  color: var(--color-text-body);
`

const Stack = styled.p`
  margin-top: 1.2rem;
  font-size: 1.3rem;
  color: var(--color-text-muted);
`

const Links = styled.div`
  margin-top: 1.4rem;
  display: flex;
  gap: 1.6rem;
  font-size: 1.4rem;
  font-weight: 700;
`

const DetailLink = styled(Link)`
  color: var(--color-text);

  &:hover {
    color: var(--color-accent);
    text-decoration: none;
  }
`
