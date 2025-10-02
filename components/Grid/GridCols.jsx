const GridCols = ({ cols, isBottom, size }) => {
  return (
    <div
      className="grid gap-0"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {Array.from({ length: cols }).map((_, i) => {
        const isOdd = i % 2 === 0;

        const border = isOdd
          ? isBottom
            ? "border-y border-x"
            : "border-t border-x"
          : isBottom
          ? "border-y"
          : "border-t";

        return (
          <div
            key={i}
            className={`${border} border-accent-secondary`}
            style={{ width: size, height: size }}
          />
        );
      })}
    </div>
  );
};

export default GridCols;
