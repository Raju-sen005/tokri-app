import { BellRing, MessageCircle, QrCode as QrIcon } from 'lucide-react'
import { sectionIds } from '../../config/navigation'
import { brand } from '../../config/site'
import { getPlayStoreState, getWhatsAppUrl } from '../../lib/appLinks'
import { AppMockup } from '../app/AppMockup'
import { Container } from '../ui/Container'
import { DownloadButton } from '../ui/DownloadButton'
import { QrCode } from '../ui/QrCode'
import { Reveal } from '../ui/Reveal'

export function DownloadSection() {
  const store = getPlayStoreState()
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section id={sectionIds.download} aria-labelledby="download-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] bg-mango px-6 pt-10 sm:px-12 sm:pt-14 lg:rounded-[2rem] lg:px-16 lg:pt-0">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <Reveal className="lg:py-16">
              <p className="text-sm font-extrabold tracking-[0.14em] text-forest uppercase">{brand.name} App</p>
              <h2 id="download-title" className="mt-3 text-title font-extrabold text-ink">
                Ab aapki shopping hogi aur bhi aasaan!
              </h2>
              <p className="mt-4 max-w-[34rem] text-base text-ink/80 sm:text-lg">
                {brand.name} app mein sabzi, ration, dairy, snacks aur ghar ka saaman, sab ek hi jagah. App download
                karein aur apne phone se apni shopping shuru karein.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                {store.status === 'live' && <DownloadButton className="w-full sm:w-auto" />}
                <DownloadButton variant="badge" className="self-start" />
              </div>

              {store.status === 'coming-soon' && (
                <div className="mt-6 flex max-w-[34rem] items-start gap-3 rounded-card bg-white p-4 shadow-card">
                  <span className="grid size-10 shrink-0 place-items-center rounded-card-sm bg-forest-tint text-forest">
                    <BellRing className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-extrabold text-ink">Tokri app jald aa raha hai</p>
                    <p className="mt-0.5 text-sm text-ink-soft">
                      Google Play listing live hote hi yahan download button aur QR code active ho jayenge.
                    </p>
                    {whatsappUrl && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-bold text-white transition hover:bg-forest-hover"
                      >
                        <MessageCircle className="size-4" aria-hidden="true" />
                        WhatsApp par update paayein
                      </a>
                    )}
                  </div>
                </div>
              )}

              {store.status === 'live' && (
                <div className="mt-7 hidden max-w-[34rem] items-center gap-4 rounded-card bg-white p-4 shadow-card md:flex">
                  <QrCode
                    value={store.url}
                    label={`${brand.name} app Google Play par kholne ke liye QR code scan karein`}
                    className="size-28 shrink-0 rounded-card-sm"
                  />
                  <div>
                    <p className="font-extrabold text-ink">Phone se scan karein</p>
                    <p className="mt-0.5 text-sm text-ink-soft">
                      Camera se QR code scan karein aur seedha Google Play par {brand.name} app kholein.
                    </p>
                  </div>
                </div>
              )}

              {store.status === 'coming-soon' && (
                <div className="mt-4 hidden max-w-[34rem] items-center gap-4 rounded-card border-2 border-dashed border-ink/25 p-4 md:flex">
                  <span className="grid size-16 shrink-0 place-items-center rounded-card-sm bg-white/70 text-ink-soft">
                    <QrIcon className="size-8" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-ink/80">
                    QR code yahan dikhega, jaise hi Play Store listing publish hogi.
                  </p>
                </div>
              )}
            </Reveal>

            <Reveal delay={0.1} className="flex justify-center self-end lg:justify-end lg:pr-4">
              <AppMockup size="lg" className="mb-[-9rem] lg:mt-14 lg:mb-[-7rem]" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
