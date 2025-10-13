"use client";
import Link from "next/link";
import { useState } from "react";

const GamePoster = ({ src, className, alt, title, tag, year, name }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      data-game-poster
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-active={hover ? "true" : "false"}
      // href={`/games/${name}`}
      href={`/games/battlefield-6`}
      className={"game-poster " + (className ? className : "")}
    >
      <div className="image-container">
        <img
          src={src}
          alt={alt}
          className={
            "object-cover w-full h-full shadow-xl transition duration-300 ease-in-out " +
            (hover ? "scale-105" : " ")
          }
        />
      </div>

      <div className="caption">
        <div className="caption-title">
          <h5>{title}</h5>
          <span>{tag}</span>
        </div>
        <div className="date">
          <h5
            style={{
              transformOrigin: "top center",
              transform: hover ? "scaleY(0)" : "scaleY(1)",
              transition: "transform 300ms cubic-bezier(.2,.9,.2,1)",
            }}
          >
            {year}
          </h5>

          <h5
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
