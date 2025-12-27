import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ElWarshaAuto() {
  return (
    <div className="min-h-screen bg-black">
      {/* Top Metal Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 py-1">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-3 px-4 border-y border-orange-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <span className="font-bold text-orange-500 uppercase tracking-wider">🔧 Open 7 Days a Week • Closes 8 PM</span>
            <a href="tel:7276012135" className="font-bold text-orange-400 hover:text-orange-300">☎️ (727) 601-2135</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-b from-gray-900 to-black shadow-2xl py-10 px-4 relative overflow-hidden border-b-4 border-orange-600">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #f97316 35px, #f97316 70px)'}}>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="text-7xl">⚙️</div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-2 uppercase tracking-wider" style={{textShadow: '4px 4px 0px rgba(249, 115, 22, 0.5), 6px 6px 0px rgba(0, 0, 0, 1)'}}>
            EL WARSHA
          </h1>
          <p className="text-3xl text-orange-500 font-black uppercase tracking-widest mb-4">Auto Repair</p>
          <div className="inline-block bg-orange-600 text-black px-6 py-2 font-black uppercase text-sm tracking-widest border-2 border-orange-400">
            Trustworthy Expertise • Guaranteed Comfort
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-gray-800 border-4 border-orange-600 px-8 py-4 mb-10 shadow-2xl">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-orange-500 font-black text-lg">⭐ 5.0 RATING</span>
              <span className="text-gray-600">|</span>
              <span className="text-white font-black text-lg">ALL MAKES & MODELS</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight uppercase" style={{textShadow: '3px 3px 0px rgba(249, 115, 22, 0.3)'}}>
            PROFESSIONAL AUTO REPAIR<br/>
            <span className="text-orange-500">YOU CAN TRUST</span> 🔩
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-bold">
            From oil changes to full engine work, our experienced mechanics keep your vehicle running at peak performance. Honest service, expert repairs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7276012135" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 font-black text-xl transition-all shadow-2xl border-4 border-orange-800 uppercase tracking-wider"
            >
              🔧 CALL NOW
            </a>
            <a 
              href="#services" 
              className="bg-gray-800 hover:bg-gray-700 text-orange-500 border-4 border-orange-600 px-12 py-6 font-black text-xl transition-all shadow-xl uppercase tracking-wider"
            >
              OUR SERVICES →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-black relative border-t-4 border-orange-600">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-wider">
              OUR <span className="text-orange-500">SERVICES</span> ⚙️
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-bold uppercase tracking-wide">
              Complete Auto Repair for All Makes & Models
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🛢️', title: 'OIL CHANGES', desc: 'Fast and professional oil change service', color: 'from-orange-600 to-red-600' },
              { icon: '🔧', title: 'BRAKE REPAIR', desc: 'Expert brake system diagnostics and repair', color: 'from-red-600 to-orange-600' },
              { icon: '💻', title: 'DIAGNOSTICS', desc: 'Advanced computer diagnostics for all systems', color: 'from-orange-600 to-red-600' },
              { icon: '⚙️', title: 'ENGINE WORK', desc: 'Full engine repair and maintenance services', color: 'from-red-600 to-orange-600' },
              { icon: '🔩', title: 'SUSPENSION', desc: 'Suspension system repair and alignment', color: 'from-orange-600 to-red-600' },
              { icon: '❄️', title: 'A/C SERVICE', desc: 'Air conditioning charging and repair', color: 'from-red-600 to-orange-600' }
            ].map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 transform group-hover:scale-105 transition-transform"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 border-4 border-gray-800 group-hover:border-orange-600 transition-all shadow-2xl">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4 border-2 border-orange-400 shadow-lg group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black text-orange-500 mb-3 uppercase tracking-wide">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-semibold">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 relative overflow-hidden border-y-4 border-orange-800">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(0,0,0,.3) 50px, rgba(0,0,0,.3) 100px)'}}>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-4xl sm:text-5xl font-black text-center mb-16 text-white uppercase tracking-wider" style={{textShadow: '4px 4px 0px rgba(0, 0, 0, 0.5)'}}>
            WHY CHOOSE EL WARSHA? 💪
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '✅', title: 'HONEST', desc: 'Trustworthy & transparent service' },
              { icon: '⭐', title: '5.0 RATING', desc: 'Highly rated by customers' },
              { icon: '🔧', title: 'EXPERT', desc: 'Experienced mechanics' },
              { icon: '📅', title: '7 DAYS', desc: 'Open every day for you' }
            ].map((item, i) => (
              <div key={i} className="bg-black/30 backdrop-blur-sm p-8 border-4 border-white/30 hover:border-white transition-all">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h4 className="text-2xl font-black mb-2 text-white uppercase tracking-wider">{item.title}</h4>
                <p className="text-orange-100 font-bold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-black text-center mb-16 text-white uppercase tracking-wider">
            WHAT <span className="text-orange-500">CUSTOMERS</span> SAY 🗣️
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Koky Alfy', text: 'They genuinely care about people and are trustworthy.', rating: 5 },
              { name: 'Shady Tadrous', text: "El Warsha Auto Repair is hands down the BEST shop I've ever been to.", rating: 5 },
              { name: 'Heba Tadrous', text: 'Michael is very honest and knows how to fix all types of cars.', rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-black p-8 border-4 border-gray-800 hover:border-orange-600 transition-all shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white font-black text-2xl border-2 border-orange-400">
                    {review.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-black text-lg text-white uppercase tracking-wide">{review.name}</p>
                    <div className="text-orange-500 text-lg font-bold">{'⭐'.repeat(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed italic font-semibold">&quot;{review.text}&quot;</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-black text-orange-500 uppercase tracking-wider">5.0 ⭐ Google Rating</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-black border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-wider">
                  NEED <span className="text-orange-500">REPAIRS?</span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed font-bold">
                  Visit El Warsha Auto Repair in Palm Harbor. Open 7 days a week with experienced mechanics ready to serve you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-xl border-4 border-orange-800">
                    📞
                  </div>
                  <div className="ml-6">
                    <p className="font-black text-xl text-orange-500 mb-1 uppercase tracking-wider">Call Now</p>
                    <a href="tel:7276012135" className="text-white hover:text-orange-500 font-black text-3xl">(727) 601-2135</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-xl border-4 border-orange-800">
                    📍
                  </div>
                  <div className="ml-6">
                    <p className="font-black text-xl text-orange-500 mb-1 uppercase tracking-wider">Location</p>
                    <p className="text-gray-400 text-lg font-bold">
                      37240 US Highway 19 North<br/>
                      Palm Harbor, FL 34684
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-xl border-4 border-orange-800">
                    ⏰
                  </div>
                  <div className="ml-6">
                    <p className="font-black text-xl text-orange-500 mb-1 uppercase tracking-wider">Hours</p>
                    <p className="text-white text-xl font-black">Open 7 Days a Week</p>
                    <p className="text-gray-400 font-bold">Closes 8:00 PM Daily</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="tel:7276012135"
                  className="inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 font-black text-xl transition-all shadow-2xl border-4 border-orange-800 uppercase tracking-wider"
                >
                  ⚙️ SCHEDULE SERVICE
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black overflow-hidden h-[600px] shadow-2xl border-8 border-orange-600">
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
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white text-center border-y-4 border-orange-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-5xl font-black mb-6 uppercase tracking-wider" style={{textShadow: '3px 3px 0px rgba(0, 0, 0, 0.5)'}}>
            ⚙️ EXPERT AUTO REPAIR ⚙️
          </h3>
          <p className="text-xl text-orange-100 mb-8 font-black uppercase tracking-wide">
            Trustworthy • Professional • All Makes & Models
          </p>
          <a 
            href="tel:7276012135"
            className="inline-block bg-black hover:bg-gray-900 text-orange-500 px-16 py-6 font-black text-2xl transition-all shadow-2xl hover:scale-105 border-4 border-black uppercase tracking-wider"
          >
            📞 (727) 601-2135
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-4 border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-4">⚙️</div>
          <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-widest">
            EL WARSHA
          </h2>
          <p className="text-xl text-orange-500 font-black uppercase tracking-wider mb-6">Auto Repair</p>
          <div className="space-y-2 mb-8">
            <p className="text-orange-500 font-black text-xl">(727) 601-2135</p>
            <p className="font-bold">37240 US Highway 19 North, Palm Harbor, FL 34684</p>
            <p className="text-orange-500 font-black">Open 7 Days a Week • Closes 8 PM</p>
          </div>
          <div className="flex justify-center gap-6 mb-8 font-bold uppercase tracking-wider">
            <span className="text-orange-500">⭐ 5.0 Google Rating</span>
            <span className="text-gray-700">•</span>
            <span>All Makes & Models</span>
          </div>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-600 uppercase tracking-wider">© 2025 El Warsha Auto Repair LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



