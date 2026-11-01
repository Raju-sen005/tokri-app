import { Download } from 'lucide-react'
import { sectionIds } from '../../config/navigation'
import { brand } from '../../config/site'
import { getPlayStoreState } from '../../lib/appLinks'

interface DownloadButtonProps {
  variant?: 'primary' | 'badge'
  size?: 'md' | 'lg'
  label?: string
  className?: string
}

function PlayIcon({ className = 'h-7 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 22" className={className} aria-hidden="true">
      <path d="M0 0v22l10-11Z" className="fill-gplay-blue" />
      <path d="M0 0l14.5 8L10 11Z" className="fill-gplay-green" />
      <path d="M14.5 8 19 11l-4.5 3L10 11Z" className="fill-gplay-yellow" />
      <path d="M0 22l14.5-8L10 11Z" className="fill-gplay-red" />
    </svg>
  )
}

/** Every download entry point in the site goes through this component. */
export function DownloadButton({
  variant = 'primary',
  size = 'lg',
  label = 'Download App',
  className = '',
}: DownloadButtonProps) {
  const store = getPlayStoreState()
  const isLive = store.status === 'live'

  if (variant === 'badge') {
    const badgeClass = `inline-flex h-14 items-center gap-3 rounded-card-sm bg-badge px-4 text-white ${className}`
    const content = (
      <>
        <PlayIcon />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[0.625rem] font-semibold tracking-[0.12em] uppercase">
            {isLive ? 'Get it on' : 'Jald aa raha hai'}
          </span>
          <span className="mt-1 text-xl font-bold tracking-tight">Google Play</span>
        </span>
      </>
    )
    return isLive ? (
      <a
        href={store.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${brand.name} app Google Play se download karein`}
        className={`${badgeClass} transition-transform hover:-translate-y-0.5`}
      >
        {content}
      </a>
    ) : (
      <span role="img" aria-label={`${brand.name} app Google Play par jald aa raha hai`} className={badgeClass}>
        {content}
      </span>
    )
  }

  const sizing = size === 'lg' ? 'h-14 px-8 text-lg' : 'h-11 px-5 text-base'
  const classes = `inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap bg-forest font-bold text-white shadow-card transition duration-200 hover:-translate-y-0.5 hover:bg-forest-hover hover:shadow-lift active:translate-y-0 ${sizing} ${className}`

  return isLive ? (
    <a href={store.url} target="_blank" rel="noopener noreferrer" className={classes}>
      <Download className="size-5" aria-hidden="true" />
      {label}
    </a>
  ) : (
    <a href={`#${sectionIds.download}`} className={classes}>
      <Download className="size-5" aria-hidden="true" />
      {label}
    </a>
  )
}
