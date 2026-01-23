import {
  CheckCircle2,
  Code2,
  Cpu,
  Handshake,
  Lightbulb,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"

const BLUR_FADE_DELAY = 0.04

export default function ParkDigitalSolutionsPage() {
  return (
    <main className='flex min-h-dvh flex-col space-y-10'>
      {/* Hero Section */}
      <section id='hero'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='flex justify-between gap-2'>
            <div className='flex flex-1 flex-col space-y-1.5'>
              <BlurFadeText
                className='font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none'
                delay={BLUR_FADE_DELAY}
                text='Park Digital Solutions'
                yOffset={8}
              />
              <BlurFadeText
                className='max-w-[600px] md:text-xl'
                delay={BLUR_FADE_DELAY}
                text='Maßgeschneiderte Softwarelösungen für Ihr Unternehmen. Digitalisierung mit Hand und Verstand.'
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className='size-28 border'>
                <AvatarImage
                  alt='Park Digital Solutions'
                  src='/park-digital-solutions.png'
                />
                <AvatarFallback>PDS</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Intro/Services Section */}
      <section id='services'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className='font-bold text-xl'>Meine Leistungen</h2>
          </BlurFade>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Card className='h-full'>
                <CardHeader>
                  <Code2 className='mb-2 h-8 w-8 text-primary' />
                  <CardTitle>Individuelle Webentwicklung</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Von der einfachen Landingpage bis zur komplexen
                    Webanwendung. Ich baue performante, skalierbare Lösungen mit
                    modernen Technologien wie{" "}
                    <strong>Next.js, TypeScript und React</strong>.
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <Card className='h-full'>
                <CardHeader>
                  <Cpu className='mb-2 h-8 w-8 text-primary' />
                  <CardTitle>Prozessautomatisierung</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Schluss mit Excel-Chaos und manueller Datenpflege. Ich
                    automatisiere Ihre Geschäftsabläufe mit{" "}
                    <strong>
                      Python, Scripts und intelligenten Schnittstellen
                    </strong>
                    , damit Sie sich auf das Wesentliche konzentrieren können.
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <Card className='h-full'>
                <CardHeader>
                  <Lightbulb className='mb-2 h-8 w-8 text-primary' />
                  <CardTitle>Beratung & Planung</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ich begleite Sie von der ersten Idee bis zum fertigen
                    Produkt. Als <strong>Solution Architect</strong> bei Bosch
                    habe ich gelernt, komplexe Anforderungen in verständliche
                    und umsetzbare Konzepte zu übersetzen.
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <Card className='h-full'>
                <CardHeader>
                  <Rocket className='mb-2 h-8 w-8 text-primary' />
                  <CardTitle>Full-Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ich kümmere mich nicht nur um den Code, sondern auch um das{" "}
                    <strong>Deployment, Hosting und die Wartung</strong>. Sie
                    bekommen eine schlüsselfertige Lösung aus einer Hand.
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Why Me / Trust Section */}
      <section id='why-me'>
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <h2 className='mb-4 font-bold text-xl'>Warum mit mir arbeiten?</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className='prose dark:prose-invert max-w-full space-y-4 text-pretty font-sans text-muted-foreground text-sm'>
            <p>
              Ich bin ganz ehrlich: Ich stehe mit meinem eigenen Gewerbe am
              Anfang. Aber genau das ist <strong>Ihr Vorteil</strong>.
            </p>

            <ul className='grid list-none grid-cols-1 gap-2 pl-0 md:grid-cols-2'>
              <li className='flex items-start gap-2'>
                <Handshake className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span>
                  <strong>100% Fokus:</strong> Als mein erster Kunde genießen
                  Sie meine volle Aufmerksamkeit und Priorität.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span>
                  <strong>Industrie-Erfahrung:</strong> Ich arbeite
                  hauptberuflich als Solution Architect bei der Robert Bosch
                  GmbH – ich weiß, wie man professionelle Software baut.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span>
                  <strong>Ausgezeichnete Qualität:</strong> Meine Ausbildungen
                  habe ich mit Auszeichnung abgeschlossen. Ich liefere keine
                  halben Sachen.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-primary' />
                <span>
                  <strong>Praktiker-Mentalität:</strong> Ich komme aus dem
                  Handwerk. Ich spreche Klartext und liefere Ergebnisse, die
                  funktionieren.
                </span>
              </li>
            </ul>
          </div>
        </BlurFade>
      </section>

      {/* Contact CTA */}
      <section id='contact'>
        <div className='flex flex-col items-center justify-center gap-4 py-12 text-center'>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm'>
                Lassen Sie uns starten
              </div>
              <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                Bereit für den nächsten Schritt?
              </h2>
              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Erzählen Sie mir von Ihrem Projekt oder Ihrer Idee. Das
                Erstgespräch ist völlig unverbindlich und kostenlos.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Link
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "gap-2"
                )}
                href={`mailto:${DATA.contact.email}?subject=Anfrage Park Digital Solutions`}
              >
                <Handshake className='size-4' />
                Jetzt anfragen
              </Link>
              {DATA.contact.social.email && (
                <Link
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2"
                  )}
                  href='/'
                >
                  Mehr über mich im CV
                </Link>
              )}
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
