import { Link } from 'react-router-dom';
import { PlayCircle, Clock, User } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { CATEGORY_GRADIENT } from '../../lib/utils';
import type { VideoSegment } from '../../types';

export function VideoCard({ video }: { video: VideoSegment }) {
  const gradient = CATEGORY_GRADIENT[video.category.toLowerCase()] ?? 'from-navy-700 to-turquoise-700';

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-sand-100 hover:shadow-md transition-shadow">
      <div className={`relative bg-gradient-to-br ${gradient} aspect-video flex items-center justify-center`}>
        <PlayCircle size={44} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
          {video.duration}
        </div>
        <div className="absolute bottom-2 left-2">
          <span className="text-white/60 text-xs">{video.category} Segment</span>
        </div>
      </div>
      <div className="p-4">
        <Badge label={video.category} />
        <h3 className="font-display text-navy-900 font-bold text-base mt-2 leading-snug line-clamp-2">
          {video.title}
        </h3>
        <p className="text-navy-500 text-sm mt-1 line-clamp-2">{video.description}</p>
        <div className="flex items-center gap-3 mt-3 text-navy-400 text-xs">
          <span className="flex items-center gap-1"><User size={11} /> {video.host}</span>
          <span className="flex items-center gap-1"><Clock size={11} /> {video.duration}</span>
        </div>
      </div>
    </div>
  );
}
