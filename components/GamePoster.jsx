"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const GamePoster = ({
  width,
  height,
  mr,
  src,
  objectPosition,
  className,
  alt,
  title,
  tag,
  year,
}) => {
  const titleRef = useRef(null);
  const [hover, setHover] = useState(false);

  return (
    <Link
      data-game-poster
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-active={hover ? "true" : "false"}
      href="#"
      className={"flex flex-col gap-7 " + (className ? className : "")}
      style={{
        width: width,
        height: height,
        marginRight: mr,
      }}
    >
      <div className="overflow-hidden w-full h-full bg-secondary/80 shadow-lg">
        <img
          src={src}
          alt={alt}
          className={
            "object-cover w-full h-full shadow-xl transition duration-300 ease-in-out" +
            (objectPosition ? `object-${objectPosition} ` : " ") +
            (hover ? "scale-105" : " ")
          }
        />
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h5 className="font-neueMachina-bold text-[4rem] -z-1 max-w-[40rem] line-clamp-1">
            {title}
          </h5>
          <span
            className="font-hk-grotesk transform-[scale(1.1,1)] -mt-4 w-full -z-3"
            style={{ transformOrigin: "left" }}
          >
            {tag}
          </span>
        </div>
        <div
          ref={titleRef}
          className="flex items-center justify-center overflow-hidden h-16 w-40 mt-5 relative text-center"
        >
          <h5
            className={
              "font-neueMachina-bold text-3xl text-text-secondary -z-1 w-full"
            }
            style={{
              transformOrigin: "top center",
              transform: hover ? "scaleY(0)" : "scaleY(1)",
              transition: "transform 300ms cubic-bezier(.2,.9,.2,1)",
            }}
          >
            {year}
          </h5>

          <h5
            className={
              "font-neueMachina-bold text-sm text-primary -z-1 absolute inset-0 flex items-center justify-center"
            }
            style={{
              transformOrigin: "bottom center",
              transform: hover ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 300ms cubic-bezier(.2,.9,.2,1)",
            }}
          >
            VIEW THIS GAME
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default GamePoster;
