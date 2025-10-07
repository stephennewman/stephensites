import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PalmHarborPlaza() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-semibold">🛍️ Open Daily: 10 AM - 9 PM (Hours vary by store)</span>
          <span className="font-semibold">📍 35267 US Hwy 19 N, Palm Harbor, FL 34684</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Palm Harbor Plaza
          </h1>
          <p className="text-xl text-gray-600 font-medium">Your Local Shopping Destination</p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
            18 Stores • 84 Parking Spaces • Entertainment & Dining
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Shop, Dine & Enjoy<br/>
            <span className="text-teal-600">All in One Place</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Palm Harbor&apos;s premier shopping center featuring local businesses, great dining, and family entertainment including AMC Theater
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#stores" className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
              Browse Stores
            </a>
            <a href="#location" className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Shop at <span className="text-teal-600">Palm Harbor Plaza?</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🛍️', title: 'Variety of Stores', desc: '18 unique shops and businesses', color: 'from-teal-500 to-teal-600' },
              { icon: '🍽️', title: 'Great Dining', desc: 'Mexican, seafood & more options', color: 'from-cyan-500 to-cyan-600' },
              { icon: '🎬', title: 'AMC Theater', desc: '10-screen movie theater', color: 'from-blue-500 to-blue-600' },
              { icon: '🅿️', title: 'Easy Parking', desc: '84 convenient parking spaces', color: 'from-teal-500 to-cyan-600' }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section id="stores" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Featured at the <span className="text-teal-600">Plaza</span>
          </h3>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Discover local businesses and popular destinations all in one convenient location
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: '🎬 Entertainment', name: 'AMC Theater', desc: '10-screen movie theater with latest releases', highlight: true },
              { category: '🌮 Mexican Restaurant', name: 'Plaza Mexico', desc: 'Authentic mariscos & coastal cuisine with outdoor seating', highlight: true },
              { category: '🛒 Retail Shops', name: 'Local Boutiques', desc: 'Unique shopping from local businesses' },
              { category: '🍴 Dining Options', name: 'Various Restaurants', desc: 'Multiple dining choices to satisfy any craving' },
              { category: '🚗 Services', name: 'Avis Car Rental', desc: 'Convenient car rental at Palm Plaza' },
              { category: '🏪 Shopping', name: 'Strip Center Stores', desc: '1,800 SF of retail space available' }
            ].map((store, i) => (
              <div key={i} className={`${store.highlight ? 'bg-gradient-to-br from-teal-600 to-cyan-600 text-white' : 'bg-white'} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 ${store.highlight ? 'border-teal-700' : 'border-gray-100'}`}>
                <p className={`text-sm font-bold mb-2 ${store.highlight ? 'text-teal-100' : 'text-teal-600'} uppercase tracking-wider`}>
                  {store.category}
                </p>
                <h4 className={`text-2xl font-bold mb-3 ${store.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {store.name}
                </h4>
                <p className={store.highlight ? 'text-teal-50' : 'text-gray-600'}>
                  {store.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg mb-6">Looking for space for your business?</p>
            <a href="#contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
              Leasing Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-10 rounded-3xl shadow-2xl">
              <div className="text-5xl mb-6">🕐</div>
              <h3 className="text-3xl font-bold mb-4">Store Hours</h3>
              <p className="text-xl text-teal-50 mb-4">
                Open Daily: 10:00 AM - 9:00 PM
              </p>
              <p className="text-teal-100">
                Individual store hours may vary. Please contact specific stores for their hours of operation.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-4">Property Info</h3>
              <div className="space-y-3 text-lg text-gray-300">
                <p>✓ Strip Center Format</p>
                <p>✓ 18 Established Stores</p>
                <p>✓ 84 Parking Spaces</p>
                <p>✓ 1,800 SF Space Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Visit Us at <span className="text-teal-600">Palm Harbor Plaza</span>
          </h3>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Conveniently located on US Highway 19 North in Palm Harbor
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                  📍
                </div>
                <div className="ml-6">
                  <p className="font-bold text-2xl text-gray-900 mb-2">Address</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    35267 US Hwy 19 N<br/>
                    Palm Harbor, FL 34684
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                  🚗
                </div>
                <div className="ml-6">
                  <p className="font-bold text-2xl text-gray-900 mb-2">Easy Access</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Located on US Highway 19 North near Cyprus Drive. Ample parking for all visitors.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg">
                  🌟
                </div>
                <div className="ml-6">
                  <p className="font-bold text-2xl text-gray-900 mb-2">Local Favorite</p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Serving the Palm Harbor community with quality shopping and dining experiences.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://www.google.com/maps/place/35267+US+Hwy+19+N,+Palm+Harbor,+FL+34684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-2xl"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-3xl overflow-hidden h-[550px] shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.72!3d28.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA0JzQ4LjAiTiA4MsKwNDMnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl sm:text-5xl font-bold mb-6">
            Come Visit Us Today!
          </h3>
          <p className="text-2xl text-teal-50 mb-10 leading-relaxed">
            Experience the best shopping, dining, and entertainment Palm Harbor has to offer
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#stores"
              className="bg-white hover:bg-gray-100 text-teal-600 px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl"
            >
              Browse Stores
            </a>
            <a 
              href="tel:7277716000"
              className="bg-transparent hover:bg-white/10 text-white border-3 border-white px-12 py-5 rounded-full font-bold text-xl transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Palm Harbor Plaza
          </h2>
          <p className="text-gray-400 text-lg mb-6">Your Local Shopping Destination in Palm Harbor, FL</p>
          <div className="text-sm space-y-2">
            <p>35267 US Hwy 19 N, Palm Harbor, FL 34684</p>
            <p className="text-teal-400">Open Daily: 10 AM - 9 PM (Hours vary by store)</p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 Palm Harbor Plaza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



