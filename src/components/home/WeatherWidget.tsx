import { Sun, Wind, Droplets, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

// TODO: Add weather API (e.g., OpenWeatherMap or IDEAM Colombia)

const forecast = [
  { day: 'Mon', icon: '☀️', high: 31, low: 26 },
  { day: 'Tue', icon: '⛅', high: 30, low: 26 },
  { day: 'Wed', icon: '🌦', high: 29, low: 25 },
  { day: 'Thu', icon: '☀️', high: 32, low: 27 },
  { day: 'Fri', icon: '☀️', high: 32, low: 27 },
  { day: 'Sat', icon: '⛅', high: 30, low: 26 },
  { day: 'Sun', icon: '🌦', high: 28, low: 25 },
];

export function WeatherWidget() {
  const { t } = useLanguage();

  return (
    <div className="modern-card overflow-hidden">
      {/* Current */}
      <div className="bg-travel-800 px-5 py-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/60 text-xs uppercase tracking-wider">{t.home.currentWeather}</p>
            <p className="text-white font-semibold text-sm mt-0.5">San Andrés, Colombia</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-display font-bold">31°C</p>
            <p className="text-white/60 text-xs">Partly Cloudy</p>
          </div>
        </div>
        <div className="flex gap-4 mt-3">
          <span className="flex items-center gap-1 text-white/60 text-xs"><Wind size={12} /> 18 km/h NE</span>
          <span className="flex items-center gap-1 text-white/60 text-xs"><Droplets size={12} /> 72% humidity</span>
          <span className="flex items-center gap-1 text-white/60 text-xs"><Sun size={12} /> UV Index 8</span>
        </div>
      </div>

      {/* Forecast */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
        {forecast.map((day) => (
          <div key={day.day} className="flex flex-col items-center gap-1 min-w-[48px]">
            <span className="text-ink-500 text-xs">{day.day}</span>
            <span className="text-lg">{day.icon}</span>
            <span className="text-ink-800 text-xs font-semibold">{day.high}°</span>
            <span className="text-ink-400 text-xs">{day.low}°</span>
          </div>
        ))}
      </div>

      {/* Hurricane alert */}
      <div className="mx-4 mb-4 bg-coral-50 border border-coral-200 rounded-2xl px-3 py-2 flex items-start gap-2">
        <AlertTriangle size={14} className="text-coral-700 mt-0.5 shrink-0" />
        <div>
          <p className="text-coral-800 text-xs font-semibold">Hurricane Season Active</p>
          <p className="text-coral-700 text-xs">Jun–Nov. Stay prepared and monitor official alerts.</p>
        </div>
      </div>
    </div>
  );
}
