import { Link } from 'react-router-dom';
import { Radio, Target, Eye, Heart } from 'lucide-react';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { useLanguage } from '../i18n/LanguageContext';

const FUTURE_PLANS = [
  { label: 'TV Channel', desc: 'A full streaming channel for Raizal programming.', icon: '📺' },
  { label: 'Digital Newspaper', desc: 'A full editorial publication for island news.', icon: '📰' },
  { label: 'Community Archive', desc: 'A searchable record of island history.', icon: '📜' },
  { label: 'Business Directory', desc: 'Support for every island business.', icon: '🏪' },
  { label: 'Recipe Library', desc: 'A cookbook of island food tradition.', icon: '🍳' },
  { label: 'Tourism Guide', desc: 'Responsible tourism built for the community.', icon: '🏝️' },
  { label: 'Advertising Platform', desc: 'Community-focused advertising and sponsorships.', icon: '📣' },
  { label: 'Community Events', desc: 'A calendar of island life.', icon: '📅' },
];

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="app-page">
      <div className="bg-travel-800 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Radio size={22} className="text-sun-300" />
            </div>
            <span className="font-display font-bold text-xl">Raizal<span className="text-sun-300">.tv</span></span>
          </div>
          <h1 className="font-display text-4xl font-bold mb-3">{t.tagline}</h1>
          <p className="text-white/60 text-lg">{t.taglineSub}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Mission */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-5">
            <Target size={28} className="text-travel-600 mb-3" />
            <h3 className="font-display text-lg font-bold text-ink-900 mb-2">Our Mission</h3>
            <p className="text-ink-600 text-sm">To tell the stories of the Raizal people of the San Andrés Archipelago — with authenticity, pride, and community ownership.</p>
          </div>
          <div className="flex flex-col items-center text-center p-5">
            <Eye size={28} className="text-sun-500 mb-3" />
            <h3 className="font-display text-lg font-bold text-ink-900 mb-2">Our Vision</h3>
            <p className="text-ink-600 text-sm">To become the definitive digital home for Raizal culture, news, history, music, food, and community — built by the islands, for the islands.</p>
          </div>
          <div className="flex flex-col items-center text-center p-5">
            <Heart size={28} className="text-coral-700 mb-3" />
            <h3 className="font-display text-lg font-bold text-ink-900 mb-2">Our Values</h3>
            <p className="text-ink-600 text-sm">Community first. Cultural respect. Independent journalism. Multilingual accessibility. Environmental stewardship.</p>
          </div>
        </section>

        {/* Editorial focus */}
        <section className="bg-surface-subtle rounded-xl p-6 border border-surface-border">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">Editorial Focus</h2>
          <p className="text-ink-600 leading-relaxed">
            Raizal.tv covers culture, music, food, environment, sports, tourism, business, politics, health, education, religion, and community life across San Andrés, Providencia, and Santa Catalina. Our editorial standards prioritize accuracy, community voice, and cultural respect. We publish in English, Español, and Creole to serve all members of our community.
          </p>
        </section>

        {/* Future plans */}
        <section>
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">Future Plans</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {FUTURE_PLANS.map((plan) => (
              <div key={plan.label} className="modern-card-hover p-4 text-center">
                <span className="text-xl block mb-2">{plan.icon}</span>
                <h4 className="font-semibold text-ink-900 text-sm">{plan.label}</h4>
                <p className="text-ink-500 text-xs mt-1">{plan.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team placeholder */}
        <section>
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">Our Team</h2>
          <p className="text-ink-600 mb-4">Raizal.tv is built and run by a team of Raizal community members, journalists, technologists, and cultural workers committed to telling island stories well.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Editorial', 'Technology', 'Culture & Archives', 'Community Partnerships'].map((role) => (
              <div key={role} className="modern-card p-4 text-center">
                <div className="w-12 h-12 bg-travel-100 rounded-full mx-auto mb-2" />
                <p className="text-ink-700 text-xs font-medium">{role}</p>
                {/* TODO: Add team profiles */}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div className="modern-panel-blue p-6 text-center">
          <h3 className="font-display text-xl font-bold text-white mb-2">Get in Touch</h3>
          <p className="text-white/60 mb-4">Questions, partnerships, submissions, or community feedback — we want to hear from you.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-sun-300 hover:bg-sun-400 text-ink-900 font-semibold px-5 py-2.5 rounded-xl transition-colors">
            Contact Raizal.tv
          </Link>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
