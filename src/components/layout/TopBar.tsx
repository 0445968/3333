import { Link } from 'react-router-dom';
import { Globe, MapPin, Calendar, Thermometer } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { MarketIndicators } from '../home/MarketIndicators';
import type { Language } from '../../types';

const LANGS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'cr', label: 'CR' },
];

export function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      <div className="bg-navy-950 text-white/70 text-xs border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          {/* Left: date + location */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} className="text-turquoise-400" />
              {today}
            </span>
            <span className="text-navy-600">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} className="text-turquoise-400" />
              {t.topBar.location}
            </span>
          </div>

          {/* Mobile: location only */}
          <span className="flex md:hidden items-center gap-1 text-xs">
            <MapPin size={10} className="text-turquoise-400" />
            {t.topBar.location}
          </span>

          {/* Right: weather stub + language toggle */}
          <div className="flex items-center gap-3 ml-auto">
            <Link to="/weather" className="hidden sm:flex items-center gap-1 hover:text-turquoise-400 transition-colors">
              <Thermometer size={11} className="text-turquoise-400" />
              <span>31°C · San Andrés</span>
            </Link>

            {/* Language toggle — TODO: Add multilingual content support */}
            <div className="flex items-center gap-1 border-l border-navy-700 pl-3">
              <Globe size={11} className="text-turquoise-400" />
              {LANGS.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-1.5 py-0.5 rounded text-xs font-medium transition-colors ${
                    language === lang.code
                      ? 'bg-turquoise-600 text-white'
                      : 'hover:text-turquoise-400'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MarketIndicators />
    </>
  );
}
