import type { Metadata } from "next"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import "./globals.css"

import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from "@/i18n/routing"

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
}

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html className='scroll-smooth' lang='de' suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24",
          GeistSans,
          GeistMono
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <Footer />
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  )
}
