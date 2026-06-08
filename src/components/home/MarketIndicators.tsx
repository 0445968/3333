import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { marketIndicators } from '../../data/marketIndicators';
import { useLanguage } from '../../i18n/LanguageContext';

export function MarketIndicators() {
  const { t } = useLanguage();

  return (
    <div className="bg-travel-900 border-b border-travel-800">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <span className="text-sun-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0">
            {t.home.marketIndicators}
          </span>
          {marketIndicators.map((ind) => (
            <div key={ind.id} className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <span className="text-white/70 text-xs">{ind.label}</span>
              <span className="text-white text-xs font-bold">{ind.value}</span>
              <span className={`flex items-center gap-0.5 text-xs font-semibold ${ind.positive ? 'text-emerald-400' : 'text-coral-400'}`}>
                {ind.positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {ind.change}
              </span>
            </div>
          ))}
          {/* TODO: Add market indicator API */}
          <span className="text-white/20 text-xs whitespace-nowrap shrink-0 ml-auto">Live data coming soon</span>
        </div>
      </div>
    </div>
  );
}

export function MarketWidget() {
  const { t } = useLanguage();

  return (
    <div className="modern-card overflow-hidden">
      <div className="bg-travel-800 px-4 py-3">
        <h3 className="text-white font-display font-semibold text-sm">{t.home.marketIndicators}</h3>
      </div>
      <div className="divide-y divide-surface-border">
        {marketIndicators.map((ind) => (
          <div key={ind.id} className="px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-ink-800 text-sm font-semibold">{ind.label}</p>
              <p className="text-ink-500 text-xs">{ind.description}</p>
            </div>
            <div className="text-right">
              <p className="text-ink-900 font-bold text-sm">{ind.value}</p>
              <span className={`flex items-center justify-end gap-0.5 text-xs font-semibold ${ind.positive ? 'text-emerald-700' : 'text-coral-700'}`}>
                {ind.positive ? <TrendingUp size={11} /> : ind.change.startsWith('-') ? <TrendingDown size={11} /> : <Minus size={11} />}
                {ind.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
