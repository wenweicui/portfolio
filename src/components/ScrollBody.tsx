import React, { useRef, useEffect } from "react";

export interface ScrollBodyProps {
  children: React.ReactNode;
}

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

const ScrollBody = ({ children }: ScrollBodyProps) => {
  const scrollRef = useHorizontalScroll();

  return (
    <div ref={scrollRef} className="scrollbody-container">
      {children}
    </div>
  );
};

export default ScrollBody;
