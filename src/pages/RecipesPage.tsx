import { useState } from 'react';
import { ChefHat, Upload } from 'lucide-react';
import { recipes, getRecipesByCategory } from '../data/recipes';
import { RecipeCard } from '../components/cards/RecipeCard';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../i18n/LanguageContext';

// TODO: Connect to recipe CMS and add full recipe pages

const CATEGORIES = ['All', 'Seafood', 'Coconut', 'Plantain', 'Bread & Bakes', 'Soups & Stews', 'Holiday Meals', 'Family Recipes'];

export function RecipesPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = getRecipesByCategory(activeCategory);
  const featured = recipes.find((r) => r.featured);

  return (
    <div className="app-page">
      {/* Hero */}
      <div className="bg-travel-800 py-12 text-white">
        <div className="content-shell">
          <ChefHat size={32} className="text-sun-300 mb-3" />
          <h1 className="font-display text-4xl font-bold mb-2">{t.recipes.heroTitle}</h1>
          <p className="text-white/70 max-w-xl">{t.recipes.heroSub}</p>
        </div>
      </div>

      <div className="content-shell py-8">
        {/* Featured */}
        {featured && (
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-surface-subtle rounded-3xl p-6 border border-surface-border">
            <div className="bg-gradient-to-br from-travel-700 to-travel-900 rounded-2xl aspect-[4/3] flex items-end p-4">
              <span className="text-white/50 text-xs uppercase tracking-wider">Featured Recipe</span>
            </div>
            <div>
              <span className="section-label">Featured Recipe</span>
              <h2 className="font-display text-2xl font-bold text-ink-900 mt-1">{featured.title}</h2>
              <p className="text-ink-600 mt-2">{featured.description}</p>
              <div className="flex gap-4 mt-3 text-sm text-ink-500">
                <span>{t.recipes.prepTime}: {featured.prepTime}</span>
                <span>{t.recipes.difficulty}: {featured.difficulty}</span>
              </div>
              <p className="mt-3 text-travel-700 italic text-sm border-l-2 border-travel-300 pl-2">{featured.culturalNote}</p>
              <Button variant="primary" size="md" className="mt-4">{t.readMore}</Button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-travel-700 text-white'
                  : 'bg-surface-subtle text-ink-700 border border-surface-border hover:bg-travel-50 hover:text-travel-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Submit callout */}
        <div className="modern-card p-6 flex items-start gap-4">
          <Upload size={24} className="text-travel-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-bold text-ink-900">{t.recipes.submitRecipe}</h3>
            <p className="text-ink-600 mt-1">{t.recipes.submitRecipeSub}</p>
            {/* TODO: Add user submissions workflow */}
            <Button variant="secondary" size="md" className="mt-3">Submit a Recipe</Button>
          </div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
