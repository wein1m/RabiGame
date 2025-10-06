"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const FloatUp = ({ children, className }) => {
  const textRef = useRef(null);

  useGSAP(() => {
    const text = new SplitText(textRef.current, {
      type: "chars, words",
      linesClass: "max-h-10 bg-red-500",
    });

    gsap.fromTo(
      text.chars,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.05,
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className={`h-fit w-fit leading-none align-top  ${className}`}
    >
      {children}
    </div>
  );
};

export default FloatUp;
