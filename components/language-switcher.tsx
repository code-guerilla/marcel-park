"use client"

import Image from "next/image"
import { useLocale } from "next-intl"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

const locales = [
  { code: "de", label: "DE", flag: "/de.svg" },
  { code: "en", label: "EN", flag: "/en.svg" },
] as const

type LanguageSwitcherProps = {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: string | null) => {
    if (newLocale) {
      router.replace(pathname, { locale: newLocale as "en" | "de" })
    }
  }

  const currentLocale = locales.find((l) => l.code === locale) ?? locales[0]

  return (
    <Select onValueChange={handleLocaleChange} value={locale}>
      <SelectTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "h-12 w-12 border-none p-0 shadow-none ring-0 focus:ring-0 focus-visible:ring-0 [&_svg]:hidden",
          className
        )}
      >
        <SelectValue className='flex h-full w-full items-center justify-center'>
          <span className='flex h-full w-full items-center justify-center'>
            <Image
              alt={currentLocale.label}
              className='rounded-sm object-cover'
              height={24}
              src={currentLocale.flag}
              width={24}
            />
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align='end' className='min-w-[80px]'>
        {locales.map((loc) => (
          <SelectItem
            className='cursor-pointer'
            key={loc.code}
            value={loc.code}
          >
            <span className='flex items-center gap-2'>
              <Image
                alt={loc.label}
                className='rounded-sm'
                height={20}
                src={loc.flag}
                width={20}
              />
              <span className='font-bold text-xs'>{loc.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
