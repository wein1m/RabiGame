"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Btn from "@/components/Btn";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const textSplit = new SplitText(textRef.current, { type: "words" });

    gsap.fromTo(
      textSplit.words,
      { opacity: 0, filter: "blur(3px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        stagger: 0.07,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      "#bunny-img",
      { scale: 0.8, y: 50, opacity: 0.6 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );

    return () => textSplit.revert(); // clean up on unmount
  });

  return (
    <div id="about" className="px-52 py-44 mb-[100rem]">
      <div className="flex flex-row justify-center items-center gap-56">
        <div className="py-10 px-20 scale-125">
          <img
            id="bunny-img"
            src="/bunny-stripe.png"
            alt="bunny image"
            className="w-full h-full rotate-10"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-3 items-center">
            <div className="size-3 bg-text-primary rounded-full"></div>
            <h3 className="font-neueMachina-bold">Who we are</h3>
          </div>
          <div className="relative w-[39rem]">
            {/* ------------ TODO: Add something, maybe like text-gradient on RabiGame, also make it component later */}
            <h5
              ref={textRef}
              className="font-hk-grotesk font-medium text-[1.7rem] leading-[1.2] text-text-primary"
            >
              {/* <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                RabiGame{" "}
              </span> */}
              <span>RabiGame</span> as a company built upon a unique breadth of
              expertise working on AAA projects across the world. After 14 years
              as a support studio, we have since March 2024 decided to take the
              first step on our journey to focus solely on our internal titles,
              realizing our dream of becoming a lead studio.
            </h5>
            <h5 className="max-w-[39rem] font-hk-grotesk font-medium text-[1.7rem] leading-[1.2] text-text-secondary opacity-40 -z-10 absolute top-0 left-0">
              <span>RabiGame</span> as a company built upon a unique breadth of
              expertise working on AAA projects across the world. After 14 years
              as a support studio, we have since March 2024 decided to take the
              first step on our journey to focus solely on our internal titles,
              realizing our dream of becoming a lead studio.
            </h5>
          </div>
          <Btn />
        </div>
      </div>
    </div>
  );
};

export default About;
