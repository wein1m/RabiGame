"use client";

import "./scrollLight.css";

import BlurText from "@/components/BlurText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ScrollLight = () => {
  const contentRef = useRef(null);
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const button = scrollBtnRef.current;
    const handleScroll = () => {
      gsap.to(window, {
        duration: 2,
        scrollTo: 5000,
        ease: "expo.in",
      });
    };

    button && button.addEventListener("click", handleScroll);

    return () => button && button.removeEventListener("click", handleScroll);
  }, []);

  // const scrollToEnd = () => {
  //   window.scroll({
  //     top: 5000,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  // const scrollToContent = () => {
  //   contentRef.current.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=5000",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to("#beforeContent", {
      opacity: 1,
      ease: "power2.inOut",
    })
      .to("#midContent", {
        opacity: 1,
        backgroundColor: "#ffffff",
        duration: 4,
        ease: "power2.inOut",
      })
      .to("#beforeContent", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      })
      // reveal the after content
      .to("#afterContent", {
        opacity: 1,
        ease: "expo",
      })
      // simulate the "flash / blinding" moment
      .to("#midContent", {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      });
  });

  return (
    <div
      id="hero"
      className="h-screen w-screen flex flex-col items-center justify-center bg-[#101014]"
    >
      <div
        id="beforeContent"
        className="relative h-screen w-screen flex justify-center"
      >
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-8xl font-bold text-white abs-center"
        />
        <button
          ref={scrollBtnRef}
          className="text-white/20 absolute bottom-5"
          // onClick={scrollToEnd}
        >
          Scroll down
        </button>
      </div>

      <div
        id="midContent"
        className="absolute inset-0 flex items-center justify-center bg-white opacity-0 pointer-events-none"
      ></div>

      <div
        ref={contentRef}
        id="afterContent"
        className="absolute opacity-0 text-white text-8xl font-extrabold pointer-events-none"
      >
        <h1>WELCOMEEE!!!</h1>
      </div>
    </div>
  );
};

export default ScrollLight;
