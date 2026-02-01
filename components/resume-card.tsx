"use client"

import { ChevronRightIcon, ExternalLink } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ResumeCardProps = {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string
  logoClassName?: string
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  logoClassName,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleCardClick = () => {
    if (description) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <Card
      className={cn(
        "relative flex cursor-pointer",
        description && "transition-colors hover:bg-muted/50"
      )}
      onClick={handleCardClick}
    >
      {href && (
        <Link
          className='absolute top-2 right-2 z-10 text-muted-foreground transition-colors hover:text-foreground'
          href={href}
          onClick={(e) => e.stopPropagation()}
          target='_blank'
        >
          <ExternalLink className='size-4' />
        </Link>
      )}
      <div className='flex-none pl-2'>
        <Image
          alt={altText}
          className={cn("h-10 max-w-40 object-contain", logoClassName)}
          height={40}
          src={logoUrl}
          width={200}
        />
      </div>
      <div className='group ml-4 grow flex-col items-start'>
        <CardHeader className='p-4 pb-2'>
          <div className='flex flex-col gap-y-1.5'>
            <div className='flex items-start justify-between gap-x-2'>
              <h3 className='inline-flex items-center gap-x-1 font-semibold text-xs leading-none sm:text-sm'>
                {title}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className='shrink-0 text-muted-foreground text-xs tabular-nums sm:text-sm'>
                {period}
              </div>
            </div>
            {badges && (
              <div className='flex flex-wrap gap-1'>
                {badges.map((badge) => (
                  <Badge
                    className='text-xs sm:text-sm'
                    key={badge}
                    variant='secondary'
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          {subtitle && <div className='font-sans text-xs'>{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            className='mt-2 text-xs sm:text-sm'
            initial={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {description}
          </motion.div>
        )}
      </div>
    </Card>
  )
}
