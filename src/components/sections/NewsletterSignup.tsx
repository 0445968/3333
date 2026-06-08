import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';

// TODO: Add newsletter subscription workflow

export function NewsletterSignup() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="bg-gradient-to-r from-navy-900 to-turquoise-800 py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Mail size={32} className="text-turquoise-300 mx-auto mb-3" />
        <h2 className="font-display text-3xl font-bold text-white mb-2">{t.home.newsletter}</h2>
        <p className="text-white/70 mb-6">{t.home.newsletterSub}</p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-turquoise-300">
            <CheckCircle size={20} />
            <span className="font-medium">You're subscribed! Welcome to the community.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.home.emailPlaceholder}
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-turquoise-400 text-sm"
              required
            />
            <Button type="submit" variant="coral" size="md">
              {t.home.subscribeBtn}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
