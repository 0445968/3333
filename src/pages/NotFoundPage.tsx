import { Link } from 'react-router-dom';
import { Radio } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="app-page min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-travel-800 flex items-center justify-center mx-auto mb-6">
          <Radio size={28} className="text-sun-300" />
        </div>
        <h1 className="font-display text-4xl font-bold text-ink-900 mb-2">404</h1>
        <p className="font-display text-xl text-ink-600 mb-1">{t.common.notFound}</p>
        <p className="text-ink-500 mb-6">{t.common.notFoundSub}</p>
        <Link
          to="/"
          className="primary-button"
        >
          {t.common.goHome}
        </Link>
      </div>
    </div>
  );
}
