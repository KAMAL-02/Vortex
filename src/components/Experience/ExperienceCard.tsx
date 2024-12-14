import { experience } from '@/lib/constants'
import BlurFade from '../ui/BlurFade'

const ExperienceCard = () => {
  return (
    <BlurFade delay={0.1}>
      <div className="space-y-4 sm:space-y-6">
        {experience.map((job, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border border-[#30363d] p-4 shadow-lg sm:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
              <div className="mb-4 flex-shrink-0 sm:mb-0">
                <job.icon className="text-3xl text-[#7a7876] sm:text-4xl" />
              </div>
              <div className="flex-grow">
                <div className="mb-2 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="mb-1 text-lg font-bold dark:text-white sm:mb-0 sm:text-xl">
                    {job.company}
                  </h3>
                  <span className="text-xs text-gray-800 dark:text-gray-50 sm:text-sm">
                    {job.date}
                  </span>
                </div>
                <p className="mb-1 font-neu text-sm font-semibold dark:text-[#dfdbdb] sm:text-base">
                  {job.role}
                </p>
                <p className="mb-2 text-xs text-[#4b4848] dark:text-[#8b949e] sm:text-sm">
                  {job.location}
                </p>
                <p className="mb-4 text-sm text-[#4b4848] dark:text-[#b6b4b2] sm:text-base">
                  {job.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#161616] dark:text-[#ffffff] sm:text-base">
                    🔥 Key Achievements:
                  </p>
                  <ul className="list-none space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-[#161616] dark:text-[#b6b4b2]">
                          ▹
                        </span>
                        <span className="text-xs text-[#4b4848] dark:text-[#b6b4b2] sm:text-sm">
                          {achievement}
                        </span>
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
