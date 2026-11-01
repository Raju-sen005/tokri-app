export const sectionIds = {
  home: 'home',
  howItWorks: 'how-it-works',
  categories: 'categories',
  about: 'about',
  serviceAreas: 'service-areas',
  contact: 'contact',
  download: 'download',
} as const

export const navItems = [
  { label: 'Home', href: `#${sectionIds.home}` },
  { label: 'How It Works', href: `#${sectionIds.howItWorks}` },
  { label: 'Categories', href: `#${sectionIds.categories}` },
  { label: 'About Us', href: `#${sectionIds.about}` },
  { label: 'Service Areas', href: `#${sectionIds.serviceAreas}` },
] as const

export const footerLinks = {
  explore: [
    { label: 'About Tokri', href: `#${sectionIds.about}` },
    { label: 'How It Works', href: `#${sectionIds.howItWorks}` },
    { label: 'Categories', href: `#${sectionIds.categories}` },
    { label: 'Download App', href: `#${sectionIds.download}` },
  ],
  legal: [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
} as const
