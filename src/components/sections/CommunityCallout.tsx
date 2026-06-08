import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';

export function CommunityCallout() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-subtle border-y border-surface-border py-10">
      <div className="max-w-xl mx-auto px-4 text-center">
        <Users size={26} className="text-travel-700 mx-auto mb-3" />
        <h2 className="font-display text-2xl font-bold text-ink-900 mb-2">{t.home.communityCallout}</h2>
        <p className="text-ink-600 mb-6 max-w-xl mx-auto">{t.home.communityCalloutSub}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/contact">
            <Button variant="primary" size="md">{t.home.submitStory}</Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary" size="md">{t.home.joinCommunity}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
