/**
 * Central Tokri configuration.
 * Edit this file (or set the VITE_* variables, see .env.example) to update business details.
 * Empty strings mean "not provided yet": the UI hides or softens those items.
 */

export interface ServiceLocation {
  id: string
  name: string
  state: string
}

export interface SocialLink {
  id: 'instagram' | 'facebook' | 'youtube' | 'x'
  label: string
  url: string
}

export const brand = {
  name: 'Tokri',
  tagline: 'Apne Shehar Ki Apni Online Dukaan',
  seoTitle: 'Tokri – Apne Shehar Ki Apni Online Dukaan',
  seoDescription:
    'Gulabpura aur Bijainagar mein daily groceries, fresh vegetables, snacks aur essentials ke liye download karein Tokri app.',
  siteUrl: import.meta.env.VITE_SITE_URL ?? '',
} as const

/** Add a town here and it appears everywhere locations are shown. */
export const serviceLocations: readonly ServiceLocation[] = [
  { id: 'gulabpura', name: 'Gulabpura', state: 'Rajasthan' },
  { id: 'bijainagar', name: 'Bijainagar', state: 'Rajasthan' },
]

/** Leave a value empty until the real listing or number is available. */
export const contact: { phone: string; whatsapp: string; email: string } = {
  phone: '',
  whatsapp: '',
  email: '',
}

export const socialLinks: readonly SocialLink[] = [
  { id: 'instagram', label: 'Instagram', url: '' },
  { id: 'facebook', label: 'Facebook', url: '' },
  { id: 'youtube', label: 'YouTube', url: '' },
  { id: 'x', label: 'X', url: '' },
]

/**
 * Every download button and the QR code read from here.
 * Set playStoreUrl once the listing is published to switch the whole site from
 * "coming soon" to live.
 */
export const appLinks = {
  playStoreUrl: import.meta.env.VITE_PLAY_STORE_URL ?? '',
  appStoreUrl: import.meta.env.VITE_APP_STORE_URL ?? '',
  /** Optional real app screenshot (portrait, ~9:19). When empty the built-in UI mockup is shown. */
  screenshotSrc: '',
} as const
