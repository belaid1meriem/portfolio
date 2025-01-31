

function Projects() {
  return (
    <section className="flex flex-col gap-8 items-start p-6 relative cursor-default" id="projects">
       
        <div className="max-sm:text-md text-3xl font-semibold  relative z-20 ">
            <h6 className='relative z-20'>My Projects</h6>
            <span className='w-fit max-sm:h-2 h-4 bg-blue-400 absolute left-0 right-0 -bottom-1  z-0 text-transparent bar-animate'>My Projects</span>
        </div>
       <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 md:px-16 bg-neutral-50">
            
        </div>
        <div className="absolute top-0 right-80 flex justify-center items-center ">
            <div className="relative  max-w-lg">
                <div className='bg-pink-300 rounded-full w-48 h-48 absolute top-7 -right-56 mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
                <div className='max-sm:hidden bg-yellow-300 rounded-full w-48 h-48 absolute top-16 -right-8 mix-blend-multiply filter blur-xl opacity-20  animate-blob delay-500'></div>
                <div className='max-sm:hidden bg-purple-300 rounded-full w-48 h-48 absolute -bottom-24 -left-32 mix-blend-multiply filter blur-xl opacity-20   animate-blob delay-1000'></div>
                <div className='bg-blue-300 rounded-full w-48 h-48 absolute -top-56 -right-56 mix-blend-multiply filter blur-xl opacity-20  animate-blob delay-700'></div>
            </div>
        </div>
    </section>
  )
}

export default Projects