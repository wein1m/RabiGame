"use client";

import NavBtn from "@/components/Btn";
// import useDetectScroll from "@smakss/react-scroll-direction";
import useDetectScroll from "@/components/useDetectScroll";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const { scrollDir } = useDetectScroll();

  useEffect(() => {
    gsap.set("#logo", {
      y: 0,
      // x: 0,
      opacity: 1,
    });
  }, []);

  if (scrollDir == "down") {
    gsap.to("#logo", {
      // x: -200,
      y: -10,
      opacity: 0,
      scaleY: 0.5,
      filter: "blur(2px)",
      duration: 1,
      ease: "power3",
    });
  }
  if (scrollDir == "up") {
    gsap.to("#logo", {
      x: 0,
      y: 0,
      opacity: 1,
      scaleY: 1,
      filter: "none",
      duration: 1,
      ease: "power3",
    });
  }

  useEffect(() => {
    console.log(scrollDir);
    console.log("Logo: ", document.getElementById("#logo"));
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
