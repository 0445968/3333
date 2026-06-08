import { PlayCircle, Clock } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { formatShortDate, CATEGORY_GRADIENT } from '../../lib/utils';
import type { MusicVideo } from '../../types';

export function MusicVideoCard({ video }: { video: MusicVideo }) {
  const gradient = CATEGORY_GRADIENT[video.category.toLowerCase()] ?? 'from-travel-700 to-travel-900';

  return (
    <div className="group modern-card-hover">
      <div className={`relative bg-gradient-to-br ${gradient} aspect-video flex items-center justify-center rounded-t-3xl overflow-hidden`}>
        <PlayCircle size={40} className="text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
        <div className="absolute bottom-2 right-2 bg-ink-900/80 text-white text-xs px-1.5 py-0.5 rounded-lg flex items-center gap-1">
          <Clock size={10} /> {video.duration}
        </div>
      </div>
      <div className="p-3">
        <Badge label={video.category} />
        <h4 className="text-ink-900 font-semibold text-sm mt-1.5 line-clamp-1">{video.title}</h4>
        <p className="text-travel-700 font-medium text-xs">{video.artist}</p>
        <p className="text-ink-400 text-xs mt-1">{formatShortDate(video.publishedAt)}</p>
      </div>
    </div>
  );
}
