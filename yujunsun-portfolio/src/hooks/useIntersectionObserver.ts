export default function useIntersectionObserver(callback: () => void) {
  // const header = document.querySelector("[data-header]");

  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const hash = "#" + entry.target.id;
        const navEl = document.querySelector(`a[href="/${hash}"]`);
        if (entry.isIntersecting) {
          console.log("실행");
          console.log(navEl, hash);

          navEl?.classList.add("focus");
          callback();
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
