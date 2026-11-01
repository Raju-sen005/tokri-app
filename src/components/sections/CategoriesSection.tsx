import { sectionIds } from '../../config/navigation'
import { availableCategories } from '../../config/categories'
import { CategoryArt } from '../art/CategoryArt'
import { Container } from '../ui/Container'
import { DownloadButton } from '../ui/DownloadButton'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function CategoriesSection() {
  if (availableCategories.length === 0) return null

  return (
    <section id={sectionIds.categories} aria-labelledby="categories-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            id="categories-title"
            eyebrow="Categories"
            title="Jo chahiye, sab Tokri par!"
            description="Sabzi se lekar ghar ke saaman tak — roz ki zarooratein ek hi app mein."
          />
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {availableCategories.map((category, index) => (
            <li key={category.id}>
              <Reveal delay={(index % 3) * 0.07} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lift">
                  <div className="bg-cream px-3 pt-4 pb-2 sm:px-6 sm:pt-6">
                    <CategoryArt
                      id={category.id}
                      className="mx-auto h-auto w-full max-w-[13rem] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-4 sm:p-5">
                    <h3 className="text-base leading-snug font-extrabold text-ink sm:text-xl">{category.name}</h3>
                    <p className="text-sm text-ink-soft sm:text-base">{category.description}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10 flex flex-col items-center gap-3 text-center lg:mt-14">
          <p className="text-base font-bold text-ink">Poora store dekhne ke liye Tokri app kholiye.</p>
          <DownloadButton />
        </Reveal>
      </Container>
    </section>
  )
}
