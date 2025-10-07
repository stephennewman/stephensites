export default function RapidResponseMechanic() {
  return (
    <div className="min-h-screen bg-slate-900" style={{fontFamily: 'Impact, "Arial Black", sans-serif'}}>
      {/* Emergency Top Strip - Animated feel */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 py-1">
        <div className="bg-black py-3 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-white font-black text-sm gap-2 uppercase tracking-wider">
            <span>🚨 WE COME TO YOU! 🚨</span>
            <a href="tel:7272385035" className="text-amber-400 hover:text-amber-300 text-lg animate-pulse">
              📞 (727) 238-5035
            </a>
          </div>
        </div>
      </div>

      {/* Bold Header with stripes */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-500 border-b-8 border-amber-400 py-6 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-black text-amber-400 px-6 py-2 rotate-1 mb-4 shadow-xl border-2 border-amber-400">
            <span className="text-xl font-black uppercase tracking-widest">Mobile Mechanic</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-2 uppercase tracking-tight" style={{textShadow: '5px 5px 0px rgba(0, 0, 0, 0.8), 8px 8px 0px rgba(251, 191, 36, 0.4)'}}>
            Rapid Response
          </h1>
          <p className="text-xl sm:text-2xl font-black text-black uppercase tracking-widest" style={{textShadow: '2px 2px 0px rgba(251, 191, 36, 1)'}}>
            Emergency Auto Repair Services
          </p>
        </div>
      </header>

      {/* Hero - High Energy */}
      <section className="relative overflow-hidden">
        {/* Diagonal stripes background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black" 
             style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(251, 146, 60, 0.1) 50px, rgba(251, 146, 60, 0.1) 100px)'}}>
        </div>
        
        <div className="relative z-10 py-20 px-4 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-amber-400 text-black px-6 py-3 rounded font-black text-lg mb-8 shadow-2xl border-4 border-orange-600 uppercase tracking-wider">
              🚨 4.8 STARS · 149+ REVIEWS 🚨
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-black mb-6 leading-none uppercase tracking-tighter" style={{textShadow: '6px 6px 0px rgba(0,0,0,1), 10px 10px 0px rgba(251, 146, 60, 0.5)'}}>
              Broken Down?<br/>We&apos;ll Rescue You!
            </h2>
            
            <p className="text-2xl sm:text-4xl font-black mb-8 text-amber-400 uppercase tracking-wide" style={{textShadow: '3px 3px 0px rgba(0,0,0,1)'}}>
              📍 We Come To Your Location!
            </p>
            
            <div className="bg-orange-600 border-4 border-amber-400 rounded-none p-6 mb-10 max-w-3xl mx-auto transform -rotate-1 shadow-2xl">
              <p className="text-xl sm:text-2xl font-black mb-2 uppercase tracking-wider">
                Cars · Motorcycles · Trailers · Boats
              </p>
              <p className="text-lg text-amber-200 font-black uppercase tracking-wide">
                Serving Pinellas, Pasco & Hillsborough Counties
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:7272385035" 
                className="group relative bg-amber-400 hover:bg-amber-300 text-black px-12 py-6 rounded font-black text-2xl transition-all shadow-2xl border-4 border-orange-600 hover:scale-110 w-full sm:w-auto uppercase tracking-wider"
              >
                <span className="relative z-10">🚨 Call Now 🚨</span>
              </a>
              <a 
                href="#contact" 
                className="bg-white hover:bg-gray-100 text-black px-12 py-6 rounded font-black text-2xl transition-all shadow-2xl border-4 border-orange-600 hover:scale-105 w-full sm:w-auto uppercase tracking-wider"
              >
                Get Help →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile? - Checkered Flag pattern */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-500 to-amber-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl font-black text-black mb-4 uppercase tracking-tight" style={{textShadow: '4px 4px 0px rgba(255,255,255,0.5)'}}>
              Why Go Mobile? 🚗💨
            </h3>
            <p className="text-2xl text-slate-900 font-black uppercase tracking-wider">We bring the shop to YOU!</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: '⏰', title: 'SAVE TIME', desc: 'No waiting rooms. No tow trucks. We come to you!' },
              { icon: '💰', title: 'SAVE MONEY', desc: 'Lower overhead = better prices for you' },
              { icon: '🏠', title: 'YOUR LOCATION', desc: 'Home, work, roadside—anywhere you need us' }
            ].map((benefit, i) => (
              <div key={i} className="bg-black border-4 border-amber-400 rounded-none p-8 text-center shadow-2xl hover:shadow-2xl transition-all hover:rotate-2">
                <div className="text-7xl mb-4">{benefit.icon}</div>
                <h4 className="text-2xl font-black text-amber-400 mb-3 uppercase tracking-wider">{benefit.title}</h4>
                <p className="text-white text-lg font-bold">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Bold blocks */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-black text-center mb-12 text-amber-400 uppercase tracking-tight" style={{textShadow: '4px 4px 0px rgba(0,0,0,1)'}}>
            Emergency Services 🔧
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔋', service: 'Battery Replacement', color: 'bg-amber-400 border-orange-600 text-black' },
              { icon: '🛞', service: 'Brake Repair', color: 'bg-orange-600 border-amber-400 text-white' },
              { icon: '⚙️', service: 'Engine Diagnostics', color: 'bg-amber-400 border-orange-600 text-black' },
              { icon: '🔧', service: 'General Repairs', color: 'bg-orange-600 border-amber-400 text-white' },
              { icon: '🏍️', service: 'Motorcycle Service', color: 'bg-amber-400 border-orange-600 text-black' },
              { icon: '⛵', service: 'Boat Maintenance', color: 'bg-orange-600 border-amber-400 text-white' },
              { icon: '🚚', service: 'Trailer Repair', color: 'bg-amber-400 border-orange-600 text-black' },
              { icon: '💡', service: 'Electrical Work', color: 'bg-orange-600 border-amber-400 text-white' }
            ].map((item, i) => (
              <div key={i} className={`${item.color} border-4 rounded-none p-6 text-center shadow-2xl hover:scale-105 transition-transform`}>
                <div className="text-5xl mb-3">{item.icon}</div>
                <p className="font-black text-lg uppercase tracking-wide">{item.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews - White on Red */}
      <section className="py-16 px-4 bg-black text-white border-y-8 border-amber-400">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-black text-center mb-4 text-amber-400 uppercase tracking-tight" style={{textShadow: '4px 4px 0px rgba(251, 146, 60, 0.5)'}}>Real Rescues!</h3>
          <p className="text-center text-orange-500 text-xl font-black mb-12 uppercase tracking-wider">See what our customers say</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Anthony Gist', text: 'He had to replace the radiator, water pump, fan clutch and thermostat. Great work!', initial: 'A' },
              { name: 'Tom Harper', text: 'Nice to know there are good folks like you in the service business!', initial: 'T' },
              { name: 'William Galarza', text: 'Fixed the problem also gave me some car tips and price was on point.', initial: 'W' }
            ].map((review, i) => (
              <div key={i} className="bg-slate-900 text-white p-6 rounded-none shadow-2xl border-4 border-orange-600">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-amber-400 text-black rounded-none flex items-center justify-center font-black text-2xl border-2 border-orange-600">
                    {review.initial}
                  </div>
                  <div className="ml-4">
                    <p className="font-black text-lg uppercase tracking-wide">{review.name}</p>
                    <p className="text-amber-400 font-bold">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-gray-300 font-bold text-base">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-3xl font-black text-amber-400 uppercase tracking-wider" style={{textShadow: '3px 3px 0px rgba(251, 146, 60, 0.5)'}}>
              4.8 ⭐ Rating · 149+ Google Reviews
            </p>
          </div>
        </div>
      </section>

      {/* Contact - Emergency style */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 border-8 border-amber-400 rounded-none shadow-2xl overflow-hidden">
            <div className="bg-black text-white py-6 px-6 text-center border-b-4 border-amber-400">
              <h3 className="text-4xl sm:text-5xl font-black mb-2 uppercase tracking-tight" style={{textShadow: '4px 4px 0px rgba(251, 146, 60, 0.5)'}}>Need Help Now?</h3>
              <p className="text-xl font-black text-amber-400 uppercase tracking-wider">Call Ivan & His Team!</p>
            </div>
            
            <div className="p-8 sm:p-12 bg-slate-900">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-amber-400 text-black rounded-none flex items-center justify-center text-3xl flex-shrink-0 border-4 border-orange-600">
                      📞
                    </div>
                    <div className="ml-6">
                      <p className="font-black text-2xl text-amber-400 mb-2 uppercase tracking-wider">Call Now</p>
                      <a href="tel:7272385035" className="text-orange-500 hover:text-orange-400 font-black text-3xl hover:underline">
                        (727) 238-5035
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-amber-400 text-black rounded-none flex items-center justify-center text-3xl flex-shrink-0 border-4 border-orange-600">
                      📍
                    </div>
                    <div className="ml-6">
                      <p className="font-black text-2xl text-amber-400 mb-2 uppercase tracking-wider">Base Location</p>
                      <p className="text-gray-300 text-lg font-bold">
                        29712 US Hwy 19 N<br/>
                        Unit # 417<br/>
                        Clearwater, FL 33761
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-amber-400 text-black rounded-none flex items-center justify-center text-3xl flex-shrink-0 border-4 border-orange-600">
                      ⏰
                    </div>
                    <div className="ml-6">
                      <p className="font-black text-2xl text-amber-400 mb-2 uppercase tracking-wider">Hours</p>
                      <p className="text-gray-300 text-lg font-bold">
                        Monday - Friday: 9:00 AM - 6:00 PM<br/>
                        Saturday: By Appointment<br/>
                        <span className="text-orange-500">Sunday: Closed</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-amber-400 text-black rounded-none flex items-center justify-center text-3xl flex-shrink-0 border-4 border-orange-600">
                      🗺️
                    </div>
                    <div className="ml-6">
                      <p className="font-black text-2xl text-amber-400 mb-2 uppercase tracking-wider">Service Area</p>
                      <p className="text-gray-300 text-lg font-bold">
                        Pinellas County<br/>
                        Pasco County<br/>
                        Hillsborough County
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-200 rounded-none overflow-hidden h-[500px] shadow-xl border-4 border-amber-400">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.765!3d28.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDU5JzU4LjAiTiA4MsKwNDUnNTQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a 
                  href="tel:7272385035"
                  className="inline-block bg-amber-400 hover:bg-amber-300 text-black px-16 py-6 rounded-none font-black text-3xl shadow-2xl border-4 border-orange-600 hover:scale-105 transition-transform uppercase tracking-wider"
                >
                  🚨 Emergency Call 🚨
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Red stripe */}
      <footer className="bg-black text-white py-10 px-4 border-t-8 border-amber-400">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-3 text-amber-400 uppercase tracking-tight" style={{textShadow: '3px 3px 0px rgba(251, 146, 60, 0.5)'}}>Rapid Response Mobile Mechanic</h2>
          <p className="text-lg font-black text-orange-500 mb-4 uppercase tracking-wider">Family-Owned · Ivan Kasic & Team</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6 font-black">
            <a href="tel:7272385035" className="text-amber-400 hover:text-amber-300 text-xl">(727) 238-5035</a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="text-gray-400">Clearwater, FL 33761</span>
          </div>
          <p className="text-sm text-gray-500 font-bold">© 2025 Rapid Response Mobile Mechanic Service LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

