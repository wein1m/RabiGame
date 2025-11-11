"use client";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import NavList from "@/components/Nav/NavList";
import { useLenis } from "lenis/react";
import { useStore } from "../../libs/store";

const NavBtn = () => {
  const redCircRef = useRef(null);
  const creamCircRef = useRef(null);
  const tl = useRef(null);

  const isOpen = useStore((s) => s.isNavOpened);
  const toggleNav = useStore((s) => s.toggleNav);

  const lenis = useLenis();

  useEffect(() => {
    gsap.set("#navItems", { autoAlpha: 0 });
    const q = gsap.utils.selector("#navItems");

    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "expo.inOut" },
    });

    tl.current
      .to(redCircRef.current, { scale: 120, duration: 1.2 }, 0)
      .to(creamCircRef.current, { scale: 120, duration: 1.2 }, 0.4)
      .to("#navItems", { autoAlpha: 1, ease: "none", duration: 0 }, 0.7)
      .fromTo(
        q("#navItem"),
        { y: 200 },
        {
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.inOut",
        },
        ">"
      );
  }, []);

  const handleClick = () => {
    toggleNav();

    if (!isOpen) {
      lenis?.stop();
      document.body.setAttribute("data-lenis-stop", "true");
      tl.current?.play();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.removeAttribute("data-lenis-stop");
      tl.current?.reverse(2);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="overflow-hidden">
      <div
        onClick={handleClick}
        className="hover:cursor-pointer absolute top-5 right-5"
      >
        <div className="rounded-full h-9 w-9 bg-accent-primary z-[999] rotate-90 flex items-center text-white justify-center font-bold pb-1 relative">
          :
        </div>

        <div
          ref={creamCircRef}
          className="rounded-full w-9 h-9 bg-[#f5f2e4] z-[600] absolute top-0 left-0"
        />
        <div
          ref={redCircRef}
          className="rounded-full w-9 h-9 bg-accent-primary z-[500] absolute top-0 left-0"
        />
      </div>

      <div id="navItems" className="z-[700] absolute top-0 w-full">
        <NavList />
      </div>
    </div>
  );
};

export default NavBtn;
