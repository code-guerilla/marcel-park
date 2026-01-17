"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import type * as React from "react"
import { Button } from "@/components/ui/button"

export function ModeToggle({
  ref,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className='px-2'
      onClick={(e) => {
        onClick?.(e)
        setTheme(theme === "dark" ? "light" : "dark")
      }}
      ref={ref}
      size='icon'
      type='button'
      variant='ghost'
      {...props}
    >
      <Sun className='h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200' />
      <Moon className='hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200' />
    </Button>
  )
}
