import { Route, Routes } from "react-router-dom";
import ProgressBar from "./components/common/Progress";
import Portfolio from "./pages/portfolio";

function App() {
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
  //     if (window.location.hash) {
  //       window.location.hash = ""; // URL 해쉬 초기화
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [navigate]);

  return (
    <>
      <ProgressBar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
