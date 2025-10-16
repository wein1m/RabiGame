import { ParallaxProviders } from "@/app/ParallaxProviders";
import GlareHover from "@/components/GlareHover";
import ParallaxImage from "@/components/ParallaxImage";
import React from "react";
import AboutBio from "./AboutBio";
import { aboutBio } from "@/utils/constants";
import ScrollVelocity from "@/components/ScrollVelocity";
import ResponsiveImage from "@/components/ResponsiveImage";
import NextBtn from "@/components/NextBtn";

const page = () => {
  return (
    <ParallaxProviders>
      <section id="page-about">
        <div className="aboutPage-title">
          <h3>
            <div className="rounded-full bg-text-primary size-3" />
            About us
          </h3>
          <h1>Who we are?</h1>
        </div>
        <div className="aboutPage-bio">
          <div className="teamImage">
            <div className="overflow-hidden" data-big-blob>
              <ParallaxImage
                src="/images/team/photo1.jpeg"
                isImage={true}
                parallaxSpeed={-5}
              />
            </div>
          </div>
          <div className="bio">
            {aboutBio.map((bio, index) => (
              <AboutBio title={bio.title} no={index + 1} key={index}>
                {bio.paragraph.map((item, i) => (
                  <p key={i} className="text-lg">
                    {item}
                  </p>
                ))}
              </AboutBio>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="aboutUs-image1" data-big-blob>
            <ResponsiveImage
              src="/images/team/photo2.jpeg"
              isImage={true}
              parallaxSpeed={-8}
              className="size-full"
            />
          </div>
        </div>
        <div className="mt-24 -rotate-3">
          <ScrollVelocity
            texts={["✦ RABIGAMES ✦"]}
            className="my-2 stroke-text"
            direction="right"
          />
        </div>
        <div className="aboutUs-image2">
          <div className="overflow-hidden" data-big-blob>
            <ResponsiveImage
              src="/images/team/image1.png"
              isImage={true}
              parallaxSpeed={-8}
              className="size-full"
            />
          </div>
        </div>
        {/* TODO: when contact is hovered, make fill slowly with accent-primary, like progress bar. my idea is by using masking, but idk how */}{" "}
        <NextBtn title="Contact" href="/contact" />
      </section>
    </ParallaxProviders>
  );
};

export default page;

// <GlareHover
//   glareColor="#ffffff50"
//   glareOpacity={0.3}
//   glareAngle={-30}
//   glareSize={300}
//   transitionDuration={800}
//   playOnce={false}
// >
//   <img
//     id="bunny-img"
//     src="/images/team/photo1.jpeg"
//     alt="bunny image"
//     className="object-cover"
//   />
// </GlareHover>

{
  /* <div className="w-full flex flex-col gap-14">
            <AboutBio title="Who we are" no={1}>
              <p>
                RabiGames is an independent studio built on rhythm, emotion, and
                curiosity. We create experiences that blend sound, color, and
                motion, where gameplay isn't just something you do, but
                something you feel.
              </p>
              <p>
                Every Rabi project beats with its own heart.. playful,
                expressive, and alive. From small experiments to full-scale
                adventures, our goal is simple: to make games that stay with you
                long after the credits roll.
              </p>
            </AboutBio>
            <AboutBio title="Our History" no={2}>
              <p>
                The name Rabi comes from “rabbit”. A symbol of speed, energy,
                and freedom. Just like a rabbit's boundless motion, RabiGames
                began as a restless idea that refused to sit still.
              </p>
              <p>
                What started as a group of friends tinkering with beats,
                visuals, and prototypes soon grew into something more.. a studio
                where art, sound, and code move in harmony. We built RabiGames
                on late-night calls, countless replays, and an unshakable belief
                that even the smallest team can leave a mark if it listens to
                the rhythm of its passion.
              </p>
            </AboutBio>
          </div> */
}
