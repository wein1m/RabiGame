"use client";

import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(CustomEase);

const NextBtn = ({ title, href }) => {
  CustomEase.create(
    "EaseInExpo",
    "M0,0 C0.122,0.382 0.481,0.241 0.548,0.447 0.645,0.747 0.637,1.01 1,1.015 "
  );

  const boxRef = useRef();
  gsap.set(boxRef.current, { width: 0 });

  const handleHover = () => {
    gsap.to(boxRef.current, {
      width: "999px",
      duration: 0.6,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.126,0.382 0.484,0.409 0.587,0.6 0.695,0.8 0.818,1.001 1,1 "
      ),
    });
    console.log("Hovered");
  };

  const handleLeave = () => {
    gsap.to(boxRef.current, {
      width: 0,
      duration: 0.6,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.126,0.382 0.484,0.409 0.587,0.6 0.695,0.8 0.818,1.001 1,1 "
      ),
    });
    console.log("Leaved");
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="w-fit mx-auto cursor-pointer!"
      data-no-blob
    >
      <div className="w-full flex justify-center mt-52">
        <h3 className="text-2xl text-accent-primary font-neueMachina-bold flex flex-row items-center gap-3">
          <div className="rounded-full bg-accent-primary size-3" />
          Next
        </h3>
      </div>
      <div className="mx-auto relative w-fit h-fit">
        <div
          ref={boxRef}
          className="left-0 absolute max-w-[100%] h-full bg-[#f5f2e5] mix-blend-difference"
        />
        <a href={href}>
          <h1 className="w-full h-full text-center text-9xl leading-40 font-neueMachina-bold mix-blend-overlay text-text-primary cursor-pointer!">
            {title}
          </h1>
          <h1 className="absolute top-0 left-0 w-full h-full text-center text-9xl leading-40 font-neueMachina-bold text-text-primary -z-2 cursor-pointer!">
            {title}
          </h1>
        </a>
      </div>
    </div>
  );
};

export default NextBtn;
