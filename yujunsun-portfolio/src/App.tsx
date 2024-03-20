import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/portfolio";

function App() {
  // 새로고침 시 스크롤을 최상단으로 이동시키는 코드
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
