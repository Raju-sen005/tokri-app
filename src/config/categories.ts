export type CategoryId =
  | 'fruits-vegetables'
  | 'grocery-staples'
  | 'dairy-bakery'
  | 'snacks-namkeen'
  | 'beverages'
  | 'household'

export interface Category {
  id: CategoryId
  name: string
  description: string
  /** Set to false to hide a category that is not in the store inventory. */
  available: boolean
}

export const categories: readonly Category[] = [
  { id: 'fruits-vegetables', name: 'Fruits & Vegetables', description: 'Roz ki sabziyan aur mausami fal', available: true },
  { id: 'grocery-staples', name: 'Grocery & Staples', description: 'Atta, daal, chawal aur ghar ka ration', available: true },
  { id: 'dairy-bakery', name: 'Dairy & Bakery', description: 'Doodh, dahi, bread aur bahut kuch', available: true },
  { id: 'snacks-namkeen', name: 'Snacks & Namkeen', description: 'Chai ke saath chatpate snacks', available: true },
  { id: 'beverages', name: 'Beverages', description: 'Juice, cold drinks aur peene ka saaman', available: true },
  { id: 'household', name: 'Household Essentials', description: 'Safai aur roz ke zaroori items', available: true },
]

export const availableCategories = categories.filter((category) => category.available)
