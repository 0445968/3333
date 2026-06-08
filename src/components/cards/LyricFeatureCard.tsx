import { BookOpen, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';
import type { LyricFeature } from '../../types';

export function LyricFeatureCard({ lyric }: { lyric: LyricFeature }) {
  const { t } = useLanguage();

  return (
    <div className="modern-card-hover p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-ink-900 font-bold text-base leading-snug">{lyric.songTitle}</h3>
          <p className="text-travel-700 font-semibold text-sm">{lyric.artist}</p>
        </div>
        <span className="flex items-center gap-1 text-xs text-ink-600 shrink-0 bg-surface-subtle border border-surface-border rounded-full px-2 py-0.5">
          <Globe size={11} /> {lyric.language}
        </span>
      </div>
      <blockquote className="mt-3 border-l-4 border-travel-400 pl-3 text-ink-700 italic text-sm leading-relaxed">
        {lyric.excerpt}
      </blockquote>
      {lyric.culturalNote && (
        <p className="mt-2 text-ink-500 text-xs">{lyric.culturalNote}</p>
      )}
      <Button variant="ghost" size="sm" className="mt-3">
        <BookOpen size={13} /> {t.music.readLyrics}
      </Button>
    </div>
  );
}
