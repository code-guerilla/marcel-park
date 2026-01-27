import {
  CheckCircle2,
  Code2,
  Cpu,
  Handshake,
  Lightbulb,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DATA } from "@/data/resume"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const BLUR_FADE_DELAY = 0.04

export default async function ParkDigitalSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: "parkDigitalSolutions",
  })

  return (
    <main className='flex min-h-dvh flex-col space-y-10'>
      {/* Hero Section */}
      <section id='hero'>
        <div className='mx-auto space-y-8'>
          <div className='flex flex-col items-center justify-between gap-2 sm:flex-row'>
            <div className='flex flex-col space-y-1 text-center sm:flex-1 sm:text-left'>
              <BlurFadeText
                className='font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none'
                delay={BLUR_FADE_DELAY}
                text={t("hero.title")}
                yOffset={8}
              />
              <BlurFadeText
                className='max-w-[600px] md:text-xl'
                delay={BLUR_FADE_DELAY}
                text={t("hero.description")}
              />
            </div>
            <BlurFade
              className='flex max-h-[200px] w-full max-w-[400px] flex-1 items-center justify-center sm:max-w-none'
              delay={BLUR_FADE_DELAY}
            >
              <Image
                alt='Park Digital Solutions'
                className='h-auto w-full object-contain'
                height={400}
                src='/park-digital-solutions.png'
                width={900}
              />
            </BlurFade>
          </div>
        </div>
      </section>
      {/* Intro/Services Section */}
      <section id='services'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className='font-bold text-xl'>{t("services.title")}</h2>
          </BlurFade>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Card className='h-full'>
                <CardHeader>
                  <Code2 className='mb-2 h-8 w-8 text-primary' />
                  <CardTitle>{t("services.webDev.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t.rich("services.webDev.description", {
                      bold: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <Card className='h-full'>
                <CardHeader>
                  <Cpu className='mb-2 h-8 w-8 text-primary' />
                  <CardTitle>{t("services.automation.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t.rich("services.automation.description", {
                      bold: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <Card className='h-full'>
                <CardHeader>
                  <Lightbulb className='mb-2 h-8 w-8 text-primary' />
                  <CardTitle>{t("services.consulting.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t.rich("services.consulting.description", {
                      bold: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <Card className='h-full'>
                <CardHeader>
                  <Rocket className='mb-2 h-8 w-8 text-primary' />
                  <CardTitle>{t("services.fullService.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {t.rich("services.fullService.description", {
                      bold: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>

            {DATA.parkServices.map((service, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * (8 + id * 2)}
                key={service.translationKey}
              >
                <Card className='h-full'>
                  <CardHeader>
                    <service.icon className='mb-2 h-8 w-8 text-primary' />
                    <CardTitle>
                      {/* @ts-ignore */}
                      {t(`services.${service.translationKey}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {/* @ts-ignore */}
                      {t(`services.${service.translationKey}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* Why Me / Trust Section */}
      <section id='why-me'>
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <h2 className='mb-4 font-bold text-xl'>{t("whyMe.title")}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className='prose dark:prose-invert max-w-full space-y-4 text-pretty font-sans text-muted-foreground text-sm'>
            <p>
              {t("whyMe.intro")} <strong>{t("whyMe.introHighlight")}</strong>.
            </p>

            <ul className='grid list-none grid-cols-1 gap-2 pl-0 md:grid-cols-2'>
              <li className='flex items-start gap-2'>
                <Handshake className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span>
                  <strong>{t("whyMe.focus.title")}</strong>{" "}
                  {t("whyMe.focus.description")}
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span>
                  <strong>{t("whyMe.experience.title")}</strong>{" "}
                  {t("whyMe.experience.description")}
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span>
                  <strong>{t("whyMe.quality.title")}</strong>{" "}
                  {t("whyMe.quality.description")}
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span>
                  <strong>{t("whyMe.practical.title")}</strong>{" "}
                  {t("whyMe.practical.description")}
                </span>
              </li>
            </ul>
          </div>
        </BlurFade>
      </section>
      {/* Contact CTA */}
      <section id='contact'>
        <div className='flex flex-col items-center justify-center gap-4 py-12 text-center'>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm'>
                {t("cta.badge")}
              </div>
              <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                {t("cta.title")}
              </h2>
              <p className='mx-auto max-w-150 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                {t("cta.description")}
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Link
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "gap-2"
                )}
                href={`mailto:${DATA.contact.email}?subject=Anfrage Park Digital Solutions`}
              >
                <Handshake className='size-4' />
                {t("cta.button")}
              </Link>
              {/* {DATA.contact.social.email && (
                <Link
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2"
                  )}
                  href='/'
                >
                  {t("cta.cvLink")}
                </Link>
              )} */}
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
