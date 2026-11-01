import type { ComponentType, SVGProps } from 'react'
import type { CategoryId } from '../../config/categories'
import { Bottle, Bread, Can, Carrot, Detergent, Jar, Mango, Milk, Namkeen, Sack, Soap, Tomato } from './ProductArt'

type Piece = { Art: ComponentType<SVGProps<SVGSVGElement>>; x: number; y: number; size: number }

const layouts: Record<CategoryId, Piece[]> = {
  'fruits-vegetables': [
    { Art: Carrot, x: 14, y: 22, size: 84 },
    { Art: Mango, x: 104, y: 20, size: 86 },
    { Art: Tomato, x: 54, y: 30, size: 100 },
  ],
  'grocery-staples': [
    { Art: Jar, x: 100, y: 24, size: 92 },
    { Art: Sack, x: 24, y: 14, size: 112 },
  ],
  'dairy-bakery': [
    { Art: Bread, x: 96, y: 28, size: 96 },
    { Art: Milk, x: 26, y: 12, size: 110 },
  ],
  'snacks-namkeen': [
    { Art: Namkeen, x: 20, y: 18, size: 100 },
    { Art: Namkeen, x: 96, y: 28, size: 90 },
  ],
  beverages: [
    { Art: Can, x: 108, y: 24, size: 92 },
    { Art: Bottle, x: 30, y: 12, size: 108 },
  ],
  household: [
    { Art: Soap, x: 100, y: 38, size: 86 },
    { Art: Detergent, x: 30, y: 10, size: 112 },
  ],
}

export function CategoryArt({ id, className = '' }: { id: CategoryId; className?: string }) {
  return (
    <svg viewBox="0 0 200 130" aria-hidden="true" focusable="false" className={className}>
      {layouts[id].map(({ Art, x, y, size }, index) => (
        <Art key={index} x={x} y={y} width={size} height={size} />
      ))}
    </svg>
  )
}
