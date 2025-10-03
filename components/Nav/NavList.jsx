"use client";

import NavItem from "@/components/Nav/NavItem";
import gsap from "gsap";
import { useEffect } from "react";
import MiniDesc from "../MiniDesc";

const NavList = () => {
  useEffect(() => {
    gsap.set("#navItem", { y: 200 });
    gsap.set("#miniDesc", { y: 200 }); // start hidden same as navItems
  }, []);

  return (
    <div className="flex justify-end w-full h-full pt-28 px-32">
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

        {/* <div className="relative overflow-hidden"> */}
          <div id="miniDesc" className="absolute left-[20%] top-[40%] max-w-66">
            <MiniDesc text="We are a console/PC games developer based in Bali, Indonesia" />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavList;
