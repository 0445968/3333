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
    <div className="modern-card-hover p-4">
      <div className="flex items-start gap-3">
        <div className="shrink-0 bg-travel-700 text-white rounded-xl px-3 py-2 text-center min-w-[56px]">
          <span className="text-sun-300 text-xs font-bold block leading-none">{event.type}</span>
        </div>
        <div className="flex-1">
          <h4 className="font-display text-ink-900 font-bold text-base leading-tight">{event.name}</h4>
          <div className="flex flex-wrap gap-2 mt-1 text-ink-500 text-xs">
            <span className="flex items-center gap-1"><Calendar size={11} /> {event.date}</span>
            <span className="flex items-center gap-1"><MapPin size={11} /> {event.location}</span>
          </div>
          <p className="text-ink-600 text-sm mt-2">{event.description}</p>
          <Button variant="ghost" size="sm" className="mt-2">
            <Calendar size={12} /> {t.music.addToCalendar}
          </Button>
        </div>
      </div>
    </div>
  );
}

export { MUSIC_EVENTS };
