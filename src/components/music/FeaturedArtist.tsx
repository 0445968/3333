import { Link } from 'react-router-dom';
import { Mic2, ChevronRight } from 'lucide-react';
import { getFeaturedArtist } from '../../data/music';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';

export function FeaturedArtist() {
  const { t } = useLanguage();
  const artist = getFeaturedArtist();

  return (
    <div className="bg-gradient-to-br from-navy-900 to-coral-900 rounded-2xl overflow-hidden p-6 text-white">
      <div className="flex items-center gap-2 mb-4">
        <Mic2 size={16} className="text-sand-400" />
        <span className="text-sand-400 text-xs font-bold uppercase tracking-widest">{t.music.featuredArtist}</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 items-start">
        {/* Artist image placeholder */}
        <div className="w-full sm:w-32 h-32 rounded-xl bg-gradient-to-br from-coral-600 to-navy-800 flex items-center justify-center shrink-0">
          <span className="font-display text-4xl font-black text-white/30">{artist.name.charAt(0)}</span>
        </div>

        <div className="flex-1">
          <h3 className="font-display text-2xl font-bold">{artist.name}</h3>
          <p className="text-turquoise-300 text-sm mb-0.5">{artist.island}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {artist.genres.map((g) => (
              <span key={g} className="text-xs bg-white/10 text-white/70 rounded-full px-2 py-0.5">{g}</span>
            ))}
          </div>
          <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{artist.bio}</p>
          {artist.latestRelease && (
            <p className="text-sand-400 text-xs mt-2">Latest: {artist.latestRelease}</p>
          )}
          <div className="flex gap-2 mt-4">
            <Button variant="coral" size="sm">{t.music.readInterview}</Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              {t.music.viewMusicProfile}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
