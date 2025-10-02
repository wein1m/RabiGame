import NavBtn from "@/components/Btn";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-start z-[1000] p-10">
      <Link href="/" id="logo" className="font-hk-grotesk font-bold text-2xl uppercase text-primary mix-blend-difference">
        RabiGames
      </Link>
      <NavBtn />
    </nav>
  );
};

export default Nav;
