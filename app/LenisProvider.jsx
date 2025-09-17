"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef, useMemo } from "react";
import { useStore } from "../libs/store";

export default function LenisProvider({ children, root = true, options = {} }) {
  const lenisRef = useRef(null);
  const isNavOpened = useStore((s) => s.isNavOpened);

  // start/stop lenis when nav opens/closes
  useEffect(() => {
    const lenisInstance = lenisRef.current?.lenis;
    if (!lenisInstance) return;
    if (isNavOpened) lenisInstance.stop();
    else lenisInstance.start();
  }, [isNavOpened]);

  // memoize prevent function so ref changes less frequently
  const preventFn = useMemo(
    () => (node) => {
      // when nav is open, prevent lenis from scrolling anywhere
      if (isNavOpened) return true;
      return false;
    },
    [isNavOpened]
  );

  return (
    <ReactLenis
      ref={lenisRef}
      root={root}
      options={{
        ...options,
        lerp: options?.lerp ?? 0.08,
        autoRaf: true,
        anchors: true,
        prevent: preventFn,
      }}
    >
      {children}
    </ReactLenis>
  );
}
