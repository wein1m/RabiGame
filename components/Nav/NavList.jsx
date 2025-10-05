"use client";

import NavItem from "@/components/Nav/NavItem";
import gsap from "gsap";
import { useEffect } from "react";
import MiniDesc from "../MiniDesc";

const NavList = () => {
  useEffect(() => {
    gsap.set("#navItem", { y: 200 });
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
          <div className="absolute left-0 top-[20%] max-w-66">
            <MiniDesc text={`We are a console/PC games developer\nbased in Bali, Indonesia`} />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavList;
