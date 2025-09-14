"use client";
import { useState } from "react";

// ---------------------- IMPLEMENTATION 🐰🐰 ---------------------- \\
// const page = () => {
//   return (
//     <div className="flex justify-end w-full h-full py-28">
//       <div className="flex flex-col w-fit">
//         <NavItem label="Home" />
//         <NavItem label="About" />
//         <NavItem label="Games" />
//         <NavItem label="Careers" />
//         <NavItem label="Contact" />
//       </div>
//     </div>
//   );
// };
// ------------------------------------------------------------------ \\

const NavItem = ({ label, href, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={id}
      className="inline-grid overflow-hidden hover:cursor-pointer pl-20 pr-40 w-full outline-0 text-start h-[9.5rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <a
        className="row-start-1 col-start-1 font-neueMachina-bold text-[8.5rem] leading-24 inline-block text-primary w-full text-end"
        style={{
          transformOrigin: "top center",
          transform: isHovered ? "scaleY(0)" : "scaleY(1)",
          transition: "transform 0.35s cubic-bezier(0, 0, 0.34, 1) 0.02s,color 0.35s cubic-bezier(0.48, 0.04, 0.52, 0.96) 0s;",
          willCHange: "transform, color",
        }}
      >
        {label}
      </a>

      <a
        className="row-start-1 col-start-1 font-neueMachina-bold text-[8.5rem] leading-24 inline-block text-accent-primary text-end"
        style={{
          transformOrigin: "bottom center",
          transform: isHovered ? "scaleY(1)" : "scaleY(0)",
          transition: "transform 0.35s cubic-bezier(0, 0, 0.34, 1) 0.02s,color 0.35s cubic-bezier(0.48, 0.04, 0.52, 0.96) 0s;",
          willCHange: "transform, color",
        }}
      >
        {label}
      </a>
    </div>
  );
};

export default NavItem;
