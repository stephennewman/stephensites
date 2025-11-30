'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HighlandLakes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    timing: [] as string[],
    budget: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const timingOptions = [
    'Immediately',
    'Within 3 months',
    '3-6 months',
    '6-12 months',
    'Just exploring',
  ];

  const budgetOptions = [
    'Under $2,000/mo',
    '$2,000 - $4,000/mo',
    '$4,000 - $6,000/mo',
    '$6,000 - $10,000/mo',
    '$10,000+/mo',
  ];

  const handleTimingChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      timing: prev.timing.includes(option)
        ? prev.timing.filter(t => t !== option)
        : [...prev.timing, option]
    }));
  };

  const handleBudgetChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      budget: prev.budget.includes(option)
        ? prev.budget.filter(b => b !== option)
        : [...prev.budget, option]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Business Type: ${formData.businessType || 'Not specified'}\n\nTimeline: ${formData.timing.length > 0 ? formData.timing.join(', ') : 'Not specified'}\n\nBudget: ${formData.budget.length > 0 ? formData.budget.join(', ') : 'Not specified'}\n\nAdditional Notes: ${formData.message || 'None'}`,
          source: 'Highland Lakes Plaza - Tenant Inquiry',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', businessType: '', timing: [], budget: [], message: '' });
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
    { category: '🛒 Grocery', name: 'Trader Joe\'s', desc: 'Coming Soon! Popular specialty grocery chain', rating: null, reviews: null, badge: 'Opening Soon' },
    { category: '🎨 Retail', name: 'Michaels', desc: 'Arts, crafts & framing supplies', rating: 4.3, reviews: 412 },
    { category: '💪 Fitness', name: 'Orangetheory Fitness', desc: 'Heart-rate based interval training studio', rating: 4.8, reviews: 267 },
    { category: '👟 Retail', name: 'Famous Footwear', desc: 'Brand name shoes for the whole family', rating: 4.1, reviews: 189 },
    { category: '🍕 Food & Drink', name: 'Five Guys', desc: 'Burgers and fries made to order', rating: 4.4, reviews: 521 },
    { category: '💅 Health & Beauty', name: 'Nail Salon', desc: 'Full-service nail care and spa treatments', rating: 4.5, reviews: 98 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-semibold">📍 33561 US Hwy 19 N, Palm Harbor, FL 34684</span>
          <span className="text-indigo-100">79,528 SF • 359 Parking Spaces</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg py-6 px-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/highlandlakes" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-serif">
            Highland Lakes Plaza
          </Link>
          <nav className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 rounded-full font-bold text-sm transition-all cursor-pointer"
            >
              Become a Tenant
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-6">Prime Retail Space in Palm Harbor</p>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Grow Your Business<br/>
            <span className="text-indigo-600">In a Thriving Location</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join Trader Joe&apos;s, Michaels, and Orangetheory Fitness at one of Palm Harbor&apos;s most visible retail destinations on US Highway 19
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Inquire About Space
            </button>
            <a 
              href="https://www.google.com/maps/place/33561+US+Hwy+19+N,+Palm+Harbor,+FL+34684"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg cursor-pointer"
            >
              View on Map
            </a>
          </div>
        </div>
      </section>

      {/* Why Lease Here */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Lease at <span className="text-indigo-600">Highland Lakes Plaza?</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚗', title: 'High Traffic', desc: 'US Hwy 19 visibility & access' },
              { icon: '🏪', title: '79,528 SF', desc: 'Established retail center' },
              { icon: '🅿️', title: '359 Spaces', desc: 'Ample customer parking' },
              { icon: '⭐', title: 'Strong Anchors', desc: 'Trader Joe\'s, Michaels & more' }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Tenants */}
      <section id="tenants" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Join Our <span className="text-indigo-600">Tenant Mix</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Be part of a diverse mix of successful retailers, restaurants, and service providers
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((store, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative">
                {store.badge && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {store.badge}
                  </span>
                )}
                <p className="text-sm font-bold mb-2 text-indigo-600 uppercase tracking-wider">
                  {store.category}
                </p>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {store.name}
                </h3>
                <p className="text-gray-600 mb-3">{store.desc}</p>
                {store.rating && (
                  <div className="flex items-center text-amber-500">
                    <span className="mr-1">⭐</span>
                    <span className="font-bold text-gray-900">{store.rating}</span>
                    <span className="text-gray-500 ml-1">({store.reviews?.toLocaleString()})</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-4">Ready to join this thriving retail community?</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg cursor-pointer"
            >
              Request Space Information
            </button>
          </div>
        </div>
      </section>

      {/* Space Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Available Spaces</h3>
              <div className="space-y-2 text-indigo-100">
                <p>✓ Restaurant spaces available</p>
                <p>✓ Retail units from 1,500+ SF</p>
                <p>✓ Flexible lease terms</p>
                <p>✓ Build-to-suit options</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Market Stats</h3>
              <div className="space-y-2 text-gray-300">
                <p>✓ High-income trade area</p>
                <p>✓ Dense residential population</p>
                <p>✓ Strong daytime traffic</p>
                <p>✓ Growing Palm Harbor market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Prime <span className="text-indigo-600">Palm Harbor Location</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Strategic positioning on US Highway 19 for maximum exposure
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                📍
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">
                33561 US Hwy 19 N<br/>
                Palm Harbor, FL 34684
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                🎯
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Visibility</h3>
              <p className="text-gray-600">
                Major US 19 frontage<br/>
                High daily traffic count
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                🏘️
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Trade Area</h3>
              <p className="text-gray-600">
                Affluent demographics<br/>
                Strong household income
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Limited spaces available at Highland Lakes Plaza. Inquire today to learn about leasing opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-white hover:bg-gray-100 text-indigo-600 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl cursor-pointer"
            >
              Request Information
            </button>
            <a 
              href="#tenants"
              className="inline-block bg-indigo-800 hover:bg-indigo-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl cursor-pointer"
            >
              View Current Tenants
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 font-serif">
            Highland Lakes Plaza
          </h2>
          <p className="text-gray-400 mb-4">Prime Retail Space in Palm Harbor, FL</p>
          <p className="text-sm text-gray-500">33561 US Hwy 19 N, Palm Harbor, FL 34684</p>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 Highland Lakes Plaza. All rights reserved.</p>
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
                  Your inquiry has been submitted. Our leasing team will be in touch soon with available space information.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold transition-all cursor-pointer"
                >
                  Return to Site
                </button>
              </div>
            ) : (
              /* Form State */
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 pr-8">
                  Become a Tenant
                </h2>
                <p className="text-gray-600 mb-6">
                  Tell us about your business and leasing needs. We&apos;ll match you with the right space.
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">
                        Phone <span className="font-normal text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-sm font-bold text-gray-700 mb-1">
                        Business Type
                      </label>
                      <input
                        type="text"
                        id="businessType"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                        placeholder="e.g. Restaurant, Retail"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Timeline to Open
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timingOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleTimingChange(option)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                            formData.timing.includes(option)
                              ? 'bg-indigo-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Monthly Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleBudgetChange(option)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                            formData.budget.includes(option)
                              ? 'bg-indigo-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
                      Additional Notes <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your space requirements, preferred location in the plaza, etc."
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
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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

