export default function scrollIntersectionObserver(callback: () => void) {
  const options = {
    root: null,
    rootMargin: "80px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // 타겟 요소가 루트 요소와 교차하는 점이 없으면 콜백을 호출했으되, 조기에 탈출한다. (기본 동작 방지)
        if (entry.intersectionRatio <= 0) return;

        const hash = "#" + entry.target.id;
        const navEl = document.querySelector(`a[href="/${hash}"]`);
        if (entry.isIntersecting) {
          navEl?.classList.add("focus");
          callback(); // useNavigate는 일반적인 함수에서 호출할 수 없는 규칙으로 인해 callback으로 받음
        } else {
          navEl?.classList.remove("focus");
        }
      });
    },
    options
  );

  // Element는 DOM 요소를 나타내는 타입임
  const observe = (element: Element) => {
    observer.observe(element);
  };

  const unobserve = (element: Element) => {
    observer.unobserve(element);
  };

  return [observe, unobserve];
}
