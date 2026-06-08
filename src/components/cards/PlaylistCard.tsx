import { Headphones } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';

interface Playlist {
  id: string;
  title: string;
  description: string;
  trackCount: string;
  curator: string;
  gradient: string;
}

const PLAYLISTS: Playlist[] = [
  { id: '1', title: 'Raizal.tv Weekly Mix', description: 'The best of island music this week', trackCount: '20 tracks', curator: 'Raizal.tv Editors', gradient: 'from-turquoise-700 to-navy-800' },
  { id: '2', title: 'Gospel Sunday', description: 'Faith, voices, and community spirit', trackCount: '15 tracks', curator: 'Elder Rose Morgan', gradient: 'from-sand-600 to-navy-800' },
  { id: '3', title: 'New Island Voices', description: 'Fresh sounds from emerging artists', trackCount: '12 tracks', curator: 'DJ Marcus Howard', gradient: 'from-coral-600 to-navy-900' },
  { id: '4', title: 'Throwback Caribbean Classics', description: 'The songs that shaped the islands', trackCount: '25 tracks', curator: 'Raizal.tv Archive', gradient: 'from-palm-700 to-sand-700' },
  { id: '5', title: 'Dancehall & Soca Hour', description: 'Energy and rhythm from the islands', trackCount: '18 tracks', curator: 'DJ Marcus Howard', gradient: 'from-coral-700 to-sand-600' },
  { id: '6', title: 'Acoustic Coast Sessions', description: 'Quiet beauty, guitar, and the sea', trackCount: '10 tracks', curator: 'Jevonte Williams', gradient: 'from-navy-700 to-turquoise-600' },
];

export function PlaylistCard({ playlist }: { playlist: Playlist }) {
  const { t } = useLanguage();

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-sand-100 hover:shadow-md transition-shadow">
      <div className={`bg-gradient-to-br ${playlist.gradient} p-5 flex items-center justify-center`} style={{ minHeight: 100 }}>
        <Headphones size={36} className="text-white/50 group-hover:text-white/80 transition-colors" />
      </div>
      <div className="p-4">
        <h4 className="font-display text-navy-900 font-bold text-sm leading-tight">{playlist.title}</h4>
        <p className="text-navy-500 text-xs mt-1">{playlist.description}</p>
        <div className="flex items-center justify-between mt-2 text-navy-400 text-xs">
          <span>{playlist.trackCount}</span>
          <span>{playlist.curator}</span>
        </div>
        <Button variant="ghost" size="sm" className="w-full mt-3 border border-sand-200 justify-center">
          <Headphones size={12} /> {t.music.listenSoon}
        </Button>
      </div>
    </div>
  );
}

export { PLAYLISTS };
