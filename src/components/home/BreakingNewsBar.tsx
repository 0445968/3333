import { Zap } from 'lucide-react';
import { articles } from '../../data/articles';
import { useLanguage } from '../../i18n/LanguageContext';

export function BreakingNewsBar() {
  const { t } = useLanguage();
  const headlines = articles.slice(0, 5).map((a) => a.title);

  return (
    <div className="bg-palm-600 py-2 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        <div className="flex items-center gap-1.5 shrink-0 rounded-lg bg-white/20 px-2 py-0.5">
          <Zap size={12} className="text-white" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            {t.home.breaking}
          </span>
        </div>

        <div className="relative overflow-hidden flex-1">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
            {[...headlines, ...headlines, ...headlines].map((headline, index) => (
              <span key={`${headline}-${index}`} className="text-sm font-medium text-white">
                {headline} <span className="mx-4 text-white/70">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}