"use client"

import { useCallback, useRef, useState, useEffect, forwardRef } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = forwardRef<HTMLButtonElement, AnimatedThemeTogglerProps>(({
  className,
  duration = 400,
  onClick,
  ...props
}, ref) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Merge refs to support both internal access and external refs (e.g. from TooltipTrigger)
  const setRefs = useCallback(
    (node: HTMLButtonElement | null) => {
      buttonRef.current = node
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ;(ref as React.MutableRefObject<HTMLButtonElement | null>).current = node
      }
    },
    [ref]
  )

  const toggleTheme = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Call any external onClick handler
    onClick?.(e)

    const newTheme = resolvedTheme === "dark" ? "light" : "dark"

    if (!document.startViewTransition || !buttonRef.current) {
      setTheme(newTheme)
      return
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
        // Manually toggle class to ensure DOM updates synchronously for the transition
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [resolvedTheme, setTheme, duration, onClick])

  if (!mounted) {
    return (
      <button
        ref={setRefs}
        className={cn(className, "opacity-0")}
        {...props}
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      ref={setRefs}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
})

AnimatedThemeToggler.displayName = "AnimatedThemeToggler"
