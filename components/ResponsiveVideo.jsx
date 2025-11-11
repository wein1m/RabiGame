"use client";

import { useMediaQuery } from "react-responsive";
import ParallaxImage from "./ParallaxImage";

const ResponsiveVideo = ({ src, parallaxSpeed, className }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  isMobile ? console.log("mobile") : console.log("not mobile");
  return isMobile ? (
    <video
      autoPlay
      loop
      muted
      controls={false}
      src={src}
      className={`size-full object-cover bg-secondary/80 ${
        className ? className : ""
      }`}
    />
  ) : (
    <ParallaxImage
      src={src}
      isImage={false}
      parallaxSpeed={parallaxSpeed}
      className={className}
    />
  );
};

export default ResponsiveVideo;
