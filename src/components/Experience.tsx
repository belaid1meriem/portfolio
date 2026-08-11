import { experiences } from "../data/experience"

function Experience() {
  return (
    <section className="flex flex-col gap-8 items-start p-6 relative cursor-default" id="experience">
        <div className="max-sm:text-md text-3xl font-semibold relative z-20 block-animate">
            <h6 className='relative z-20'>Experience</h6>
            <span className='w-fit max-sm:h-2 h-4 bg-blue-400 absolute left-0 right-0 -bottom-1 z-0 text-transparent bar-animate'>Experience</span>
        </div>
        <div className="flex flex-col gap-12 w-full md:px-16">
            {experiences.map((exp, index) => (
                <div className="flex flex-col gap-2 bg-neutral-50 block-animate" key={index}>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                        <h6 className="text-lg font-semibold">{exp.role}</h6>
                        <span className="text-xs text-neutral-500 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-sm font-medium text-blue-400">{exp.company}</p>
                    <ul className="text-sm list-disc list-inside flex flex-col gap-1">
                        {exp.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experience