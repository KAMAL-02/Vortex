import Link from 'next/link'
import { Separator } from '../ui/separator'
import { ArrowUpRight } from 'lucide-react'

export const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
      <div className="space-y-5 text-left">
        <p>
          Hi, I&apos;m Kamal, a Full-Stack developer passionate about creating
          seamless, intuitive and user-friendly{' '}
          <span className="bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            APPLICATIONS
          </span>{' '}
          My primary focus is on creating solutions that add positive value to
          the community.
        </p>
        <p>Currently, I&apos;m exploring Web3 and different technologies.</p>
        <div className="flex">
          A Snapshot of my
          <Link href={'/projects'} className="group ml-1 flex">
            {' '}
            Projects.
            <div className="relative size-5 -translate-x-px translate-y-[-2px] overflow-hidden">
              <ArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-4 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
        </div>
        <div className="flex w-full items-center justify-center">
          <Separator className="w-14 bg-[#888]/40" />
        </div>
        <p>
          Find me on Twitter at{' '}
          <Link
            href={'https://x.com/Kamal__Dev'}
            className="wavvy text-blue-500 underline-offset-2"
          >
            x.com
          </Link>{' '}
          or drop an{' '}
          <Link
            href={'mailto:Kamalnayan403@gmail.com'}
            className="wavvy text-blue-500 underline-offset-2"
          >
            email
          </Link>
        </p>
      </div>
    </section>
  )
}
