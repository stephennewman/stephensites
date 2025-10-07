export default function AllAwayHaulAway() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-bold">🚚 Open 24 Hours • Available Anytime</span>
          <a href="tel:7276860548" className="font-bold hover:text-orange-100">☎️ (727) 686-0548</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg py-10 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #ea580c 20px, #ea580c 40px)'}}>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="text-7xl">🚛</div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            All Away Haul Away
          </h1>
          <p className="text-2xl text-gray-700 font-bold">Professional Junk Removal in Palm Harbor</p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white border-4 border-orange-600 px-8 py-4 rounded-2xl font-black text-lg mb-10 shadow-2xl">
            <span className="text-orange-600">⭐ 5.0 Rating • 9 Reviews</span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="text-green-600">♻️ Eco-Friendly Solutions</span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Reclaim Your Space!<br/>
            <span className="text-orange-600">Stress-Free Removal</span> 💪
          </h2>
          
          <p className="text-2xl sm:text-3xl text-gray-700 mb-14 max-w-4xl mx-auto leading-relaxed font-semibold">
            Professional hauling and junk removal makes decluttering easy. We handle furniture, appliances, and construction waste with reliable, eco-friendly solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7276860548" 
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-14 py-6 rounded-full font-black text-2xl transition-all shadow-2xl hover:shadow-orange-600/50"
            >
              📞 Call for FREE Quote
            </a>
            <a 
              href="#services" 
              className="bg-white hover:bg-orange-50 text-orange-700 border-4 border-orange-600 px-14 py-6 rounded-full font-black text-2xl transition-all shadow-xl"
            >
              What We Haul →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              What We <span className="text-orange-600">Remove</span> 🚚
            </h3>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-semibold">
              Complete junk removal and hauling services for homes and businesses
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: '🛋️', title: 'Furniture Removal', desc: 'Couches, beds, tables, chairs, and all home furniture', color: 'from-orange-500 to-orange-600' },
              { icon: '📱', title: 'Appliance Removal', desc: 'Refrigerators, washers, dryers, stoves, dishwashers', color: 'from-amber-500 to-amber-600' },
              { icon: '🏗️', title: 'Construction Waste', desc: 'Drywall, wood, flooring, renovation debris', color: 'from-gray-500 to-gray-600' },
              { icon: '💻', title: 'Electronic Waste', desc: 'Computers, TVs, monitors, electronics', color: 'from-blue-500 to-blue-600' },
              { icon: '🏢', title: 'Commercial Services', desc: 'Office cleanouts, business junk removal', color: 'from-green-500 to-green-600' },
              { icon: '♻️', title: 'Eco-Friendly Disposal', desc: 'Responsible recycling and sustainable solutions', color: 'from-orange-600 to-orange-700' }
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform"></div>
                <div className="relative bg-white p-10 rounded-3xl border-4 border-orange-500 shadow-xl hover:shadow-2xl transition-all">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
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

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl sm:text-6xl font-black text-center mb-20">
            How It Works 📋
          </h3>

          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { num: '1', icon: '📞', title: 'Call Us', desc: 'Contact us at (727) 686-0548 anytime—24 hours!' },
              { num: '2', icon: '📅', title: 'Schedule', desc: 'We arrange a convenient pickup time that works for you' },
              { num: '3', icon: '🚚', title: 'We Haul', desc: "Sit back and relax—we handle all the heavy lifting!" }
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white text-orange-600 rounded-full flex items-center justify-center font-black text-3xl border-4 border-orange-800 shadow-xl">
                  {step.num}
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-10 pt-16 rounded-3xl border-3 border-white/30">
                  <div className="text-7xl mb-6">{step.icon}</div>
                  <h4 className="text-3xl font-black mb-4">{step.title}</h4>
                  <p className="text-xl text-orange-50 font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-black text-center text-gray-900 mb-6">
            Serving <span className="text-orange-600">Palm Harbor</span> & Beyond
          </h3>
          <p className="text-2xl text-gray-600 text-center mb-16 font-semibold">
            We proudly serve these local communities
          </p>

          <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {['Palm Harbor', 'East Lake', 'Ozona', 'Crystal Beach', 'Dunedin', 'Tarpon Springs', 'Holiday', 'Oldsmar', 'Clearwater', 'Largo', 'Safety Harbor', '& More!'].map((area, i) => (
              <div key={i} className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all shadow-md hover:shadow-lg">
                <p className="text-xl font-black text-gray-900">📍 {area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-black text-center mb-20 text-gray-900">
            Why Choose <span className="text-orange-600">All Away?</span> 💯
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⭐', title: '5.0 Rating', desc: 'Highly rated by satisfied customers' },
              { icon: '🕐', title: '24/7 Available', desc: 'Open 24 hours for your convenience' },
              { icon: '♻️', title: 'Eco-Friendly', desc: 'Sustainable disposal solutions' },
              { icon: '💪', title: 'Professional', desc: 'Trustworthy, honest, responsive team' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border-4 border-orange-500 shadow-xl text-center hover:-translate-y-2 transition-transform">
                <div className="text-7xl mb-6">{feature.icon}</div>
                <h4 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-700 text-lg">{feature.desc}</p>
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
                  Ready to <span className="text-orange-600">Reclaim Your Space?</span>
                </h3>
                <p className="text-2xl text-gray-700 leading-relaxed font-semibold">
                  Contact All Away Haul Away for professional junk removal in Palm Harbor. Available 24 hours for your convenience!
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-xl">
                    📞
                  </div>
                  <div className="ml-8">
                    <p className="font-black text-2xl text-gray-900 mb-2">Call Anytime</p>
                    <a href="tel:7276860548" className="text-orange-600 hover:text-orange-700 font-black text-4xl">(727) 686-0548</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-xl">
                    📍
                  </div>
                  <div className="ml-8">
                    <p className="font-black text-2xl text-gray-900 mb-2">Location</p>
                    <p className="text-gray-700 text-xl font-semibold">
                      160 Talley Drive<br/>
                      Palm Harbor, FL 34684
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-xl">
                    ⏰
                  </div>
                  <div className="ml-8">
                    <p className="font-black text-2xl text-gray-900 mb-2">Availability</p>
                    <p className="text-orange-600 text-2xl font-black">Open 24 Hours</p>
                    <p className="text-gray-700 text-xl font-bold">Available Day & Night</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="tel:7276860548"
                  className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-14 py-6 rounded-full font-black text-2xl transition-all shadow-2xl hover:shadow-orange-600/50"
                >
                  🚚 Book Pickup Now
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl overflow-hidden h-[700px] shadow-2xl border-8 border-orange-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.73!3d28.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA0JzQ4LjAiTiA4MsKwNDMnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl sm:text-6xl font-black mb-8 leading-tight">
            🚛 Professional Junk Removal 🚛
          </h3>
          <p className="text-2xl text-orange-100 mb-10 font-bold">
            Trustworthy • Responsive • Eco-Friendly • Open 24 Hours
          </p>
          <a 
            href="tel:7276860548"
            className="inline-block bg-white hover:bg-orange-50 text-orange-700 px-16 py-7 rounded-full font-black text-3xl transition-all shadow-2xl hover:scale-105"
          >
            📞 (727) 686-0548
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-7xl mb-6">🚛</div>
          <h2 className="text-4xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6">
            All Away Haul Away
          </h2>
          <p className="text-2xl text-gray-400 mb-8 font-bold">Professional Junk Removal Service</p>
          <div className="space-y-3 mb-10">
            <p className="text-orange-400 font-black text-2xl">(727) 686-0548</p>
            <p className="text-xl">160 Talley Drive, Palm Harbor, FL 34684</p>
            <p className="text-orange-400 font-bold text-lg">Open 24 Hours • Available Anytime</p>
          </div>
          <div className="flex justify-center gap-6 mb-10 font-bold text-lg flex-wrap">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐ 5.0 Rating</span>
            <span className="text-gray-700">•</span>
            <span className="text-green-400">♻️ Eco-Friendly Solutions</span>
          </div>
          <div className="pt-10 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 All Away Haul Away. All rights reserved. • Serving Palm Harbor & Tampa Bay Area</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

