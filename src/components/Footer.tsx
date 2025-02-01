import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"

function Footer() {
  return (
    <footer className='flex justify-between items-center bg-blue-400 text-neutral-50 p-8 '>
        <div className="text-start">
            <p>Made with 💖 by Meriem</p>
            <p>&copy; 2025 - All rights reserved</p>
        </div>
        <div className="flex items-center gap-3 text-2xl">
            <a href="https://www.linkedin.com/in/meriem-belaid-8a2b31278/" target="_blank">
                <FaLinkedin className="cursor-pointer hover:text-blue-200 transition-all duration-150" />
            </a>
            <a href="https://github.com/belaid1meriem" target="_blank" >
                <FaGithub className="cursor-pointer hover:text-blue-200 transition-all duration-150" />
            </a>
        </div>
    </footer>
  )
}

export default Footer