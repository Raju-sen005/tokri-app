import { features } from '../../config/features'
import { sectionIds } from '../../config/navigation'
import { BasketOfGroceries } from '../art/ProductArt'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyTokriSection() {
  return (
    <section id={sectionIds.about} aria-labelledby="why-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="why-title"
            align="left"
            eyebrow="Why Tokri"
            title="Tokri kyun chunein?"
            description="Tokri aapke apne shehar ki online dukaan hai. Roz ki shopping ko banaya hai aasaan, simple aur aapke phone ke ek tap par."
          />
          <div className="relative mx-auto mt-8 flex max-w-sm items-center justify-center rounded-card-lg bg-mango p-8 lg:mx-0 lg:mt-10">
            <BasketOfGroceries className="w-full max-w-[16rem] drop-shadow-lg" />
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {features.map(({ title, description, Icon }, index) => (
            <li key={title}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-line bg-cream p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-12 place-items-center rounded-card-sm bg-forest text-white">
                    <Icon className="size-6" strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl leading-snug font-extrabold text-ink">{title}</h3>
                  <p className="mt-2 text-base text-ink-soft">{description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
