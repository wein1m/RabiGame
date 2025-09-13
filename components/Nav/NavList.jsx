"use client";

import NavItem from "@/components/Nav/NavItem";
import gsap from "gsap";
import { useEffect } from "react";

const NavList = () => {
  useEffect(() => {
    gsap.set("#navItem", { y: 100 });
  }, []);

  return (
    <div className="flex justify-end w-full h-full pt-28">
      <div className="flex flex-col w-fit">
        <div className="h-[9.5rem] overflow-hidden w-full">
          <NavItem label="Home" id="navItem" />
        </div>
        <div className="h-[9.5rem] overflow-hidden w-full">
          <NavItem label="About" id="navItem" />
        </div>
        <div className="h-[9.5rem] overflow-hidden w-full">
          <NavItem label="Games" id="navItem" />
        </div>
        <div className="h-[9.5rem] overflow-hidden w-full">
          <NavItem label="Careers" id="navItem" />
        </div>
        <div className="h-[9.5rem] overflow-hidden w-full">
          <NavItem label="Contact" id="navItem" />
        </div>
      </div>
    </div>
  );
};

export default NavList;
