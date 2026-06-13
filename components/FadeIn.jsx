"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const translate = direction === "up" ? "translateY(28px)"
    : direction === "down" ? "translateY(-28px)"
    : direction === "left" ? "translateX(28px)"
    : "translateX(-28px)";

  return (
    <div
      ref={ref}
      className={className}
      style={mounted ? {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      } : {}}
    >
      {children}
    </div>
  );
}