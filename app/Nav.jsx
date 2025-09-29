import NavBtn from "@/components/Btn";
import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-start z-[1000] p-10">
      <div id="logo" className="font-hk-grotesk font-bold text-2xl uppercase text-primary mix-blend-difference">
        RabiGames
      </div>
      <NavBtn />
    </nav>
  );
};

export default Nav;
