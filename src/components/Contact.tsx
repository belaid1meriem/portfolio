
function Contact() {
  return (
    <section className="p-6 relative flex items-center justify-center my-32 cursor-default" id="contact">
      <div className="absolute top-0 right-1/2 flex justify-center items-center ">
        <div className="relative  max-w-lg md:rotate-0 rotate-90 ">
            <div className='bg-pink-300 rounded-full w-48 h-48 absolute top-7 -right-56 mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
        </div>
      </div>
      <div className="max-sm:text-md text-3xl font-semibold w-fit relative z-20 group block-animate">
            <a href="mailto:mm_belaid@esi.dz" target="_blank" className='relative z-20'>Contact Me</a>
            <span className='w-fit max-sm:h-2 h-4 bg-blue-400 absolute left-0 right-0 -bottom-1  z-0 text-transparent group-hover:bar-animate '>My Projects</span>
      </div>
    </section>
  )
}

export default Contact