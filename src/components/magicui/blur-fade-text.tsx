"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              animate="visible"
              className={cn("inline-block", className)}
              exit="hidden"
              initial="hidden"
              key={i}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
              transition={{
                yoyo: Number.POSITIVE_INFINITY,
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              variants={combinedVariants}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex">
      <AnimatePresence>
        <motion.span
          animate="visible"
          className={cn("inline-block", className)}
          exit="hidden"
          initial="hidden"
          transition={{
            yoyo: Number.POSITIVE_INFINITY,
            delay,
            ease: "easeOut",
          }}
          variants={combinedVariants}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default BlurFadeText;
