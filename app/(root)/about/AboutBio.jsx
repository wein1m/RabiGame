import React from "react";

const AboutBio = ({ title, children, no }) => {
  return (
    <div className="border-t border-secondary/60 pt-3 w-full">
      <div className="flex flex-row justify-between">
        <h5 className="text-base font-neueMachina-bold capitalize tracking-wide text-text-primary mb-4">
          {title}
        </h5>
        <h5 className="font-neueMachina-bold text-base text-secondary">/0{no}</h5>
      </div>
      <div className="max-w-[42rem] flex flex-col gap-5 font-hk-grotesk text-base tracking-wide">
        {children}
      </div>
    </div>
  );
};

export default AboutBio;
