"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: Variants;
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
  duration = 0.4,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        {characters.map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={combinedVariants}
            transition={{
              delay: delay + i * characterDelay,
              duration,
              ease: "easeOut",
            }}
            className={cn("inline-block", className)}
            style={{ width: char.trim() === "" ? "0.25em" : "auto" }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={combinedVariants}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={cn("inline-block", className)}
    >
      {text}
    </motion.span>
  );
};

export default BlurFadeText;
