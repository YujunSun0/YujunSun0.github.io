import styled from "styled-components"
import type { ProjectImage } from "@/data/projects"

const ProjectGallery = ({ images }: { images: ProjectImage[] }) => (
  <Grid>
    {images.map((image) => (
      <Figure key={image.src}>
        <ImageLink
          href={image.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`${image.caption} 원본 보기`}
        >
          <Image src={image.src} alt={image.alt} loading="lazy" />
        </ImageLink>
        <Caption>{image.caption}</Caption>
      </Figure>
    ))}
  </Grid>
)

export default ProjectGallery

const Grid = styled.div`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const Figure = styled.figure``

const ImageLink = styled.a`
  display: block;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--color-surface);
  cursor: zoom-in;
`

const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
  transition: transform 0.2s ease;

  ${ImageLink}:hover & {
    transform: scale(1.02);
  }
`

const Caption = styled.figcaption`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: var(--color-text-muted);
`
