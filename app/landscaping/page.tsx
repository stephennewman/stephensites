export default function Landscaping() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-lime-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-bold">🌿 Commercial & Residential Lawn Care • Palm Harbor, FL</span>
          <a href="tel:5551234567" className="font-bold hover:text-green-100">☎️ (555) 123-4567</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, #16a34a 10px, #16a34a 20px), repeating-linear-gradient(90deg, transparent, transparent 10px, #16a34a 10px, #16a34a 20px)'}}>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="text-7xl">🌱</div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-green-700 via-green-600 to-lime-600 bg-clip-text text-transparent mb-4">
            Professional Landscaping
          </h1>
          <p className="text-2xl text-gray-700 font-bold">Lawn Care & Landscaping Services</p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-lime-100 to-emerald-100"></div>
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, transparent 0%, #22c55e 100%)'}}>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white border-4 border-green-600 px-8 py-4 rounded-2xl font-black text-lg mb-10 shadow-2xl">
            <span className="text-green-700">🏡 Residential</span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="text-green-700">🏢 Commercial</span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Transform Your Lawn Into a<br/>
            <span className="text-green-600">Beautiful Paradise</span> 🌳
          </h2>
          
          <p className="text-2xl sm:text-3xl text-gray-700 mb-14 max-w-4xl mx-auto leading-relaxed font-semibold">
            Expert lawn maintenance, clean ups, and landscaping services. We bring the beauty, you enjoy the results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:5551234567" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-14 py-6 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:shadow-green-600/50 border-4 border-green-800"
            >
              📞 Get Free Estimate
            </a>
            <a 
              href="#services" 
              className="bg-white hover:bg-green-50 text-green-700 border-4 border-green-600 px-14 py-6 rounded-2xl font-black text-2xl transition-all shadow-xl"
            >
              Our Services →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-lime-500 to-green-500"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Our <span className="text-green-600">Services</span> 🌿
            </h3>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-semibold">
              Comprehensive lawn care solutions for homes and businesses
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: '🌱', title: 'Lawn Maintenance', desc: 'Regular mowing, edging, and trimming to keep your lawn pristine', color: 'from-green-500 to-green-600' },
              { icon: '🍃', title: 'Clean Ups', desc: 'Yard debris removal, leaf cleanup, and seasonal maintenance', color: 'from-lime-500 to-lime-600' },
              { icon: '🌳', title: 'Landscaping', desc: 'Professional landscape design and installation services', color: 'from-emerald-500 to-emerald-600' },
              { icon: '✂️', title: 'Trimming & Pruning', desc: 'Expert tree and shrub trimming for healthy growth', color: 'from-green-600 to-green-700' },
              { icon: '🚚', title: 'Junk Removal', desc: 'Fast and efficient removal of unwanted items', color: 'from-lime-600 to-lime-700' },
              { icon: '🏡', title: 'Property Care', desc: 'Complete property maintenance for residential & commercial', color: 'from-emerald-600 to-emerald-700' }
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative bg-white p-10 rounded-3xl border-4 border-green-600 shadow-xl hover:shadow-2xl transition-all">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-700 via-green-600 to-lime-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.2) 50px, rgba(255,255,255,.2) 100px)'}}>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h3 className="text-5xl sm:text-6xl font-black mb-20">
            Why Choose Us? 💪
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: '✅', title: 'Professional', desc: 'Licensed & experienced team' },
              { icon: '💯', title: 'Quality Work', desc: 'Attention to every detail' },
              { icon: '⚡', title: 'Fast Service', desc: 'Quick & efficient work' },
              { icon: '🤝', title: 'Reliable', desc: 'On time, every time' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border-3 border-white/30 hover:bg-white/20 transition-all">
                <div className="text-7xl mb-6">{item.icon}</div>
                <h4 className="text-3xl font-black mb-3">{item.title}</h4>
                <p className="text-xl text-green-50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-5xl font-black text-gray-900 mb-6">
            Serving <span className="text-green-600">Palm Harbor</span> & Surrounding Areas
          </h3>
          <p className="text-2xl text-gray-600 mb-16 font-semibold">
            Bringing professional lawn care to your neighborhood
          </p>

          <div className="bg-white p-12 rounded-3xl shadow-2xl border-4 border-green-600">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="border-r-0 sm:border-r-4 border-green-200 pb-6 sm:pb-0">
                <div className="text-5xl mb-4">🏠</div>
                <p className="text-2xl font-black text-gray-900">Residential</p>
                <p className="text-gray-600 mt-2">Homes & Properties</p>
              </div>
              <div className="border-r-0 sm:border-r-4 border-green-200 pb-6 sm:pb-0">
                <div className="text-5xl mb-4">🏢</div>
                <p className="text-2xl font-black text-gray-900">Commercial</p>
                <p className="text-gray-600 mt-2">Businesses & HOAs</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🌳</div>
                <p className="text-2xl font-black text-gray-900">Properties</p>
                <p className="text-gray-600 mt-2">All Sizes Welcome</p>
              </div>
            </div>
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
                  Ready for a <span className="text-green-600">Greener</span> Lawn?
                </h3>
                <p className="text-2xl text-gray-700 leading-relaxed font-semibold">
                  Contact us today for professional lawn care and landscaping services in Palm Harbor, FL.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-xl border-4 border-green-800">
                    📞
                  </div>
                  <div className="ml-8">
                    <p className="font-black text-2xl text-gray-900 mb-2">Call Us Today</p>
                    <a href="tel:5551234567" className="text-green-600 hover:text-green-700 font-black text-4xl">(555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-xl border-4 border-green-800">
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

                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-xl border-4 border-green-800">
                    🌿
                  </div>
                  <div className="ml-8">
                    <p className="font-black text-2xl text-gray-900 mb-2">Services</p>
                    <p className="text-gray-700 text-xl font-semibold">
                      Commercial & Residential<br/>
                      Lawn Care & Clean Ups
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="tel:5551234567"
                  className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-14 py-6 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:shadow-green-600/50 border-4 border-green-800"
                >
                  🌱 Request Service Now
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-lime-100 rounded-3xl overflow-hidden h-[700px] shadow-2xl border-8 border-green-600">
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

      {/* CTA Banner */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-700 via-green-600 to-lime-600 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl sm:text-6xl font-black mb-8 leading-tight">
            🌱 Your Lawn Deserves the Best Care! 🌱
          </h3>
          <p className="text-2xl text-green-100 mb-10 font-bold">
            Professional • Reliable • Quality Results Guaranteed
          </p>
          <a 
            href="tel:5551234567"
            className="inline-block bg-white hover:bg-green-50 text-green-700 px-16 py-7 rounded-2xl font-black text-3xl transition-all shadow-2xl hover:scale-105 border-4 border-green-800"
          >
            📞 (555) 123-4567
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-7xl mb-6">🌱</div>
          <h2 className="text-4xl font-black bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent mb-6">
            Professional Landscaping
          </h2>
          <p className="text-2xl text-gray-400 mb-8 font-bold">Lawn Care & Landscaping Services</p>
          <div className="space-y-3 mb-10">
            <p className="text-green-400 font-black text-2xl">(555) 123-4567</p>
            <p className="text-xl">Palm Harbor, FL & Surrounding Areas</p>
            <p className="text-green-400 font-bold text-lg">Commercial & Residential Services</p>
          </div>
          <div className="pt-10 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 Professional Landscaping LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
