import { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const ProgressBar = () => {
  const [width, setWidth] = useState<number>(0); // 스크롤 진행도에 따라 변하는 상태
  const progressRef = useRef<HTMLSpanElement | null>(null);

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop === 0) {
      setWidth(0);
      return;
    }
    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;
    setWidth(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return <Container ref={progressRef} width={width}></Container>;
};

export default ProgressBar;

const Container = styled.span<{ width: number }>`
  width: ${(props) => props.width + "%"};
  height: 3px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(135, 100, 255);
  z-index: 999;
`;
