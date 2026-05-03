"use client"

import Image from "next/image"
import { useLocale } from "next-intl"
import type { ComponentProps, RefObject } from "react"
import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

const locales = [
  { code: "de", label: "DE", flag: "/de.svg" },
  { code: "en", label: "EN", flag: "/en.svg" },
] as const

type LanguageSwitcherProps = ComponentProps<"button"> & {
  className?: string
}

export const LanguageSwitcher = ({
  className,
  onClick,
  ref,
  ...props
}: LanguageSwitcherProps & { ref?: RefObject<HTMLButtonElement | null> }) => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = () => {
    const nextLocale = locale === "de" ? "en" : "de"
    router.replace(pathname, { locale: nextLocale })
  }

  const currentLocale = locales.find((l) => l.code === locale) ?? locales[0]

  return (
    <button
      className={cn(
        "flex h-12 w-12 cursor-pointer items-center justify-center p-0",
        className
      )}
      onClick={(e) => {
        handleLocaleChange()
        onClick?.(e)
      }}
      ref={ref}
      type='button'
      {...props}
    >
      <span className='flex h-full w-full items-center justify-center'>
        <Image
          alt={currentLocale.label}
          className='rounded-sm object-cover'
          height={24}
          src={currentLocale.flag}
          width={24}
        />
      </span>
    </button>
  )
}
LanguageSwitcher.displayName = "LanguageSwitcher"
