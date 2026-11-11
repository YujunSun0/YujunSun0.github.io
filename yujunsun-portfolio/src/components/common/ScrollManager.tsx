import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * 페이지 이동 시 스크롤 위치를 맞춥니다.
 * - 해시가 있으면(예: /#career) 해당 섹션으로 이동
 * - 없으면 맨 위로 이동
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollManager
