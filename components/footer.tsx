import { useTranslations } from "next-intl"

import { DATA } from "@/data/resume"
import { Link } from "@/i18n/navigation"

export default function Footer() {
  const t = useTranslations("footer")
  const currentYear = new Date().getFullYear()

  return (
    <footer className='mx-auto flex max-w-3xl flex-col gap-2 px-6 pt-32 pb-16 text-center text-muted-foreground text-sm'>
      <p>
        &copy; {currentYear} {DATA.name} - {t("rights")}
      </p>
      <div className='mt-2 space-x-4'>
        <Link className='hover:underline' href='/imprint'>
          {t("imprint")}
        </Link>
        <Link className='hover:underline' href='/privacy'>
          {t("privacy")}
        </Link>
      </div>
    </footer>
  )
}
