import React from 'react'
import { experience } from '@/lib/constants'
import CdBack from '@/components/shared/CdBack'

const page = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-neu text-5xl font-semibold tracking-tight mb-1">
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
      <div className="space-y-6">
      {experience.map((job, index) => (
        <div
          key={index}
          className="relative bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-6 shadow-lg border border-[#30363d] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#f0883e] to-[#ff4d4d] opacity-10 rounded-bl-full"></div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0"><job.icon className="text-[#f0883e] text-4xl" /></div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-[#f0883e] text-xl font-bold">{job.company}</h3>
                <span className="text-[#8b949e] text-sm">{job.date}</span>
              </div>
              <p className="text-[#58a6ff] font-semibold mb-1">{job.role}</p>
              <p className="text-[#8b949e] text-sm mb-2">{job.location}</p>
              <p className="text-[#8b949e] mb-4">{job.description}</p>
              <div className="space-y-2">
                <p className="text-[#f0883e] font-semibold">🔥 Key Achievements:</p>
                <ul className="list-none space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#f0883e] mr-2">▹</span>
                      <span className="text-[#8b949e]">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f0883e] to-[#ff4d4d]"></div>
        </div>
      ))}
    </div>
    </>
  )
}

export default page
