import { useTranslations } from "next-intl"
import BlurFade from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

const BLUR_FADE_DELAY = 0.04

export default function ImprintPage() {
  const t = useTranslations("imprintPage")

  return (
    <main className='flex min-h-dvh flex-col space-y-10'>
      <section id='imprint'>
        <div className='mx-auto w-full max-w-3xl space-y-8'>
          <div className='flex flex-col space-y-1.5'>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className='font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none'>
                {t("title")}
              </h1>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className='prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground text-sm'>
              <p>
                Park Digital Solutions
                <br />
                {DATA.name}
                <br />
                Amselst. 16
                <br />
                90439 Nürnberg
              </p>
              <p>
                <strong>{t("contact")}:</strong>
                <br />
                {t("phone")}: +49 173 1356466
                <br />
                {t("email")}: {DATA.contact.email}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
