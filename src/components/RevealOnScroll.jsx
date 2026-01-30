import { useEffect, useRef } from "react";

export const RevealOnScroll = ({
  children,
  className = "",
  active = true,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!active || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};