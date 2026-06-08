import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Clock, Star } from 'lucide-react';
import { getBusinessBySlug, businesses } from '../data/businesses';
import { BusinessCard } from '../components/cards/BusinessCard';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { useLanguage } from '../i18n/LanguageContext';

export function BusinessProfilePage() {
  const { businessSlug = '' } = useParams<{ businessSlug: string }>();
  const { t } = useLanguage();

  const business = getBusinessBySlug(businessSlug);
  const related = businesses.filter((b) => b.category === business?.category && b.id !== business?.id).slice(0, 3);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-navy-900 mb-2">{t.common.notFound}</h1>
          <Link to="/directory" className="text-turquoise-600 hover:underline">Back to Directory</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-navy-800 to-turquoise-800 py-14">
        <div className="max-w-7xl mx-auto px-4 text-white">
          {business.featured && (
            <span className="bg-sand-400 text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mb-3 inline-block">
              Featured Business
            </span>
          )}
          <h1 className="font-display text-4xl font-bold mb-1">{business.name}</h1>
          <div className="flex items-center gap-4 text-white/60 text-sm mt-2">
            <span>{business.category}</span>
            <span className="flex items-center gap-1"><MapPin size={13} /> {business.island}</span>
            <span className="flex items-center gap-1"><Star size={13} className="fill-sand-400 text-sand-400" /> {business.rating}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <main className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-2">About</h2>
              <p className="text-navy-600 leading-relaxed">{business.description}</p>
            </div>

            {business.services && (
              <div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {business.services.map((s) => (
                    <span key={s} className="bg-turquoise-50 text-turquoise-800 text-sm px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Photos placeholder */}
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Photos</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gradient-to-br from-navy-600 to-turquoise-600 rounded-lg aspect-square flex items-end p-2">
                    <span className="text-white/40 text-xs">Photo {i}</span>
                  </div>
                ))}
              </div>
              {/* TODO: Add photo upload and gallery management */}
            </div>

            {business.ownerStory && (
              <div className="bg-sand-50 rounded-xl p-5 border-l-4 border-sand-400">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Owner Story</h3>
                <p className="text-navy-600 italic">{business.ownerStory}</p>
              </div>
            )}

            {/* Map placeholder */}
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Location</h3>
              <div className="bg-gradient-to-br from-turquoise-100 to-navy-100 rounded-xl h-40 flex items-center justify-center">
                <p className="text-navy-400 text-sm">Map — {business.location}</p>
                {/* TODO: Integrate map provider */}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-sand-50 rounded-xl p-4 border border-sand-200">
              <h3 className="font-display font-bold text-navy-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                {business.location && (
                  <div className="flex items-start gap-2 text-sm text-navy-600">
                    <MapPin size={15} className="text-navy-400 shrink-0 mt-0.5" />
                    {business.location}
                  </div>
                )}
                {business.phone && (
                  <div className="flex items-center gap-2 text-sm text-navy-600">
                    <Phone size={15} className="text-navy-400" />
                    {business.phone}
                  </div>
                )}
                {business.email && (
                  <div className="flex items-center gap-2 text-sm text-navy-600">
                    <Mail size={15} className="text-navy-400" />
                    {business.email}
                  </div>
                )}
                {business.website && (
                  <div className="flex items-center gap-2 text-sm text-turquoise-700">
                    <Globe size={15} className="text-navy-400" />
                    <a href={business.website} className="hover:underline">{business.website}</a>
                  </div>
                )}
              </div>
            </div>

            {business.hours && (
              <div className="bg-white rounded-xl p-4 border border-sand-100">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-navy-400" />
                  <h4 className="font-semibold text-navy-900">Opening Hours</h4>
                </div>
                <p className="text-navy-600 text-sm">{business.hours}</p>
              </div>
            )}
          </aside>
        </div>

        {/* Related businesses */}
        {related.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold text-navy-900 mb-5">Related Businesses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          </div>
        )}
      </div>
      <NewsletterSignup />
    </div>
  );
}
