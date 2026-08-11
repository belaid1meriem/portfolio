import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-base font-semibold text-neutral-900">Meriem.</p>
        <p className="text-sm text-neutral-500">
          © 2026 Belaid Meriem. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/meriem-belaid-8a2b31278/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/belaid1meriem"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="mailto:mm_belaid@esi.dz"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            <LuMail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
