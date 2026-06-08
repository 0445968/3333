import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Recipe } from '../../types';

const DIFFICULTY_COLORS = {
  Easy:   'bg-palm-100 text-palm-800',
  Medium: 'bg-sun-100 text-sun-800',
  Hard:   'bg-coral-100 text-coral-800',
};

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { t } = useLanguage();

  return (
    <Link to="/recipes" className="group modern-card-hover block">
      <div className="relative bg-gradient-to-br from-palm-700 to-travel-800 aspect-[4/3] flex items-end p-3 rounded-t-xl overflow-hidden">
        <span className="text-white/40 text-xs uppercase tracking-wider">Recipe Image</span>
        <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${DIFFICULTY_COLORS[recipe.difficulty]}`}>
          {recipe.difficulty}
        </span>
      </div>
      <div className="p-4">
        <Badge label={recipe.category} />
        <h3 className="font-display text-ink-900 font-bold text-base mt-2 line-clamp-1">{recipe.title}</h3>
        <p className="text-ink-600 text-sm mt-1 line-clamp-2">{recipe.description}</p>
        <div className="flex items-center gap-3 mt-3 text-ink-400 text-xs border-t border-surface-border pt-3">
          <span className="flex items-center gap-1"><Clock size={11} /> {recipe.prepTime}</span>
          <span className="flex items-center gap-1"><BookOpen size={11} /> {recipe.difficulty}</span>
        </div>
        {recipe.culturalNote && (
          <p className="mt-2 text-ink-500 text-xs italic border-l-2 border-travel-200 pl-2 line-clamp-2">{recipe.culturalNote}</p>
        )}
      </div>
    </Link>
  );
}
