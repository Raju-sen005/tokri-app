import { sectionIds } from '../../config/navigation'
import { steps } from '../../config/steps'
import { Container } from '../ui/Container'
import { DownloadButton } from '../ui/DownloadButton'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function HowItWorksSection() {
  return (
    <section id={sectionIds.howItWorks} aria-labelledby="how-title" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            id="how-title"
            eyebrow="How It Works"
            title="Shopping ab aur bhi aasaan!"
            description="Sirf 4 simple steps mein apni shopping poori karein."
          />
        </Reveal>

        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-[3.9rem] right-[12.5%] left-[12.5%] hidden border-t-2 border-dashed border-forest/30 lg:block"
          />
          {steps.map(({ title, description, Icon }, index) => (
            <li key={title} className="relative">
              <Reveal delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-start justify-between">
                    <span className="relative z-10 grid size-[4.25rem] place-items-center rounded-card-sm bg-mango text-forest">
                      <Icon className="size-8" strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <span className="text-5xl leading-none font-extrabold text-line" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-ink">
                    <span className="sr-only">Step {index + 1}: </span>
                    {title}
                  </h3>
                  <p className="mt-2 text-base text-ink-soft">{description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-10 flex justify-center lg:mt-14">
          <DownloadButton label="Abhi Tokri Download Karein" />
        </Reveal>
      </Container>
    </section>
  )
}
