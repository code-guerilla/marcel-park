"use client"

import { AnimatePresence, motion, type Variants } from "framer-motion"

interface BlurFadeTextProps {
  text: string
  delay?: number
  className?: string
  variant?: Variants
  yOffset?: number
  animateByCharacter?: boolean
}

const BlurFadeText = ({
  text,
  delay = 0,
  className,
  variant,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const characters = text.split("")
  const words = text.split(" ")

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  }
  const combinedVariants = variant || defaultVariants

  if (animateByCharacter) {
    return (
      <div className={`flex flex-wrap ${className}`}>
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={combinedVariants}
              transition={{
                delay: delay + i * 0.03,
                duration: 0.4,
                ease: "easeOut",
              }}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap ${className}`}>
      <AnimatePresence>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={combinedVariants}
            transition={{
              delay: delay + i * 0.05,
              duration: 0.4,
              ease: "easeOut",
            }}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              marginRight: "0.25em",
            }}
          >
            {word}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default BlurFadeText
