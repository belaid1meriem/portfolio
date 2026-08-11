interface TechnologyBadgeProps {
  name: string
}

export default function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700">
      {name}
    </span>
  )
}
