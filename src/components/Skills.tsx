import { skills } from "../data/skills"
function Skills() {
  return (
    <section className="flex flex-col gap-2 items-start px-6" id="skills">
        <div className="max-sm:text-sm text-3xl font-semibold  relative z-20 ">
            <h6 className='relative z-20'>My Skills</h6>
            <span className='w-fit max-sm:h-2 h-4 bg-blue-400 absolute left-0 right-0 -bottom-1  z-0 text-transparent scroll bar-view-animate  '>My Skills</span>
        </div>
       <div className="grid grid-rows-2 max-sm:grid-rows-1 max-lg:px-8">
            {skills.map((skill, index) => (
                <div className="" key={index}>
                    {skill.skill}
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills