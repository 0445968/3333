import { Link } from 'react-router-dom';
import { Radio } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const EDITORIAL_LINKS = [
  { labelKey: 'culture',       href: '/category/culture' },
  { labelKey: 'music',         href: '/music' },
  { labelKey: 'food',          href: '/category/food' },
  { labelKey: 'sports',        href: '/category/sports' },
  { labelKey: 'environment',   href: '/category/environment' },
  { labelKey: 'politics',      href: '/category/politics' },
];

const MEDIA_LINKS = [
  { label: 'Videos',             href: '/videos' },
  { label: 'Recipes',            href: '/recipes' },
  { label: 'Business Directory', href: '/directory' },
  { label: 'Tourism Guide',      href: '/tourism' },
  { label: 'Weather',            href: '/weather' },
];

const MUSIC_LINKS = [
  { labelKey: 'musicChart',       href: '/music' },
  { labelKey: 'artistInterviews', href: '/music' },
  { labelKey: 'upcomingReleases', href: '/music' },
  { labelKey: 'lyricsAndMeaning', href: '/music' },
  { labelKey: 'submitMusic',      href: '/contact' },
];

const COMPANY_LINKS = [
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
  { label: 'Advertise', href: '/advertise' },
  { label: 'Archive',   href: '/archive' },
  { label: 'Memorials', href: '/memorials' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-travel-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-travel-700 flex items-center justify-center">
                <Radio size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">Raizal<span className="text-sun-300">.tv</span></span>
            </div>
            <p className="text-white/60 text-sm mb-2">{t.footer.tagline}</p>
            <p className="text-white/40 text-xs leading-relaxed">
              San Andrés, Providencia & Santa Catalina — told by us.
            </p>
          </div>

          {/* Editorial */}
          <div>
            <h4 className="text-white/60 font-semibold text-xs uppercase tracking-wider mb-3">{t.footer.editorial}</h4>
            <ul className="space-y-2">
              {EDITORIAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {t.nav[l.labelKey as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h4 className="text-white/60 font-semibold text-xs uppercase tracking-wider mb-3">{t.footer.media}</h4>
            <ul className="space-y-2">
              {MEDIA_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Music */}
          <div>
            <h4 className="text-white/60 font-semibold text-xs uppercase tracking-wider mb-3">Music</h4>
            <ul className="space-y-2">
              {MUSIC_LINKS.map((l) => (
                <li key={l.labelKey}>
                  <Link to={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {t.footer[l.labelKey as keyof typeof t.footer]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/60 font-semibold text-xs uppercase tracking-wider mb-3">{t.footer.company}</h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">{t.footer.copyright}</p>
          <p className="text-white/30 text-xs">Independent community journalism from the Archipelago.</p>
        </div>
      </div>
    </footer>
  );
}
