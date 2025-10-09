"use client";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(SplitText);

const NewsPoster = ({ src, alt, title, short_desc, date }) => {
  const [hover, setHover] = useState(false);
  const shortDesc = useRef(null);
  const textSplit = useRef(null);

  useEffect(() => {
    if (shortDesc.current) {
      textSplit.current = new SplitText(shortDesc.current, { type: "lines" });

      gsap.set(textSplit.current.lines, {
        opacity: 0,
        y: 10,
      });
    }
  }, []);

  const handleHover = () => {
    setHover(true);

    if (textSplit.current) {
      gsap.to(textSplit.current.lines, {
        opacity: 1,
        y: 0,
        ease: "easeInExpo",
        duration: 0.5,
        stagger: 0.09,
      });
    }
  };

  const handleLeave = () => {
    setHover(false);

    if (textSplit.current) {
      gsap.to(textSplit.current.lines, {
        opacity: 0,
        ease: "easeInExpo",
        duration: 0.3,
        onComplete: () => {
          gsap.set(textSplit.current.lines, { opacity: 0, y: 10 });
        },
      });
    }
  };

  return (
    <Link
      data-news-poster
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      data-active={hover ? "true" : "false"}
      href="#"
      className="w-1/2 h-full flex flex-col gap-8"
    >
      <div className="overflow-hidden w-full h-full bg-secondary/80">
        <img
          src={src}
          alt={alt}
          className={`object-cover transition duration-300 ease-in-out ${
            hover ? "scale-105" : ""
          }`}
        />
      </div>
      <div className="w-full h-full flex flex-col">
        <span className="text-secondary text-[0.8rem] font-semibold">{date}</span>

        <h3 className="font-hk-grotesk tracking-wide font-semibold text-4xl">
          {title.toUpperCase()}
        </h3>

        <span
          ref={shortDesc}
          className="mt-2 font-hk-grotesk w-full text-[1.1rem] max-w-[30rem] leading-5 text-primary/80 tracking-tight line-clamp-2"
        >
          {short_desc}
        </span>
      </div>
    </Link>
  );
};

export default NewsPoster;
