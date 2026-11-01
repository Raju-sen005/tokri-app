import { Home, LayoutGrid, Search, ShoppingBasket, MapPin, ReceiptText } from 'lucide-react'
import { appLinks, brand, serviceLocations } from '../../config/site'
import { Bread, Carrot, Milk, Namkeen, Tomato } from '../art/ProductArt'
import { LogoMark } from '../ui/Logo'

const tiles = [
  { label: 'Sabzi & Fal', Art: Tomato },
  { label: 'Grocery', Art: Bread },
  { label: 'Dairy', Art: Milk },
  { label: 'Snacks', Art: Namkeen },
]

const picks = [
  { label: 'Tamatar', Art: Tomato },
  { label: 'Gajar', Art: Carrot },
]

const navTabs = [
  { label: 'Home', Icon: Home, active: true },
  { label: 'Categories', Icon: LayoutGrid, active: false },
  { label: 'Orders', Icon: ReceiptText, active: false },
  { label: 'Cart', Icon: ShoppingBasket, active: false },
]

function Screen() {
  const town = serviceLocations[0]?.name ?? ''
  return (
    <div className="flex h-full flex-col bg-cream text-ink">
      <div className="flex items-center justify-between bg-white px-4 pt-9 pb-3">
        <div className="min-w-0">
          <p className="flex items-center gap-1 text-[0.65rem] font-semibold text-ink-soft">
            <MapPin className="size-3 text-forest" aria-hidden="true" />
            Aapka shehar
          </p>
          <p className="truncate text-sm font-extrabold">{town}</p>
        </div>
        <LogoMark className="size-8" />
      </div>

      <div className="flex-1 space-y-3.5 overflow-hidden px-3.5 pt-3">
        <div className="flex h-9 items-center gap-2 rounded-card-sm border border-line bg-white px-3 text-[0.7rem] text-ink-muted">
          <Search className="size-3.5" aria-hidden="true" />
          Sabzi, doodh, atta search karein
        </div>

        <div className="relative overflow-hidden rounded-card-sm bg-mango p-3.5">
          <p className="max-w-[9rem] text-[0.95rem] leading-tight font-extrabold text-ink">
            Daily essentials, ek hi jagah
          </p>
          <span className="mt-2 inline-block rounded-full bg-forest px-2.5 py-1 text-[0.6rem] font-bold text-white">
            Abhi dekhein
          </span>
          <Tomato className="absolute -right-1 bottom-0 size-[4.5rem]" />
        </div>

        <div>
          <p className="mb-2 text-xs font-extrabold">Categories</p>
          <div className="grid grid-cols-4 gap-2">
            {tiles.map(({ label, Art }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="grid size-[3.25rem] place-items-center rounded-card-sm bg-white shadow-card">
                  <Art className="size-9" />
                </span>
                <span className="text-center text-[0.55rem] leading-tight font-semibold text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-extrabold">Aapke liye</p>
          <div className="grid grid-cols-2 gap-2.5">
            {picks.map(({ label, Art }) => (
              <div key={label} className="rounded-card-sm bg-white p-2.5 shadow-card">
                <Art className="mx-auto size-12" />
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[0.7rem] font-bold">{label}</span>
                  <span className="rounded-md border border-forest px-2 py-0.5 text-[0.6rem] font-extrabold text-forest">
                    ADD
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav aria-hidden="true" className="grid grid-cols-4 border-t border-line bg-white px-1 pt-2 pb-3">
        {navTabs.map(({ label, Icon, active }) => (
          <span
            key={label}
            className={`flex flex-col items-center gap-0.5 text-[0.55rem] font-bold ${active ? 'text-forest' : 'text-ink-muted'}`}
          >
            <Icon className="size-4" />
            {label}
          </span>
        ))}
      </nav>
    </div>
  )
}

const sizes = {
  md: 'w-[15rem] sm:w-[17rem] lg:w-[18.5rem]',
  lg: 'w-[16.5rem] sm:w-[19rem] lg:w-[22rem]',
}

export function AppMockup({ className = '', size = 'md' }: { className?: string; size?: keyof typeof sizes }) {
  return (
    <div
      className={`relative aspect-[9/18.5] rounded-[2.4rem] bg-ink p-2 shadow-phone ${sizes[size]} ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-[1.9rem] bg-white">
        {appLinks.screenshotSrc ? (
          <img
            src={appLinks.screenshotSrc}
            alt={`${brand.name} app ka screenshot`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Screen />
        )}
        <span className="absolute top-2.5 left-1/2 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" aria-hidden="true" />
      </div>
    </div>
  )
}
