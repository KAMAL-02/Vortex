import { FaLaptopCode } from 'react-icons/fa'

type NavItems = {
  name: string
  href: string
}[]

export const navItems: NavItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
]

export const topProjects = [
  {
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729768737/20241024-1115-55.7242109_xfvxoe.mp4',
    imageSrc: '/images/project/Ellipsis.png',
    title: 'Ellipsis',
    tags: ['Nextjs', 'Typescript', 'PostgreSQL', 'Prisma ORM', 'Shadcn UI'],
    timeline: 'Oct 2024',
    tagline:
      'A tool to analyze your code or PR providing functionality to directly comment the analysis on Githubs PR',
    sourceCodeHref: 'https://github.com/KAMAL-02/Ellipsis',
    liveDemoHref: 'https://ellipsis-ruby.vercel.app/',
  },
  {
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1730994176/Quicklinks_edhzua.mp4',
    imageSrc: '/images/project/QuickLinks.png',
    title: 'QuickLinks',
    tags: [
      'Chrome Extension',
      'Typescript',
      'React',
      'Tailwind Css',
      'Chrome storage',
    ],
    timeline: 'Nov 2024',
    tagline:
      'A chrome extension that lets you create shortcuts to your favourite links and access them easily',
    sourceCodeHref: 'https://github.com/KAMAL-02/QuickLinks',
    liveDemoHref: 'https://github.com/KAMAL-02/QuickLinks',
  },
  {
    imageSrc: '/images/project/Codehub.png',
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729062837/20241016-0712-39.9608416_lgupvx.mp4',
    title: 'CodeHub',
    tags: ['Reactjs', 'Nodejs', 'MongoDB', 'TailwindCSS', 'Passport.js'],
    timeline: 'Jun 2024 - July 2024',
    tagline: 'An interface to interact with Githubs API',
    sourceCodeHref: 'https://github.com/KAMAL-02/Codehub',
    liveDemoHref: 'https://codehub-d7oo.onrender.com/',
  },
  {
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729063268/20241016-0719-12.9521917_qjswsa.mp4',
    imageSrc: '/images/project/Linkup.png',
    title: 'Linkup',
    tags: ['Nextjs', 'Typescript', 'Convex', 'Clerk', 'TailwindCSS'],
    timeline: 'July 2024',
    tagline: 'A simple whatsapp inspired Chat App',
    sourceCodeHref: 'https://github.com/KAMAL-02/LinkUp',
    liveDemoHref: 'https://link-up-three.vercel.app/',
  },
  {
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729062244/20241016-0702-36.7349933_se5srd.mp4',
    imageSrc: '/images/project/Pages.png',
    title: 'Pages',
    tags: ['Nextjs', 'Typescript', 'Shadcn UI', 'Accertnity UI', 'TailwindCSS'],
    timeline: 'Aug 2024',
    tagline: 'A website to read your favourite Mangas',
    sourceCodeHref: 'https://github.com/KAMAL-02/Pages',
    liveDemoHref: 'https://pages-nine-eta.vercel.app/',
  },
  {
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729063637/20241016-0726-31.5989794_q3bfgg.mp4',
    imageSrc: '/images/project/StayNest.png',
    title: 'StayNest',
    tags: ['Expressjs', 'EJS', 'cloudinary', 'Javascript', 'Bootstrap'],
    timeline: 'May 2024',
    tagline: 'Rent your spaces',
    sourceCodeHref: 'https://github.com/KAMAL-02/StayNest',
    liveDemoHref: 'https://staynest-zd60.onrender.com/listings',
  },
]

export const experience = [
  {
    company: 'Living things',
    role: 'Full Stack Developer',
    location: 'Remote | Mumbai, India',
    date: 'November 2024 - Current',
    description:
      'Working on bug fixes and implementing new features in the existing codebase.',
    achievements: [
      'Added validators to improve data integrity',
      'Implemented a comprehensive navigation system in the existing codebase',
      'Minor bug fixes and enhancements in forms and user interface.',
      'More soon...',
    ],
    icon: FaLaptopCode,
  },
]
