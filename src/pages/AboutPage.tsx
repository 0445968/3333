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
    <div className="bg-white">
      <div className="bg-caribbean-gradient py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <Radio size={22} className="text-turquoise-300" />
            </div>
            <span className="font-display font-bold text-3xl">Raizal<span className="text-turquoise-400">.tv</span></span>
          </div>
          <h1 className="font-display text-4xl font-bold mb-3">{t.tagline}</h1>
          <p className="text-white/60 text-lg">{t.taglineSub}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Mission */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-5">
            <Target size={28} className="text-turquoise-600 mb-3" />
            <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Our Mission</h3>
            <p className="text-navy-600 text-sm">To tell the stories of the Raizal people of the San Andrés Archipelago — with authenticity, pride, and community ownership.</p>
          </div>
          <div className="flex flex-col items-center text-center p-5">
            <Eye size={28} className="text-sand-600 mb-3" />
            <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Our Vision</h3>
            <p className="text-navy-600 text-sm">To become the definitive digital home for Raizal culture, news, history, music, food, and community — built by the islands, for the islands.</p>
          </div>
          <div className="flex flex-col items-center text-center p-5">
            <Heart size={28} className="text-coral-500 mb-3" />
            <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Our Values</h3>
            <p className="text-navy-600 text-sm">Community first. Cultural respect. Independent journalism. Multilingual accessibility. Environmental stewardship.</p>
          </div>
        </section>

        {/* Editorial focus */}
        <section className="bg-sand-50 rounded-2xl p-6">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Editorial Focus</h2>
          <p className="text-navy-600 leading-relaxed">
            Raizal.tv covers culture, music, food, environment, sports, tourism, business, politics, health, education, religion, and community life across San Andrés, Providencia, and Santa Catalina. Our editorial standards prioritize accuracy, community voice, and cultural respect. We publish in English, Español, and Creole to serve all members of our community.
          </p>
        </section>

        {/* Future plans */}
        <section>
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-5">Future Plans</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {FUTURE_PLANS.map((plan) => (
              <div key={plan.label} className="bg-white border border-sand-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <span className="text-3xl block mb-2">{plan.icon}</span>
                <h4 className="font-semibold text-navy-900 text-sm">{plan.label}</h4>
                <p className="text-navy-500 text-xs mt-1">{plan.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team placeholder */}
        <section>
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-5">Our Team</h2>
          <p className="text-navy-600 mb-4">Raizal.tv is built and run by a team of Raizal community members, journalists, technologists, and cultural workers committed to telling island stories well.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Editorial', 'Technology', 'Culture & Archives', 'Community Partnerships'].map((role) => (
              <div key={role} className="bg-navy-50 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-navy-200 rounded-full mx-auto mb-2" />
                <p className="text-navy-700 text-xs font-medium">{role}</p>
                {/* TODO: Add team profiles */}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div className="bg-navy-900 rounded-2xl p-6 text-white text-center">
          <h3 className="font-display text-xl font-bold mb-2">Get in Touch</h3>
          <p className="text-white/60 mb-4">Questions, partnerships, submissions, or community feedback — we want to hear from you.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-turquoise-600 hover:bg-turquoise-500 text-white font-medium px-5 py-2.5 rounded-lg transition-colors">
            Contact Raizal.tv
          </Link>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
