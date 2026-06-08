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

// Category badge — always dark text on light bg for AAA contrast
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    culture:       'bg-sun-100 text-sun-800',
    music:         'bg-travel-100 text-travel-800',
    food:          'bg-emerald-100 text-emerald-800',
    entertainment: 'bg-sun-50 text-sun-700',
    sports:        'bg-aqua-100 text-aqua-800',
    weather:       'bg-travel-50 text-travel-700',
    politics:      'bg-ink-100 text-ink-800',
    environment:   'bg-emerald-100 text-emerald-800',
    memorials:     'bg-ink-50 text-ink-700',
    business:      'bg-travel-100 text-travel-800',
    tourism:       'bg-aqua-50 text-aqua-700',
    agriculture:   'bg-emerald-50 text-emerald-700',
    religion:      'bg-sun-50 text-sun-700',
    science:       'bg-aqua-100 text-aqua-800',
    health:        'bg-coral-50 text-coral-700',
    education:     'bg-travel-50 text-travel-700',
    world:         'bg-ink-50 text-ink-700',
    economy:       'bg-sun-100 text-sun-800',
    recipes:       'bg-emerald-50 text-emerald-700',
    archive:       'bg-ink-100 text-ink-700',
  };
  return colors[category.toLowerCase()] ?? 'bg-ink-100 text-ink-700';
}

// Image placeholder gradients — all deep/dark so white label text is readable
export const CATEGORY_GRADIENT: Record<string, string> = {
  culture:       'from-travel-700 to-travel-900',
  music:         'from-travel-800 to-ink-900',
  food:          'from-emerald-700 to-travel-800',
  entertainment: 'from-travel-700 to-ink-800',
  sports:        'from-aqua-700 to-travel-800',
  weather:       'from-travel-700 to-aqua-800',
  politics:      'from-ink-700 to-travel-900',
  environment:   'from-emerald-700 to-aqua-800',
  memorials:     'from-ink-600 to-travel-800',
  business:      'from-travel-700 to-ink-800',
  tourism:       'from-aqua-700 to-travel-800',
  agriculture:   'from-emerald-700 to-ink-800',
  religion:      'from-travel-700 to-ink-800',
  health:        'from-coral-700 to-travel-900',
  education:     'from-travel-700 to-aqua-800',
  science:       'from-aqua-700 to-travel-900',
  world:         'from-ink-700 to-travel-900',
  economy:       'from-travel-700 to-ink-900',
  fishing:       'from-aqua-700 to-travel-800',
  news:          'from-travel-700 to-ink-800',
  youth:         'from-travel-600 to-aqua-700',
  faith:         'from-ink-600 to-travel-800',
};
