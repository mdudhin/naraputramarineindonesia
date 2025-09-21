import React, { useState, useEffect, useRef } from "react";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className,
  style,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={style}
    >
      {children}
    </section>
  );
};

export default MotionSection;
