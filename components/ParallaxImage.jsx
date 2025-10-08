"use client";

import { useParallax } from "react-scroll-parallax";

const ParallaxImage = ({ isImage, src, className, parallaxSpeed }) => {
  const parallax = useParallax({
    speed: parallaxSpeed ? parallaxSpeed : -20,
  });
  return isImage ? (
    <img
      ref={parallax.ref}
      src={src}
      className={`object-cover bg-secondary/80 ${
        className ? className : ""
      }`}
    />
  ) : (
    <video
      ref={parallax.ref}
      autoPlay
      loop
      muted
      controls={false}
      src={src}
      className={`size-full object-cover bg-secondary/80 ${
        className ? className : ""
      }`}
    />
  );
};

export default ParallaxImage;
