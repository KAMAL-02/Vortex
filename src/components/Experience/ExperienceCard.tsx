import { experience } from '@/lib/constants'
import BlurFade from '../ui/BlurFade'

const ExperienceCard = () => {
  return (
    <BlurFade delay={0.1}>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border border-[#30363d]  p-6 shadow-lg"
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
                  <span className="text-sm text-gray-800 dark:text-gray-50">{job.date}</span>
                </div>
                <p className="mb-1 font-semibold dark:text-[#dfdbdb] font-neu">{job.role}</p>
                <p className="mb-2 text-sm text-[#4b4848] dark:text-[#8b949e]">{job.location}</p>
                <p className="mb-4 text-[#4b4848] dark:text-[#b6b4b2]">{job.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-[#161616] dark:text-[#ffffff]">
                    🔥 Key Achievements:
                  </p>
                  <ul className="list-none space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-[#161616] dark:text-[#b6b4b2]">▹</span>
                        <span className="text-[#4b4848] dark:text-[#b6b4b2]">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#000000] to-[#1d1919] dark:bg-gradient-to-r dark:from-[#ffffff] dark:to-[#beb9b9]"></div>
          </div>
        ))}
      </div>
    </BlurFade>
  )
}

export default ExperienceCard
