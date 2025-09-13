import gsap from "gsap";
import React from "react";

const handleHover = () => {
  gsap.to("#btn", { perspective: 100, duration: 5 });
};

const Btn = () => {
  return (
    <a
      id="btn"
      onMouseEnter={handleHover}
      className="relative mt-6 bg-accent-primary/90 px-6 py-4 flex flex-row items-center w-fit gap-8 font-hk-grotesk text-white font-medium text-sm hover:cursor-pointer!"
    >
      <p className="pr-10">Read more</p>
      <div className="size-10 absolute right-2 p-3 flex rounded-full outline-1 outline-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          viewBox="0 0 15 15"
        >
          <path
            fill="#fff"
            d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
          />
        </svg>
      </div>
    </a>
  );
};

export default Btn;
