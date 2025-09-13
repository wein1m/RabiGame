import { ReactLenis } from "lenis/react";

import BlobCursor from "@/components/BlobCursor";
import Hero from "@/app/pages/Hero";
import NavBtn from "@/components/Nav/NavBtn";
import About from "../pages/About";
import Games from "../pages/Games";

const page = () => {
  return (
    <main className="scroll-container lenis lenis-scrolling relative">
      <ReactLenis root />
      <BlobCursor />
      <Hero />
      <NavBtn />
      <About />
      <Games />
    </main>
  );
};

export default page;
