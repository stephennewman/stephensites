import Image from "next/image";

export default function BlogIndex() {
  const blogPosts = [
    {
      id: 'customer-experience',
      title: 'Look at Your Business Through the Eyes of Your Customer',
      excerpt: 'Let\'s be real for a second. Most of us running a business here in Palm Harbor, FL get caught up in our own world. We\'ve got our way of doing things, our systems, our opinions on what\'s right and wrong...',
      date: 'October 6, 2025',
      author: 'Stephen Newman',
      readTime: '5 min read',
      slug: '/blog/customer-experience'
    }
    // Add more blog posts here as you create them
  ];

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
              href="/blog"
              className="text-cyan-400 font-bold text-sm uppercase tracking-wider transition-colors"
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

      {/* Blog Header */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-none tracking-tighter animate-[fadeIn_0.8s_ease-out]">
            BLOG <span className="text-cyan-400">POSTS</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto font-bold leading-relaxed animate-[fadeIn_1s_ease-out]">
            Insights, strategies, and tips for local businesses in Palm Harbor, FL
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <a
                key={post.id}
                href={post.slug}
                className="group relative animate-[fadeIn_0.6s_ease-out]"
                style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards'}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-cyan-600/10 rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-800 hover:border-cyan-400/60 transition-all duration-300 transform group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/20 h-full">
                  <div className="text-cyan-400 font-black text-sm uppercase tracking-wider mb-4">
                    {post.date}
                  </div>
                  
                  <h2 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="font-bold">By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="mt-4 text-cyan-400 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Read More →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Empty State for when no posts */}
          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-3xl font-black text-white mb-4">No Posts Yet</h3>
              <p className="text-xl text-gray-400">Check back soon for insights and strategies!</p>
            </div>
          )}
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
