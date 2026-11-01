import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, sectionIds } from '../../config/navigation'
import { brand } from '../../config/site'
import { Container } from '../ui/Container'
import { DownloadButton } from '../ui/DownloadButton'
import { Logo } from '../ui/Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50  transition-colors duration-200 ${
        scrolled || open ? ' bg-deep-mango shadow-card' : 'border-transparent bg-mango'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <a href={`#${sectionIds.home}`} aria-label={`${brand.name} home`} onClick={close}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-forest-tint hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden min-[430px]:block">
            <DownloadButton size="md" />
          </div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-forest-tint lg:hidden"
            aria-label={open ? 'Menu band karein' : 'Menu kholein'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full border-b border-line bg-white shadow-lift lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-card-sm px-4 py-3 text-lg font-semibold text-ink hover:bg-cream"
                >
                  {item.label}
                </a>
              ))}
              <div onClick={close} className="pt-3">
                <DownloadButton className="w-full" />
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
