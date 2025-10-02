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
      className={`size-full object-cover ${className ? className : ""}`}
    />
  ) : (
    <video
      ref={parallax.ref}
      autoPlay
      loop
      muted
      controls={false}
      src={src}
      className={`size-full object-cover ${className ? className : ""}`}
    />
  );
};

export default ParallaxImage;
