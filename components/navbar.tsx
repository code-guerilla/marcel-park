"use client"

import { Award, Code, HomeIcon, type LucideIcon, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

import { Dock, DockIcon } from "@/components/magicui/dock"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DATA } from "@/data/resume"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

import { LanguageSwitcher } from "./language-switcher"

type NavItem = {
  href: string
  icon: LucideIcon
  labelKey: string
}

const navItems: NavItem[] = [
  { href: "/", icon: HomeIcon, labelKey: "home" },
  { href: "/#work", icon: Award, labelKey: "resume" },
  { href: "/#projects", icon: Code, labelKey: "projects" },
  { href: "/#contact", icon: Mail, labelKey: "contact" },
]

export default function Navbar() {
  const t = useTranslations("navbar")

  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-4 z-30'>
      <Dock className='pointer-events-auto relative z-50 mx-auto flex h-14 w-fit gap-2 border bg-card/90 p-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl'>
        {navItems.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger
              render={(props) => (
                <Link href={item.href} {...props}>
                  <DockIcon className='size-full cursor-pointer rounded-3xl border border-border bg-background p-0 text-muted-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground'>
                    <item.icon className='size-full overflow-hidden rounded-sm object-contain' />
                  </DockIcon>
                </Link>
              )}
            />
            <TooltipContent
              className='rounded-xl bg-primary px-4 py-2 text-primary-foreground text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
              side='top'
              sideOffset={8}
            >
              <p>{t(item.labelKey)}</p>
            </TooltipContent>
          </Tooltip>
        ))}

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <Tooltip key={name}>
              <TooltipTrigger
                render={(props) => (
                  <a
                    href={social.url}
                    rel='noopener noreferrer'
                    target='_blank'
                    {...props}
                  >
                    <DockIcon className='size-full cursor-pointer rounded-3xl border border-border bg-background p-0 text-muted-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground'>
                      <social.icon className='size-full overflow-hidden rounded-sm object-contain' />
                    </DockIcon>
                  </a>
                )}
              />
              <TooltipContent
                className='rounded-xl bg-primary px-4 py-2 text-primary-foreground text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
                side='top'
                sideOffset={8}
              >
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        <DockIcon className='size-full cursor-pointer rounded-3xl border border-border bg-background p-0 text-muted-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground'>
          <Tooltip>
            <TooltipTrigger
              render={(props) => (
                <AnimatedThemeToggler {...props} className={props.className} />
              )}
            />
            <TooltipContent
              className='rounded-xl bg-primary px-4 py-2 text-primary-foreground text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
              side='top'
              sideOffset={8}
            >
              <p>{t("theme")}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon className='size-full cursor-pointer rounded-3xl border border-border bg-background p-0 text-muted-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground'>
          <Tooltip>
            <TooltipTrigger
              render={(props) => (
                <LanguageSwitcher
                  {...props}
                  className={cn("size-full", props.className)}
                />
              )}
            />
            <TooltipContent
              className='rounded-xl bg-primary px-4 py-2 text-primary-foreground text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]'
              side='top'
              sideOffset={8}
            >
              <p>{t("language")}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  )
}
