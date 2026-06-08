import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { CATEGORY_GRADIENT } from '../../lib/utils';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Recipe } from '../../types';

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { t } = useLanguage();
  const gradient = 'from-palm-700 to-sand-700';
  const difficultyColors = {
    Easy: 'text-palm-700 bg-palm-50',
    Medium: 'text-sand-700 bg-sand-50',
    Hard: 'text-coral-700 bg-coral-50',
  };

  return (
    <Link to={`/recipes`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-sand-100 hover:shadow-md transition-shadow block">
      <div className={`relative bg-gradient-to-br ${gradient} aspect-[4/3] flex items-end p-3`}>
        <span className="text-white/60 text-xs uppercase tracking-wider">Recipe Image</span>
        <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColors[recipe.difficulty]}`}>
          {recipe.difficulty}
        </span>
      </div>
      <div className="p-4">
        <Badge label={recipe.category} />
        <h3 className="font-display text-navy-900 font-bold text-base mt-2 line-clamp-1">{recipe.title}</h3>
        <p className="text-navy-500 text-sm mt-1 line-clamp-2">{recipe.description}</p>
        <div className="flex items-center gap-3 mt-3 text-navy-400 text-xs">
          <span className="flex items-center gap-1"><Clock size={11} /> {recipe.prepTime}</span>
          <span className="flex items-center gap-1"><BookOpen size={11} /> {recipe.difficulty}</span>
        </div>
        {recipe.culturalNote && (
          <p className="mt-2 text-sand-600 text-xs italic border-l-2 border-sand-300 pl-2 line-clamp-2">{recipe.culturalNote}</p>
        )}
      </div>
    </Link>
  );
}
