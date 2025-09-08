"use client";

import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import NavList from "./NavList";

const NavBtn = () => {
  const redCircRef = useRef(null);
  const creamCircRef = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen((prev) => !prev);
    if (isOpen) {
      tl.current.reverse(2);
    } else {
      tl.current.play();
    }
  };

  return (
    <div className="overflow-hidden">
      <div
        onClick={handleClick}
        className="hover:cursor-pointer absolute top-5 right-5"
      >
        {/* Button */}
        <div className="rounded-full h-9 w-9 bg-secondary z-[999] rotate-90 flex items-center text-white justify-center font-bold pb-1 relative">
          :
        </div>

        {/* Circles */}
        <div
          ref={creamCircRef}
          className="rounded-full w-9 h-9 bg-[#f5f2e4] z-[600] absolute top-0 left-0"
        ></div>
        <div
          ref={redCircRef}
          className="rounded-full w-9 h-9 bg-secondary z-[500] absolute top-0 left-0"
        ></div>
      </div>

      <div id="navItems" className="z-[700] absolute w-full">
        <NavList />
      </div>
    </div>
  );
};

export default NavBtn;
