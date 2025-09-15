import LenisProvider from "../LenisProvider";
import BlobCursor from "@/components/BlobCursor";
import Hero from "@/app/pages/Hero";
import NavBtn from "@/components/Nav/NavBtn";
import About from "../pages/About";
import Games from "../pages/Games";
import News from "../pages/News";

export default function Page() {
  return (
    <LenisProvider>
      <main className="scroll-container lenis lenis-scrolling relative">
        <BlobCursor />
        <Hero />
        <NavBtn />
        <About />
        <Games />
        <News />
      </main>
    </LenisProvider>
  );
}
