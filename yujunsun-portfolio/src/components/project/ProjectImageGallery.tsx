import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import CloseIcon from "@mui/icons-material/Close"
import ZoomInIcon from "@mui/icons-material/ZoomIn"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { SvgIcon } from "@mui/material"
import type { ProjectImage } from "@/data/projects"

interface ProjectImageGalleryProps {
  images: ProjectImage[]
}

const MIN_ZOOM = 0.5
const MAX_ZOOM = 3
const ZOOM_STEP = 0.25

const clampZoom = (value: number) =>
  Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(value * 100) / 100))

const ProjectImageGallery = ({ images }: ProjectImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(
    null
  )
  const hasMultiple = images.length > 1
  const current = images[activeIndex]
  const canPan = zoom > 1

  const resetView = () => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
    setIsDragging(false)
    dragStartRef.current = null
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    resetView()
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    resetView()
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    resetView()
  }

  const zoomIn = () => setZoom((prev) => clampZoom(prev + ZOOM_STEP))
  const zoomOut = () => {
    setZoom((prev) => {
      const next = clampZoom(prev - ZOOM_STEP)
      if (next <= 1) setOffset({ x: 0, y: 0 })
      return next
    })
  }

  useEffect(() => {
    setActiveIndex(0)
    setIsLightboxOpen(false)
    resetView()
  }, [images])

  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation()
        closeLightbox()
        return
      }
      if (e.key === "+" || e.key === "=") {
        e.preventDefault()
        zoomIn()
      }
      if (e.key === "-" || e.key === "_") {
        e.preventDefault()
        zoomOut()
      }
      if (e.key === "0") {
        e.preventDefault()
        resetView()
      }
      if (!hasMultiple) return
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [hasMultiple, images.length, isLightboxOpen])

  useEffect(() => {
    if (!isLightboxOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isLightboxOpen])

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.deltaY < 0) zoomIn()
    else zoomOut()
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!canPan) return
    e.currentTarget.setPointerCapture(e.pointerId)
    setIsDragging(true)
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      ox: offset.x,
      oy: offset.y,
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !dragStartRef.current) return
    const dx = e.clientX - dragStartRef.current.x
    const dy = e.clientY - dragStartRef.current.y
    setOffset({
      x: dragStartRef.current.ox + dx,
      y: dragStartRef.current.oy + dy,
    })
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return
    e.currentTarget.releasePointerCapture(e.pointerId)
    setIsDragging(false)
    dragStartRef.current = null
  }

  return (
    <Gallery>
      <ImageFrame
        type="button"
        onClick={() => setIsLightboxOpen(true)}
        aria-label="이미지 확대 보기"
      >
        <img src={current.src} alt={current.alt} />
        <ZoomHint className="zoom-hint">
          <SvgIcon component={ZoomInIcon} fontSize="small" />
          <span>클릭하여 확대</span>
        </ZoomHint>

        {hasMultiple && (
          <>
            <NavButton
              type="button"
              $side="left"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label="이전 이미지"
            >
              <SvgIcon component={ChevronLeftIcon} />
            </NavButton>
            <NavButton
              type="button"
              $side="right"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label="다음 이미지"
            >
              <SvgIcon component={ChevronRightIcon} />
            </NavButton>
          </>
        )}
      </ImageFrame>

      {(current.caption || hasMultiple) && (
        <MetaRow>
          {current.caption ? <Caption>{current.caption}</Caption> : <span />}
          {hasMultiple && (
            <Dots>
              {images.map((image, idx) => (
                <Dot
                  key={`${image.src}-${idx}`}
                  type="button"
                  $isActive={idx === activeIndex}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`${idx + 1}번째 이미지`}
                />
              ))}
            </Dots>
          )}
        </MetaRow>
      )}

      {isLightboxOpen && (
        <LightboxOverlay
          onClick={closeLightbox}
          onWheel={handleWheel}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
        >
          <LightboxStage onClick={(e) => e.stopPropagation()}>
            <LightboxImageWrap
              $canPan={canPan}
              $isDragging={isDragging}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onDoubleClick={(e) => {
                e.stopPropagation()
                if (zoom > 1) resetView()
                else setZoom(2)
              }}
            >
              <LightboxImage
                src={current.src}
                alt={current.alt}
                $zoom={zoom}
                $offsetX={offset.x}
                $offsetY={offset.y}
                draggable={false}
              />
            </LightboxImageWrap>
          </LightboxStage>

          <Toolbar onClick={(e) => e.stopPropagation()}>
            {hasMultiple && (
              <>
                <ToolbarButton type="button" onClick={goPrev} aria-label="이전 이미지">
                  <SvgIcon component={ChevronLeftIcon} />
                </ToolbarButton>
                <ToolbarButton type="button" onClick={goNext} aria-label="다음 이미지">
                  <SvgIcon component={ChevronRightIcon} />
                </ToolbarButton>
                <ToolbarDivider />
              </>
            )}

            <ZoomLabel
              type="button"
              onClick={resetView}
              title="100%로 초기화"
              aria-label="줌 초기화"
            >
              {Math.round(zoom * 100)}%
            </ZoomLabel>
            <ToolbarButton
              type="button"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              aria-label="축소"
            >
              <SvgIcon component={RemoveIcon} fontSize="small" />
            </ToolbarButton>
            <ToolbarButton
              type="button"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              aria-label="확대"
            >
              <SvgIcon component={AddIcon} fontSize="small" />
            </ToolbarButton>
            <ToolbarDivider />
            <ToolbarButton type="button" onClick={closeLightbox} aria-label="닫기">
              <SvgIcon component={CloseIcon} />
            </ToolbarButton>
          </Toolbar>

          {current.caption && (
            <LightboxCaption onClick={(e) => e.stopPropagation()}>
              {current.caption}
            </LightboxCaption>
          )}
        </LightboxOverlay>
      )}
    </Gallery>
  )
}

export default ProjectImageGallery

const Gallery = styled.div`
  margin-bottom: 2.4rem;
`

const ImageFrame = styled.button`
  position: relative;
  display: block;
  width: 100%;
  max-height: 36rem;
  min-height: 20rem;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--color-bg-alt);
  cursor: zoom-in;

  > img {
    width: 100%;
    max-height: 36rem;
    object-fit: contain;
    object-position: top center;
    display: block;
  }

  &:hover .zoom-hint {
    opacity: 1;
  }
`

const ZoomHint = styled.div`
  position: absolute;
  left: 50%;
  bottom: 1.2rem;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: rgba(15, 17, 20, 0.8);
  color: var(--color-white);
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;

  > svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`

const NavButton = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$side === "left" ? "left: 1rem;" : "right: 1rem;")}
  transform: translateY(-50%);
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: rgba(15, 17, 20, 0.7);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  z-index: 2;

  &:hover {
    background-color: rgba(15, 17, 20, 0.9);
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }
`

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1rem;
  min-height: 1.6rem;
`

const Caption = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-muted);
`

const Dots = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-left: auto;
`

const Dot = styled.button<{ $isActive: boolean }>`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  padding: 0;
  background-color: ${(props) =>
    props.$isActive ? "var(--color-primary-light)" : "var(--color-border)"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-primary-light);
  }
`

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 8rem;
`

const LightboxStage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const LightboxImageWrap = styled.div<{ $canPan: boolean; $isDragging: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: ${(props) =>
    props.$canPan ? (props.$isDragging ? "grabbing" : "grab") : "default"};
  touch-action: none;
  user-select: none;
`

const LightboxImage = styled.img<{
  $zoom: number
  $offsetX: number
  $offsetY: number
}>`
  max-width: min(110rem, 92vw);
  max-height: 78vh;
  object-fit: contain;
  border-radius: 8px;
  transform: translate(${(props) => props.$offsetX}px, ${(props) => props.$offsetY}px)
    scale(${(props) => props.$zoom});
  transform-origin: center center;
  transition: ${(props) =>
    props.$offsetX === 0 && props.$offsetY === 0 ? "transform 0.15s ease" : "none"};
  will-change: transform;
`

const Toolbar = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2.4rem;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 0.8rem;
  border-radius: 12px;
  background-color: rgba(37, 37, 37, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  z-index: 3;
`

const ToolbarButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 8px;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease;

  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }
`

const ZoomLabel = styled.button`
  min-width: 5.2rem;
  height: 3.2rem;
  padding: 0 0.6rem;
  border-radius: 8px;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const ToolbarDivider = styled.span`
  width: 1px;
  height: 1.8rem;
  margin: 0 0.2rem;
  background-color: rgba(255, 255, 255, 0.15);
`

const LightboxCaption = styled.p`
  position: absolute;
  left: 50%;
  bottom: 7.2rem;
  transform: translateX(-50%);
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
`
