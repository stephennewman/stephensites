'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PalmHarborPlaza() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Palm Harbor Plaza - Leasing Inquiry',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus('idle');
  };

  const businesses = [
    { category: '🥪 Food & Drink', name: 'Chicken Salad Chick', desc: 'Sandwich shop with variety of chicken salad options', rating: 4.6, reviews: 1451 },
    { category: '🏠 Home Improvement', name: 'Ace Hardware Palm Harbor', desc: 'Tools, supplies, and expert advice', rating: 4.5, reviews: 538 },
    { category: '🏠 Home Improvement', name: 'Renovations Home Center', desc: 'Kitchen remodeler specializing in home renovations', rating: 4.8, reviews: 80 },
    { category: '🏠 Home Improvement', name: 'KAS Construction Inc', desc: 'Kitchen remodeling and home improvement services', rating: 4.6, reviews: 31 },
    { category: '💇‍♀️ Health & Beauty', name: 'HAIRDAYZE Salon of Palm Harbor', desc: 'Full-service salon offering cuts, color, and styling', rating: 4.4, reviews: 18 },
    { category: '⚽ Sports & Recreation', name: 'Play It Again Sports', desc: 'New & used sporting goods and fitness gear', rating: 4.2, reviews: 142 },
    { category: '🎭 Arts & Entertainment', name: 'Cabaret Dance Club', desc: 'Dance and social venue', rating: 4.6, reviews: 61 },
    { category: '🎭 Arts & Entertainment', name: 'Starlight Ballroom Dance Club', desc: 'Dance classes and events', rating: 5.0, reviews: 5 },
    { category: '🎭 Arts & Entertainment', name: 'Tampa Bay Performing Arts Academy', desc: 'Performing arts classes and productions', rating: 4.0, reviews: 51 },
    { category: '👶 Kids & Family', name: 'Little Explorers Palm Harbor', desc: 'Indoor playground with sensory play and music classes', rating: 4.9, reviews: 286 },
    { category: '🏥 Health Services', name: 'North Pinellas CBOC', desc: 'Community-based outpatient clinic', rating: 2.0, reviews: 1 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-semibold">📍 35267 US Hwy 19 N, Palm Harbor, FL 34684</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg py-6 px-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/palmharborplaza" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Palm Harbor Plaza
          </Link>
          <nav className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2 rounded-full font-bold text-sm transition-all cursor-pointer"
            >
              Leasing Inquiries
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-4">Your Local Shopping Destination</p>
          
          <div className="inline-block bg-teal-100 text-teal-800 px-6 py-3 rounded-full font-bold text-lg mb-8">
            11 Businesses • Shopping & Services
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Shop, Dine & Enjoy<br/>
            <span className="text-teal-600">All in One Place</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Palm Harbor&apos;s premier shopping center featuring local businesses, home improvement services, dining, and family entertainment
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#stores" className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl cursor-pointer">
              Browse Stores
            </a>
            <a 
              href="https://www.google.com/maps/place/35267+US+Hwy+19+N,+Palm+Harbor,+FL+34684"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg cursor-pointer"
            >
              View on Map
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Shop at <span className="text-teal-600">Palm Harbor Plaza?</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🛍️', title: 'Local Businesses', desc: '11 unique shops and services' },
              { icon: '🏠', title: 'Home Improvement', desc: 'Hardware, construction & renovations' },
              { icon: '🎭', title: 'Arts & Entertainment', desc: 'Dance clubs, performing arts & recreation' },
              { icon: '📍', title: 'Convenient Location', desc: 'Easy access on US Highway 19' }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section id="stores" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Featured at the <span className="text-teal-600">Plaza</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Discover local businesses and popular destinations all in one convenient location
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((store, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <p className="text-sm font-bold mb-2 text-teal-600 uppercase tracking-wider">
                  {store.category}
                </p>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {store.name}
                </h3>
                <p className="text-gray-600 mb-3">{store.desc}</p>
                <div className="flex items-center text-amber-500">
                  <span className="mr-1">⭐</span>
                  <span className="font-bold text-gray-900">{store.rating}</span>
                  <span className="text-gray-500 ml-1">({store.reviews.toLocaleString()})</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-4">Looking for space for your business?</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg cursor-pointer"
            >
              Leasing Inquiries
            </button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold mb-4">Local Businesses</h3>
              <p className="text-xl text-teal-50 mb-2">11 Unique Shops & Services</p>
              <p className="text-teal-100">
                From home improvement to entertainment, find everything you need in one convenient location.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Property Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>✓ Strip Center Format</p>
                <p>✓ Space Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Visit Us at <span className="text-teal-600">Palm Harbor Plaza</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Conveniently located on US Highway 19 North in Palm Harbor
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                📍
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                35267 US Hwy 19 N<br/>
                Palm Harbor, FL 34684
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                🚗
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Easy Access</h3>
              <p className="text-gray-600">
                Located on US Highway 19 North near Cyprus Drive. Ample parking for all visitors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                🌟
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Local Favorite</h3>
              <p className="text-gray-600">
                Serving the Palm Harbor community with quality shopping and dining experiences.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Come Visit Us Today!
          </h2>
          <p className="text-xl text-teal-50 mb-8 leading-relaxed">
            Experience the best shopping, dining, and entertainment Palm Harbor has to offer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#stores"
              className="inline-block bg-white hover:bg-gray-100 text-teal-600 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl cursor-pointer"
            >
              Browse Stores
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-teal-800 hover:bg-teal-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl cursor-pointer"
            >
              Leasing Inquiries
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Palm Harbor Plaza
          </h2>
          <p className="text-gray-400 mb-4">Your Local Shopping Destination in Palm Harbor, FL</p>
          <p className="text-sm text-gray-500">35267 US Hwy 19 N, Palm Harbor, FL 34684</p>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 Palm Harbor Plaza. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Modal content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer z-10"
            >
              ✕
            </button>

            {submitStatus === 'success' ? (
              /* Success State */
              <div className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-8">
                  Your inquiry has been submitted successfully. We&apos;ll be in touch soon.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-bold transition-all cursor-pointer"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              /* Form State */
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 pr-8">
                  Leasing Inquiries
                </h2>
                <p className="text-gray-600 mb-6">
                  Interested in space at Palm Harbor Plaza? Get in touch with us today.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
                      Phone <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                      Message <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your business and space requirements..."
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center text-sm">
                      Something went wrong. Please try again or email us directly at stephen@krezzo.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
