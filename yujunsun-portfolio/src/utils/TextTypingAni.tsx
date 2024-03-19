import { useEffect, useState } from "react";

interface AnimationProps {
  text: string;
}

const TextTypingAni = ({ text }: AnimationProps) => {
  const [word, setWord] = useState<string>("");
  // 한글자씩 글자를 추가할 상태
  const [textIdx, setTextIdx] = useState<number>(0);
  // 현재까지 타이핑된 문자열의 위치(인덱스)를 나타내는 상태
  const [isPaused, setIsPaused] = useState<boolean>(false);
  // 모든 문자열이 타이핑된 후 일시정지인지 저장하는 상태

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isPaused) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsPaused(false);
          setTextIdx(0);
          setWord("");
        }, 5000); // 몇 초 일시정지할 것인지
        return;
      }

      if (textIdx >= text.length) {
        // text length 초과 시 undefined가 출력되는 것을 방지
        setIsPaused(true);
        return;
      }

      const nextChar = text[textIdx];
      setWord((prev) => prev + nextChar);

      if (nextChar === "\n") {
        setTextIdx((prevCount) => prevCount + 2);
      } else {
        setTextIdx((prevCount) => prevCount + 1);
      }
    }, 100); // 설정한 초만큼 일정한 간격마다 실행된다

    return () => {
      clearInterval(typingInterval);
    }; // 컴포넌트가 마운트 해제되거나, 재렌더링 될 때마다 setInterval를 정리하는 함수를 반환함.
  }, [text, textIdx, isPaused]); // 해당 상태들이 변경될 때마다 useEffect가 다시 실행 됨

  return <h3>{word}</h3>;
};

export default TextTypingAni;
