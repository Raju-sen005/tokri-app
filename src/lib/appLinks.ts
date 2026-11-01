import { appLinks, brand, contact } from '../config/site'

export type StoreState =
  | { status: 'live'; url: string }
  | { status: 'coming-soon'; url: null }

function isValidUrl(value: string, hostname: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && url.hostname === hostname
  } catch {
    return false
  }
}

export function getPlayStoreState(): StoreState {
  const url = appLinks.playStoreUrl.trim()
  return isValidUrl(url, 'play.google.com')
    ? { status: 'live', url }
    : { status: 'coming-soon', url: null }
}

export function joinHinglish(items: readonly string[]): string {
  if (items.length <= 1) return items.join('')
  return `${items.slice(0, -1).join(', ')} aur ${items[items.length - 1]}`
}

/** Returns a wa.me link when a WhatsApp number is configured, otherwise null. */
export function getWhatsAppUrl(message = `Namaste! ${brand.name} app live hone par mujhe batayein.`): string | null {
  const digits = contact.whatsapp.replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : null
}
