import GamePoster from "@/components/GamePoster";
import MiniDesc from "@/components/MiniDesc";
import { gamePosters } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const Games = () => {
  return (
    <div className="px-14">
      <div className="flex flex-row justify-between items-center px-20">
        <h1 className="font-neueMachina-bold text-[11rem]">Games</h1>
        <MiniDesc
          text="As a creative studio, what we create defines who we are. Here are some snapshots of what we have made, but more importantly, where we are going."
          style="max-w-120 mr-28"
        />
      </div>
      <div className="flex flex-col w-full gap-40 justify-between">
        <div className="flex flex-row w-full justify-between">
          <GamePoster
            width="50rem"
            height="60rem"
            mr="10"
            src={gamePosters[1].src}
            alt={gamePosters[1].alt}
            title={gamePosters[1].title}
            tag={gamePosters[1].tag}
            year={gamePosters[1].year}
          />

          <GamePoster
            width="60rem"
            height="40rem"
            mr="10"
            src={gamePosters[0].src}
            alt={gamePosters[0].alt}
            title={gamePosters[0].title}
            tag={gamePosters[0].tag}
            year={gamePosters[0].year}
          />
        </div>

        <div className="flex flex-row w-full justify-between">
          <GamePoster
            width="55rem"
            height="60rem"
            objectPosition="left"
            src={gamePosters[2].src}
            alt={gamePosters[2].alt}
            title={gamePosters[2].title}
            tag={gamePosters[2].tag}
            year={gamePosters[2].year}
          />

          <GamePoster
            width="50rem"
            height="40rem"
            className="-mt-50"
            src={gamePosters[3].src}
            alt={gamePosters[3].alt}
            title={gamePosters[3].title}
            tag={gamePosters[3].tag}
            year={gamePosters[3].year}
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
