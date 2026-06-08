import { Calendar, MapPin } from 'lucide-react';
import { Badge } from '../ui/Badge';
import type { ArchiveEvent } from '../../types';

export function EventCard({ event }: { event: ArchiveEvent }) {
  return (
    <div className="modern-card-hover flex gap-4 p-4">
      <div className="shrink-0 w-16 h-16 bg-travel-700 rounded-2xl flex flex-col items-center justify-center text-white">
        <span className="text-skybrand-300 text-xs font-semibold">{event.island.slice(0, 3).toUpperCase()}</span>
        <span className="text-white font-display font-bold text-lg leading-tight">{event.year}</span>
      </div>
      <div className="flex-1 min-w-0">
        <Badge label={event.category} />
        <h3 className="font-display text-ink-900 font-semibold text-base mt-1 line-clamp-1">{event.title}</h3>
        <p className="text-ink-600 text-sm mt-1 line-clamp-2">{event.description}</p>
        <div className="flex items-center gap-3 mt-2 text-ink-400 text-xs">
          <span className="flex items-center gap-1"><Calendar size={11} /> {event.date}</span>
          <span className="flex items-center gap-1"><MapPin size={11} /> {event.location}</span>
        </div>
      </div>
    </div>
  );
}
