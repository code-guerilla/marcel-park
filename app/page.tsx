import Link from "next/link"
import Markdown from "react-markdown"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { MilestoneCard } from "@/components/milestone-card"
import { ProjectCard } from "@/components/project-card"
import { ResumeCard } from "@/components/resume-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  return (
    <main className='flex min-h-dvh flex-col space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='flex justify-between gap-2'>
            <div className='flex flex-1 flex-col space-y-1.5'>
              <BlurFadeText
                className='font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none'
                delay={BLUR_FADE_DELAY}
                text={`Hey, ich bin ${DATA.name.split(" ")[0]} 👋`}
                yOffset={8}
              />
              <BlurFadeText
                className='max-w-[600px] md:text-xl'
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className='size-28 border'>
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className='font-bold text-xl'>Über mich</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className='prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground text-sm'>
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>
      <section id='work'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className='font-bold text-xl'>Berufserfahrung</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              key={work.company}
            >
              <ResumeCard
                altText={work.company}
                badges={work.badges}
                description={work.description}
                href={work.href}
                key={work.company}
                logoClassName={
                  (work as { logoClassName?: string }).logoClassName
                }
                logoUrl={work.logoUrl}
                period={`${work.start} - ${work.end ?? "heute"}`}
                subtitle={work.title}
                title={work.company}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id='education'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className='font-bold text-xl'>Ausbildung</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              key={education.school}
            >
              <ResumeCard
                altText={education.school}
                href={education.href}
                key={education.school}
                logoUrl={education.logoUrl}
                period={`${education.start} - ${education.end}`}
                subtitle={education.degree}
                title={education.school}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id='skills'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className='font-bold text-xl'>Fähigkeiten</h2>
          </BlurFade>
          <div className='flex flex-wrap gap-1'>
            {DATA.skills.map((skill, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 10 + id * 0.05} key={skill}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='w-full space-y-12 py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm'>
                  Meine Projekte
                </div>
                <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                  Entdecke meine aktuellen Arbeiten
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Ich habe an verschiedenen Projekten gearbeitet, von einfachen
                  Webseiten bis hin zu komplexen Webanwendungen. Hier sind
                  einige meiner Favoriten.
                </p>
              </div>
            </div>
          </BlurFade>
          <div
            className={cn(
              "mx-auto grid grid-cols-1 gap-3",
              DATA.projects.length === 1
                ? "max-w-[600px]"
                : "max-w-[800px] sm:grid-cols-2"
            )}
          >
            {DATA.projects.map((project, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                key={project.title}
              >
                <ProjectCard
                  dates={project.dates}
                  description={project.description}
                  href={project.href}
                  image={project.image}
                  key={project.title}
                  links={project.links}
                  tags={project.technologies}
                  title={project.title}
                  video={project.video}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='bosch-projects'>
        <div className='w-full space-y-12 py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm'>
                  Bosch Projekte
                </div>
                <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                  Interne Business-Lösungen
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Während meiner Zeit bei Bosch habe ich verschiedene
                  geschäftskritische Webanwendungen entwickelt, die weltweit
                  oder standortweit im Einsatz sind.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2'>
            {DATA.boschProjects.map((project, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
                key={project.title}
              >
                <ProjectCard
                  dates={project.scope}
                  description={project.description}
                  key={project.title}
                  tags={[project.role]}
                  title={project.title}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='hackathons'>
        <div className='w-full space-y-12 py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm'>
                  Errungenschaften
                </div>
                <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                  Ich liebe es, neue Dinge zu lernen und zu erschaffen
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Im Laufe meiner Karriere habe ich verschiedene Meilensteine
                  erreicht und Verantwortung übernommen. Von der Einführung
                  neuer Technologien bis zur Administration ganzer
                  Entwicklungsplattformen – hier sind einige Highlights.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <ul className='mb-4 ml-4 divide-y divide-dashed border-l'>
              {DATA.personalMilestones.map((project, id) => (
                <BlurFade
                  delay={BLUR_FADE_DELAY * 17 + id * 0.05}
                  key={project.title + project.dates}
                >
                  <MilestoneCard
                    dates={project.dates}
                    description={project.description}
                    icon={
                      (project as unknown as { icon?: React.ElementType }).icon
                    }
                    image={(project as unknown as { image?: string }).image}
                    links={project.links}
                    location={project.location}
                    title={project.title}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id='contact'>
        <div className='grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6'>
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm'>
                Kontakt
              </div>
              <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                Kontaktiere mich
              </h2>
              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Du möchtest mit mir in Kontakt treten? Schreib mir einfach eine{" "}
                <Link
                  className='text-blue-500 hover:underline'
                  href={DATA.contact.social.GitHub.url}
                >
                  Nachricht auf GitHub
                </Link>{" "}
                und ich melde mich so schnell wie möglich.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
