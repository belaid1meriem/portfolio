import { FaFigma, FaGithub, FaLinkedin } from 'react-icons/fa'
import pic from '../assets/myPic.jpg'

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/meriem-belaid-8a2b31278/',
    icon: <FaLinkedin className="h-4 w-4" />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/belaid1meriem',
    icon: <FaGithub className="h-4 w-4" />,
  },
  {
    label: 'Figma',
    href: 'https://www.figma.com/design/L0y6I3DvN1f94eW82kWyxp/Belaid-Meriem-s-Designs?node-id=0-1&t=aMPrSSEfr5mzw0Vj-1',
    icon: <FaFigma className="h-4 w-4" />,
  },
]

function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-20 border-b border-neutral-100 bg-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <p className="text-base font-medium text-neutral-500 md:text-lg">
            Hi, I'm
          </p>
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl xl:text-7xl">
            Belaid Meriem
          </h1>
          <p className="mt-4 text-xl font-medium text-neutral-800 md:text-2xl">
            Software Engineer
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Final-year Software Engineering student at ESI Algiers with
            experience in web development, mobile development, and software
            architecture through internships, freelance work, and academic
            projects. Interested in scalable systems and UI/UX design.
          </p>

          <div className="mt-8 flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex justify-center md:justify-end">
          {/* Subtle monochrome dot decoration */}
          <div
            className="absolute -top-6 right-0 hidden h-48 w-36 opacity-70 md:block"
            style={{
              backgroundImage: 'radial-gradient(#d4d4d8 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
            }}
            aria-hidden="true"
          />
          <div className="relative h-64 w-64 overflow-hidden rounded-full border border-neutral-200 shadow-sm sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <img
              src={pic}
              alt="Belaid Meriem"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
