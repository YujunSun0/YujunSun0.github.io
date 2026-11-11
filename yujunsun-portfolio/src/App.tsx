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
    if (!pathname.startsWith("/projects/")) document.title = DEFAULT_TITLE
  }, [pathname])

  return (
    <>
      <ScrollManager />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </>
  )
}

export default App
