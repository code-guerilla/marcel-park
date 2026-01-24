import { Briefcase, MapPin } from "lucide-react"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <main className='flex min-h-dvh flex-col space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full space-y-8'>
          <div className='flex justify-between gap-2'>
            <div className='flex flex-1 flex-col space-y-1.5'>
              <BlurFadeText
                className='font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none'
                delay={BLUR_FADE_DELAY}
                text={t("hero.greeting", {
                  firstName: DATA.name.split(" ")[0],
                })}
                yOffset={8}
              />
              <BlurFadeText
                className='max-w-[600px] md:text-xl'
                delay={BLUR_FADE_DELAY}
                text={t("hero.description")}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Link
                  className='flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground hover:underline'
                  href={DATA.locationLink}
                  target='_blank'
                >
                  <MapPin className='size-3.5' />
                  {DATA.location}
                </Link>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                <Link
                  className='mt-2 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-medium text-green-600 text-xs transition-colors hover:bg-green-500/20 dark:text-green-400'
                  href='#contact'
                >
                  <Briefcase className='size-3' />
                  {t("hero.openForWork")}
                </Link>
              </BlurFade>
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
          <h2 className='font-bold text-xl'>{t("about.title")}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className='prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground text-sm'>
            <Markdown>{t("about.summary")}</Markdown>
          </div>
        </BlurFade>
      </section>
      <section id='work'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className='font-bold text-xl'>{t("work.title")}</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              key={work.company}
            >
              <ResumeCard
                altText={work.company}
                badges={getWorkBadges(t, work.company)}
                description={getWorkDescription(t, work.company)}
                href={work.href}
                key={work.company}
                logoClassName={
                  (work as { logoClassName?: string }).logoClassName
                }
                logoUrl={work.logoUrl}
                period={`${work.start} - ${work.end ?? t("common.today")}`}
                subtitle={getWorkTitle(t, work.company)}
                title={work.company}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id='education'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className='font-bold text-xl'>{t("education.title")}</h2>
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
                logoClassName={
                  (education as { logoClassName?: string }).logoClassName
                }
                logoUrl={education.logoUrl}
                period={`${education.start} - ${education.end}`}
                subtitle={getEducationDegree(t, education.school)}
                title={education.school}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id='skills'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className='font-bold text-xl'>{t("skills.title")}</h2>
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
                  {t("projects.badge")}
                </div>
                <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                  {t("projects.title")}
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {t("projects.description")}
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
                  description={t("projects.drink2art.description")}
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
                  {t("boschProjects.badge")}
                </div>
                <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                  {t("boschProjects.title")}
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {t("boschProjects.description")}
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
                  dates={getBoschProjectScope(t, project.title)}
                  description={getBoschProjectDescription(t, project.title)}
                  key={project.title}
                  tags={[getBoschProjectRole(t, project.title)]}
                  title={getBoschProjectTitle(t, project.title)}
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
                  {t("milestones.badge")}
                </div>
                <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                  {t("milestones.title")}
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  {t("milestones.description")}
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
                    description={getMilestoneDescription(t, project.title)}
                    icon={
                      (project as unknown as { icon?: React.ElementType }).icon
                    }
                    image={(project as unknown as { image?: string }).image}
                    links={project.links}
                    location={project.location}
                    title={getMilestoneTitle(t, project.title)}
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
                {t("contact.badge")}
              </div>
              <h2 className='font-bold text-3xl tracking-tighter sm:text-5xl'>
                {t("contact.title")}
              </h2>
              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                {t("contact.description")}{" "}
                <Link
                  className='text-blue-500 hover:underline'
                  href={`mailto:${DATA.contact.email}`}
                >
                  {t("contact.email")}
                </Link>{" "}
                {t("contact.descriptionEnd")}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}

// Helper functions to map company/school names to translation keys
function getWorkBadges(
  t: Awaited<ReturnType<typeof getTranslations>>,
  company: string
): readonly string[] {
  const keyMap: Record<string, string> = {
    "Park Digital Solutions": "parkDigitalSolutions",
    "Robert Bosch GmbH": "bosch",
    "HMP Heidenhain Microprint": "hmp",
    "Stadtwerke Elmshorn": "stadtwerke",
  }
  const key = keyMap[company]
  if (!key) {
    return []
  }
  return t.raw(`work.${key}.badges`) as readonly string[]
}

function getWorkTitle(
  t: Awaited<ReturnType<typeof getTranslations>>,
  company: string
): string {
  const keyMap: Record<string, string> = {
    "Park Digital Solutions": "parkDigitalSolutions",
    "Robert Bosch GmbH": "bosch",
    "HMP Heidenhain Microprint": "hmp",
    "Stadtwerke Elmshorn": "stadtwerke",
  }
  const key = keyMap[company]
  if (!key) {
    return ""
  }
  return t(`work.${key}.title`)
}

function getWorkDescription(
  t: Awaited<ReturnType<typeof getTranslations>>,
  company: string
): string {
  const keyMap: Record<string, string> = {
    "Park Digital Solutions": "parkDigitalSolutions",
    "Robert Bosch GmbH": "bosch",
    "HMP Heidenhain Microprint": "hmp",
    "Stadtwerke Elmshorn": "stadtwerke",
  }
  const key = keyMap[company]
  if (!key) {
    return ""
  }
  return t(`work.${key}.description`)
}

function getEducationDegree(
  t: Awaited<ReturnType<typeof getTranslations>>,
  school: string
): string {
  const keyMap: Record<string, string> = {
    "Robert Bosch GmbH": "bosch",
    "Stadtwerke Elmshorn": "stadtwerke",
  }
  const key = keyMap[school]
  if (!key) {
    return ""
  }
  return t(`education.${key}.degree`)
}

function getBoschProjectTitle(
  t: Awaited<ReturnType<typeof getTranslations>>,
  title: string
): string {
  const keyMap: Record<string, string> = {
    "Manufacturing & Maintenance Suite (MMS)": "mms",
    "Strategic Personnel Planning (SPP)": "spp",
    "ITM-Location CMDB (Device Finder)": "deviceFinder",
    "My Stuff – Interner Marktplatz": "myStuff",
    "ASM-Hub (Application Lifecycle Management)": "asmHub",
  }
  const key = keyMap[title]
  if (!key) {
    return title
  }
  return t(`boschProjects.${key}.title`)
}

function getBoschProjectRole(
  t: Awaited<ReturnType<typeof getTranslations>>,
  title: string
): string {
  const keyMap: Record<string, string> = {
    "Manufacturing & Maintenance Suite (MMS)": "mms",
    "Strategic Personnel Planning (SPP)": "spp",
    "ITM-Location CMDB (Device Finder)": "deviceFinder",
    "My Stuff – Interner Marktplatz": "myStuff",
    "ASM-Hub (Application Lifecycle Management)": "asmHub",
  }
  const key = keyMap[title]
  if (!key) {
    return ""
  }
  return t(`boschProjects.${key}.role`)
}

function getBoschProjectScope(
  t: Awaited<ReturnType<typeof getTranslations>>,
  title: string
): string {
  const keyMap: Record<string, string> = {
    "Manufacturing & Maintenance Suite (MMS)": "mms",
    "Strategic Personnel Planning (SPP)": "spp",
    "ITM-Location CMDB (Device Finder)": "deviceFinder",
    "My Stuff – Interner Marktplatz": "myStuff",
    "ASM-Hub (Application Lifecycle Management)": "asmHub",
  }
  const key = keyMap[title]
  if (!key) {
    return ""
  }
  return t(`boschProjects.${key}.scope`)
}

function getBoschProjectDescription(
  t: Awaited<ReturnType<typeof getTranslations>>,
  title: string
): string {
  const keyMap: Record<string, string> = {
    "Manufacturing & Maintenance Suite (MMS)": "mms",
    "Strategic Personnel Planning (SPP)": "spp",
    "ITM-Location CMDB (Device Finder)": "deviceFinder",
    "My Stuff – Interner Marktplatz": "myStuff",
    "ASM-Hub (Application Lifecycle Management)": "asmHub",
  }
  const key = keyMap[title]
  if (!key) {
    return ""
  }
  return t(`boschProjects.${key}.description`)
}

function getMilestoneTitle(
  t: Awaited<ReturnType<typeof getTranslations>>,
  title: string
): string {
  const keyMap: Record<string, string> = {
    "Custom Mechanical Keyboards & Ergonomie": "keyboards",
    "drink2art.com Launch": "drink2artLaunch",
    "Fachinformatiker-Ausbildung mit Auszeichnung": "fiAusbildung",
    "Home-Server & Smart Home Automation": "homeServer",
    "GitHub Enterprise Server Administrator": "githubAdmin",
    "Enterprise Web Template & Design System": "webTemplate",
    "Legacy C# → JavaScript Migration": "legacyMigration",
  }
  const key = keyMap[title]
  if (!key) {
    return title
  }
  return t(`milestones.${key}.title`)
}

function getMilestoneDescription(
  t: Awaited<ReturnType<typeof getTranslations>>,
  title: string
): string {
  const keyMap: Record<string, string> = {
    "Custom Mechanical Keyboards & Ergonomie": "keyboards",
    "drink2art.com Launch": "drink2artLaunch",
    "Fachinformatiker-Ausbildung mit Auszeichnung": "fiAusbildung",
    "Home-Server & Smart Home Automation": "homeServer",
    "GitHub Enterprise Server Administrator": "githubAdmin",
    "Enterprise Web Template & Design System": "webTemplate",
    "Legacy C# → JavaScript Migration": "legacyMigration",
  }
  const key = keyMap[title]
  if (!key) {
    return ""
  }
  return t(`milestones.${key}.description`)
}
