import { MotionConfig } from 'framer-motion'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { CategoriesSection } from './components/sections/CategoriesSection'
import { DownloadSection } from './components/sections/DownloadSection'
import { HeroSection } from './components/sections/HeroSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { WhyTokriSection } from './components/sections/WhyTokriSection'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2 focus:font-bold focus:text-white"
      >
        Seedhe content par jayein
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <CategoriesSection />
        <HowItWorksSection />
        <WhyTokriSection />
        <DownloadSection />
      </main>
      <Footer />
    </MotionConfig>
  )
}
