export function formatDate(dateString: string, lang = 'en'): string {
  const date = new Date(dateString);
  const locales: Record<string, string> = { en: 'en-US', es: 'es-CO', cr: 'en-US' };
  return date.toLocaleDateString(locales[lang] ?? 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '…';
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    culture:       'bg-sand-100 text-sand-800',
    music:         'bg-coral-100 text-coral-800',
    food:          'bg-palm-100 text-palm-800',
    entertainment: 'bg-cream-100 text-sand-800',
    sports:        'bg-turquoise-100 text-turquoise-800',
    weather:       'bg-navy-100 text-navy-800',
    politics:      'bg-navy-100 text-navy-900',
    environment:   'bg-palm-100 text-palm-900',
    memorials:     'bg-sand-50 text-sand-700',
    business:      'bg-navy-50 text-navy-700',
    tourism:       'bg-turquoise-50 text-turquoise-800',
    agriculture:   'bg-palm-50 text-palm-800',
    religion:      'bg-cream-100 text-sand-900',
    science:       'bg-turquoise-50 text-turquoise-900',
    health:        'bg-coral-50 text-coral-700',
    education:     'bg-navy-50 text-navy-700',
    world:         'bg-sand-50 text-sand-800',
    economy:       'bg-sand-100 text-sand-900',
    recipes:       'bg-palm-100 text-palm-800',
    archive:       'bg-sand-100 text-sand-700',
  };
  return colors[category.toLowerCase()] ?? 'bg-gray-100 text-gray-700';
}

export const CATEGORY_GRADIENT: Record<string, string> = {
  culture:       'from-sand-700 to-sand-900',
  music:         'from-coral-600 to-navy-900',
  food:          'from-palm-700 to-palm-900',
  entertainment: 'from-sand-600 to-navy-800',
  sports:        'from-turquoise-600 to-navy-800',
  weather:       'from-navy-600 to-turquoise-700',
  politics:      'from-navy-700 to-navy-900',
  environment:   'from-palm-600 to-turquoise-800',
  memorials:     'from-sand-500 to-navy-700',
  business:      'from-navy-700 to-turquoise-800',
  tourism:       'from-turquoise-500 to-navy-700',
  agriculture:   'from-palm-600 to-sand-700',
  religion:      'from-sand-700 to-navy-800',
  health:        'from-coral-500 to-navy-800',
  education:     'from-navy-600 to-turquoise-700',
};
