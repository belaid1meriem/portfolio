import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <nav className=" flex justify-between items-center  px-6 pt-4 pb-2 bg-neutral-50 sticky top-0  z-50 ">
        <h1 className="text-blue-400 font-semibold text-xl cursor-default">Meriem.</h1>
        <ul className="flex gap-6 justify-between items-center max-sm:hidden">
            <li
                className={`cursor-pointer ${activeLink === 'home' ? 'text-blue-400 ' : ''}`}
                onClick={() => handleLinkClick('home')}
            >
                <a href="#home">Home</a>
            </li>
            <li
                className={`cursor-pointer ${activeLink === 'skills' ? 'text-blue-400 ' : ''}`}
                onClick={() => handleLinkClick('skills')}
            >
                <a href="#skills">Skills</a>
            </li>
            <li
                className={`cursor-pointer ${activeLink === 'projects' ? 'text-blue-400 ' : ''}`}
                onClick={() => handleLinkClick('projects')}
            >
                <a href="#projects">Projects</a>
            </li>
            <li
                className={`cursor-pointer ${activeLink === 'contact' ? 'text-blue-400 ' : ''}`}
                onClick={() => handleLinkClick('contact')}
            >
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <a href="#contact" className="max-sm:hidden px-6 py-2 rounded-full border-2 border-blue-400 text-blue-400 transition duration-200 ease-in-out  hover:bg-blue-400 hover:text-neutral-50 "> Get in touch</a>
    </nav>
  )
}

