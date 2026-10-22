"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Content is visible in the server HTML. On mount, anything below the fold is
// hidden and eased in as it scrolls into view, so nothing stays hidden if the
// script fails and nothing in view on load flashes.
export default function Reveal({
  as: Tag = "div",
  media = false,
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [state, setState] = useState("visible");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    setState("hidden");
  }, []);

  useEffect(() => {
    if (state !== "hidden") return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("visible");
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [state]);

  return (
    <Tag
      ref={ref}
      data-state={state}
      style={{ "--d": `${delay}ms` }}
      className={`${media ? "reveal-media" : "reveal"} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
