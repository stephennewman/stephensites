import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function WilsonsTire() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4">
            <span>📍 125 Forest Lakes Blvd, Oldsmar, FL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>⏰ Mon-Fri: 8:00 AM - 5:30 PM</span>
            <a href="tel:8138521111" className="font-bold hover:underline">📞 (813) 852-1111</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Wilson&apos;s Tire & Automotive</h1>
          <p className="text-center text-gray-300 mt-2 text-lg">Family-Owned & Operated Since 2013</p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold mb-6">
            ⭐ 4.7 Stars · 274+ Google Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Complete Automotive Repair & Tires</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Professional service from Dave Wilson and his expert team. We treat you like family—honest work, fair prices, and quality you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8138521111" className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
              Call (813) 852-1111
            </a>
            <a href="#location" className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services</h3>
          <p className="text-center text-gray-600 mb-12 text-lg">Complete automotive care under one roof</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🔧', title: 'Oil Changes', desc: 'Fast, professional oil change service' },
              { icon: '🛞', title: 'Tire Sales & Service', desc: 'Top-tier tires for all vehicles' },
              { icon: '🚗', title: 'Brake Repair', desc: 'Expert brake system maintenance' },
              { icon: '⚙️', title: 'Tire Alignments', desc: 'Precision alignment services' },
              { icon: '🔍', title: 'Vehicle Inspections', desc: 'Comprehensive safety checks' },
              { icon: '✅', title: 'General Repairs', desc: 'Full-service automotive repair' }
            ].map((service, i) => (
              <div key={i} className="border-2 border-gray-200 p-6 rounded-lg hover:border-red-600 transition-all hover:shadow-lg">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Wilson&apos;s?</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: '👨‍👩‍👧‍👦', title: 'Family-Owned', desc: '10+ years serving Oldsmar families' },
              { icon: '💯', title: 'Honest Service', desc: 'No upselling, just honest recommendations' },
              { icon: '⚡', title: 'Quick Turnaround', desc: 'Most visits under 1 hour' }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h4 className="text-2xl font-bold mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-gray-700 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'MARIE JIMENEZ', text: 'Great service ...hes awsome..great personal..', platform: 'Google' },
              { name: 'Mary Marsh', text: 'Wilson people pleasant, work done quickly & price was reasonable.', platform: 'Google' },
              { name: 'Patrick Nolan', text: 'This is a good place family-owned Dave and his staff will help you out.', platform: 'Google' }
            ].map((review, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {review.name[0]}
                    </div>
                    <div className="ml-3">
                      <p className="font-bold text-sm">{review.name}</p>
                      <p className="text-xs text-gray-400">{review.platform} Review</p>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-3 text-sm">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-gray-300">
              <span className="font-bold text-yellow-400">4.7/5</span> from 274+ Google Reviews
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Visit Us in Oldsmar</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  📍
                </div>
                <div className="ml-4">
                  <p className="font-bold text-xl text-gray-900">Address</p>
                  <p className="text-gray-700 text-lg mt-1">125 Forest Lakes Blvd<br/>Oldsmar, FL 34677</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  📞
                </div>
                <div className="ml-4">
                  <p className="font-bold text-xl text-gray-900">Phone</p>
                  <a href="tel:8138521111" className="text-red-600 hover:underline text-lg mt-1 block">(813) 852-1111</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  ⏰
                </div>
                <div className="ml-4">
                  <p className="font-bold text-xl text-gray-900">Hours</p>
                  <div className="text-gray-700 text-lg mt-1">
                    <p>Monday - Friday: 8:00 AM - 5:30 PM</p>
                    <p className="text-red-600 font-semibold">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="https://www.google.com/maps/place/Wilson's+Tire+%26+Automotive/@28.0410,-82.6650,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg overflow-hidden h-[500px] shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.665!3d28.041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAyJzI3LjYiTiA4MsKwMzknNTQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
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
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Wilson&apos;s Tire & Automotive</h2>
          <p className="text-gray-400 mb-4 text-lg">Your trusted family-owned auto shop in Oldsmar, FL</p>
          <div className="flex justify-center gap-8 mb-6 text-sm">
            <a href="tel:8138521111" className="hover:text-red-500 transition-colors">(813) 852-1111</a>
            <span className="text-gray-600">|</span>
            <span>125 Forest Lakes Blvd, Oldsmar, FL 34677</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 Wilson&apos;s Tire & Automotive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}



