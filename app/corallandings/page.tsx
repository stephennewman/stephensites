'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CoralLandings() {
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
          source: 'Coral Landings Shopping Plaza - Leasing Inquiry',
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
    { category: '🛒 Grocery', name: 'Publix Super Market', desc: 'Full-service supermarket with bakery, deli & pharmacy', rating: 4.5, reviews: 892 },
    { category: '🛍️ Retail', name: 'Ross Dress for Less', desc: 'Off-price department store with designer brands', rating: 4.2, reviews: 634 },
    { category: '🌯 Food & Drink', name: 'Chipotle Mexican Grill', desc: 'Fast-casual Mexican cuisine with customizable bowls & burritos', rating: 4.1, reviews: 412 },
    { category: '👗 Retail', name: "Plato's Closet", desc: 'Buy, sell & trade trendy teen & young adult clothing', rating: 4.0, reviews: 287 },
    { category: '💇‍♀️ Health & Beauty', name: 'Sola Salons', desc: 'Boutique salon studios for independent beauty professionals', rating: 4.7, reviews: 156 },
    { category: '💼 Services', name: 'H&R Block', desc: 'Tax preparation and financial services', rating: 4.3, reviews: 98 },
    { category: '📱 Technology', name: 'AT&T Store', desc: 'Wireless services, phones & accessories', rating: 3.9, reviews: 203 },
    { category: '📚 Education', name: 'Huntington Learning Center', desc: 'Tutoring & test prep for K-12 students', rating: 4.8, reviews: 67 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-semibold">📍 33211 US Hwy 19 N, Palm Harbor, FL 34684</span>
          <span className="text-orange-100">Open Daily: 7:00 AM - 10:00 PM</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg py-6 px-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/corallandings" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent font-serif">
            Coral Landings
          </Link>
          <nav className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-full font-bold text-sm transition-all cursor-pointer"
            >
              Leasing Inquiries
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-6">Palm Harbor&apos;s Premier Shopping Destination</p>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Shop, Save & Savor<br/>
            <span className="text-orange-500">All in One Place</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Anchored by Publix, Coral Landings offers a diverse mix of retail, dining, and services with 91,500+ daily traffic on US Highway 19
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#stores" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl cursor-pointer">
              Browse Stores
            </a>
            <a 
              href="https://www.google.com/maps/place/33211+US+Hwy+19+N,+Palm+Harbor,+FL+34684"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-orange-500 border-2 border-orange-500 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg cursor-pointer"
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
            Why Shop at <span className="text-orange-500">Coral Landings?</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🛒', title: 'Publix Anchored', desc: 'Full-service grocery with pharmacy' },
              { icon: '🚗', title: 'High Visibility', desc: '91,500+ daily traffic count' },
              { icon: '🏪', title: 'Diverse Mix', desc: 'Retail, dining & services' },
              { icon: '📍', title: 'Prime Location', desc: 'US Hwy 19 in Palm Harbor' }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
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
      <section id="stores" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Featured at <span className="text-orange-500">Coral Landings</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            From grocery essentials to fashion finds, discover everything you need in one convenient location
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((store, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <p className="text-sm font-bold mb-2 text-orange-500 uppercase tracking-wider">
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
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg cursor-pointer"
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
            <div className="bg-gradient-to-br from-orange-500 to-rose-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold mb-4">Prime Retail Space</h3>
              <p className="text-xl text-orange-50 mb-2">High-Traffic Location</p>
              <p className="text-orange-100">
                Benefit from 91,500+ daily traffic count on US Highway 19 in an affluent Palm Harbor trade area.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Property Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>✓ Publix Anchored Center</p>
                <p>✓ Ample Parking</p>
                <p>✓ Space Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 px-4 bg-gradient-to-br from-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Visit <span className="text-orange-500">Coral Landings</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Conveniently located on US Highway 19 North in Palm Harbor
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                📍
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                33211 US Hwy 19 N<br/>
                Palm Harbor, FL 34684
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                🕐
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">
                Open Daily<br/>
                7:00 AM - 10:00 PM
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                🌟
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Community Hub</h3>
              <p className="text-gray-600">
                Serving Palm Harbor with quality shopping and dining experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Visit Coral Landings Today!
          </h2>
          <p className="text-xl text-orange-50 mb-8 leading-relaxed">
            Experience the best shopping, dining, and services Palm Harbor has to offer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#stores"
              className="inline-block bg-white hover:bg-gray-100 text-orange-500 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl cursor-pointer"
            >
              Browse Stores
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-orange-700 hover:bg-orange-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl cursor-pointer"
            >
              Leasing Inquiries
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent mb-2 font-serif">
            Coral Landings
          </h2>
          <p className="text-gray-400 mb-4">Palm Harbor&apos;s Premier Shopping Destination</p>
          <p className="text-sm text-gray-500">33211 US Hwy 19 N, Palm Harbor, FL 34684</p>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 Coral Landings Shopping Plaza. All rights reserved.</p>
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
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all cursor-pointer"
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
                  Interested in space at Coral Landings? Get in touch with us today.
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
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
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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

