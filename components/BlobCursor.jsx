"use client";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(InertiaPlugin);

const BlobCursor = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const blobRef = useRef(null);
  const eyeRef = useRef(null);
  const eyePos = useRef({ x: 0, y: 0 });

  const pos = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    if (!blobRef.current || !eyeRef.current) return;

    // -----------| Blob Initialization |--------------
    gsap.set(blobRef.current, {
      xPercent: -50,
      yPercent: -50,
      width: 12,
      height: 12,
      opacity: 1,
      x: pos.current.x,
      y: pos.current.y,
      willChange: "transform, width, height",
    });
    gsap.set(eyeRef.current, { scale: 0, transformOrigin: "50% 50%" });

    // ----------| Mouse Move Handler |----------
    const onMove = (e) => {
      gsap.to(pos.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
        ease: "power3",
        onUpdate: () => {
          gsap.set(blobRef.current, { x: pos.current.x, y: pos.current.y });
        },
      });

      // eye inertia effect
      gsap.to(eyePos.current, {
        x: e.clientX - pos.current.x,
        y: e.clientY - pos.current.y,
        inertia: { resistance: 30 },
        duration: 3,
        ease: "power2.out",
        onUpdate: () => {
          gsap.set(eyeRef.current, {
            x: -(eyePos.current.x * 0.15),
            y: -(eyePos.current.y * 0.15),
          });
        },
      });
    };
    window.addEventListener("mousemove", onMove);

    // ----------| Hover Target |----------
    const posters = document.querySelectorAll(
      "[data-game-poster], [data-news-poster], video"
    );
    const links = document.querySelectorAll(
      "a:not([data-game-poster]):not([data-news-poster])"
    );
    const bigBlob = document.querySelectorAll("[data-big-blob]");

    // Poster Links =========
    // NOTE: use event.currentTarget to toggle class on the hovered element itself
    const posterEnter = (event) => {
      gsap.killTweensOf(blobRef.current);
      gsap.to(blobRef.current, {
        width: 80,
        height: 80,
        duration: 0.32,
        ease: "power2.out",
      });
      gsap.to(eyeRef.current, { scale: 1, duration: 0.32, ease: "power2.out" });

      const el = event.currentTarget;
      if (el && el.classList) {
        el.classList.add("cursor-pointer");
        el.classList.remove("cursor-default");
      }
    };
    const posterLeave = (event) => {
      gsap.killTweensOf(blobRef.current);
      gsap.to(blobRef.current, {
        width: 12,
        duration: 0.32,
        height: 12,
        ease: "power2.out",
      });
      gsap.to(eyeRef.current, { scale: 0, duration: 0.32, ease: "power2.out" });

      const el = event.currentTarget;
      if (el && el.classList) {
        el.classList.add("cursor-default");
        el.classList.remove("cursor-pointer");
      }
    };

    posters.forEach((el) => {
      el.addEventListener("mouseenter", posterEnter);
      el.addEventListener("mouseleave", posterLeave);
    });

    // Big Blob ========
    // toggle classes on the link element itself
    const bigBlobEnter = (event) => {
      gsap.killTweensOf(blobRef.current);
      gsap.to(blobRef.current, {
        width: 50,
        height: 50,
        opacity: 0.5,
        duration: 0.32,
        ease: "power2.out",
      });

      const el = event.currentTarget;
      if (el && el.classList) {
        el.classList.add("cursor-pointer");
        el.classList.remove("cursor-default");
      }
    };
    const bigBlobLeave = (event) => {
      gsap.killTweensOf(blobRef.current);
      gsap.to(blobRef.current, {
        width: 12,
        height: 12,
        opacity: 1,
        duration: 0.32,
        ease: "power2.out",
      });
      gsap.to(eyeRef.current, { scale: 0, duration: 0.32, ease: "power2.out" });

      const el = event.currentTarget;
      if (el && el.classList) {
        el.classList.add("cursor-default");
        el.classList.remove("cursor-pointer");
      }
    };

    bigBlob.forEach((el) => {
      el.addEventListener("mouseenter", bigBlobEnter);
      el.addEventListener("mouseleave", bigBlobLeave);
    });

    // Other links ========
    // toggle classes on the link element itself
    const linkEnter = (event) => {
      gsap.to(blobRef.current, { scale: 0, duration: 0.3, ease: "power2.out" });
      const el = event.currentTarget;
      if (el && el.classList) {
        el.classList.add("cursor-pointer");
        el.classList.remove("cursor-default");
      }
    };
    const linkLeave = (event) => {
      gsap.to(blobRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
      const el = event.currentTarget;
      if (el && el.classList) {
        el.classList.add("cursor-default");
        el.classList.remove("cursor-pointer");
      }
    };

    links.forEach((el) => {
      el.addEventListener("mouseenter", linkEnter);
      el.addEventListener("mouseleave", linkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      posters.forEach((el) => {
        el.removeEventListener("mouseenter", posterEnter);
        el.removeEventListener("mouseleave", posterLeave);
      });
      links.forEach((el) => {
        el.removeEventListener("mouseenter", linkEnter);
        el.removeEventListener("mouseleave", linkLeave);
      });
      document
        .querySelectorAll(".cursor-pointer")
        .forEach((n) => n.classList.remove("cursor-pointer"));
      document
        .querySelectorAll(".cursor-default")
        .forEach((n) => n.classList.remove("cursor-default"));
    };
  }, []);

  return isMobile ? (
    <div />
  ) : (
    <div className="pointer-events-none fixed inset-0 z-[999999]">
      <div
        ref={blobRef}
        id="blob"
        className="fixed left-0 top-0 rounded-full bg-accent-primary flex items-center justify-center overflow-hidden transform-[translate3d(0,0,0)] will-change-[transform,width,height,color]"
      >
        <div ref={eyeRef} id="eye" className="size-[30px]">
          <Image src="/eye.png" alt="eye" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default BlobCursor;
