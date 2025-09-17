import "../globals.css";
import { Barlow } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import Neue_Machina from "next/font/local";

// const NotoSans = Noto_Sans_SC({
//   variable: "--font-noto-sans-sc",
//   subsets: ["latin"],
// });

const HankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
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
      path: "../../public/fonts/Neue-Machina/NeueMachina-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neue-Machina/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neue-Machina/NeueMachina-Ultrabold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${HankenGrotesk.variable} ${NeueMachina.variable} ${BarlowFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
