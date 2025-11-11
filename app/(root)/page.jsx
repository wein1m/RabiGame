"use client";

import LenisProvider from "../LenisProvider";
import BlobCursor from "@/components/BlobCursor";
import Hero from "@/app/pages/Hero";
import NavBtn from "@/components/Nav/NavBtn";
import About from "../pages/About";
import Games from "../pages/Games";
import News from "../pages/News";
import gsap, { CustomEase } from "gsap/all";
import Grid from "@/components/Grid/Grid";
import Link from "next/link";
import ScrollVelocity from "@/components/ScrollVelocity";
import Quotes from "../pages/Quotes";
import { useMediaQuery } from "react-responsive";

export default function Page() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <main className="overflow-hidden">
      {/* <Quotes /> */}
      <Hero />
      <About />
      <Games />

      <div className="mt-32 relative flex justify-center items-center">
        <div className="px-11 py-4.5 lg:px-[5rem] lg:py-[2.7rem] bg-accent-primary text-white">
          <Link href="#" className="font-neueMachina-bold text-lg lg:text-xl">
            Check all Games
          </Link>
        </div>
        <div className="absolute -z-1">
          {isMobile ? (
            <Grid cols={6} rows={3} size="4rem" />
          ) : (
            <Grid rows={3} cols={17} size="7rem" />
          )}
        </div>
      </div>
      {/* <News /> */}
      <div className="mt-52 -rotate-3">
        <ScrollVelocity
          texts={["✦ RABIGAMES ✦"]}
          className="my-2 stroke-text"
          direction="right"
        />
      </div>
    </main>
  );
}
