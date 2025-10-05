"use client";

import { useMediaQuery } from "react-responsive";
import ParallaxImage from "./ParallaxImage";

const ResponsiveImage = ({ src, parallaxSpeed, className }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  isMobile ? console.log("mobile") : console.log("not mobile");
  return isMobile ? (
    <img
      src={src}
      className={`size-full object-cover bg-secondary/80 ${
        className ? className : ""
      }`}
    />
  ) : (
    <ParallaxImage
      src={src}
      isImage={true}
      parallaxSpeed={parallaxSpeed}
      className={className}
    />
  );
};

export default ResponsiveImage;
