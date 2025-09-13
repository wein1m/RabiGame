import React from "react";
import GridCols from "./GridCols";

const Grid = () => {
  return (
    <div className="p-20 absolute top-0 right-0">
      <div className="grid grid-rows-7 gap-0">
        <GridCols />
        <GridCols />
        <GridCols />
        <GridCols />
        <GridCols />
        <GridCols />
        <GridCols isBottom={true} />
      </div>
      <button className="m-20 rounded-full absolute bottom-0 right-0 size-56 border-accent-secondary border bg-[#f5f2e4]"></button>
      <img src="/bunny-vector.png" className="m-20 absolute top-[11.3rem] right-30 -rotate-12 scale-68"/>
    </div>
  );
};

export default Grid;
