import { useEffect } from "react";

const useIntersectionObserver = (
  selector: string,
  rootMargin: string = "0px"
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pop-in");
          } else {
            entry.target.classList.remove("pop-in");
          }
        });
      },
      { rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, rootMargin]);
};

export default useIntersectionObserver;
