import { Sun, Wind, Droplets, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

// TODO: Add weather API (e.g., OpenWeatherMap or IDEAM Colombia)

const forecast = [
  { day: 'Mon', icon: '☀️', high: 31, low: 26, rain: '5%' },
  { day: 'Tue', icon: '⛅', high: 30, low: 26, rain: '20%' },
  { day: 'Wed', icon: '🌦', high: 29, low: 25, rain: '40%' },
  { day: 'Thu', icon: '☀️', high: 32, low: 27, rain: '10%' },
  { day: 'Fri', icon: '☀️', high: 32, low: 27, rain: '5%' },
  { day: 'Sat', icon: '⛅', high: 30, low: 26, rain: '15%' },
  { day: 'Sun', icon: '🌦', high: 28, low: 25, rain: '35%' },
];

export function WeatherWidget() {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-navy-800 to-turquoise-800 rounded-xl overflow-hidden text-white">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-wider">{t.home.currentWeather}</p>
            <p className="text-white font-semibold text-sm">San Andrés, Colombia</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">31°C</p>
            <p className="text-white/70 text-xs">Partly Cloudy</p>
          </div>
        </div>
        <div className="flex gap-4 mt-3">
          <span className="flex items-center gap-1 text-white/70 text-xs"><Wind size={12} /> 18 km/h NE</span>
          <span className="flex items-center gap-1 text-white/70 text-xs"><Droplets size={12} /> 72% humidity</span>
          <span className="flex items-center gap-1 text-white/70 text-xs"><Sun size={12} /> UV Index 8</span>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {forecast.map((day) => (
            <div key={day.day} className="flex flex-col items-center gap-1 min-w-[50px]">
              <span className="text-white/60 text-xs">{day.day}</span>
              <span className="text-lg">{day.icon}</span>
              <span className="text-white text-xs font-semibold">{day.high}°</span>
              <span className="text-white/50 text-xs">{day.low}°</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4 mb-4 bg-coral-500/20 border border-coral-400/30 rounded-lg px-3 py-2 flex items-start gap-2">
        <AlertTriangle size={14} className="text-coral-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-coral-300 text-xs font-semibold">Hurricane Season Active</p>
          <p className="text-white/60 text-xs">Jun–Nov. Stay prepared and monitor official alerts.</p>
        </div>
      </div>
    </div>
  );
}
