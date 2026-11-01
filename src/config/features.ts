import { Home, MapPin, ShoppingBasket, Smartphone, type LucideIcon } from 'lucide-react'
import { joinHinglish } from '../lib/appLinks'
import { serviceLocations } from './site'

export interface Feature {
  title: string
  description: string
  Icon: LucideIcon
}

const towns = joinHinglish(serviceLocations.map((town) => town.name))

export const features: readonly Feature[] = [
  {
    title: 'Shop from home',
    description: 'Ghar baithe apni shopping karein, bazaar ke chakkar se chhutti.',
    Icon: Home,
  },
  {
    title: 'Daily essentials in one place',
    description: 'Sabzi, ration, dairy, snacks aur ghar ka saaman, sab ek hi app mein.',
    Icon: ShoppingBasket,
  },
  {
    title: 'Easy mobile ordering',
    description: 'Simple app, aasan steps. Chuniye, cart mein daaliye aur order kijiye.',
    Icon: Smartphone,
  },
  {
    title: 'Your local online shopping destination',
    description: `${towns} ke liye bana, apne shehar ki apni online dukaan.`,
    Icon: MapPin,
  },
]
