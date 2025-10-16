"use client";

import useDetectScroll from "@/components/useDetectScroll";
import { useLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

const page = () => {
  const { scrollDir, scrollEventId } = useDetectScroll({
    debounceMs: 1050,
    allowRepeat: true,
  });

  const carousel = [1, 2, 3, 4, 5];
  const [index, setIndex] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    lenis?.stop();
    document.body.setAttribute("data-lenis-stop", true);
    setIndex(0);
  }, []);

  useEffect(() => {
    if (!scrollDir || scrollDir === "still") return;

    setIndex((prev) => {
      if (scrollDir === "down") {
        // prevent negative modulus
        return (prev - 1 + carousel.length) % carousel.length;
      } else if (scrollDir === "up") {
        return (prev + 1) % carousel.length;
      }
      return prev;
    });

    console.log("scrollDir:", scrollDir, "eventId:", scrollEventId);
  }, [scrollEventId, scrollDir]);

  // const timer = setInterval(() => {
  //   setIndex((prev) => (prev + 1) % carousel.length);
  // }, 3000);
  // return () => clearInterval(timer);

  return (
    <div className="w-screen h-[9999999999rem] overflow-y-scroll">
      <div className="text-9xl font-neueMachina-bold fixed top-1/2 -mt-24 -ml-8 left-1/2">
        {carousel[index]}
      </div>
      <div className="bg-red-500 w-52 h-20 my-52" />
      <div className="bg-red-500 w-52 h-20 my-52" />
      <div className="bg-red-500 w-52 h-20 my-52" />
      <div className="bg-red-500 w-52 h-20 my-52" />
      <div className="bg-red-500 w-52 h-20 my-52" />
      <div className="bg-red-500 w-52 h-20 my-52" />
      <div className="bg-red-500 w-52 h-20 my-52" />
      <div className="bg-red-500 w-52 h-20 my-52" />
      <div className="bg-red-500 w-52 h-20 my-52" />
    </div>
  );
};

export default page;
