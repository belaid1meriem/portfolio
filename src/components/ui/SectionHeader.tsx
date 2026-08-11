import type { IconType } from 'react-icons'

interface SectionHeaderProps {
  icon: IconType
  title: string
}

export default function SectionHeader({ icon: Icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-900">
        <Icon className="h-4 w-4" />
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
        {title}
      </h2>
    </div>
  )
}
