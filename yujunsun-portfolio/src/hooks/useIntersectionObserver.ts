import { useRef } from "react";

export default function useIntersectionObserver(callback: () => void) {
  const observer = useRef(
    new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const hash = "#" + entry.target.id;
          const navEl = document.querySelector(`a[href="/${hash}"]`);
          if (entry.isIntersecting) {
            navEl?.classList.add("focus");
            callback();
          } else {
            navEl?.classList.remove("focus");
          }
        });
      },
      { threshold: 0.6 }
    )
  );

  // Element는 DOM 요소를 나타내는 타입임
  const observe = (element: Element) => {
    observer.current.observe(element);
  };

  const unobserve = (element: Element) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
