import GamePoster from "@/components/GamePoster";
import MiniDesc from "@/components/MiniDesc";
import { gamePosters } from "@/utils/constants";
import React from "react";

const Games = () => {
  return (
    <section id="games">
      <div className="title">
        <h1>Games</h1>
        <MiniDesc
          text="As a creative studio, what we create defines who we are. Here are some snapshots of what we have made, but more importantly, where we are going."
          style="minidesc"
        />
      </div>
      <div className="posters">
        <div className="row">
          <GamePoster
            name="battlefield6"
            src={gamePosters[0].src}
            alt={gamePosters[0].alt}
            title={gamePosters[0].title}
            tag={gamePosters[0].tag}
            year={gamePosters[0].year}
          />

          <GamePoster
            name="arknights"
            src={gamePosters[1].src}
            alt={gamePosters[1].alt}
            title={gamePosters[1].title}
            tag={gamePosters[1].tag}
            year={gamePosters[1].year}
          />
        </div>

        <div className="row">
          <GamePoster
            name="assasin_creed"
            src={gamePosters[2].src}
            alt={gamePosters[2].alt}
            title={gamePosters[2].title}
            tag={gamePosters[2].tag}
            year={gamePosters[2].year}
          />

          <GamePoster
            name="muse_dash"
            src={gamePosters[3].src}
            alt={gamePosters[3].alt}
            title={gamePosters[3].title}
            tag={gamePosters[3].tag}
            year={gamePosters[3].year}
          />
        </div>
      </div>
    </section>
  );
};

export default Games;
