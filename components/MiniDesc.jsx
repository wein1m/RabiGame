"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MiniDesc = ({ text, style }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const lines = textRef.current.querySelectorAll("span");


    gsap.fromTo(
      lines,
      { yPercent: 100, autoAlpha: 0 },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="relative">
            <div className="h-2 w-[1px] bg-accent-primary absolute"></div>
            <div className="h-2 w-[1px] bg-accent-primary rotate-90 absolute"></div>
          </div>
        ))}
      </div>

      <h5
        id="miniDesc"
        ref={textRef}
        className={`font-hk-grotesk font-medium text-sm text-text-primary leading-4 overflow-hidden ${
          style ?? ""
        }`}
      >
        {text.split("\n").map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h5>
    </div>
  );
};

export default MiniDesc;
