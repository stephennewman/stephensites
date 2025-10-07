export default function CabanaPools() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      {/* Top Wave Bar */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-bold">💧 Open 24 Hours • Serving Palm Harbor & Surrounding Areas</span>
          <a href="tel:7278313366" className="font-bold hover:text-cyan-100">☎️ (727) 831-3366</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg py-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="text-6xl">🏊</div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Cabana Pool Services
          </h1>
          <p className="text-xl text-gray-700 font-semibold">Crystal Clear Pools, Guaranteed</p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-100 to-sky-100 opacity-50"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-white border-4 border-cyan-500 px-8 py-3 rounded-full font-bold text-lg mb-8 shadow-xl">
            <span className="text-cyan-600">⭐ 5.0 Rating</span>
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-blue-600">66 Google Reviews</span>
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-cyan-600">BBB A+ Rated</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Pool Deserves the<br/>
            <span className="text-cyan-600">Best Care</span> 💧
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Licensed & insured pool professionals providing expert service, repairs, and automation. From weekly maintenance to complete system upgrades—we do it all.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7278313366" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-cyan-500/50"
            >
              📞 Call for Free Quote
            </a>
            <a 
              href="#services" 
              className="bg-white hover:bg-cyan-50 text-cyan-600 border-3 border-cyan-500 px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl"
            >
              Our Services →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-cyan-600">Pool Services</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive pool care from certified professionals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🧹', title: 'Pool Cleaning', desc: 'Weekly maintenance to the highest industry standards', color: 'from-cyan-400 to-cyan-500' },
              { icon: '🔧', title: 'Pool Repairs', desc: 'Expert repair for pumps, filters, and all equipment', color: 'from-blue-400 to-blue-500' },
              { icon: '🌊', title: 'Filter Cleaning', desc: 'Keep your water crystal clear and safe', color: 'from-sky-400 to-sky-500' },
              { icon: '🔥', title: 'Heater Installation', desc: 'Solar, heat pumps, and gas heaters available', color: 'from-orange-400 to-orange-500' },
              { icon: '📱', title: 'WiFi Automation', desc: 'Control your pool from anywhere on your phone', color: 'from-purple-400 to-purple-500' },
              { icon: '🧂', title: 'Salt Systems', desc: 'Salt water conversion and maintenance', color: 'from-teal-400 to-teal-500' },
              { icon: '💡', title: 'Pool Lighting', desc: 'LED lights for beautiful evening swims', color: 'from-yellow-400 to-yellow-500' },
              { icon: '⚙️', title: 'Variable Speed Pumps', desc: 'Energy-efficient pump upgrades', color: 'from-green-400 to-green-500' },
              { icon: '🏢', title: 'Commercial Services', desc: 'Residential & commercial pool care', color: 'from-indigo-400 to-indigo-500' }
            ].map((service, i) => (
              <div key={i} className="group bg-gradient-to-br from-white to-cyan-50 p-8 rounded-3xl border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-2xl hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}}>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Why Choose Cabana? 🌴
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⭐', stat: '5.0', label: 'Google Rating', sub: '66 Reviews' },
              { icon: '🏆', stat: 'A+', label: 'BBB Rating', sub: 'Accredited' },
              { icon: '🔒', stat: '24/7', label: 'Available', sub: 'Always Here' },
              { icon: '✅', stat: '100%', label: 'Licensed', sub: 'FL Certified' }
            ].map((item, i) => (
              <div key={i} className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/30">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-5xl font-black mb-2">{item.stat}</div>
                <div className="text-xl font-bold mb-1">{item.label}</div>
                <div className="text-cyan-100">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What Our <span className="text-cyan-600">Customers Say</span> 💬
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Cabana transformed our pool! The automation system they installed lets me control everything from my phone. Professional and reliable.', stars: 5 },
              { name: 'Mike T.', text: 'Best pool service in Palm Harbor. They fixed our heater quickly and the price was fair. Highly recommend!', stars: 5 },
              { name: 'Jennifer L.', text: 'Our pool has never looked better. The weekly service is thorough and the team is always friendly and professional.', stars: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl border-2 border-cyan-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-lg text-gray-900">{review.name}</p>
                    <div className="text-yellow-500 text-lg">{'⭐'.repeat(review.stars)}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">&quot;{review.text}&quot;</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-cyan-600">5.0 ⭐ Rating from 66+ Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Ready for a <span className="text-cyan-600">Crystal Clear Pool?</span>
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Contact Cabana Pool Services today for a free quote. Licensed, insured, and ready to serve Palm Harbor and surrounding areas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                    📞
                  </div>
                  <div className="ml-6">
                    <p className="font-bold text-xl text-gray-900 mb-1">Call Us Now</p>
                    <a href="tel:7278313366" className="text-cyan-600 hover:text-cyan-700 font-bold text-3xl">(727) 831-3366</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                    📍
                  </div>
                  <div className="ml-6">
                    <p className="font-bold text-xl text-gray-900 mb-1">Service Area</p>
                    <p className="text-gray-700 text-lg">
                      3155 Cypress Green Dr<br/>
                      Palm Harbor, FL 34684
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                    ⏰
                  </div>
                  <div className="ml-6">
                    <p className="font-bold text-xl text-gray-900 mb-1">Availability</p>
                    <p className="text-cyan-600 text-xl font-bold">Open 24 Hours</p>
                    <p className="text-gray-600">Always here when you need us</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="tel:7278313366"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-cyan-500/50"
                >
                  💧 Get Free Quote Now
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl overflow-hidden h-[600px] shadow-2xl border-4 border-cyan-300">
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

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-5xl font-bold mb-6">
            🌊 Dive Into Better Pool Care Today! 🌊
          </h3>
          <p className="text-xl text-cyan-100 mb-8">
            Licensed • Insured • BBB A+ Rated • 5.0 Stars
          </p>
          <a 
            href="tel:7278313366"
            className="inline-block bg-white hover:bg-cyan-50 text-cyan-600 px-16 py-6 rounded-full font-black text-2xl transition-all shadow-2xl hover:scale-105"
          >
            📞 (727) 831-3366
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-5xl mb-4">🏊</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Cabana Pool Services
          </h2>
          <p className="text-lg text-gray-400 mb-6">Crystal Clear Pools, Guaranteed</p>
          <div className="space-y-2 mb-8">
            <p className="text-cyan-400 font-bold text-xl">(727) 831-3366</p>
            <p>3155 Cypress Green Dr, Palm Harbor, FL 34684</p>
            <p className="text-cyan-400 font-semibold">Open 24 Hours</p>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐ 5.0 Google Rating</span>
            <span className="text-gray-600">•</span>
            <span className="text-cyan-400">BBB A+ Accredited</span>
          </div>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 Cabana Pool Services LLC. All rights reserved. • Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



