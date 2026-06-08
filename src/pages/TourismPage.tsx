import { Link } from 'react-router-dom';
import { Compass, Leaf, Users, MapPin } from 'lucide-react';
import { businesses, getFeaturedBusinesses } from '../data/businesses';
import { BusinessCard } from '../components/cards/BusinessCard';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { useLanguage } from '../i18n/LanguageContext';

const PLACES = [
  { name: 'Johnny Cay Natural Park', desc: 'A pristine islet surrounded by clear turquoise water, accessible by boat from San Andrés. Protected natural area.' },
  { name: 'Southwest Bay, Providencia', desc: 'One of the Caribbean\'s most beautiful beaches — quiet, clean, and surrounded by lush hillside.' },
  { name: 'Crab Cay', desc: 'A snorkeling paradise with vibrant coral formations and abundant marine life.' },
  { name: 'The Peak, Providencia', desc: 'The highest point on the island, offering panoramic views of the entire archipelago.' },
  { name: 'Santa Catalina Island', desc: 'Connected to Providencia by a wooden bridge, Santa Catalina offers history, calm, and community life.' },
];

export function TourismPage() {
  const { t } = useLanguage();
  const tourGuides = businesses.filter((b) => b.category === 'Tour Guides');

  return (
    <div className="app-page">
      {/* Hero */}
      <div className="bg-travel-800 py-16 text-white">
        <div className="content-shell text-center">
          <Compass size={36} className="text-skybrand-300 mx-auto mb-4" />
          <h1 className="font-display text-5xl font-bold mb-3">{t.tourism.heroTitle}</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">{t.tourism.heroSub}</p>
        </div>
      </div>

      {/* Responsible tourism message */}
      <div className="bg-palm-50 border-y border-palm-100 py-8">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Leaf size={24} className="text-palm-700 mx-auto mb-3" />
          <p className="text-ink-800 text-lg font-display leading-relaxed">{t.tourism.responsibleMessage}</p>
        </div>
      </div>

      <div className="content-shell py-10 space-y-12">
        {/* Places to explore */}
        <section>
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">Places to Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLACES.map((place) => (
              <div key={place.name} className="modern-panel-blue p-5">
                <MapPin size={18} className="text-skybrand-300 mb-2" />
                <h3 className="font-display font-bold text-white text-lg">{place.name}</h3>
                <p className="text-white/70 text-sm mt-1">{place.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local guides */}
        {tourGuides.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">Local Tour Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tourGuides.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          </section>
        )}

        {/* Cultural etiquette */}
        <section className="bg-surface-subtle rounded-xl p-6 border border-surface-border">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">Cultural Etiquette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-ink-600 text-sm">
            <p>• Greet people warmly. Community connections matter deeply here.</p>
            <p>• Ask before photographing people or private properties.</p>
            <p>• Support Raizal-owned businesses and local guides.</p>
            <p>• Learn a few words in Creole — it is always appreciated.</p>
            <p>• Do not touch or remove coral or marine life.</p>
            <p>• Dress modestly when visiting churches and community areas.</p>
            <p>• Ask your local guide before entering protected zones.</p>
            <p>• Respect the pace and rhythm of island life.</p>
          </div>
        </section>

        {/* Environment protection */}
        <section className="bg-palm-50 rounded-xl p-6 border border-palm-100">
          <div className="flex items-start gap-4">
            <Leaf size={24} className="text-palm-700 shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-ink-900 mb-2">Protecting the Environment</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                The Seaflower Biosphere Reserve is one of the most biodiverse marine areas in the world. Visitors play a critical role in protecting it. Use reef-safe sunscreen, never anchor on coral, avoid single-use plastics, and follow all guidelines from local dive operators and park authorities.
              </p>
            </div>
          </div>
        </section>

        {/* Directory tie-in */}
        <div className="modern-panel-blue p-6 text-center">
          <Users size={28} className="text-skybrand-300 mx-auto mb-3" />
          <h3 className="font-display text-2xl font-bold text-white mb-2">Find Local Businesses</h3>
          <p className="text-white/60 mb-4">Restaurants, guesthouses, guides, and more — all Raizal-owned and community-supported.</p>
          <Link to="/directory" className="inline-flex items-center gap-2 bg-sun-300 hover:bg-sun-400 text-ink-900 font-semibold px-5 py-2.5 rounded-xl transition-colors">
            Browse the Directory
          </Link>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
