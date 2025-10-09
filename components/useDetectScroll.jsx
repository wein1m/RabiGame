import { useState, useRef, useCallback, useEffect } from "react";

var Axis;
(function (Axis) {
  Axis["X"] = "x";
  Axis["Y"] = "y";
})(Axis || (Axis = {}));
var Direction;
(function (Direction) {
  Direction["Up"] = "up";
  Direction["Down"] = "down";
  Direction["Left"] = "left";
  Direction["Right"] = "right";
  Direction["Still"] = "still";
})(Direction || (Direction = {}));

function useDetectScroll(props = {}) {
  const {
    target = typeof window !== "undefined" ? window : undefined,
    thr = 0,
    axis = Axis.Y,
    scrollUp = axis === Axis.Y ? Direction.Up : Direction.Left,
    scrollDown = axis === Axis.Y ? Direction.Down : Direction.Right,
    still = Direction.Still,
    debounceMs = 120,
  } = props;

  const [scrollDir, setScrollDir] = useState(still);
  const [scrollPosition, setScrollPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });
  const threshold = Math.max(0, thr);

  const ticking = useRef(false);
  const lastAcceptedScroll = useRef(0); // scroll position where we last accepted a direction
  const candidate = useRef(null); // currently observed candidate direction ("up" or "down")
  const candidateTimer = useRef(null); // timeout id for debouncing candidate

  const clearCandidateTimer = () => {
    if (candidateTimer.current) {
      clearTimeout(candidateTimer.current);
      candidateTimer.current = null;
    }
  };

  const updateScrollDir = useCallback(() => {
    if (!target) return;
    let scroll;
    if (target instanceof Window) {
      scroll = axis === Axis.Y ? target.scrollY : target.scrollX;
    } else {
      scroll = axis === Axis.Y ? target.scrollTop : target.scrollLeft;
    }

    const delta = scroll - lastAcceptedScroll.current;

    if (Math.abs(delta) >= threshold) {
      const newCandidate =
        scroll > lastAcceptedScroll.current ? scrollDown : scrollUp;

      // If candidate equals current committed direction, accept immediately and reset
      if (newCandidate === scrollDir) {
        candidate.current = newCandidate;
        clearCandidateTimer();
        lastAcceptedScroll.current = Math.max(0, scroll);
        // no state change needed (already set)
      } else {
        // If candidate changed, restart debounce timer
        if (candidate.current !== newCandidate) {
          candidate.current = newCandidate;
          clearCandidateTimer();
          candidateTimer.current = setTimeout(() => {
            // commit the candidate after debounceMs of stability
            setScrollDir(candidate.current);
            lastAcceptedScroll.current = Math.max(0, scroll);
            candidate.current = null;
            candidateTimer.current = null;
          }, debounceMs);
        }
        // if candidate.current === newCandidate and timer exists -> waiting for commit
      }
    }
    ticking.current = false;
  }, [target, axis, threshold, scrollDown, scrollUp, scrollDir, debounceMs]);

  useEffect(() => {
    if (!target) {
      console.warn(
        "useDetectScroll: target is not set. Falling back to window."
      );
      return;
    }
    const updateScrollPosition = () => {
      if (!target) return;
      const top = target instanceof Window ? target.scrollY : target.scrollTop;
      const left =
        target instanceof Window ? target.scrollX : target.scrollLeft;
      const bottom =
        (target instanceof Window
          ? document.documentElement.scrollHeight - target.innerHeight
          : target.scrollHeight - target.clientHeight) - top;
      const right =
        (target instanceof Window
          ? document.documentElement.scrollWidth - target.innerWidth
          : target.scrollWidth - target.clientWidth) - left;
      setScrollPosition({ top, bottom, left, right });
    };
    updateScrollPosition();
    const targetElement = target;
    targetElement.addEventListener("scroll", updateScrollPosition);
    return () => {
      targetElement.removeEventListener("scroll", updateScrollPosition);
    };
  }, [target]);

  useEffect(() => {
    if (!target) {
      console.warn(
        "useDetectScroll: target is not set. Falling back to window."
      );
      return;
    }
    if (target instanceof Window) {
      lastAcceptedScroll.current =
        axis === Axis.Y ? target.scrollY : target.scrollX;
    } else {
      lastAcceptedScroll.current =
        axis === Axis.Y ? target.scrollTop : target.scrollLeft;
    }
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDir);
        ticking.current = true;
      }
    };
    const targetElement = target;
    targetElement.addEventListener("scroll", onScroll);
    return () => {
      targetElement.removeEventListener("scroll", onScroll);
      // cleanup candidate timer if any
      if (candidateTimer.current) {
        clearTimeout(candidateTimer.current);
        candidateTimer.current = null;
      }
    };
  }, [target, axis, updateScrollDir]);

  return { scrollDir, scrollPosition };
}

export { Axis, Direction, useDetectScroll as default };
