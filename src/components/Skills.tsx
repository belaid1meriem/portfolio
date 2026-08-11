import { LuCode, LuDatabase, LuServer, LuSmartphone } from 'react-icons/lu'
import type { IconType } from 'react-icons'
import { skills } from '../data/skills'
import SectionHeader from './ui/SectionHeader'
import TechnologyBadge from './ui/TechnologyBadge'

const SKILL_ICONS: Record<string, IconType> = {
  Frontend: LuCode,
  Backend: LuServer,
  Mobile: LuSmartphone,
  'Databases & Tools': LuDatabase,
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeader icon={LuCode} title="My Skills" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = SKILL_ICONS[skill.skill] ?? LuCode
            return (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold text-neutral-900">
                  {skill.skill}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  {skill.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.techStack.map((tool, i) => (
                    <TechnologyBadge key={i} name={tool.name} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
