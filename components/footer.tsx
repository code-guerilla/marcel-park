import Link from "next/link"
import { DATA } from "@/data/resume"

export default function Footer() {
  return (
    <footer className='mx-auto max-w-2xl px-6 py-32 text-center text-muted-foreground text-sm'>
      <RightsReserved />
      <div className='mt-2 space-x-4'>
        {DATA.footer.links.map((link) => (
          <Link
            className='hover:underline'
            href={link.href}
            key={link.label}
            target={link.target}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  )
}
// biome-ignore lint/suspicious/useAwait: <not nessesary>
async function RightsReserved() {
  "use cache"
  return (
    <p>
      &copy; {new Date().getFullYear()} {DATA.name}. {DATA.footer.rights}
    </p>
  )
}
