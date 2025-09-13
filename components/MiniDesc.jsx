import React from "react";

const MiniDesc = ({ text, style }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-3">
        <div className="relative">
          <div className="h-2 w-[1px] bg-accent-primary absolute"></div>
          <div className="h-2 w-[1px] bg-accent-primary rotate-90 absolute"></div>
        </div>
        <div className="relative">
          <div className="h-2 w-[1px] bg-accent-primary absolute"></div>
          <div className="h-2 w-[1px] bg-accent-primary rotate-90 absolute"></div>
        </div>
        <div className="relative">
          <div className="h-2 w-[1px] bg-accent-primary absolute"></div>
          <div className="h-2 w-[1px] bg-accent-primary rotate-90 absolute"></div>
        </div>
      </div>

      <h5
        className={`font-hk-grotesk font-medium text-sm text-text-primary leading-4
      ${style ? style : ""}`}
      >
        {text}
      </h5>
    </div>
  );
};

export default MiniDesc;
