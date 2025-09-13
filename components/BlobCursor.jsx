"use client";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

const BlobCursor = () => {
  const [mounted, setMounted] = useState(false);

  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);
  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });

  useEffect(() => setMounted(true), []);

  // Cursor animation + event listeners
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const animate = () => {
      gsap.to(dotPosition.current, {
        x: mousePosition.current.x,
        y: mousePosition.current.y,
        duration: 0.5,
        ease: "power2",
        onUpdate: () => {
          setRenderPos({
            dot: { x: dotPosition.current.x, y: dotPosition.current.y },
            border: {
              x: borderDotPosition.current.x,
              y: borderDotPosition.current.y,
            },
          });
        },
      });

      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, [mounted]);

  if (!mounted) return null; // ✅ this is now safe

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        className={`absolute rounded-full bg-accent-primary transition duration-300 ease-in-out size-3 -translate-[50%] ${
          isHovering ? "scale-200" : ""
        }`}
        style={{
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
        }}
      />
    </div>
  );
};

export default BlobCursor;
