"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Btn from "@/components/Btn";
import GlareHover from "@/components/GlareHover";
import Link from "next/link";

gsap.registerPlugin(SplitText, ScrollTrigger);
// IDK WHAT TO DO WITH THIS
const About = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const textSplit = new SplitText(textRef.current, { type: "words" });

    gsap.fromTo(
      textSplit.words,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.07,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom", // ✅ top of #about hits bottom of viewport
          end: "center center", // ✅ center of viewport aligns with center of #about
          toggleActions: "play none none none",
          scrub: false, // optional: if you want smooth sync with scroll, set to true
        },
      }
    );

    // gsap.fromTo(
    //   "#bunny-img",
    //   { scale: 0.8, y: 50, opacity: 0.6 },
    //   {
    //     scale: 1,
    //     y: 0,
    //     opacity: 1,
    //     ease: "power3.inOut",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: "#about",
    //       start: "top bottom",
    //       toggleActions: "play none none none",
    //     },
    //   }
    // );

    return () => textSplit.revert(); // clean up on unmount
  });

  return (
    <section id="about">
      {/* NOTE: ASK THEM, should we use team.. or bunny image on this */}
      <div className="image-container">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <img
            id="bunny-img"
            src="/images/team/photo1.jpeg"
            alt="team image"
            className="w-full mix-blend-overlay"
          />
        </GlareHover>
      </div>

      <div className="desc-container relative">
        <div className="title">
          <div className="size-3 bg-text-primary rounded-full"></div>
          <h3 className="font-neueMachina-bold">Who we are</h3>
        </div>
        <div className="desc">
          {/* ------------ TODO: Add something, maybe like text-gradient on RabiGame, also make it component later */}
          <h5 ref={textRef} className="text-text-primary">
            {/* <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                RabiGame{" "}
              </span> */}
            <span>RabiGame</span> as a company built upon a unique breadth of
            expertise working on AAA projects across the world. After 14 years
            as a support studio, we have since March 2024 decided to take the
            first step on our journey to focus solely on our internal titles,
            realizing our dream of becoming a lead studio.
          </h5>
          <h5 className="max-w-[39rem] text-text-secondary opacity-40 -z-10 absolute top-0 left-0">
            <span>RabiGame</span> as a company built upon a unique breadth of
            expertise working on AAA projects across the world. After 14 years
            as a support studio, we have since March 2024 decided to take the
            first step on our journey to focus solely on our internal titles,
            realizing our dream of becoming a lead studio.
          </h5>
        </div>
        {/* <img
          id="bunny-img"
          src="/bunny-stripe.png"
          alt="bunny image"
          className="scale-30 absolute left-0 inset-0 bottom-0"
        /> */}

        <Link
          href="/about"
          className="px-8 lg:px-12 py-4 bg-accent-primary w-fit text-white font-neueMachina-bold"
        >
          Read More
        </Link>
        {/* <Btn /> */}
      </div>
    </section>
  );
};

export default About;
