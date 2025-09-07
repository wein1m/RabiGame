// import "./globals.css";
import { Noto_Sans_SC } from "next/font/google";

const NotoSans = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${NotoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
