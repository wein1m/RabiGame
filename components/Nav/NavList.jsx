"use client";

import NavItem from "@/components/Nav/NavItem";
import gsap from "gsap";
import { useEffect } from "react";
import MiniDesc from "../MiniDesc";
import { navs } from "@/utils/constants";

const NavList = () => {
  useEffect(() => {
    gsap.set("#navItem", { y: 200 });
  }, []);

  return (
    <div className="flex justify-end w-full h-full pt-28 px-32">
      <div className="flex flex-col w-fit">
        {navs.map((nav, i) => (
          <a
            data-nav-list
            key={i}
            href={nav.href}
            className="h-[9.5rem] overflow-hidden w-full"
          >
            <NavItem label={nav.title} id="navItem" />
          </a>
        ))}

        <div className="absolute left-0 top-[42%] max-w-66">
          <MiniDesc
            text={`Shichirigahamahigashi, Kamakura,\nKanagawa 248-0025, Japan`}
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavList;
