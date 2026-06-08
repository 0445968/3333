import { Zap } from 'lucide-react';
import { articles } from '../../data/articles';
import { useLanguage } from '../../i18n/LanguageContext';

export function BreakingNewsBar() {
  const { t } = useLanguage();
  const headlines = articles.slice(0, 5).map((a) => a.title);

  return (
    <div className="breaking-bar py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        <div className="flex items-center gap-1.5 shrink-0 bg-white/20 rounded-lg px-2 py-0.5">
          <Zap size={12} className="text-white" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">{t.home.breaking}</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
            {[...headlines, ...headlines].map((h, i) => (
              <span key={i} className="text-sm font-medium text-white">{h} &nbsp;·&nbsp;</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
