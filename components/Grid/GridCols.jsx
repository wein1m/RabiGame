const GridCols = ({ isBottom }) => {
  const borderOdd = isBottom ? "border-y border-x" : "border-t border-x";
  const borderEven = isBottom ? "border-y" : "border-t";

  return (
    <div className="grid grid-cols-7 gap-0">
      <div className={`col-span-1 size-[7rem] size- ${borderOdd} border-accent-secondary`}></div>
      <div className={`col-span-1 size-[7rem] ${borderEven} border-accent-secondary`}></div>
      <div className={`col-span-1 size-[7rem] ${borderOdd} border-accent-secondary`}></div>
      <div className={`col-span-1 size-[7rem] ${borderEven} border-accent-secondary`}></div>
      <div className={`col-span-1 size-[7rem] ${borderOdd} border-accent-secondary`}></div>
      <div className={`col-span-1 size-[7rem] ${borderEven} border-accent-secondary`}></div>
      <div className={`col-span-1 size-[7rem] ${borderOdd} border-accent-secondary`}></div>
    </div>
  );
};

export default GridCols;
