"use client"

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
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
] as const

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  const currentLocale = locales.find((l) => l.code === locale) ?? locales[0]

  return (
    <Select defaultValue={locale} onValueChange={handleLocaleChange}>
      <SelectTrigger className='h-10 w-[70px] gap-1 border-none bg-transparent px-2 shadow-none focus:ring-0'>
        <SelectValue>
          <span className='text-lg'>{currentLocale.flag}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc.code} value={loc.code}>
            <span className='flex items-center gap-2'>
              <span className='text-lg'>{loc.flag}</span>
              <span className='text-sm'>{loc.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
