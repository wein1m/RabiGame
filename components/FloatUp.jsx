"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const FloatUp = () => {
  const floatText = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "expo.inOut" },
    });
    tl.current.fromTo(
      floatText.current,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div
      className="h-[9.5rem] overflow-hidden w-full"
      onMouseEnter={() => tl.current.play()}
      onMouseLeave={() => tl.current.reverse()}
    >
      <a
        ref={floatText}
        className="font-neueMachina-bold text-[8.5rem] leading-24 inline-block text-primary w-full"
      >
        RabiGame
      </a>
    </div>
  );
};

export default FloatUp;
