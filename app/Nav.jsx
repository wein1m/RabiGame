"use client";

import NavBtn from "@/components/Btn";
import useDetectScroll from "@/components/useDetectScroll";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Nav = () => {
  const { scrollDir } = useDetectScroll();
  const tl = useRef(null);

  useEffect(() => {
    gsap.set("#logo", {
      yPercent: 0,
      opacity: 1,
    });

    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "expo.inOut" },
    });

    tl.current.to("#logo", {
      // x: -200,
      yPercent: -20,
      opacity: 0,
      duration: 0.3,
      ease: "power2",
    });
  }, []);

  // if (scrollDir == "down") {
  //   tl.current.play();
  // }
  // if (scrollDir == "up") {
  //   tl.current.reverse();
  // }

  useEffect(() => {
    scrollDir == "down" ? tl.current.play() : tl.current.reverse();
    // console.log(scrollDir);
    // console.log("Logo: ", document.getElementById("#logo"));
  }, [scrollDir]);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-start z-[100] p-10">
      <Link
        id="logo"
        href="/"
        className="relative font-hk-grotesk font-bold text-2xl uppercase text-primary"
      >
        <span>RabiGames</span>
      </Link>
      <NavBtn />
    </nav>
  );
};

export default Nav;
