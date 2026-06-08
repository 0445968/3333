import { PlayCircle, Clock } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { formatShortDate, CATEGORY_GRADIENT } from '../../lib/utils';
import type { MusicVideo } from '../../types';

export function MusicVideoCard({ video }: { video: MusicVideo }) {
  const gradient = CATEGORY_GRADIENT[video.category.toLowerCase()] ?? 'from-coral-700 to-navy-900';

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-sand-100 hover:shadow-md transition-shadow">
      <div className={`relative bg-gradient-to-br ${gradient} aspect-video flex items-center justify-center`}>
        <PlayCircle size={44} className="text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded flex items-center gap-1">
          <Clock size={10} /> {video.duration}
        </div>
      </div>
      <div className="p-3">
        <Badge label={video.category} />
        <h4 className="text-navy-900 font-semibold text-sm mt-1 line-clamp-1">{video.title}</h4>
        <p className="text-turquoise-700 text-xs">{video.artist}</p>
        <p className="text-navy-400 text-xs mt-1">{formatShortDate(video.publishedAt)}</p>
      </div>
    </div>
  );
}
