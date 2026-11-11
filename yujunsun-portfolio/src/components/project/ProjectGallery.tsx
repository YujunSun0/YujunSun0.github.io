import { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import type { ProjectImage } from "@/data/projects"

/**
 * 프로젝트 스크린샷 목록.
 * 이미지를 누르면 새 탭 대신 같은 화면에서 크게 보여줍니다(라이트박스).
 * 닫기 버튼, ESC, 배경 클릭, 브라우저 뒤로 가기로 닫을 수 있습니다.
 */
const ProjectGallery = ({ images }: { images: ProjectImage[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const pushedHistory = useRef(false)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  const open = (index: number, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger
    setOpenIndex(index)
    // 뒤로 가기로 닫을 수 있도록 같은 주소로 기록을 하나 남깁니다.
    window.history.pushState(
      { ...(window.history.state as object), lightbox: true },
      ""
    )
    pushedHistory.current = true
  }

  const close = useCallback(() => {
    if (pushedHistory.current) {
      // popstate 핸들러에서 실제로 닫힙니다.
      window.history.back()
    } else {
      setOpenIndex(null)
    }
  }, [])

  const move = useCallback(
    (delta: number) => {
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length
      )
    },
    [images.length]
  )

  const isOpen = openIndex !== null

  useEffect(() => {
    if (!isOpen) return

    const handlePopState = () => {
      pushedHistory.current = false
      setOpenIndex(null)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (images.length > 1 && event.key === "ArrowRight") move(1)
      if (images.length > 1 && event.key === "ArrowLeft") move(-1)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("popstate", handlePopState)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("keydown", handleKeyDown)
      lastTrigger.current?.focus()
    }
  }, [isOpen, close, move, images.length])

  const current = openIndex !== null ? images[openIndex] : null

  return (
    <>
      <Grid>
        {images.map((image, index) => (
          <Figure key={image.src}>
            <Thumb
              type="button"
              onClick={(event) => {
                open(index, event.currentTarget)
              }}
              aria-label={`${image.caption} 크게 보기`}
            >
              <Image src={image.src} alt={image.alt} loading="lazy" />
            </Thumb>
            <Caption>{image.caption}</Caption>
          </Figure>
        ))}
      </Grid>

      {current && openIndex !== null && (
        <Overlay
          role="dialog"
          aria-modal="true"
          aria-label={`${current.caption} 확대 보기`}
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <TopBar>
            <Counter>
              {openIndex + 1} / {images.length}
            </Counter>
            <CloseButton
              type="button"
              onClick={close}
              autoFocus
              aria-label="닫기"
            >
              <span aria-hidden="true">닫기</span>
              <CloseIcon />
            </CloseButton>
          </TopBar>

          <Stage
            onClick={(event) => {
              if (event.target === event.currentTarget) close()
            }}
          >
            {images.length > 1 && (
              <NavButton
                type="button"
                $side="left"
                onClick={() => {
                  move(-1)
                }}
                aria-label="이전 이미지"
              >
                ‹
              </NavButton>
            )}
            <LargeImage src={current.src} alt={current.alt} />
            {images.length > 1 && (
              <NavButton
                type="button"
                $side="right"
                onClick={() => {
                  move(1)
                }}
                aria-label="다음 이미지"
              >
                ›
              </NavButton>
            )}
          </Stage>

          <LargeCaption>{current.caption}</LargeCaption>
        </Overlay>
      )}
    </>
  )
}

export default ProjectGallery

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

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

const Thumb = styled.button`
  display: block;
  width: 100%;
  padding: 0;
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

  ${Thumb}:hover & {
    transform: scale(1.02);
  }
`

const Caption = styled.figcaption`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: var(--color-text-muted);
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: #0c0e12;
  color: #ffffff;
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2rem;
`

const Counter = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.75);
`

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.6rem;
  border: 0;
  border-radius: 999px;
  background-color: #ffffff;
  color: #16181d;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #e6e8ec;
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
`

const Stage = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 7.2rem;

  @media (max-width: 720px) {
    padding: 0 1.2rem;
  }
`

const LargeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  background-color: #ffffff;
`

const NavButton = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$side === "left" ? "left: 1.6rem;" : "right: 1.6rem;")}
  transform: translateY(-50%);
  width: 4.8rem;
  height: 4.8rem;
  border: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.16);
  color: #ffffff;
  font-size: 3.2rem;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.28);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  @media (max-width: 720px) {
    width: 4rem;
    height: 4rem;
    font-size: 2.6rem;
    background-color: rgba(12, 14, 18, 0.6);
    ${(props) => (props.$side === "left" ? "left: 0.4rem;" : "right: 0.4rem;")}
  }
`

const LargeCaption = styled.p`
  padding: 1.6rem 2rem 2.4rem;
  text-align: center;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
`
