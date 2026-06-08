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
    <div className="bg-white">
      <div className="bg-caribbean-gradient py-12 text-white">
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
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-navy-900 text-white'
                    : 'bg-sand-100 text-navy-700 hover:bg-sand-200'
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div className="bg-sand-50 rounded-2xl p-6">
          <h2 className="font-display text-xl font-bold text-navy-900 mb-5">
            {TABS.find((t) => t.id === activeTab)?.label}
          </h2>
          <div className="space-y-4 max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder={t.common.name} className="w-full px-4 py-2.5 rounded-lg border border-sand-200 text-navy-700 text-sm focus:outline-none focus:border-turquoise-400" />
              <input type="email" placeholder={t.common.email} className="w-full px-4 py-2.5 rounded-lg border border-sand-200 text-navy-700 text-sm focus:outline-none focus:border-turquoise-400" />
            </div>
            <input type="text" placeholder={t.common.subject} className="w-full px-4 py-2.5 rounded-lg border border-sand-200 text-navy-700 text-sm focus:outline-none focus:border-turquoise-400" />
            <textarea rows={6} placeholder={t.common.message} className="w-full px-4 py-2.5 rounded-lg border border-sand-200 text-navy-700 text-sm focus:outline-none focus:border-turquoise-400 resize-none" />
            <button className="w-full bg-navy-900 hover:bg-navy-800 text-white font-medium py-3 rounded-lg transition-colors">
              {t.common.send}
            </button>
          </div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
