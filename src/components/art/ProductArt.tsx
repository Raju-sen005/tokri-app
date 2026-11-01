import type { SVGProps } from 'react'

type ArtProps = SVGProps<SVGSVGElement>

function Art({ children, ...props }: ArtProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  )
}

export function Tomato(props: ArtProps) {
  return (
    <Art {...props}>
      <ellipse cx="50" cy="58" rx="37" ry="33" className="fill-art-tomato" />
      <ellipse cx="36" cy="45" rx="10" ry="5.5" transform="rotate(-32 36 45)" className="fill-white" opacity=".38" />
      <path
        d="M50 31 43 21l5 6 1-9 3 8 6-7-3 9 8-3-7 6 7 3-9 1 3 6-7-4-4 7-3-8-8 2 5-6-7-4 9-1Z"
        className="fill-art-leaf"
      />
    </Art>
  )
}

export function Mango(props: ArtProps) {
  return (
    <Art {...props}>
      <path d="M17 56C16 31 42 17 67 23c20 5 25 30 10 51-15 20-52 17-60-18Z" className="fill-warm-orange" />
      <path d="M60 83c20-3 33-23 26-44 9 21-2 46-26 44Z" className="fill-art-tomato" opacity=".4" />
      <ellipse cx="38" cy="38" rx="10" ry="5" transform="rotate(-35 38 38)" className="fill-white" opacity=".4" />
      <path d="M58 22C60 11 71 7 82 11c-2 11-12 16-24 11Z" className="fill-art-leaf" />
      <path d="M58 22c8-4 14-7 22-10" className="stroke-art-leaf-dark" strokeWidth="2" strokeLinecap="round" fill="none" />
    </Art>
  )
}

export function Carrot(props: ArtProps) {
  return (
    <Art {...props}>
      <g transform="rotate(32 50 52)">
        <path d="M38 34c8-6 16-6 24 0L52 93c-1 4-3 4-4 0Z" className="fill-art-carrot" />
        <path d="M43 50h8M48 64h7M46 78h5" className="stroke-white" strokeWidth="2.4" strokeLinecap="round" opacity=".45" />
        <ellipse cx="50" cy="22" rx="5" ry="15" className="fill-art-leaf" />
        <ellipse cx="38" cy="26" rx="4.5" ry="13" transform="rotate(-24 38 26)" className="fill-art-leaf-dark" />
        <ellipse cx="62" cy="26" rx="4.5" ry="13" transform="rotate(24 62 26)" className="fill-art-leaf-dark" />
      </g>
    </Art>
  )
}

export function Milk(props: ArtProps) {
  return (
    <Art {...props}>
      <path d="M29 36 38 17h24l9 19Z" className="fill-cream stroke-line" strokeWidth="2" strokeLinejoin="round" />
      <rect x="29" y="36" width="42" height="55" rx="4" className="fill-white stroke-line" strokeWidth="2" />
      <rect x="29" y="52" width="42" height="24" className="fill-art-blue" />
      <path d="M50 57c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" className="fill-white" />
      <rect x="40" y="13" width="20" height="6" rx="2" className="fill-art-blue" />
    </Art>
  )
}

export function Bread(props: ArtProps) {
  return (
    <Art {...props}>
      <path
        d="M16 64C9 41 27 26 50 26s41 15 34 38c0 11-4 15-9 15H25c-5 0-9-4-9-15Z"
        className="fill-art-bread"
      />
      <path d="M26 40c6-8 16-11 24-11" className="stroke-white" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".35" />
      <path
        d="M35 40l6 14M50 37l3 16M65 40l-1 14"
        className="stroke-art-bread-dark"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </Art>
  )
}

const teeth = Array.from({ length: 6 }, (_, i) => {
  const x = 24 + i * 8.667
  return `L${(x + 4.333).toFixed(2)} 13 L${(x + 8.667).toFixed(2)} 19`
}).join(' ')

export function Namkeen(props: ArtProps) {
  return (
    <Art {...props}>
      <path d={`M24 19 ${teeth} Q81 54 76 90 H24 Q19 54 24 19Z`} className="fill-art-pack" />
      <circle cx="50" cy="52" r="17" className="fill-mango" />
      <path d="M43 52c3-8 11-8 14 0-3 8-11 8-14 0Z" className="fill-art-pack" />
      <rect x="31" y="75" width="38" height="5" rx="2.5" className="fill-white" opacity=".85" />
    </Art>
  )
}

export function BasketOfGroceries(props: ArtProps) {
  const weaves = Array.from({ length: 8 }, (_, i) => {
    const top = 36 + i * 28.5
    const bottom = 56 + i * 21.3
    return `M${top.toFixed(1)} 92 L${bottom.toFixed(1)} 190`
  })
  return (
    <svg viewBox="0 0 260 200" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M42 86C42 -14 218 -14 218 86"
        className="stroke-art-wicker-dark"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <Carrot x="60" y="-6" width="84" height="84" />
      <Milk x="108" y="-2" width="88" height="88" />
      <Tomato x="14" y="22" width="86" height="86" />
      <Bread x="150" y="26" width="92" height="92" />
      <Mango x="86" y="30" width="82" height="82" />
      <path
        d="M20 90H240L219 182Q216 194 204 194H56Q44 194 41 182Z"
        className="fill-art-wicker"
      />
      <path d="M30 118H230M34 142H226M38 166H222" className="stroke-art-wicker-dark" strokeWidth="3" opacity=".55" />
      <path d={weaves.join(' ')} className="stroke-art-wicker-dark" strokeWidth="3" opacity=".4" />
      <rect x="10" y="80" width="240" height="20" rx="10" className="fill-art-wicker-light stroke-art-wicker-dark" strokeWidth="2.5" />
    </svg>
  )
}

export function Sack(props: ArtProps) {
  return (
    <Art {...props}>
      <path d="M24 36Q17 64 22 88Q50 97 78 88Q83 64 76 36Z" className="fill-art-bread" />
      <path d="M29 36 36 20Q50 13 64 20L71 36Z" className="fill-art-bread-dark" />
      <path d="M31 33Q50 40 69 33" className="stroke-forest" strokeWidth="4" strokeLinecap="round" fill="none" />
      <rect x="35" y="50" width="30" height="26" rx="6" className="fill-white" />
      <circle cx="50" cy="63" r="7" className="fill-forest" />
    </Art>
  )
}

export function Jar(props: ArtProps) {
  return (
    <Art {...props}>
      <rect x="28" y="26" width="44" height="64" rx="11" className="fill-white stroke-line" strokeWidth="2" />
      <rect x="31" y="46" width="38" height="41" rx="8" className="fill-mango" />
      <rect x="25" y="14" width="50" height="14" rx="5" className="fill-forest" />
    </Art>
  )
}

export function Bottle(props: ArtProps) {
  return (
    <Art {...props}>
      <rect x="40" y="5" width="20" height="9" rx="3" className="fill-forest" />
      <path d="M43 14h14v12H43Z" className="fill-white stroke-line" strokeWidth="2" />
      <path d="M35 30q0-5 6-5h18q6 0 6 5v57q0 6-6 6H41q-6 0-6-6Z" className="fill-warm-orange" />
      <rect x="35" y="50" width="30" height="24" className="fill-white" />
      <circle cx="50" cy="62" r="7" className="fill-mango" />
    </Art>
  )
}

export function Can(props: ArtProps) {
  return (
    <Art {...props}>
      <rect x="31" y="20" width="38" height="72" rx="8" className="fill-art-pack" />
      <rect x="31" y="44" width="38" height="22" className="fill-white" />
      <circle cx="50" cy="55" r="6" className="fill-art-pack" />
      <ellipse cx="50" cy="22" rx="17" ry="4.5" className="fill-line" />
      <ellipse cx="50" cy="22" rx="8" ry="2" className="fill-ink-muted" />
    </Art>
  )
}

export function Detergent(props: ArtProps) {
  return (
    <Art {...props}>
      <rect x="37" y="9" width="24" height="12" rx="4" className="fill-forest" />
      <path d="M40 21h18v12H40Z" className="fill-white" />
      <path d="M28 44q0-12 12-12h18q12 0 12 12v42q0 7-7 7H35q-7 0-7-7Z" className="fill-art-blue" />
      <rect x="28" y="52" width="42" height="26" className="fill-white" />
      <path d="M49 56c5 6 7 9 7 12a7 7 0 0 1-14 0c0-3 2-6 7-12Z" className="fill-art-blue" />
    </Art>
  )
}

export function Soap(props: ArtProps) {
  return (
    <Art {...props}>
      <rect x="16" y="46" width="68" height="38" rx="14" className="fill-art-leaf" />
      <rect x="24" y="52" width="28" height="7" rx="3.5" className="fill-white" opacity=".4" />
      <circle cx="34" cy="30" r="9" className="stroke-art-blue" strokeWidth="2.5" fill="none" />
      <circle cx="58" cy="22" r="6" className="stroke-art-blue" strokeWidth="2.5" fill="none" />
      <circle cx="72" cy="36" r="4" className="stroke-art-blue" strokeWidth="2.5" fill="none" />
    </Art>
  )
}
