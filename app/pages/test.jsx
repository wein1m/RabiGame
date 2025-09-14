import MiniDesc from "@/components/MiniDesc";
import { gamePosters } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const Games = () => {
  [ title, alt, src, tag, year ] = gamePosters;

  return (
    <div className="px-14">
      <div className="flex flex-row justify-between items-center px-20">
        <h1 className="font-neueMachina-bold text-[11rem]">Games</h1>
        <MiniDesc
          text="As a creative studio, what we create defines who we are. Here are some snapshots of what we have made, but more importantly, where we are going."
          style="max-w-120 mr-28"
        />
      </div>
      <div>
        {gamePosters.map((game, index) => (
          <Link
            id="gamePoster"
            data-game-poster
            href="#"
            className="flex flex-col gap-7 mb-28"
            key={index}
          >
            <div className="overflow-hidden w-full h-[60rem] bg-secondary/80 shadow-lg">
              <img
                src={game.src}
                alt={game.alt}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-col ml-20">
                <h5 className="font-neueMachina-bold text-[4rem] -z-1">
                  {game.title}
                </h5>
                <span
                  className="font-hk-grotesk transform-[scale(1.1,1)] -mt-4 w-full -z-3"
                  style={{ transformOrigin: "left" }}
                >
                  {game.tag}
                </span>
              </div>
              <div>
                <h5 className="font-neueMachina-bold text-3xl mt-5 text-text-secondary mr-14 -z-1">
                  {game.year}
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Games;
