import { Link } from 'react-router-dom';
import { Radio } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-caribbean-gradient flex items-center justify-center mx-auto mb-6">
          <Radio size={28} className="text-turquoise-300" />
        </div>
        <h1 className="font-display text-4xl font-bold text-navy-900 mb-2">404</h1>
        <p className="font-display text-xl text-navy-600 mb-1">{t.common.notFound}</p>
        <p className="text-navy-400 mb-6">{t.common.notFoundSub}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {t.common.goHome}
        </Link>
      </div>
    </div>
  );
}
