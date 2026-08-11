import { LuBriefcase } from 'react-icons/lu'
import { experiences } from '../data/experience'
import SectionHeader from './ui/SectionHeader'

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeader icon={LuBriefcase} title="Experience" />

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 md:p-10">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1
            return (
              <div
                key={index}
                className="grid grid-cols-[1.25rem_1fr] gap-x-4 md:grid-cols-[9rem_1.25rem_1fr] md:gap-x-6"
              >
                {/* Period (desktop) */}
                <div className="hidden pt-1.5 text-sm leading-relaxed text-neutral-500 md:block">
                  {exp.period}
                </div>

                {/* Timeline marker */}
                <div className="relative flex justify-center">
                  <span className="relative z-10 mt-2 h-2.5 w-2.5 rounded-full bg-neutral-900" />
                  {!isLast && (
                    <span className="absolute bottom-0 top-[1.125rem] w-px bg-neutral-200" />
                  )}
                </div>

                {/* Content */}
                <div className={isLast ? 'pb-0' : 'pb-10'}>
                  <p className="text-sm font-medium text-neutral-500 md:hidden">
                    {exp.period}
                  </p>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-neutral-700">
                    {exp.company}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-neutral-600">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
