"use client";
import gsap from "gsap";

const SeeAll = () => {
  const handleEnter = () => {
    gsap.to("#line", {
      width: "100%",
      ease: "easeInExpo",
      duration: 0.5,
    });
    gsap.to("#arrow", {
      rotate: 225,
      ease: "easeInExpo",
      duration: 0.3,
    });
  };

  const handleLeave = () => {
    gsap.to("#line", {
      width: "0",
      ease: "easeInExpo",
      duration: 0.5,
    });
    gsap.to("#arrow", {
      rotate: 180,
      ease: "easeInExpo",
      duration: 0.3,
    });
  };
  return (
    <a
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="mt-10 hover:cursor-pointer p-5"
    >
      <div className="relative gap-2 flex flex-row items-center">
        <h3 className="font-hk-grotesk font-semibold text-3xl hover:cursor-pointer!">See All</h3>
        <div className="absolute w-full bg-primary/20 h-1 bottom-0 rounded-full" />
        <div
          id="line"
          className="absolute w-0 bg-primary h-1 bottom-0 rounded-full"
        />
        <div id="arrow" className="rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 22 22"
          >
            <path
              fill="#000000"
              d="M14 17H5V8h2v5h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1h5v2Z"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default SeeAll;
