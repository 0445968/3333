import { Calendar, MapPin } from 'lucide-react';
import { Badge } from '../ui/Badge';
import type { ArchiveEvent } from '../../types';

export function EventCard({ event }: { event: ArchiveEvent }) {
  return (
    <div className="bg-white rounded-xl border border-sand-100 shadow-sm p-4 hover:shadow-md transition-shadow flex gap-4">
      {/* Year badge */}
      <div className="shrink-0 w-16 h-16 bg-navy-900 rounded-lg flex flex-col items-center justify-center text-white">
        <span className="text-turquoise-400 text-xs font-medium">{event.island.slice(0, 3).toUpperCase()}</span>
        <span className="text-white font-bold text-lg leading-tight">{event.year}</span>
      </div>
      <div className="flex-1 min-w-0">
        <Badge label={event.category} />
        <h3 className="font-display text-navy-900 font-semibold text-base mt-1 line-clamp-1">{event.title}</h3>
        <p className="text-navy-500 text-sm mt-1 line-clamp-2">{event.description}</p>
        <div className="flex items-center gap-3 mt-2 text-navy-400 text-xs">
          <span className="flex items-center gap-1"><Calendar size={11} /> {event.date}</span>
          <span className="flex items-center gap-1"><MapPin size={11} /> {event.location}</span>
        </div>
      </div>
    </div>
  );
}
