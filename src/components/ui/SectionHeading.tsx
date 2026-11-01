interface SectionHeadingProps {
  id: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ id, eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-sm font-extrabold tracking-[0.14em] text-forest uppercase">{eyebrow}</p>
      )}
      <h2 id={id} className="text-title font-extrabold text-ink">
        {title}
      </h2>
      {description && <p className="mt-3 text-base text-ink-soft sm:text-lg">{description}</p>}
    </div>
  )
}
