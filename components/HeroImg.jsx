"use client";

import { images } from "@/utils/constants";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const HeroImg = () => {
  const imageRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0, ease: "power2.inOut" }
      );
    }
  }, [index]);

  return (
    <div className="relative">
      {/* <img src="/images/hero/intro-3.webp" className="masked-img"/> */}
      {/* <img src="/mask-img.png" /> */}
      {/* <img src={images[index].src} className="masked-img"/> */}
      <h1 className="text-[11rem] font-neueMachina-bold absolute leading-40 left-32 top-[32rem] z-10">
        Dreams <br /> into Games
      </h1>

      <div
        ref={imageRef}
        className="w-fit h-fit overflow-hidden absolute right-44 top-48 z-1"
      >
        <img
          src={images[index].src}
          className="masked-img size-full object-fill"
        />
      </div>
    </div>
  );
};

export default HeroImg;
