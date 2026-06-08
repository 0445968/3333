export function formatDate(dateString: string, lang = 'en'): string {
  const date = new Date(dateString);
  const locales: Record<string, string> = {
    en: 'en-US',
    es: 'es-CO',
    cr: 'en-US',
  };

  return date.toLocaleDateString(locales[lang] ?? 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
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

// Category badge colors.
// Rule: dark text on light backgrounds for readability.
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    news: 'bg-travel-100 text-travel-900',
    culture: 'bg-travel-100 text-travel-900',
    music: 'bg-skybrand-100 text-ink-900',
    food: 'bg-sun-100 text-ink-900',
    entertainment: 'bg-coral-50 text-coral-800',
    sports: 'bg-travel-100 text-travel-900',
    weather: 'bg-skybrand-100 text-ink-900',
    politics: 'bg-ink-100 text-ink-900',
    environment: 'bg-palm-100 text-palm-900',
    memorials: 'bg-ink-100 text-ink-900',
    business: 'bg-travel-100 text-travel-900',
    tourism: 'bg-skybrand-100 text-ink-900',
    agriculture: 'bg-palm-100 text-palm-900',
    religion: 'bg-travel-50 text-travel-900',
    science: 'bg-skybrand-100 text-ink-900',
    health: 'bg-palm-100 text-palm-900',
    education: 'bg-skybrand-100 text-ink-900',
    world: 'bg-ink-100 text-ink-900',
    economy: 'bg-sun-100 text-ink-900',
    recipes: 'bg-sun-100 text-ink-900',
    archive: 'bg-ink-100 text-ink-900',
    fishing: 'bg-skybrand-100 text-ink-900',
    youth: 'bg-travel-100 text-travel-900',
    faith: 'bg-travel-50 text-travel-900',
  };

  return colors[category.toLowerCase()] ?? 'bg-ink-100 text-ink-900';
}

// Image placeholder gradients.
// These are intentionally dark enough for white label text.
export const CATEGORY_GRADIENT: Record<string, string> = {
  news: 'from-travel-700 to-travel-950',
  culture: 'from-travel-700 to-travel-900',
  music: 'from-travel-700 to-skybrand-800',
  food: 'from-sun-700 to-travel-900',
  entertainment: 'from-coral-700 to-travel-900',
  sports: 'from-travel-700 to-travel-950',
  weather: 'from-skybrand-700 to-travel-900',
  politics: 'from-ink-800 to-travel-950',
  environment: 'from-palm-700 to-palm-900',
  memorials: 'from-ink-700 to-ink-950',
  business: 'from-travel-700 to-ink-900',
  tourism: 'from-skybrand-700 to-travel-900',
  agriculture: 'from-palm-700 to-palm-900',
  religion: 'from-travel-700 to-ink-900',
  health: 'from-palm-700 to-travel-900',
  education: 'from-travel-700 to-skybrand-800',
  science: 'from-skybrand-700 to-travel-950',
  world: 'from-ink-800 to-travel-950',
  economy: 'from-travel-800 to-ink-950',
  recipes: 'from-sun-700 to-coral-800',
  archive: 'from-ink-700 to-ink-950',
  fishing: 'from-skybrand-700 to-travel-900',
  youth: 'from-travel-700 to-skybrand-800',
  faith: 'from-ink-700 to-travel-900',
};