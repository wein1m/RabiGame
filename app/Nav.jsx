"use client";

import NavBtn from "@/components/Nav/NavBtn";
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

  useEffect(() => {
    scrollDir == "down" ? tl.current.play() : tl.current.reverse();
  }, [scrollDir]);

  return (
    <nav className="fixed top-0 left-0 w-screen flex justify-start z-[120] p-4 lg:p-10">
      <Link
        id="logo"
        href="/"
        className="z-[9999] font-hk-grotesk font-bold text-lg lg:text-2xl uppercase text-primary cursor-pointer!"
      >
        <span className="cursor-pointer!">RabiGames</span>
      </Link>
      <NavBtn />
    </nav>
  );
};

export default Nav;
