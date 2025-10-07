import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black" style={{fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif'}}>
      {/* Header */}
      <header className="py-6 px-4 border-b-2 border-cyan-400 backdrop-blur-sm bg-black/50 sticky top-0 z-50 animate-[slideInLeft_0.5s_ease-out]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-black text-white tracking-tight hover:text-cyan-400 transition-colors cursor-pointer">
            STEPHEN<span className="text-cyan-400 animate-pulse">&apos;</span>S <span className="text-cyan-400">LOCAL</span> SITES
          </a>
          <div className="flex items-center gap-6">
            <a 
              href="/blog/customer-experience"
              className="text-white hover:text-cyan-400 font-bold text-sm uppercase tracking-wider transition-colors"
            >
              Blog
            </a>
            <a 
              href="https://calendly.com/stephen-krezzo/connect-with-stephen-30-mins"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 font-black text-sm uppercase tracking-wider transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50 active:scale-95"
            >
              Let's Meet
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/3 rounded-full blur-3xl animate-[floatSlow_8s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 animate-[wiggle_1s_ease-in-out_infinite]">
            <div className="bg-cyan-400 text-black px-8 py-3 font-black text-lg uppercase tracking-widest transform -rotate-2 shadow-2xl border-2 border-cyan-300 hover:rotate-2 transition-transform">
              SITES, MARKETING & MORE
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-none tracking-tighter animate-[fadeIn_0.8s_ease-out]" style={{textShadow: '8px 8px 0px rgba(34, 211, 238, 0.3)'}}>
            TAKE YOUR BUSINESS <span className="inline-block hover:scale-110 transition-transform">
              <span className="text-cyan-400">TO THE NEXT LEVEL</span>
            </span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto font-bold leading-relaxed animate-[fadeIn_1s_ease-out]">
            Based in Palm Harbor, Florida, I help local businesses take their online presence to the next level, without breaking the bank.
          </p>

          <div className="flex justify-center animate-[fadeIn_1.2s_ease-out]">
            <a 
              href="tel:6173472721"
              className="bg-white hover:bg-gray-200 text-black px-12 py-5 font-black text-xl uppercase tracking-wider transition-all shadow-2xl border-2 border-white transform hover:scale-110 hover:rotate-1 active:scale-95"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </section>


      {/* The Problem */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-900/20 via-gray-900 to-red-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight">
              THE <span className="text-red-400">PROBLEM</span>
            </h2>
          </div>

          {/* Main Problem */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 p-12 rounded-3xl border-4 border-red-600/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 animate-pulse"></div>
              <div className="relative z-10 text-center">
                <div className="text-red-400 font-black text-lg uppercase tracking-widest mb-6">🚨 THE BIGGEST PAIN</div>
                <h3 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight">
                  You're <span className="text-red-400">MISSING OUT</span><br/>
                  Every Single Day
                </h3>
                <p className="text-2xl text-gray-200 font-bold max-w-4xl mx-auto leading-relaxed">
                  While your competitors dominate the digital world, you're struggling online. 
                  <span className="text-red-300"> Every day without a professional website and marketing means you're missing out on customers, credibility, and cash.</span>
                </p>
                
                {/* What They're Missing Out On */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center group">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
                    <div className="text-3xl font-black text-red-400 uppercase tracking-wider">
                      MONEY
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
                    <div className="text-3xl font-black text-red-400 uppercase tracking-wider">
                      CUSTOMERS
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <div className="text-3xl font-black text-red-400 uppercase tracking-wider">
                      OPPORTUNITIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Problems */}
          <div className="max-w-6xl mx-auto">
            <h4 className="text-3xl font-black text-white text-center mb-12">
              Here's <span className="text-red-400">WHY</span> you're stuck:
            </h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sub-Problem 1 */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border-2 border-red-900/50 hover:border-red-800 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-4">❌ TOO MUCH EFFORT</div>
                <div className="text-2xl font-black text-gray-300 group-hover:text-white transition-colors mb-4">
                  "I don't have time to build a website"
                </div>
                <div className="text-gray-400 text-lg">
                  Complex platforms, confusing interfaces, endless tutorials...
                </div>
              </div>

              {/* Sub-Problem 2 */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border-2 border-red-900/50 hover:border-red-800 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-4">❌ TOO MANY UPDATES</div>
                <div className="text-2xl font-black text-gray-300 group-hover:text-white transition-colors mb-4">
                  "I can't keep up with changes"
                </div>
                <div className="text-gray-400 text-lg">
                  Constant updates, broken plugins, security issues...
                </div>
              </div>

              {/* Sub-Problem 3 */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border-2 border-red-900/50 hover:border-red-800 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-4">❌ TOO TECHNICAL</div>
                <div className="text-2xl font-black text-gray-300 group-hover:text-white transition-colors mb-4">
                  "I'm not a tech person"
                </div>
                <div className="text-gray-400 text-lg">
                  Coding, hosting, domains, SSL certificates...
                </div>
              </div>

              {/* Sub-Problem 4 */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border-2 border-red-900/50 hover:border-red-800 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-4">❌ NO RESOURCES</div>
                <div className="text-2xl font-black text-gray-300 group-hover:text-white transition-colors mb-4">
                  "I can't afford a developer"
                </div>
                <div className="text-gray-400 text-lg">
                  Expensive agencies, long contracts, hidden costs...
                </div>
              </div>

              {/* Sub-Problem 5 */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border-2 border-red-900/50 hover:border-red-800 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-4">❌ NO RESULTS</div>
                <div className="text-2xl font-black text-gray-300 group-hover:text-white transition-colors mb-4">
                  "My site doesn't bring customers"
                </div>
                <div className="text-gray-400 text-lg">
                  Generic templates, poor SEO, no mobile optimization...
                </div>
              </div>

              {/* Sub-Problem 6 */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border-2 border-red-900/50 hover:border-red-800 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-4">❌ LOST OPPORTUNITIES</div>
                <div className="text-2xl font-black text-gray-300 group-hover:text-white transition-colors mb-4">
                  "I'm losing to competitors"
                </div>
                <div className="text-gray-400 text-lg">
                  No online presence, poor credibility, missed sales...
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="text-3xl font-black text-white mb-4">
                Sound familiar? <span className="text-red-400">You're not alone.</span>
              </div>
              <div className="text-xl text-gray-300">
                But here's the thing... <span className="text-red-300 font-bold">it doesn't have to be this way.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-4 bg-gradient-to-br from-cyan-900/30 via-black to-cyan-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-cyan-900/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight">
              THE <span className="text-cyan-400">SOLUTION</span>
            </h2>
            
            {/* Main Solution */}
            <div className="bg-gradient-to-r from-cyan-400/20 to-cyan-600/20 p-12 rounded-3xl border-4 border-cyan-400/50 relative overflow-hidden mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-cyan-600/10 animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-cyan-400 font-black text-lg uppercase tracking-widest mb-6">✅ THE SIMPLE ANSWER</div>
                <h3 className="text-4xl sm:text-6xl font-black text-white mb-8 leading-tight">
                  Partner with a <span className="text-cyan-400">low-cost local expert</span><br/>
                  who adds value in multiple ways
                </h3>
                <p className="text-2xl text-gray-200 font-bold max-w-4xl mx-auto leading-relaxed">
                  Website creation, digital marketing, strategic collaboration, and ongoing support - all from someone who understands your local market and won't break the bank.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">💰 AFFORDABLE EXPERTISE</div>
                <div className="text-xl font-black text-white mb-3">
                  Low-cost, high-value partnership
                </div>
                <div className="text-gray-300 text-lg">
                  Get professional digital services without the agency price tag
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">🌍 LOCAL UNDERSTANDING</div>
                <div className="text-xl font-black text-white mb-3">
                  Knows your market
                </div>
                <div className="text-gray-300 text-lg">
                  Someone who understands local customers, competitors, and opportunities
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">🎯 COMPREHENSIVE SUPPORT</div>
                <div className="text-xl font-black text-white mb-3">
                  Multiple services, one partner
                </div>
                <div className="text-gray-300 text-lg">
                  Websites, marketing, strategy, collaboration - all from one trusted source
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">🤝 TRUE PARTNERSHIP</div>
                <div className="text-xl font-black text-white mb-3">
                  Invested in your success
                </div>
                <div className="text-gray-300 text-lg">
                  Not just a vendor - a partner who cares about your business growth
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">📈 STRATEGIC COLLABORATION</div>
                <div className="text-xl font-black text-white mb-3">
                  Think beyond the website
                </div>
                <div className="text-gray-300 text-lg">
                  Work together on digital strategy, marketing plans, and business growth
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">🔄 ONGOING RELATIONSHIP</div>
                <div className="text-xl font-black text-white mb-3">
                  Long-term support
                </div>
                <div className="text-gray-300 text-lg">
                  Continuous updates, improvements, and digital marketing assistance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-24 px-4 bg-gradient-to-br from-cyan-900/20 via-black to-cyan-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-cyan-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight">
              MY <span className="text-cyan-400">APPROACH</span>
            </h2>
            <p className="text-2xl text-gray-300 font-bold max-w-4xl mx-auto">
              Build fast, learn-iterate-optimize, find quick wins that don't cost money
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Solution 1 */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">✅ BUILD FAST</div>
                <div className="text-2xl font-black text-white mb-4">
                  Get online in days, not months
                </div>
                <div className="text-cyan-300 text-lg">
                  Modern tools, proven templates, rapid deployment
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">✅ LEARN-ITERATE-OPTIMIZE</div>
                <div className="text-2xl font-black text-white mb-4">
                  Continuous improvement
                </div>
                <div className="text-cyan-300 text-lg">
                  Test, measure, improve, repeat
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">✅ QUICK WINS</div>
                <div className="text-2xl font-black text-white mb-4">
                  Low-cost, high-impact changes
                </div>
                <div className="text-cyan-300 text-lg">
                  SEO, speed, mobile, content optimization
                </div>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">✅ MANAGED SERVICE</div>
                <div className="text-2xl font-black text-white mb-4">
                  I handle everything
                </div>
                <div className="text-cyan-300 text-lg">
                  Updates, security, backups, maintenance
                </div>
              </div>
            </div>

            {/* Solution 5 */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">✅ CUSTOM BRANDING</div>
                <div className="text-2xl font-black text-white mb-4">
                  Stand out from competitors
                </div>
                <div className="text-cyan-300 text-lg">
                  Unique design, colors, fonts, messaging
                </div>
              </div>
            </div>

            {/* Solution 6 */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">✅ PROVEN RESULTS</div>
                <div className="text-2xl font-black text-white mb-4">
                  Real business impact
                </div>
                <div className="text-cyan-300 text-lg">
                  More leads, more sales, more credibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-cyan-400/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight">
              YOUR <span className="text-red-400">SITUATION</span> <span className="text-gray-600">VS</span> <span className="text-cyan-400">MY STRATEGY</span>
            </h2>
            <p className="text-2xl text-gray-400 font-bold max-w-3xl mx-auto">
              Real problems. Real solutions. Real results.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Scenario 1: No Appointments */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">❌ YOUR SITUATION</div>
                <div className="text-2xl font-black text-gray-600 group-hover:text-gray-500 transition-colors mb-3">
                  Not enough appointments
                </div>
                <div className="text-gray-700 text-lg">Struggling to fill your calendar with quality leads</div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-3">✅ MY STRATEGY</div>
                  <div className="text-2xl font-black text-white mb-3">
                    Improve website messaging + SEO + conversion points
                  </div>
                  <div className="text-cyan-300 text-lg">Better messaging that converts visitors into appointments</div>
                </div>
              </div>
            </div>

            {/* Scenario 2: No Website */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">❌ YOUR SITUATION</div>
                <div className="text-2xl font-black text-gray-600 group-hover:text-gray-500 transition-colors mb-3">
                  No website at all
                </div>
                <div className="text-gray-700 text-lg">Just relying on word of mouth and social media</div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-3">✅ MY STRATEGY</div>
                  <div className="text-2xl font-black text-white mb-3">
                    Quickly build mobile-friendly site + get ranked on page 1
                  </div>
                  <div className="text-cyan-300 text-lg">Fast deployment with immediate SEO impact</div>
                </div>
              </div>
            </div>

            {/* Scenario 3: Outdated Site */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">❌ YOUR SITUATION</div>
                <div className="text-2xl font-black text-gray-600 group-hover:text-gray-500 transition-colors mb-3">
                  Old site never updated
                </div>
                <div className="text-gray-700 text-lg">Built years ago, information is stale and outdated</div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-3">✅ MY STRATEGY</div>
                  <div className="text-2xl font-black text-white mb-3">
                    Migrate site + manage everything for you
                  </div>
                  <div className="text-cyan-300 text-lg">Fresh content, regular updates, always current</div>
                </div>
              </div>
            </div>

            {/* Scenario 4: Generic Template */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">❌ YOUR SITUATION</div>
                <div className="text-2xl font-black text-gray-600 group-hover:text-gray-500 transition-colors mb-3">
                  Generic website template
                </div>
                <div className="text-gray-700 text-lg">Looks like every other business in your industry</div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-3">✅ MY STRATEGY</div>
                  <div className="text-2xl font-black text-white mb-3">
                    Custom build brand + design that speaks to your customers
                  </div>
                  <div className="text-cyan-300 text-lg">Unique identity that makes you memorable</div>
                </div>
              </div>
            </div>

            {/* Scenario 5: Losing to Competitors */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">❌ YOUR SITUATION</div>
                <div className="text-2xl font-black text-gray-600 group-hover:text-gray-500 transition-colors mb-3">
                  Losing customers to competitors
                </div>
                <div className="text-gray-700 text-lg">They're getting the business you should have</div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-3">✅ MY STRATEGY</div>
                  <div className="text-2xl font-black text-white mb-3">
                    Comprehensive competitive analysis + understand gaps
                  </div>
                  <div className="text-cyan-300 text-lg">Find opportunities they're missing</div>
                </div>
              </div>
            </div>

            {/* Scenario 6: Poor Reviews */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">❌ YOUR SITUATION</div>
                <div className="text-2xl font-black text-gray-600 group-hover:text-gray-500 transition-colors mb-3">
                  Poor reviews turning customers away
                </div>
                <div className="text-gray-700 text-lg">Bad online reputation hurting your business</div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-3">✅ MY STRATEGY</div>
                  <div className="text-2xl font-black text-white mb-3">
                    Comprehensive review strategy for 5-star feedback
                  </div>
                  <div className="text-cyan-300 text-lg">Turn satisfied customers into advocates</div>
                </div>
              </div>
            </div>

            {/* Scenario 7: Low Conversions */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">❌ YOUR SITUATION</div>
                <div className="text-2xl font-black text-gray-600 group-hover:text-gray-500 transition-colors mb-3">
                  Minimal on-site conversion
                </div>
                <div className="text-gray-700 text-lg">Visitors come but don't take action</div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-3">✅ MY STRATEGY</div>
                  <div className="text-2xl font-black text-white mb-3">
                    Compelling offers based on customer journey
                  </div>
                  <div className="text-cyan-300 text-lg">Right message at the right time</div>
                </div>
              </div>
            </div>

            {/* Scenario 8: Can't Be Found */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-red-900 transition-all duration-300 group">
                <div className="text-red-400 font-black text-sm uppercase tracking-wider mb-3">❌ YOUR SITUATION</div>
                <div className="text-2xl font-black text-gray-600 group-hover:text-gray-500 transition-colors mb-3">
                  People can't find you online
                </div>
                <div className="text-gray-700 text-lg">Invisible when customers search for your services</div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-2xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 hover:scale-105 animate-[glow_3s_ease-in-out_infinite]">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-3">✅ MY STRATEGY</div>
                  <div className="text-2xl font-black text-white mb-3">
                    Keyword research + build pages to rank locally
                  </div>
                  <div className="text-cyan-300 text-lg">Show up when customers are looking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section id="services" className="py-24 px-4 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[gradient_3s_ease_infinite]" style={{backgroundSize: '200% 200%'}}></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight hover:text-cyan-400 transition-colors duration-500">
              WHAT I <span className="text-cyan-400">DO</span>
            </h2>
            <p className="text-2xl text-gray-400 font-bold max-w-3xl mx-auto animate-[fadeIn_1s_ease-out]">
              Now that you see the results, here's how I make it happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Website Development */}
            <div className="space-y-6">
              <div className="group relative animate-[fadeIn_0.6s_ease-out]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💻</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Website Development</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Modern, fast, mobile-responsive sites that convert visitors into customers</p>
                </div>
              </div>
            </div>

            {/* Column 2: Marketing & Messaging */}
            <div className="space-y-6">
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.1s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Marketing</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">SEO, ads, email campaigns that work</p>
                </div>
              </div>
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.2s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">✍️</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Messaging</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Clear copy that converts visitors to customers</p>
                </div>
              </div>
            </div>

            {/* Column 3: Brand Design, Social Media, Operations */}
            <div className="space-y-6">
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.3s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🎨</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Brand Design</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Logos, colors, visual identity that pops</p>
                </div>
              </div>
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.4s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📱</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Social Media</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Content strategy and management</p>
                </div>
              </div>
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.5s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Operations</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Systems and automation to scale</p>
                </div>
              </div>
            </div>

            {/* Column 4: Pricing, Product Development, Custom Development, Business Strategy */}
            <div className="space-y-6">
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.6s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💰</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Pricing Strategy</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Value-based pricing that maximizes revenue</p>
                </div>
              </div>
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.7s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Product Development</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Build and launch digital products</p>
                </div>
              </div>
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.8s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💻</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Custom Development</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Tailored solutions for unique needs</p>
                </div>
              </div>
              <div className="group relative animate-[fadeIn_0.6s_ease-out]" style={{animationDelay: '0.9s', animationFillMode: 'backwards'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <div className="relative bg-black p-6 rounded-2xl border-2 border-gray-800 hover:border-cyan-400 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-400/20 transition-all duration-300 transform group-hover:-translate-y-3 hover:scale-105">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide">Business Strategy</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed text-sm">Planning and growth roadmaps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-[floatSlow_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-[floatSlow_8s_ease-in-out_infinite]" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight animate-[fadeIn_0.8s_ease-out]">
            LET US BUILD YOU<br/>
            SOMETHING <span className="text-cyan-400 inline-block hover:animate-bounce" style={{textShadow: '4px 4px 0px rgba(34, 211, 238, 0.3)'}}>AWESOME</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12 font-bold leading-relaxed max-w-2xl mx-auto animate-[fadeIn_1s_ease-out]">
            Got a project in mind? Need help with your digital presence? Let&apos;s talk about how I can help you grow.
          </p>
          
          <div className="bg-gray-900 p-12 rounded-3xl border-2 border-gray-800 shadow-xl mb-12 hover:border-cyan-400 transition-all duration-500 hover:shadow-cyan-400/20 animate-[glow_3s_ease-in-out_infinite]">
            <div className="flex items-center justify-center gap-4 group">
              <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">📱</span>
              <a href="tel:6173472721" className="text-3xl font-black text-cyan-400 hover:text-cyan-300 hover:tracking-wider transition-all">
                Call/Text (617) 347-2721
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://calendly.com/stephen-krezzo/connect-with-stephen-30-mins"
          target="_blank"
          rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-200 text-black px-12 py-6 font-black text-xl uppercase tracking-wider transition-all duration-300 shadow-2xl border-2 border-white transform hover:scale-110 hover:rotate-2 active:scale-95 flex items-center gap-3"
            >
              Book a Call
              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-cyan-900/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight">
              ABOUT <span className="text-cyan-400">STEPHEN</span>
            </h2>
            <p className="text-2xl text-gray-300 font-bold max-w-3xl mx-auto">
              The person behind the solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-cyan-400/10 to-black p-8 rounded-3xl border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/stephen_newman_local.jpeg"
                    alt="Stephen Newman"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio content */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <h3 className="text-3xl font-black text-white mb-6">
                  Hi, I'm <span className="text-cyan-400">Stephen</span>
                </h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I have been living in Palm Harbor since 2019 with my wife, three girls, and two dogs.
                  </p>
                  <p>
                    My career in marketing started in 2000 working for my dad on a restaurant delivery service company (think Uber Eats before smartphones and high-speed internet). That's where I learned the fundamental principles of serving customers, the importance of marketing and customer satisfaction, and delivering valuable goods and services at cost-effective prices.
                  </p>
                  <p>
                    In 2004 I moved to Boston for college and have been working in tech since 2009 across a variety of companies from start-ups to Fortune 500s. What I do ranges from website development and lead generation to messaging, positioning, sales enablement, product development, customer development, social media, events, digital reputation, and more, to name a few. I'm a true jack-of-all-trades, most of none :)
                  </p>
                  <p>
                    Recently, I've started engaging with local companies in my spare time, helping them build much better digital presences online. What I do is quickly build out a prototype site, and if they are interested, I migrate it to their name and manage them so they don't have to worry about it. In addition to sharing free words of wisdom, I identify opportunities and helping execute cost-effective marketing strategies that aren't a burden for the customer and provide nothing but upside.
                  </p>
                  <p>
                    At the end of the day, I like to work with smaller companies to either migrate off old company websites or create entirely new company websites and strategy, helping them establish a strong digital foundation for growth. I don't do this to get rich. I do this because it's fun to give back, and if I get a little extra spending money in the process, that's a win too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t-2 border-cyan-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h3 className="text-4xl font-black mb-4 tracking-tight hover:scale-105 transition-transform inline-block">
            STEPHEN<span className="text-cyan-400 animate-pulse">&apos;</span>S <span className="text-cyan-400">LOCAL</span> SITES
          </h3>
          <p className="text-xl text-gray-400 mb-8 font-bold">
            SITES, MARKETING, & MORE
          </p>
          <p className="text-sm text-gray-600 animate-[fadeIn_2s_ease-out]">© 2025 Stephen&apos;s Local Sites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
