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

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Games />

      <div className="mt-32 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[5rem] py-[2.7rem] bg-accent-primary text-white tex">
          <Link href="#" className="font-neueMachina-bold text-xl">
            Check all Games
          </Link>
        </div>
        <Grid rows={3} cols={17} size="7rem" />
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
