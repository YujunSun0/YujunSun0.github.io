import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import SiteHeader from "@components/common/SiteHeader"
import SiteFooter from "@components/common/SiteFooter"
import ScrollManager from "@components/common/ScrollManager"
import HomePage from "@pages/home"
import ProjectPage from "@pages/project"
import NotFoundPage from "@pages/not-found"

const DEFAULT_TITLE = "선유준 | Frontend Engineer"

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const isDetail =
      pathname.startsWith("/projects/") ||
      pathname.startsWith("/side-projects/")
    if (!isDetail) document.title = DEFAULT_TITLE
  }, [pathname])

  return (
    <>
      <ScrollManager />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage kind="career" />} />
        <Route
          path="/side-projects/:slug"
          element={<ProjectPage kind="side" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </>
  )
}

export default App
