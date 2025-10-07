export default function Showcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Business Site Showcase
        </h1>
        <p className="text-lg sm:text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
          Professional website templates for local businesses
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <a 
            href="/barlowsquicklube"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">🛢️</div>
            <h2 className="text-2xl font-bold mb-2">Barlow&apos;s Quick Lube</h2>
            <p className="text-blue-200">Oil Change Service • Palm Harbor, FL</p>
            <div className="mt-4 text-yellow-400 text-sm">⭐ 4.7 Rating • 174 Reviews</div>
          </a>

          <a 
            href="/wilsonstire"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="text-2xl font-bold mb-2">Wilson&apos;s Tire & Auto</h2>
            <p className="text-blue-200">Full Service Auto Repair • Oldsmar, FL</p>
            <div className="mt-4 text-yellow-400 text-sm">⭐ 4.7 Rating • 274+ Reviews</div>
          </a>

          <a 
            href="/rapidresponsemechanic"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold mb-2">Rapid Response Mobile</h2>
            <p className="text-blue-200">Mobile Mechanic • Clearwater, FL</p>
            <div className="mt-4 text-yellow-400 text-sm">⭐ 4.8 Rating • 149+ Reviews</div>
          </a>

          <a 
            href="/harborparkoffice"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-2xl font-bold mb-2">Harbor Park Office</h2>
            <p className="text-blue-200">Professional Office Space • Palm Harbor, FL</p>
            <div className="mt-4 text-gray-300 text-sm">3-Story Mid-Rise Building</div>
          </a>

          <a 
            href="/palmharborplaza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">🛍️</div>
            <h2 className="text-2xl font-bold mb-2">Palm Harbor Plaza</h2>
            <p className="text-blue-200">Shopping Center • Palm Harbor, FL</p>
            <div className="mt-4 text-teal-300 text-sm">18 Stores • AMC Theater</div>
          </a>

          <a 
            href="/cabanapools"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">🏊</div>
            <h2 className="text-2xl font-bold mb-2">Cabana Pool Services</h2>
            <p className="text-blue-200">Pool Maintenance & Repair • Palm Harbor, FL</p>
            <div className="mt-4 text-cyan-300 text-sm">⭐ 5.0 Rating • 66 Reviews</div>
          </a>

          <a 
            href="/beautybythebeast"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">🌱</div>
            <h2 className="text-2xl font-bold mb-2">Beauty by the Beast</h2>
            <p className="text-blue-200">Lawn Care & Landscaping • Dunedin, FL</p>
            <div className="mt-4 text-green-300 text-sm">Commercial & Residential</div>
          </a>

          <a 
            href="/elwarshauto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">⚙️</div>
            <h2 className="text-2xl font-bold mb-2">El Warsha Auto Repair</h2>
            <p className="text-blue-200">Auto Repair Shop • Palm Harbor, FL</p>
            <div className="mt-4 text-orange-400 text-sm">⭐ 5.0 Rating • All Makes & Models</div>
          </a>

          <a 
            href="/allawayhaulaway"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 p-8 rounded-xl transition-all hover:scale-105 block"
          >
            <div className="text-4xl mb-4">🚛</div>
            <h2 className="text-2xl font-bold mb-2">All Away Haul Away</h2>
            <p className="text-blue-200">Junk Removal Service • Palm Harbor, FL</p>
            <div className="mt-4 text-orange-400 text-sm">⭐ 5.0 Rating • Open 24 Hours</div>
          </a>
        </div>
        
        <p className="mt-12 text-sm text-blue-300">
          More business sites coming soon...
        </p>
      </div>
    </div>
  );
}

