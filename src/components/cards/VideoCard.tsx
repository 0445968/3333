import { PlayCircle, Clock, User } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { CATEGORY_GRADIENT } from '../../lib/utils';
import type { VideoSegment } from '../../types';

export function VideoCard({ video }: { video: VideoSegment }) {
  const gradient = CATEGORY_GRADIENT[video.category.toLowerCase()] ?? 'from-travel-700 to-travel-900';

  return (
    <div className="group modern-card-hover">
      <div className={`relative bg-gradient-to-br ${gradient} aspect-video flex items-center justify-center rounded-t-xl overflow-hidden`}>
        <PlayCircle size={44} className="text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
        <div className="absolute bottom-2 right-2 bg-ink-900/80 text-white text-xs px-2 py-0.5 rounded-lg">
          {video.duration}
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge label={video.category} className="!text-[10px]" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-ink-900 font-bold text-base leading-snug line-clamp-2">
          {video.title}
        </h3>
        <p className="text-ink-600 text-sm mt-1 line-clamp-2">{video.description}</p>
        <div className="flex items-center gap-3 mt-3 text-ink-400 text-xs border-t border-surface-border pt-3">
          <span className="flex items-center gap-1"><User size={11} /> {video.host}</span>
          <span className="flex items-center gap-1"><Clock size={11} /> {video.duration}</span>
        </div>
      </div>
    </div>
  );
}
