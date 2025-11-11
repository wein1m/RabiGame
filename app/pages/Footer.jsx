import FloatUp from "@/components/FloatUp";
import ScrollVelocity from "@/components/ScrollVelocity";
import { navs } from "@/utils/constants";
import React from "react";

const Footer = () => {
  // TODO: use doodles as full footer background ( see figma design )
  return (
    <footer className="mt-52">
      <div className="lg:mt-52 px-8 py-8 lg:px-28 lg:py-32 border-t border-secondary/70">
        <div className="flex flex-row justify-between">
          {/* Left Side */}
          <div className="flex flex-col w-full lg:w-fit gap-10 lg:gap-16">
            {/* Office & Sosial Media */}
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col gap-3">
                <h5 className="font-neueMachina-bold">Office</h5>
                <p className="font-hk-grotesk tracking-[0.015em] max-w-44 lg:max-w-80 leading-5" data-big-blob>
                  Shichirigahamahigashi, Kamakura, Kanagawa 248-0025, Japan
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-neueMachina-bold">Follow us</h5>
                <div className="flex flex-col gap-1">
                  <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5" data-big-blob>
                    Youtube
                  </p>
                  <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5" data-big-blob>
                    Instagram
                  </p>
                  <p className="font-hk-grotesk tracking-[0.015em] max-w-80 leading-5" data-big-blob>
                    Twitter
                  </p>
                </div>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="flex flex-col w-fit gap-2">
              <h5 className="font-neueMachina-bold">Get in touch</h5>
              <p className="font-neueMachina-regular text-3xl lg:text-5xl underline" data-big-blob>
                contact@rabigames.com
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-1">
            {navs.map((nav, i) => (
              <a
                key={i}
                href={nav.href}
                className="font-hk-grotesk font-semibold text-xl"
                data-big-blob
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
