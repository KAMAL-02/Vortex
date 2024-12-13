import { experience } from '@/lib/constants'
import BlurFade from '../ui/BlurFade'

const ExperienceCard = () => {
  return (
    <BlurFade delay={0.1}>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border border-[#30363d] bg-gradient-to-r from-[#1a1b26] to-[#24283b] p-6 shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <job.icon className="text-4xl text-[#7a7876]" />
              </div>
              <div className="flex-grow">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-bold dark:text-white">
                    {job.company}
                  </h3>
                  <span className="text-sm text-[#8b949e]">{job.date}</span>
                </div>
                <p className="mb-1 font-semibold text-[#58a6ff]">{job.role}</p>
                <p className="mb-2 text-sm text-[#8b949e]">{job.location}</p>
                <p className="mb-4 text-[#8b949e]">{job.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-[#f0883e]">
                    🔥 Key Achievements:
                  </p>
                  <ul className="list-none space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-[#f0883e]">▹</span>
                        <span className="text-[#8b949e]">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#f0883e] to-[#ff4d4d]"></div>
          </div>
        ))}
      </div>
    </BlurFade>
  )
}

export default ExperienceCard
