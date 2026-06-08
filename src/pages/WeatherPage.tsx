import { Cloud, Waves, AlertTriangle, Sun, Wind, Droplets } from 'lucide-react';
import { getArticlesByCategory } from '../data/articles';
import { ArticleCard } from '../components/cards/ArticleCard';
import { WeatherWidget } from '../components/home/WeatherWidget';
import { useLanguage } from '../i18n/LanguageContext';

// TODO: Add weather API (e.g., OpenWeatherMap or IDEAM Colombia)

export function WeatherPage() {
  const { t } = useLanguage();
  const weatherArticles = getArticlesByCategory('Weather');

  return (
    <div className="app-page">
      {/* Hero */}
      <div className="bg-travel-800 py-12 text-white">
        <div className="content-shell">
          <Cloud size={32} className="text-aqua-300 mb-3" />
          <h1 className="font-display text-4xl font-bold mb-2">Weather & Sea Conditions</h1>
          <p className="text-white/60">San Andrés, Providencia & Santa Catalina</p>
        </div>
      </div>

      <div className="content-shell py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current weather */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-ink-900 mb-4">{t.home.currentWeather}</h2>
            <WeatherWidget />
          </div>

          {/* Sea conditions */}
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900 mb-4">Sea Conditions</h2>
            <div className="modern-card p-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-ink-600"><Waves size={16} /> Wave Height</span>
                <span className="font-semibold text-ink-800">0.8 – 1.2 m</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-ink-600"><Wind size={16} /> Wind</span>
                <span className="font-semibold text-ink-800">15–22 km/h NE</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-ink-600"><Droplets size={16} /> Sea Temp</span>
                <span className="font-semibold text-ink-800">28°C</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-ink-600"><Sun size={16} /> Visibility</span>
                <span className="font-semibold text-ink-800">Excellent (20m+)</span>
              </div>
              <p className="text-travel-700 text-xs mt-2 font-medium">Conditions favorable for diving and snorkeling.</p>
            </div>
          </div>
        </div>

        {/* Hurricane season alert */}
        <div className="bg-coral-50 border border-coral-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle size={22} className="text-coral-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-coral-800 text-lg">Hurricane Season Active — June to November</h3>
              <p className="text-coral-700 text-sm mt-1">
                The Atlantic hurricane season runs from June through November. Residents and visitors should monitor official alerts from IDEAM and NOAA. Keep emergency supplies ready and know your evacuation plan.
              </p>
              <div className="flex flex-wrap gap-3 mt-3 text-sm">
                <div className="bg-white rounded-lg px-3 py-2 border border-coral-100">
                  <p className="font-semibold text-coral-800">72-hour kit</p>
                  <p className="text-coral-700 text-xs">Water, food, documents, radio</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 border border-coral-100">
                  <p className="font-semibold text-coral-800">Emergency contacts</p>
                  <p className="text-coral-700 text-xs">Save local emergency numbers</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 border border-coral-100">
                  <p className="font-semibold text-coral-800">Community alerts</p>
                  <p className="text-coral-700 text-xs">Sign up for community notifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weather articles */}
        {weatherArticles.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">Weather & Environment Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {weatherArticles.map((a) => <ArticleCard key={a.id} article={a} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
