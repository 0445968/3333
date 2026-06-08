import { useState } from 'react';
import { Heart, Upload } from 'lucide-react';
import { memorials } from '../data/memorials';
import { MemorialCard } from '../components/cards/MemorialCard';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../i18n/LanguageContext';

export function MemorialsPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-sand-600 to-navy-800 py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Heart size={32} className="text-cream-300 mx-auto mb-3" />
          <h1 className="font-display text-4xl font-bold mb-3">{t.memorials.heroTitle}</h1>
          <p className="text-white/70 max-w-xl mx-auto">{t.memorials.heroSub}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Intro text */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-navy-600 leading-relaxed">
            This page is a space of remembrance for the Raizal community. Every person listed here contributed to the life of the islands — through family, work, faith, creativity, and love. We honor their memory by sharing their stories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {memorials.map((m) => (
            <MemorialCard key={m.id} memorial={m} />
          ))}
        </div>

        {/* Submit callout */}
        <div className="bg-sand-50 rounded-2xl p-6 border border-sand-200 flex items-start gap-4 max-w-2xl mx-auto text-center">
          <Upload size={24} className="text-sand-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-bold text-navy-900">{t.memorials.submitRemembrance}</h3>
            <p className="text-navy-600 mt-1">{t.memorials.submitSub}</p>
            {/* TODO: Add user submissions workflow */}
            <Button variant="secondary" size="md" className="mt-3">Submit a Remembrance</Button>
          </div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
