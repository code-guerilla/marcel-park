import BlurFade from "@/components/magicui/blur-fade"
import { DATA } from "@/data/resume"

const BLUR_FADE_DELAY = 0.04

export default function ImprintPage() {
  return (
    <main className='flex min-h-dvh flex-col space-y-10'>
      <section id='imprint'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='flex flex-col space-y-1.5'>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className='font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Impressum
              </h1>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className='prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground text-sm'>
              <p>
                {DATA.name}
                <br />
                Amselst. 16
                <br />
                90439 Nürnberg
              </p>
              <p>
                <strong>Kontakt:</strong>
                <br />
                Telefon: +49 173 1356466
                <br />
                E-Mail: {DATA.contact.email}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
