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
        { opacity: 0 },
        { opacity: 1, duration: 0, ease: "power2.inOut" }
      );
    }
  }, [index]);

  return (
    <div className="relative h-screen">
      <div className="absolute top-48 left-96">
        <div className="p-20">
          <MiniDesc text="We are a console/PC games developer based in Tokyo" />
        </div>
      </div>
      <h1 className="text-[11rem] font-neueMachina-bold absolute leading-40 left-32 bottom-28 z-10">
        Dreams <br /> into Games
      </h1>

      {/* <div
        ref={imageRef}
        className="w-fit h-fit overflow-hidden absolute right-[15.4rem] bottom-56 z-1 scale-110"
      >
        <img
          src={images[index].src}
          className="masked-img size-full object-fill"
        />
      </div> */}
      <div
        ref={imageRef}
        className="overflow-hidden absolute right-[26rem] bottom-[12.4rem] z-1 w-[600px] h-[560px]"
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <Grid />
    </div>
  );
};

export default Hero;
