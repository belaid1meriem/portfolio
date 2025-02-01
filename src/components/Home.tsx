import { FaLinkedin } from 'react-icons/fa'
import pic from '../assets/myPic.jpg'
import { FaGithub } from 'react-icons/fa'
function Home() {
  return (
    <section id="home" className="relative flex justify-center items-center ">
        <div className="absolute top-0 w-full h-full flex justify-center items-center ">
            <div className="relative max-w-lg">
                <div className='max-sm:hidden bg-pink-300 rounded-full w-48 h-48 absolute top-7 -right-56 mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
                <div className='bg-yellow-300 rounded-full w-48 h-48 absolute top-16 -right-8 mix-blend-multiply filter blur-xl opacity-20  animate-blob delay-500'></div>
                <div className='bg-purple-300 rounded-full w-48 h-48 absolute -bottom-32 -left-56 mix-blend-multiply filter blur-xl opacity-20   animate-blob delay-1000'></div>
                <div className='max-sm:hidden bg-blue-300 rounded-full w-48 h-48 absolute -top-56 -right-56 mix-blend-multiply filter blur-xl opacity-20  animate-blob delay-700'></div>
            </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center w-full relative ">
            <img src={pic} alt="Developer" className="w-60 h-60 object-cover rounded-full home-animate "/>
            <div className="flex flex-col items-center justify-start gap-4 cursor-default ">
                <div className='max-sm:text-sm text-3xl text-center font-semibold flex gap-1 home-animate '>
                    <h6 className="">Hi, I'm Belaid Meriem |</h6>
                    <span className='relative z-20'>
                        <h6 className='relative z-20'>Web Developer</h6>
                        <span className='w-full max-sm:h-2 h-4 bg-blue-400 absolute left-0 right-0 -bottom-1 z-0 bar-animate'></span>
                    </span> 
                </div>
                <p className="text-sm text-center max-w-prose px-6 home-animate"> Hey there! I'm a curious computer science student who loves building, exploring, and learning. Let's create something amazing!</p>

                <div className="flex items-center gap-3 text-2xl text-blue-400 home-animate">
                            <a href="https://www.linkedin.com/in/meriem-belaid-8a2b31278/">
                                <FaLinkedin className="cursor-pointer  hover:text-blue-500 transition-all duration-150" />
                            </a>
                            <a href="https://github.com/belaid1meriem" target="_blank" >
                                <FaGithub className="cursor-pointer hover:text-blue-500 transition-all duration-150" />
                            </a>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Home