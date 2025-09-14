import gsap from "gsap";
import React from "react";
import Arrow from "./Arrow";

const handleHover = () => {
  gsap.to("#btn", { perspective: 100, duration: 5 });
};

const Btn = () => {
  return (
    <a
      id="btn"
      onMouseEnter={handleHover}
      className="relative mt-6 bg-accent-primary/90 px-6 py-4 flex flex-row items-center w-fit gap-8 font-hk-grotesk text-white font-medium text-sm hover:cursor-pointer!"
    >
      <b className="pr-10">Read more</b>
      <Arrow className="absolute right-2 p-3"/>
    </a>
  );
};

export default Btn;
