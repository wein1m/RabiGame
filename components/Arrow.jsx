const Arrow = ({ active = false, className }) => {
  return (
    <div
      className={`size-10 flex rounded-full outline-1
      ${active ? "outline-accent-primary" : "outline-white"}
      ${className ? className : ""}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        viewBox="0 0 15 15"
      >
        <path
          fill={active ? "#ff5252" : "#fff"}
          d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
        />
      </svg>
    </div>
  );
};

export default Arrow;
