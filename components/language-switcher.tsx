"use client"

import Image from "next/image"
import { useLocale } from "next-intl"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter } from "@/i18n/navigation"

const locales = [
  { code: "de", label: "DE", flag: "/de.svg" },
  { code: "en", label: "EN", flag: "/en.svg" },
] as const

export function LanguageSwitcher() {
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
      <SelectTrigger className='flex items-center justify-center rounded-lg border-none bg-transparent p-1 shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-0 [&_svg]:hidden'>
        <SelectValue>
          <span className='flex items-center justify-center'>
            <Image
              alt={currentLocale.label}
              className='rounded-sm'
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
