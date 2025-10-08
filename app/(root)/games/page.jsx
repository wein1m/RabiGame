"use client";

import useDetectScroll from "@/components/useDetectScroll";
import { useEffect, useState } from "react";

const page = () => {
  const { scrollDir } = useDetectScroll({ debounceMs: 150 });
  const carousel = [1, 2, 3, 4, 5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  useEffect(() => {
    scrollDir == "down"
      ? setIndex((prev) => (prev - 1) % carousel.length)
      : setIndex((prev) => (prev + 1) % carousel.length);
    console.log(scrollDir);
  }, [scrollDir]);

  // const timer = setInterval(() => {
  //   setIndex((prev) => (prev + 1) % carousel.length);
  // }, 3000);
  // return () => clearInterval(timer);

  return (
    <div className="w-screen h-[99999999rem]">
      <div className="text-9xl font-neueMachina-bold fixed top-1/2 -mt-24 -ml-8 left-1/2">
        {carousel[index]}
      </div>
      {/* <div className="bg-red-500 w-52 h-20 my-52" /> */}
    </div>
  );
};

export default page;
