import { ReactLenis } from "lenis/react";

import BlobCursor from "@/components/BlobCursor";
import Hero from "@/app/pages/Hero";
import NavBtn from "@/components/Nav/NavBtn";
import About from "../pages/About";

const page = () => {
  return (
    <main className="scroll-container lenis lenis-scrolling relative">
      <ReactLenis root />
      <BlobCursor />
      <Hero />
      <NavBtn />
      <About />
    </main>
  );
};

export default page;
