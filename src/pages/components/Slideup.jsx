import React, { useEffect, useRef, ReactNode } from "react";

const SlideUp = ({ children, offset = "0px" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, offset]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
};

export default SlideUp;