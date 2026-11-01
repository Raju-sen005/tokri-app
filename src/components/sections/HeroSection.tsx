import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { sectionIds } from '../../config/navigation'
import { brand, serviceLocations } from '../../config/site'
import { getPlayStoreState } from '../../lib/appLinks'
import { AppMockup } from '../app/AppMockup'
import { BasketOfGroceries, Carrot, Mango, Namkeen } from '../art/ProductArt'
import { Container } from '../ui/Container'
import { DownloadButton } from '../ui/DownloadButton'

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export function HeroSection() {
  const isLive = getPlayStoreState().status === 'live'

  return (
    <section id={sectionIds.home} aria-labelledby="hero-title" className="relative overflow-hidden rounded-b-[2rem] bg-mango lg:rounded-b-[3rem]">
      <Container className="grid items-center gap-10 pt-8 pb-14 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-16 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, duration: 0.5, ease: 'easeOut' }}
          className="relative z-10"
        >
          <motion.p
            variants={rise}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-forest shadow-card"
          >
            <span className="size-2 rounded-full bg-warm-orange" aria-hidden="true" />
            {brand.tagline}
          </motion.p>

          <motion.h1 variants={rise} id="hero-title" className="mt-5 text-display font-extrabold text-ink">
            Ab shopping ke liye <span className="text-forest">bazaar jaane ki zaroorat nahi!</span>
          </motion.h1>

          <motion.p variants={rise} className="mt-4 text-xl font-bold text-ink sm:text-2xl">
            Aapka apna Tokri, ab aapke phone mein.
          </motion.p>

          <motion.p variants={rise} className="mt-3 max-w-[34rem] text-base text-ink/80 sm:text-lg">
            Ghar ka ration ho, fresh vegetables ya daily essentials — apni shopping karein aasani se Tokri app par.
          </motion.p>

          <motion.div variants={rise} className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <DownloadButton className="w-full sm:w-auto" />
            <DownloadButton variant="badge" className="self-start" />
          </motion.div>

          {!isLive && (
            <motion.p variants={rise} className="mt-3 text-sm font-semibold text-ink/75">
              Tokri app Google Play par jald aa raha hai.
            </motion.p>
          )}

          <motion.div variants={rise} className="mt-7 flex flex-wrap items-center gap-2.5">
            <span className="text-sm font-bold text-ink/80">Abhi yahan:</span>
            {serviceLocations.map((town) => (
              <a
                key={town.id}
                href={`#${sectionIds.serviceAreas}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-ink shadow-card transition-transform hover:-translate-y-0.5"
              >
                <MapPin className="size-4 text-forest" aria-hidden="true" />
                {town.name}
                <span className="sr-only">, {town.state}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto flex w-full max-w-[26rem] justify-center pt-4 pb-10 lg:max-w-none lg:pt-0 lg:pb-12"
        >
          <div className="absolute top-1/2 left-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mango-soft" aria-hidden="true" />

          <AppMockup className="relative z-10 lg:translate-x-6" />

          <BasketOfGroceries
            className="absolute bottom-0 left-0 z-20 w-[9.5rem] drop-shadow-xl sm:left-6 sm:w-[12rem] lg:left-4 lg:w-[15rem]"
          />
          <Mango className="absolute top-2 right-0 z-20 size-16 animate-float drop-shadow-lg [--tilt:12deg] sm:right-6 sm:size-20 lg:right-2 lg:size-24" />
          <Carrot className="absolute top-10 left-0 z-0 size-14 animate-float-slow drop-shadow-lg [--tilt:-10deg] sm:left-8 sm:size-[4.5rem] lg:left-4 lg:size-20" />
          <Namkeen className="absolute right-1 bottom-12 z-20 size-14 animate-float-slow drop-shadow-lg [--tilt:-8deg] sm:right-8 sm:size-[4.5rem] lg:right-0 lg:size-20" />
        </motion.div>
      </Container>
    </section>
  )
}
