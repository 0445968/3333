import type { Recipe } from '../types';

// TODO: Connect to recipe CMS with full ingredient lists and step-by-step instructions

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Coconut Fish Stew',
    slug: 'coconut-fish-stew',
    description: 'A rich, warming stew made with fresh island fish simmered in coconut milk, scotch bonnet pepper, and local herbs. A cornerstone of Raizal home cooking.',
    category: 'Seafood',
    prepTime: '45 min',
    difficulty: 'Medium',
    culturalNote: 'This stew is often prepared for family gatherings and church dinners. Each family has their own version, passed down through generations.',
    image: 'fish-stew',
    featured: true,
  },
  {
    id: '2',
    title: 'Island Johnny Cakes',
    slug: 'island-johnny-cakes',
    description: 'Soft, golden fried bread made from flour, coconut milk, and a touch of sugar. Eaten for breakfast with butter and saltfish, or as a side at any meal.',
    category: 'Bread & Bakes',
    prepTime: '30 min',
    difficulty: 'Easy',
    culturalNote: 'Johnny Cakes are a Caribbean staple that arrived with African and British influences. On the islands, they are a daily comfort food.',
    image: 'johnny-cakes',
    featured: false,
  },
  {
    id: '3',
    title: 'Plantain Breakfast Plate',
    slug: 'plantain-breakfast-plate',
    description: 'Sweet ripe plantains fried golden, served alongside eggs, saltfish, and fresh tomatoes. A complete island morning on one plate.',
    category: 'Plantain',
    prepTime: '20 min',
    difficulty: 'Easy',
    culturalNote: 'Plantain — both green and ripe — appears at almost every island meal. The breakfast plate is an affirmation of island abundance.',
    image: 'plantain-plate',
    featured: false,
  },
  {
    id: '4',
    title: 'Crab & Coconut Rice',
    slug: 'crab-coconut-rice',
    description: 'Land crab cooked down with coconut rice, allspice, and island seasoning. A celebratory dish served during crab season and special occasions.',
    category: 'Seafood',
    prepTime: '1 hr 20 min',
    difficulty: 'Hard',
    culturalNote: 'Crab season is a community event. Families gather to catch, clean, and cook together. This dish is rarely eaten alone.',
    image: 'crab-rice',
    featured: true,
  },
  {
    id: '5',
    title: 'Cassava Bake',
    slug: 'cassava-bake',
    description: 'Grated cassava mixed with coconut, sugar, and spices, then baked to a golden, dense cake. A traditional sweet enjoyed at festivals and family events.',
    category: 'Coconut',
    prepTime: '50 min',
    difficulty: 'Medium',
    culturalNote: 'Cassava has been cultivated in the Caribbean for thousands of years. This bake honors both indigenous and African food traditions.',
    image: 'cassava-bake',
    featured: false,
  },
  {
    id: '6',
    title: 'Fresh Lime Cooler',
    slug: 'fresh-lime-cooler',
    description: 'Fresh island limes, cold water, sugar, and a pinch of salt — the ultimate Caribbean thirst-quencher. Add a sprig of mint for celebration.',
    category: 'Soups & Stews',
    prepTime: '10 min',
    difficulty: 'Easy',
    culturalNote: 'Every island home has its own lime cooler recipe. It is always offered to guests as a sign of welcome.',
    image: 'lime-cooler',
    featured: false,
  },
  {
    id: '7',
    title: 'Breadfruit Sunday Plate',
    slug: 'breadfruit-sunday-plate',
    description: 'Roasted or boiled breadfruit served with stewed chicken, coconut gravy, and island greens. The definitive Sunday meal of the Raizal household.',
    category: 'Holiday Meals',
    prepTime: '1 hr',
    difficulty: 'Medium',
    culturalNote: 'The breadfruit tree is a symbol of island life and resilience. Sunday breadfruit is a ritual of family, faith, and belonging.',
    image: 'breadfruit-plate',
    featured: true,
  },
  {
    id: '8',
    title: 'Rondon Soup',
    slug: 'rondon-soup',
    description: 'A hearty Caribbean soup with yuca, plantain, fish, crab, coconut milk, and island dumplings — simmered low and slow for deep flavor.',
    category: 'Soups & Stews',
    prepTime: '1 hr 30 min',
    difficulty: 'Hard',
    culturalNote: 'Rondon is considered the national dish of Old Providence. Its name may derive from "run down" — a cooking technique of reducing coconut milk to a rich sauce.',
    image: 'rondon-soup',
    featured: false,
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getRecipesByCategory(category: string): Recipe[] {
  if (category === 'All') return recipes;
  return recipes.filter((r) => r.category === category);
}
