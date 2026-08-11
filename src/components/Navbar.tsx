import { useEffect, useState } from 'react'
import { LuArrowUpRight, LuMenu, LuX } from 'react-icons/lu'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    setMenuOpen(false)
  }

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0]

        if (visibleEntry) {
          setActiveLink(visibleEntry.target.id)
        }
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: [0.1, 0.5, 0.9],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <a
          href="#home"
          className="flex h-9 w-9 items-center justify-center rounded-full  text-sm font-bold text-neutral-900 transition"
          onClick={() => handleLinkClick('home')}
          aria-label="Meriem — Home"
        >
          M.
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`relative pb-1 text-sm font-medium transition ${
                  activeLink === link.id
                    ? 'text-neutral-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={() => handleLinkClick('contact')}
          className="hidden items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 md:inline-flex"
        >
          Get in touch
          <LuArrowUpRight className="h-4 w-4" />
        </a>

        {/* Mobile menu toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition ${
                    activeLink === link.id
                      ? 'bg-neutral-100 text-neutral-900'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => handleLinkClick('contact')}
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
          >
            Get in touch
            <LuArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </nav>
  )
}
