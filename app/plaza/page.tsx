import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Plaza() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-bold">🏪 Premier Shopping Destination • Palm Harbor, FL</span>
          <a href="tel:5551234567" className="font-bold hover:text-purple-100">☎️ (555) 123-4567</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #8b5cf6 20px, #8b5cf6 40px)'}}>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="text-7xl">🏪</div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Palm Harbor Plaza
          </h1>
          <p className="text-2xl text-gray-700 font-bold">Premier Shopping & Dining Destination</p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100"></div>
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, transparent 0%, #8b5cf6 100%)'}}>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white border-4 border-purple-600 px-8 py-4 rounded-2xl font-black text-lg mb-10 shadow-2xl">
            <span className="text-purple-700">🛍️ Shopping</span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="text-purple-700">🍽️ Dining</span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Your One-Stop<br/>
            <span className="text-purple-600">Shopping Destination</span> 🛍️
          </h2>
          
          <p className="text-2xl sm:text-3xl text-gray-700 mb-14 max-w-4xl mx-auto leading-relaxed font-semibold">
            Discover the best shopping, dining, and entertainment in Palm Harbor. From fashion to food, we have everything you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:5551234567" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-14 py-6 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:shadow-purple-600/50 border-4 border-purple-800"
            >
              📞 Contact Us
            </a>
            <a 
              href="#stores" 
              className="bg-white hover:bg-purple-50 text-purple-700 border-4 border-purple-600 px-14 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
            >
              Our Stores →
            </a>
          </div>
        </div>
      </section>

      {/* Stores */}
      <section id="stores" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Our <span className="text-purple-600">Stores</span> 🏪
            </h3>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-semibold">
              Discover amazing shops and restaurants all in one convenient location
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: '👗', title: 'Fashion & Apparel', desc: 'Trendy clothing stores for men, women, and children', color: 'from-purple-500 to-purple-600' },
              { icon: '🍽️', title: 'Restaurants & Cafes', desc: 'Diverse dining options from casual to fine dining', color: 'from-pink-500 to-pink-600' },
              { icon: '💄', title: 'Beauty & Wellness', desc: 'Salons, spas, and beauty supply stores', color: 'from-rose-500 to-rose-600' },
              { icon: '🏠', title: 'Home & Garden', desc: 'Furniture, decor, and home improvement stores', color: 'from-purple-600 to-purple-700' },
              { icon: '📱', title: 'Electronics & Tech', desc: 'Latest gadgets and technology solutions', color: 'from-pink-600 to-pink-700' },
              { icon: '🎮', title: 'Entertainment', desc: 'Fun activities and entertainment for all ages', color: 'from-rose-600 to-rose-700' }
            ].map((store, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative bg-white p-10 rounded-3xl border-4 border-purple-600 shadow-xl hover:shadow-2xl transition-all">
                  <div className={`w-20 h-20 bg-gradient-to-br ${store.color} rounded-full flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {store.icon}
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-4">{store.title}</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">{store.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-5xl font-black text-gray-900 mb-6">
                  Visit <span className="text-purple-600">Palm Harbor Plaza</span>
                </h3>
                <p className="text-2xl text-gray-700 leading-relaxed font-semibold">
                  Come experience the best shopping and dining in Palm Harbor. We look forward to welcoming you!
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-xl border-4 border-purple-800">
                    📞
                  </div>
                  <div className="ml-8">
                    <p className="font-black text-2xl text-gray-900 mb-2">Contact Us</p>
                    <a href="tel:5551234567" className="text-purple-600 hover:text-purple-700 font-black text-4xl">(555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-xl border-4 border-purple-800">
                    📍
                  </div>
                  <div className="ml-8">
                    <p className="font-black text-2xl text-gray-900 mb-2">Location</p>
                    <p className="text-gray-700 text-xl font-semibold">
                      Palm Harbor, FL<br/>
                      & Surrounding Areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="tel:5551234567"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-14 py-6 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:shadow-purple-600/50 border-4 border-purple-800"
                >
                  🏪 Visit Us Today
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden h-[700px] shadow-2xl border-8 border-purple-600">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.78!3d28.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAxJzEyLjAiTiA4MsKwNDYnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-7xl mb-6">🏪</div>
          <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Palm Harbor Plaza
          </h2>
          <p className="text-2xl text-gray-400 mb-8 font-bold">Premier Shopping & Dining Destination</p>
          <div className="space-y-3 mb-10">
            <p className="text-purple-400 font-black text-2xl">(555) 123-4567</p>
            <p className="text-xl">Palm Harbor, FL & Surrounding Areas</p>
            <p className="text-purple-400 font-bold text-lg">Shopping • Dining • Entertainment</p>
          </div>
          <div className="pt-10 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 Palm Harbor Plaza LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
