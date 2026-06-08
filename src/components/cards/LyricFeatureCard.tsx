import { BookOpen, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';
import type { LyricFeature } from '../../types';

export function LyricFeatureCard({ lyric }: { lyric: LyricFeature }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl border border-sand-100 shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-navy-900 font-bold text-base leading-snug">{lyric.songTitle}</h3>
          <p className="text-turquoise-700 font-medium text-sm">{lyric.artist}</p>
        </div>
        <span className="flex items-center gap-1 text-xs text-navy-400 shrink-0 border border-sand-200 rounded-full px-2 py-0.5">
          <Globe size={11} /> {lyric.language}
        </span>
      </div>
      <blockquote className="mt-3 border-l-4 border-turquoise-400 pl-3 text-navy-700 italic text-sm leading-relaxed">
        {lyric.excerpt}
      </blockquote>
      {lyric.culturalNote && (
        <p className="mt-2 text-navy-400 text-xs">{lyric.culturalNote}</p>
      )}
      <Button variant="ghost" size="sm" className="mt-3">
        <BookOpen size={13} /> {t.music.readLyrics}
      </Button>
    </div>
  );
}
