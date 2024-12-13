import React from 'react'
import CdBack from '@/components/shared/CdBack'
import ExperienceCard from '@/components/Experience/ExperienceCard'

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-1 text-center font-neu text-5xl font-semibold tracking-tight">
          Experience
        </h1>
        <svg
          width="400"
          height="80"
          viewBox="0 0 200 40"
          className="-translate-y-12 translate-x-[-86px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#9400D3" stopOpacity="0" />
              <stop offset="100%" stopColor="#4B0082" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M10 20 L 80 20 L 100 30 H 196"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <ExperienceCard />
    </>
  )
}

export default page
