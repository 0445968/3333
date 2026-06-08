import { useState } from 'react';
import { Mail, Newspaper, ChefHat, Building2, Heart, Megaphone, Handshake } from 'lucide-react';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { useLanguage } from '../i18n/LanguageContext';

// TODO: Add user submissions workflow with email or form backend

const TABS = [
  { id: 'general', label: 'General Contact', icon: Mail },
  { id: 'story', label: 'Submit a Story', icon: Newspaper },
  { id: 'recipe', label: 'Submit a Recipe', icon: ChefHat },
  { id: 'business', label: 'List a Business', icon: Building2 },
  { id: 'memorial', label: 'Submit a Memorial', icon: Heart },
  { id: 'advertise', label: 'Advertising', icon: Megaphone },
];

export function ContactPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="app-page">
      <div className="bg-travel-800 py-12 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl font-bold mb-2">Contact Raizal.tv</h1>
          <p className="text-white/60">Stories, submissions, partnerships — your voice matters.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-travel-700 text-white'
                    : 'bg-surface-subtle text-ink-700 border border-surface-border hover:bg-travel-50 hover:text-travel-800'
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div className="bg-surface-subtle rounded-3xl p-6 border border-surface-border">
          <h2 className="font-display text-xl font-bold text-ink-900 mb-5">
            {TABS.find((tab) => tab.id === activeTab)?.label}
          </h2>
          <div className="space-y-4 max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder={t.common.name} className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-ink-700 bg-white text-sm focus:outline-none focus:border-travel-500" />
              <input type="email" placeholder={t.common.email} className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-ink-700 bg-white text-sm focus:outline-none focus:border-travel-500" />
            </div>
            <input type="text" placeholder={t.common.subject} className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-ink-700 bg-white text-sm focus:outline-none focus:border-travel-500" />
            <textarea rows={6} placeholder={t.common.message} className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-ink-700 bg-white text-sm focus:outline-none focus:border-travel-500 resize-none" />
            <button className="w-full bg-travel-700 hover:bg-travel-800 text-white font-semibold py-3 rounded-xl transition-colors">
              {t.common.send}
            </button>
          </div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
