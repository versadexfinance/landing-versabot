import { useEffect } from "react";

const useIntersectionObserver = (
  selector: string,
  rootMargin: string = "0px"
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            if (entry.isIntersecting) {
              entry.target.classList.add("pop-in");
            } else {
              entry.target.classList.remove("pop-in");
            }
          }, 100); // Delay in milliseconds, adjust as needed
        });
      },
      { rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timeoutId);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, rootMargin]);
};

export default useIntersectionObserver;
