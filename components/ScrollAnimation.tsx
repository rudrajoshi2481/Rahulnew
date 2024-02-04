"use client";
import React, { useEffect, useRef } from "react";
import {
  AnimatePresence,
  isValidMotionProp,
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { wrap } from "@motionone/utils";
import { Noto_Serif } from "next/font/google";

const inter = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export function Parallaxp({ children, baseVelocity = 100 }: any) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  console.log("Animation frame working ");
  // @ts-ignore
  useAnimationFrame((t, delta): any => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    // @ts-ignore
    let time = t;

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div className="parallax">
      <AnimatePresence>
        <motion.div key="modal" className="scroller" style={{ x }}>
          <p className={inter.className} style={{ fontSize: "1em" }}>
            {children}{" "}
          </p>
          <p className={inter.className} style={{ fontSize: "1em" }}>
            {children}{" "}
          </p>
          <p className={inter.className} style={{ fontSize: "1em" }}>
            {children}{" "}
          </p>
          <p className={inter.className} style={{ fontSize: "1em" }}>
            {children}{" "}
          </p>
          <p className={inter.className} style={{ fontSize: "1em" }}>
            {children}{" "}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function ScrollAnimation() {
  return (
    <div className="w-full py-6 overflow-hidden">
      <Parallaxp baseVelocity={-1}>| BENIFEXIM.COM | BENIFEXIM.COM</Parallaxp>
      <div className="mt-5" />
      <Parallaxp baseVelocity={-2}>
       VEGETABLES | CLOTHING | PHARMACEUTICALS |
      </Parallaxp>
    </div>
  );
}

export default ScrollAnimation;
