import { Mail, MessageCircle, Phone } from 'lucide-react'
import { footerLinks, sectionIds } from '../../config/navigation'
import { brand, contact, serviceLocations, socialLinks } from '../../config/site'
import { getWhatsAppUrl, joinHinglish } from '../../lib/appLinks'
import { Container } from '../ui/Container'
import { DownloadButton } from '../ui/DownloadButton'
import { Logo } from '../ui/Logo'
import { SocialIcon } from '../ui/SocialIcon'

const currentYear = new Date().getFullYear()
const linkClass = 'text-white/80 transition-colors hover:text-mango'
const headingClass = 'text-sm font-extrabold tracking-[0.12em] text-mango uppercase'

export function Footer() {
  const whatsappUrl = getWhatsAppUrl('Namaste Tokri!')
  const socials = socialLinks.filter((social) => social.url)
  const hasContact = Boolean(contact.phone || contact.email || whatsappUrl)
  const towns = joinHinglish(serviceLocations.map((town) => town.name))

  return (
    <footer className="bg-forest text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src="../../../assest/tokri-app-icon-1024.png" alt={`${brand.name} logo`} className="h-18 w-auto" />
          <p className="mt-4 font-bold text-mango">{brand.tagline}</p>
          <p className="mt-3 max-w-sm text-white/80">
            {brand.name} aapke shehar ki local online dukaan hai. Groceries, fresh vegetables, dairy, snacks aur daily
            essentials, sab aapke phone par.
          </p>
          <div className="mt-6">
            <DownloadButton variant="badge" />
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className={headingClass}>Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.explore.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <h2 className={`${headingClass} mt-8`}>Help</h2>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id={sectionIds.serviceAreas} aria-labelledby="areas-title">
          <h2 id="areas-title" className={headingClass}>
            Service Areas
          </h2>
          <ul className="mt-4 space-y-2.5">
            {serviceLocations.map((town) => (
              <li key={town.id} className="text-white/90">
                <span className="font-bold">{town.name}</span>
                <span className="text-white/70">, {town.state}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/70">Tokri abhi sirf {towns} mein available hai.</p>
        </section>

        <section id={sectionIds.contact} aria-labelledby="contact-title">
          <h2 id="contact-title" className={headingClass}>
            Contact
          </h2>
          {hasContact ? (
            <ul className="mt-4 space-y-3">
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className={`${linkClass} inline-flex items-center gap-2.5`}>
                    <Phone className="size-4" aria-hidden="true" />
                    {contact.phone}
                  </a>
                </li>
              )}
              {whatsappUrl && (
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2.5`}>
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp par baat karein
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className={`${linkClass} inline-flex items-center gap-2.5 break-all`}>
                    <Mail className="size-4 shrink-0" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              )}
            </ul>
          ) : (
            <p className="mt-4 text-white/70">Contact details jald hi yahan add ki jayengi.</p>
          )}

          {socials.length > 0 && (
            <>
              <h2 className={`${headingClass} mt-8`}>Follow Us</h2>
              <ul className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.name} on ${social.label}`}
                      className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-mango hover:text-forest"
                    >
                      <SocialIcon id={social.id} />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <p>{brand.tagline}</p>
        </Container>
      </div>
    </footer>
  )
}
