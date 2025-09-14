"use client";

import { images } from "@/utils/constants";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import MiniDesc from "../../components/MiniDesc";
import Grid from "@/components/Grid/Grid";
import Image from "next/image";

const Hero = () => {
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
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0, ease: "power2.inOut" }
      );
    }
  }, [index]);

  useEffect(() => {
    gsap.fromTo(
      "#hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.inOut" }
    );
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute top-48 left-96">
        <div className="p-20">
          <MiniDesc
            text="We are a console/PC games developer based in Bali, Indonesia"
            style="max-w-66"
          />
        </div>
      </div>
      <h1
        id="hero-title"
        className="text-[11rem] font-neueMachina-bold absolute leading-40 left-32 bottom-28 z-10"
      >
        Dreams <br /> into Games
      </h1>

      <div className="w-[600px] h-[560px] overflow-hidden absolute right-[24.8rem] bottom-[12.4rem] z-1">
        <img
          ref={imageRef}
          src={images[index].src}
          className="masked-img size-full object-cover"
        />
      </div>
      {/* <div
        ref={imageRef}
        className="overflow-hidden absolute right-[26rem] bottom-[12.4rem] z-1 w-[600px] h-[560px]"
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-cover w-full h-full"
        />
      </div> */}
      <Grid />
    </div>
  );
};

export default Hero;
