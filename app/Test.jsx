"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "@/utils/constants"; // your imported JSON image list

gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  const containerRef = useRef(null);
  const imgCurrent = useRef(null);
  const imgNext = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const total = images.length;

      // GSAP timeline for animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000", // total scroll length
          scrub: 1,
          pin: true,
          onLeave: self => {
            // illusion: reset scroll to top instantly for loop
            // self.scroll(0);
            console.log("leaved")
          },
        },
        onComplete: () => {
          // move to next image index when loop finishes
          setIndex(prev => (prev + 1) % total);
          console.log("Finished!")
        },
      });

      tl.to(containerRef.current, {
        height: "740px",
        ease: "power2.inOut",
        duration: 1,
      })
        .to(containerRef.current, {
          height: "100vh",
          ease: "power2.inOut",
          duration: 1,
        })
        .to(
          imgCurrent.current,
          {
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.8,
          },
          "<0.5" // start fading midway through expansion
        )
        .to(
          imgNext.current,
          {
            opacity: 1,
            ease: "power2.inOut",
            duration: 0.8,
          },
          "<"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [index]);

  console.log(images)

  // Preload next image index
  const nextIndex = (index + 1) % images.length;

  return (
    <section className="relative w-full h-[100000rem] overflow-hidden">
      <div
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >
        {/* Current Image */}
        <img
          ref={imgCurrent}
          src={images[index].src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500"
        />
        {/* Next Image */}
        <img
          ref={imgNext}
          src={images[nextIndex].src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
        />
      </div>
    </section>
  );
}
