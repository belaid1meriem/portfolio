import { FaGithub } from 'react-icons/fa'
import { LuArrowUpRight, LuFolder } from 'react-icons/lu'
import { projects } from '../data/projects'
import SectionHeader from './ui/SectionHeader'
import TechnologyBadge from './ui/TechnologyBadge'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeader icon={LuFolder} title="My Projects" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-md"
            >
              <img
                src={project.image}
                alt={project.name}
                className="aspect-[16/10] w-full border-b border-neutral-200 object-cover object-top"
              />

              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {project.source}
                </p>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tool, i) => (
                    <TechnologyBadge key={i} name={tool.name} />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-neutral-600">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center gap-5 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-900"
                  >
                    <FaGithub className="h-4 w-4" />
                    Source
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-neutral-900"
                    >
                      View live
                      <LuArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
