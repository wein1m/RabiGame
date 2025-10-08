import "./globals.css";
import { Barlow } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import { Quicksand } from "next/font/google";
import localFont from "next/font/local";
import Nav from "./Nav";
import BlobCursor from "@/components/BlobCursor";
import LenisProvider from "./LenisProvider";
import { CustomEase } from "gsap/all";
import gsap from "gsap";
import Footer from "./pages/Footer";
// import Neue_Machina from "next/font/local";

// const NotoSans = Noto_Sans_SC({
//   variable: "--font-noto-sans-sc",
//   subsets: ["latin"],
// });

const HankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const QuickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const BarlowFont = Barlow({
  variable: "--font-barlow",
  weight: "600",
  subsets: ["latin"],
});

const NeueMachina = localFont({
  src: [
    {
      path: "../public/fonts/Neue-Machina/NeueMachina-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue-Machina/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue-Machina/NeueMachina-Ultrabold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
});

gsap.registerPlugin(CustomEase);
export default function RootLayout({ children }) {
  CustomEase.create("easeInExpo", "0.7, 0, 0.84, 0");
  return (
    <html lang="en">
      <body
        className={`${HankenGrotesk.variable} ${NeueMachina.variable} ${BarlowFont.variable} ${QuickSand.variable} antialiased scroll-container lenis lenis-scrolling relative`}
      >
        <LenisProvider>
          <BlobCursor />
          {/* <Nav /> */}
          {children}
          {/* <Footer /> */}
        </LenisProvider>
      </body>
    </html>
  );
}
