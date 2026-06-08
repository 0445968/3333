import { Megaphone, CheckCircle } from 'lucide-react';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { useLanguage } from '../i18n/LanguageContext';

// TODO: Add payment system for advertisements

const AD_OPTIONS = [
  { title: 'Homepage Banner', description: 'Premium banner placement on the Raizal.tv homepage, seen by all visitors.', price: 'Contact for pricing', icon: '🏠' },
  { title: 'Article Sidebar', description: 'Contextual sidebar placement adjacent to editorial articles.', price: 'Contact for pricing', icon: '📰' },
  { title: 'Video Segment Sponsor', description: 'Brand your segment on Raizal.tv programming with pre-roll and end-card placement.', price: 'Contact for pricing', icon: '📺' },
  { title: 'Business Directory Featured', description: 'Feature your business at the top of relevant directory categories.', price: 'Contact for pricing', icon: '🏪' },
  { title: 'Newsletter Sponsor', description: 'Reach subscribers directly with a dedicated newsletter sponsorship block.', price: 'Contact for pricing', icon: '📧' },
  { title: 'Sponsored Article', description: 'Editorial-style sponsored content written and published by the Raizal.tv team.', price: 'Contact for pricing', icon: '✍️' },
];

export function AdvertisingPage() {
  const { t } = useLanguage();

  return (
    <div className="app-page">
      <div className="bg-travel-800 py-14 text-white">
        <div className="content-shell text-center">
          <Megaphone size={36} className="text-sun-300 mx-auto mb-4" />
          <h1 className="font-display text-4xl font-bold mb-3">Advertise with Raizal.tv</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Reach the Raizal community and visitors to the archipelago across news, culture, music, tourism, and business content.
          </p>
        </div>
      </div>

      <div className="content-shell py-10 space-y-10">
        {/* Why advertise */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { label: 'Community Trust', desc: 'Raizal.tv is the trusted voice of the islands. Your brand benefits from that association.' },
            { label: 'Targeted Audience', desc: 'Reach islanders, diaspora, tourism visitors, and Caribbean audiences who care about authenticity.' },
            { label: 'Multi-platform', desc: 'Homepage, articles, video segments, newsletter, and directory — your brand across every touchpoint.' },
          ].map((item) => (
            <div key={item.label} className="modern-card p-5">
              <CheckCircle size={20} className="text-palm-700 mb-2" />
              <h3 className="font-display font-bold text-ink-900">{item.label}</h3>
              <p className="text-ink-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Ad options */}
        <div>
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">Placement Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AD_OPTIONS.map((opt) => (
              <div key={opt.title} className="modern-card-hover p-5">
                <span className="text-xl mb-3 block">{opt.icon}</span>
                <h3 className="font-display font-bold text-ink-900">{opt.title}</h3>
                <p className="text-ink-600 text-sm mt-2">{opt.description}</p>
                <p className="text-travel-700 font-medium text-sm mt-3">{opt.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-surface-subtle rounded-xl p-6 max-w-2xl mx-auto border border-surface-border">
          <h2 className="font-display text-2xl font-bold text-ink-900 mb-5">Get in Touch</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-ink-700 text-sm focus:outline-none focus:border-travel-500 bg-white" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-ink-700 text-sm focus:outline-none focus:border-travel-500 bg-white" />
            </div>
            <input type="text" placeholder="Business Name" className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-ink-700 text-sm focus:outline-none focus:border-travel-500 bg-white" />
            <textarea rows={4} placeholder="Tell us about your advertising goals…" className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-ink-700 text-sm focus:outline-none focus:border-travel-500 resize-none bg-white" />
            <button className="w-full bg-travel-700 hover:bg-travel-800 text-white font-semibold py-3 rounded-xl transition-colors">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
