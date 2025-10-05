import FloatUp from "@/components/FloatUp";
import ScrollVelocity from "@/components/ScrollVelocity";
import { navs } from "@/utils/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-52">
      <div className="-rotate-3">
        <ScrollVelocity
          texts={["✧ RABIGAMES ✧"]}
          className="my-2 stroke-text"
          direction="right"
        />
        {/* <ScrollVelocity
          texts={["✧ RABIGAMES ✧"]}
          className="text-secondary my-2"
          direction="left"
        /> */}
      </div>
      <div className="mt-52 px-28 py-32 border-t border-secondary/70">
        <div className="flex flex-row justify-between">
          {/* Left Side */}
          <div className="flex flex-col w-fit gap-16">
            {/* Office & Sosial Media */}
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-3">
                <h5 className="font-neueMachina-bold">Office</h5>
                <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5">
                  Shichirigahamahigashi, Kamakura, Kanagawa 248-0025, Japan
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-neueMachina-bold">Follow us</h5>
                <div className="flex flex-col gap-1">
                  <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5">
                    Youtube
                  </p>
                  <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5">
                    Instagram
                  </p>
                  <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5">
                    Twitter
                  </p>
                </div>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="flex flex-col w-fit gap-2">
              <h5 className="font-neueMachina-bold">Get in touch</h5>
              <p className="font-neueMachina-regular text-5xl underline ">
                contact@rabigames.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            {navs.map((nav, i) => (
              <a
                key={i}
                href={nav.href}
                className="font-hk-grotesk text-xl"
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
