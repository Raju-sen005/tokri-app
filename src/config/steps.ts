import { ClipboardCheck, PackageCheck, ShoppingBasket, Smartphone, type LucideIcon } from 'lucide-react'

export interface Step {
  title: string
  description: string
  Icon: LucideIcon
}

export const steps: readonly Step[] = [
  {
    title: 'Download Tokri App',
    description: 'Tokri app download karein aur apna shehar chunein.',
    Icon: Smartphone,
  },
  {
    title: 'Choose Your Products',
    description: 'Sabzi, ration, dairy aur snacks dekhein, aur jo chahiye cart mein daalein.',
    Icon: ShoppingBasket,
  },
  {
    title: 'Place Your Order',
    description: 'Cart check karein, apna address bharein aur order place kar dein.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Get Your Delivery',
    description: 'Aapka order aapke address par pahunchaya jayega. Bazaar jaane ki zaroorat nahi!',
    Icon: PackageCheck,
  },
]
