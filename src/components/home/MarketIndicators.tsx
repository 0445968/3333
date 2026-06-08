import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { marketIndicators } from '../../data/marketIndicators';
import { useLanguage } from '../../i18n/LanguageContext';

export function MarketIndicators() {
  const { t } = useLanguage();

  return (
    <div className="bg-navy-950 border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <span className="text-sand-400 text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0">
            {t.home.marketIndicators}
          </span>
          {marketIndicators.map((ind) => (
            <div key={ind.id} className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <span className="text-white/70 text-xs">{ind.label}</span>
              <span className="text-white text-xs font-bold">{ind.value}</span>
              <span className={`flex items-center gap-0.5 text-xs font-medium ${ind.positive ? 'text-palm-400' : 'text-coral-400'}`}>
                {ind.positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {ind.change}
              </span>
            </div>
          ))}
          {/* TODO: Add market indicator API */}
          <span className="text-navy-600 text-xs whitespace-nowrap shrink-0 ml-auto">Live data coming soon</span>
        </div>
      </div>
    </div>
  );
}

export function MarketWidget() {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl border border-sand-200 overflow-hidden">
      <div className="bg-navy-900 px-4 py-3">
        <h3 className="text-white font-semibold text-sm">{t.home.marketIndicators}</h3>
      </div>
      <div className="divide-y divide-sand-100">
        {marketIndicators.map((ind) => (
          <div key={ind.id} className="px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-navy-800 text-sm font-semibold">{ind.label}</p>
              <p className="text-navy-500 text-xs">{ind.description}</p>
            </div>
            <div className="text-right">
              <p className="text-navy-900 font-bold text-sm">{ind.value}</p>
              <span className={`flex items-center justify-end gap-0.5 text-xs font-medium ${ind.positive ? 'text-palm-600' : 'text-coral-500'}`}>
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
