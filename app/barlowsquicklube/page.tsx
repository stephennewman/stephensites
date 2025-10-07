import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function BarlowsQuickLube() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Barlow&apos;s Quick Lube</h1>
            <p className="text-blue-200 text-sm mt-1">Fast, Honest, Local</p>
          </div>
          <a href="tel:7279384101" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors">
            Call Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
            ⭐ 4.7 Rating · 174 Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Quick Oil Changes You Can Trust</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Professional service without the upsell. In and out fast—more time with your family, not in a waiting room.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Directions
            </a>
            <a href="tel:7279384101" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              (727) 938-4101
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🛢️', title: 'Oil Changes', desc: 'Fast conventional & synthetic oil changes' },
            { icon: '🚗', title: 'All Vehicles', desc: 'Cars, trucks, SUVs & diesel (Duramax certified)' },
            { icon: '✅', title: 'Honest Service', desc: 'No upselling—just what you need' },
            { icon: '⚡', title: 'Quick Service', desc: 'In and out in minutes, not hours' }
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Michael Wick', text: "Barlow's is quick, reasonable and knowledgeable. I have a 2015 GMC 2500 Duramax diesel and it's not a problem. Conveniently located off of 19 south in Palm Harbor", time: '2 months ago' },
              { name: 'Melissa Leonard', text: "Super fast, professional oil change. My husband and I spent more time listening to the owner's hilarious old school stories than we spent during the work! Love everything about this place. The guy is honest and real.", time: '2 months ago' },
              { name: 'Kaitlyn Willey', text: "This place is amazing! So fast. We have three kiddos 6 and under, so finding somewhere that doesn't take hours and give you a bill of what else is wrong with your car, was refreshing. Amazing guy. Great attitude!", time: '3 months ago' }
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.time}</p>
                  </div>
                </div>
                <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Visit Us Today</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">37674 US Hwy 19 N<br/>Palm Harbor, FL 34684</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:7279384101" className="text-blue-600 hover:underline">(727) 938-4101</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">🕐</span>
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="text-gray-600">Opens 8:30 AM Monday</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://maps.app.goo.gl/U3jbB7Sc71A4zYcAA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.7!3d28.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA0JzUwLjQiTiA4MsKwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Barlow&apos;s Quick Lube</h2>
          <p className="text-blue-200 mb-4">Your trusted local oil change service since day one</p>
          <p className="text-sm text-blue-300">© 2025 Barlow&apos;s Quick Lube. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}



