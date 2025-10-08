"use client";

import { images } from "@/utils/constants";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import MiniDesc from "../../components/MiniDesc";
import Grid from "@/components/Grid/Grid";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const imageRef = useRef(null);
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.inOut" }
    );
  }, []);

  return (
    <section id="hero">
      <div className="hero-minidesc">
        <MiniDesc
          text={`We are a console/PC games developer\nbased in Bali, Indonesia`}
          style="max-w-66"
        />
      </div>
      <h1 className="hero-title">
        Every
        <br /> Bunny's Dream
      </h1>

      <div className="hero-carousel">
        <img
          ref={imageRef}
          src={images[index].src}
          className="masked-img size-full object-cover"
        />
      </div>

      <div className="hero-grid">
        {isMobile ? <Grid cols={5} rows={5} size="4rem" /> : <Grid />}
        <button className="hero-btn" />
        <img src="/bunny-vector.png" />
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div
        ref={imageRef}
        className="overflow-hidden absolute right-[26rem] bottom-[12.4rem] z-1 w-[600px] h-[560px]"
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-cover w-full h-full"
        />
      </div> */
}

{
  /* <FloatUp children="Dreams" />
      <FloatUp children="into Games" /> */
}
