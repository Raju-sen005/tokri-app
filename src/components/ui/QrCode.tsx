import QRCode from 'qrcode'
import { useMemo } from 'react'

interface QrCodeProps {
  value: string
  label: string
  className?: string
}

/** Renders a QR code as inline SVG, colored through theme tokens. */
export function QrCode({ value, label, className = '' }: QrCodeProps) {
  const { size, path } = useMemo(() => {
    const { modules } = QRCode.create(value, { errorCorrectionLevel: 'M' })
    const quiet = 2
    let d = ''
    for (let y = 0; y < modules.size; y++) {
      for (let x = 0; x < modules.size; x++) {
        if (modules.get(x, y)) d += `M${x + quiet} ${y + quiet}h1v1h-1z`
      }
    }
    return { size: modules.size + quiet * 2, path: d }
  }, [value])

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={label}
      shapeRendering="crispEdges"
      className={className}
    >
      <rect width={size} height={size} className="fill-white" />
      <path d={path} className="fill-ink" />
    </svg>
  )
}
