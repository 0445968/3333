import { Calendar, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../../i18n/LanguageContext';

interface MusicEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  island: string;
  type: string;
  description: string;
}

const MUSIC_EVENTS: MusicEvent[] = [
  { id: '1', name: 'Archipelago Music Festival', date: 'July 12–14, 2026', location: 'San Andrés Seafront', island: 'San Andrés', type: 'Festival', description: 'Three days of live music celebrating the sounds of the islands, featuring artists from across the Caribbean.' },
  { id: '2', name: 'Cedric Waite Album Launch', date: 'June 20, 2026', location: 'Old Harbor Stage', island: 'Providencia', type: 'Concert', description: 'The official launch of "Tides of Home" with a live performance and community celebration.' },
  { id: '3', name: 'Gospel at the Sea Wall', date: 'June 28, 2026', location: 'North Sea Wall, San Andrés', island: 'San Andrés', type: 'Live Session', description: 'An open-air gospel evening featuring the Grace Choir and invited voices.' },
  { id: '4', name: 'Acoustic Nights — Providencia', date: 'July 5, 2026', location: 'Southwest Bay, Providencia', island: 'Providencia', type: 'Live Session', description: 'Intimate acoustic sessions by local artists as the sun sets over Southwest Bay.' },
];

export function MusicEventCard({ event }: { event: MusicEvent }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl border border-sand-100 shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="shrink-0 bg-navy-900 text-white rounded-lg px-3 py-2 text-center min-w-[56px]">
          <span className="text-turquoise-400 text-xs font-medium block">{event.type}</span>
        </div>
        <div className="flex-1">
          <h4 className="font-display text-navy-900 font-bold text-base leading-tight">{event.name}</h4>
          <div className="flex flex-wrap gap-2 mt-1 text-navy-400 text-xs">
            <span className="flex items-center gap-1"><Calendar size={11} /> {event.date}</span>
            <span className="flex items-center gap-1"><MapPin size={11} /> {event.location}</span>
          </div>
          <p className="text-navy-500 text-sm mt-2">{event.description}</p>
          <Button variant="ghost" size="sm" className="mt-2">
            <Calendar size={12} /> {t.music.addToCalendar}
          </Button>
        </div>
      </div>
    </div>
  );
}

export { MUSIC_EVENTS };
