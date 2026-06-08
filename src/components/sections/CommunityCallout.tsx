import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';

// TODO: Add user submissions workflow

export function CommunityCallout() {
  const { t } = useLanguage();

  return (
    <section className="bg-sand-50 border-y border-sand-200 py-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <Users size={28} className="text-sand-600 mx-auto mb-3" />
        <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">{t.home.communityCallout}</h2>
        <p className="text-navy-600 mb-6 max-w-xl mx-auto">{t.home.communityCalloutSub}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/contact">
            <Button variant="secondary" size="md">{t.home.submitStory}</Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="md">{t.home.joinCommunity}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
