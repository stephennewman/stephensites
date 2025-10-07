export default function HarborParkOffice() {
  return (
    <div className="min-h-screen bg-gray-50" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <span className="font-medium">📍 33920 US Highway 19 N, Palm Harbor, FL 34684</span>
          <span className="font-medium">☎️ Contact for Leasing Information</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md py-6 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800 tracking-wide text-center">
            HARBOR PARK <span className="font-semibold text-blue-900">OFFICE CENTER</span>
          </h1>
          <p className="text-center text-gray-600 mt-2 text-sm tracking-wider uppercase">Premier Office Space in Palm Harbor</p>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              3-Story Mid-Rise Building
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
              Elevate Your <span className="font-semibold text-blue-900">Business</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Palm Harbor&apos;s North Pinellas County market, Harbor Park offers highly efficient, professional office space designed for success.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            {[
              { icon: '🏢', label: 'Prime Location', desc: 'US Highway 19 North' },
              { icon: '✨', label: 'Modern Facilities', desc: 'Highly Efficient Space' },
              { icon: '🅿️', label: 'Easy Access', desc: 'Ample Parking' }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.label}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-light text-center mb-4 text-gray-800">
            Building <span className="font-semibold text-blue-900">Features</span>
          </h3>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Professional amenities designed to enhance your business operations
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Professional Environment', desc: 'Modern, well-maintained office building with professional atmosphere', icon: '💼' },
              { title: 'Strategic Location', desc: 'Prime Palm Harbor location on US Highway 19', icon: '📍' },
              { title: 'Flexible Space', desc: 'Highly efficient floor plans to suit various business needs', icon: '📐' },
              { title: 'Easy Accessibility', desc: 'Convenient access from major thoroughfares', icon: '🚗' },
              { title: 'On-Site Parking', desc: 'Ample parking for tenants and visitors', icon: '🅿️' },
              { title: 'Professional Management', desc: 'Responsive property management team', icon: '🔑' }
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Details */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 px-6 text-center">
              <h3 className="text-3xl sm:text-4xl font-light mb-2">
                Property <span className="font-semibold">Information</span>
              </h3>
              <p className="text-blue-200">Professional office space in Palm Harbor</p>
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-900 pl-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Building Type</p>
                    <p className="text-xl font-semibold text-gray-800">3-Story Mid-Rise Office</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-xl font-semibold text-gray-800">North Pinellas County</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Market</p>
                    <p className="text-xl font-semibold text-gray-800">Palm Harbor</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-900 pl-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-xl font-semibold text-gray-800">33920 US Highway 19 N</p>
                    <p className="text-lg text-gray-600">Palm Harbor, FL 34684</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-6">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Efficiency</p>
                    <p className="text-xl font-semibold text-gray-800">Highly Efficient Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-light text-center mb-4 text-gray-800">
            Prime <span className="font-semibold text-blue-900">Location</span>
          </h3>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Strategically positioned in the heart of Palm Harbor
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-md">
                  📍
                </div>
                <div className="ml-6">
                  <p className="font-semibold text-xl text-gray-800 mb-2">Address</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    33920 US Highway 19 North<br/>
                    Palm Harbor, FL 34684
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-md">
                  🚗
                </div>
                <div className="ml-6">
                  <p className="font-semibold text-xl text-gray-800 mb-2">Highway Access</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Direct access to US Highway 19, one of the area&apos;s main thoroughfares
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-md">
                  🏙️
                </div>
                <div className="ml-6">
                  <p className="font-semibold text-xl text-gray-800 mb-2">Market Position</p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Located in the heart of North Pinellas County&apos;s business corridor
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://www.google.com/maps/place/33920+US+Hwy+19+N,+Palm+Harbor,+FL+34684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl overflow-hidden h-[500px] shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d-82.72!3d28.085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA1JzA2LjAiTiA4MsKwNDMnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-5xl font-light mb-6">
            Ready to Lease <span className="font-semibold">Office Space</span>?
          </h3>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Contact us today to learn more about available suites and schedule a tour of Harbor Park Office Center
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:7277716000"
              className="bg-white hover:bg-gray-100 text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl"
            >
              Contact Leasing
            </a>
            <a 
              href="#location"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-10 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-light text-white mb-2">
            HARBOR PARK <span className="font-semibold">OFFICE CENTER</span>
          </h2>
          <p className="text-gray-400 mb-6">Professional Office Space in Palm Harbor, Florida</p>
          <div className="text-sm">
            <p>33920 US Highway 19 North, Palm Harbor, FL 34684</p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">© 2025 Harbor Park Office Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}



