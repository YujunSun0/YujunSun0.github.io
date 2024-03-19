import { useEffect, useState } from "react";

interface AnimationProps {
  text: string;
}

const TYPING_INTERVAL = 100; // 타이핑 간격(ms)
const DELETING_INTERVAL = 40; // 삭제 간격(ms)
const PAUSE_DURATION = 3500; // 일시정지 시간(ms)

const TextTypingAni = ({ text }: AnimationProps) => {
  const [word, setWord] = useState<string>("");
  const [textIdx, setTextIdx] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true); // 타이핑 중인지 여부를 나타내는 상태

  useEffect(() => {
    if (textIdx >= text.length && isTyping) {
      const pauseTimeout = setTimeout(() => {
        setIsTyping(false); // 타이핑이 끝났으니 삭제 모드로 전환
      }, PAUSE_DURATION);
      return () => {
        clearTimeout(pauseTimeout);
      };
    }

    if (textIdx < 0 && !isTyping) {
      setIsTyping(true); // 모두 삭제되면 다시 타이핑 모드로 전환
      setTextIdx(0);
      return;
    }

    const interval = setInterval(
      () => {
        if (isTyping) {
          setWord((prev) => prev + text[textIdx]);
          setTextIdx((prev) => prev + 1);
        } else {
          setWord((prev) => prev.slice(0, -1));
          setTextIdx((prev) => prev - 1);
        }
      },
      isTyping ? TYPING_INTERVAL : DELETING_INTERVAL
    );

    return () => {
      clearInterval(interval);
    };
  }, [text, textIdx, isTyping]);

  return <h3>{word}</h3>;
};

export default TextTypingAni;
