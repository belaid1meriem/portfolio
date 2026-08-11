import { LuArrowUpRight, LuSend } from 'react-icons/lu'

const EMAIL = 'mm_belaid@esi.dz'

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-neutral-900 px-6 py-12 md:flex-row md:items-center md:px-12">
          <div className="flex items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900">
              <LuSend className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Let's build something amazing together.
              </h2>
              <p className="mt-2 text-neutral-300">
                I'm always open to new opportunities and collaborations.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-neutral-900"
          >
            Get in touch
            <LuArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
