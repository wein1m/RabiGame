import React from "react";
import GridCols from "./GridCols";

const Grid = ({ rows = 7, cols = 7, size = "7rem" }) => {
  return (
    <div className="flex flex-col gap-0">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <GridCols
          key={rowIndex}
          cols={cols}
          size={size}
          isBottom={rowIndex === rows - 1}
        />
      ))}
    </div>
  );
};

export default Grid;
