export default function CustomerExperienceBlog() {
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

      {/* Blog Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Look at Your Business Through the Eyes of Your Customer
            </h1>
            
            <p className="text-cyan-400 italic mb-8 text-lg">
              October 6, 2025 by Stephen Newman
            </p>

            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-gray-300">
                Let's be real for a second. Most of us running a business here in Palm Harbor, FL get caught up in our own world. We've got our way of doing things, our systems, our opinions on what's right and wrong. And that's fine… until it's not. Because when you stop seeing things through your customer's eyes, that's when your business starts slipping.
              </p>

              <p className="text-xl leading-relaxed text-gray-300">
                If you want your business to stand out—whether you're a roofer, a landscaper, a local restaurant, or a marketing agency—you've got to understand the experience from your customer's perspective. That's where the real growth comes from.
              </p>

              <div className="border-t border-cyan-400/30 my-12"></div>

              <section>
                <h2 className="text-3xl font-black text-cyan-400 mb-6 tracking-tight">
                  Innovate on Behalf of the Customer
                </h2>
                
                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  There's a phrase I've always appreciated: "Innovate on behalf of the customer."
                </p>

                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  That doesn't mean you have to come up with some fancy new idea every week. For most local service businesses, it's about doing the basics really well. Show up when you say you will. Charge what you promised. Answer your phone. Follow through.
                </p>

                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  Those simple things still matter more than you might think. They build trust. They build consistency. And once you've got that foundation, you can start going above and beyond. That's what separates good from great.
                </p>

                <p className="text-xl leading-relaxed text-gray-300">
                  Because the truth is, customers don't just buy your service. They buy how you make them feel.
                </p>
              </section>

              <div className="border-t border-cyan-400/30 my-12"></div>

              <section>
                <h2 className="text-3xl font-black text-cyan-400 mb-6 tracking-tight">
                  People Change, and So Do Their Expectations
                </h2>
                
                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  Your customers aren't the same today as they were a year ago. Their needs, their expectations, even how they find you online—it all changes. Maybe last year everyone was on Facebook, and now they're finding you through Google Maps or Instagram.
                </p>

                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  If you're not paying attention to those shifts, someone else is. Loyalty is earned, but it's fragile. People will switch in a heartbeat if they find a business that feels easier, faster, or more personal to work with.
                </p>

                <p className="text-xl leading-relaxed text-gray-300">
                  So your job as a business owner isn't just to sell a product or service. It's to stay tuned in to what your customers actually want—sometimes before they even say it out loud.
                </p>
              </section>

              <div className="border-t border-cyan-400/30 my-12"></div>

              <section>
                <h2 className="text-3xl font-black text-cyan-400 mb-6 tracking-tight">
                  Walk Through Your Own Customer Experience
                </h2>
                
                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  If you really want to improve, go through your own process like you've never heard of your business before. Google yourself. Check out your own website. Can people easily find your hours, prices, reviews, or how to book an appointment?
                </p>

                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  Every small detail matters.
                </p>

                <ul className="list-disc list-inside space-y-3 mb-6 text-xl text-gray-300">
                  <li>Can a customer see what they paid for last time?</li>
                  <li>Do they get reminders or thank-yous?</li>
                  <li>Are your promotions or referral offers easy to find?</li>
                  <li>Do you respond to reviews, good or bad?</li>
                </ul>

                <p className="text-xl leading-relaxed text-gray-300">
                  All those small touchpoints add up. They create the full customer experience—what people actually remember about doing business with you.
                </p>
              </section>

              <div className="border-t border-cyan-400/30 my-12"></div>

              <section>
                <h2 className="text-3xl font-black text-cyan-400 mb-6 tracking-tight">
                  Manage Your Reputation Before It Manages You
                </h2>
                
                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  Let's face it, bad reviews hang around forever. You can't hide from them, but you can own them. Respond honestly, fix what went wrong, and show people you care.
                </p>

                <p className="text-xl leading-relaxed text-gray-300">
                  And if you've got happy customers (which you do), make it easy for them to share that experience. Ask for reviews. Ask for referrals. That's the stuff that keeps your reputation strong online and offline.
                </p>
              </section>

              <div className="border-t border-cyan-400/30 my-12"></div>

              <section>
                <h2 className="text-3xl font-black text-cyan-400 mb-6 tracking-tight">
                  Winning in 2025 and Beyond
                </h2>
                
                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  At the end of the day, success in 2025 is about making it easy to work with you. No friction, no confusion.
                </p>

                <p className="text-xl leading-relaxed text-gray-300 mb-6">
                  Make it simple for people to find you, book you, and trust you. Give them what they need before they have to ask. And if you can do all that with a local, personal touch—one that shows you actually care about your customers—you'll build a business that lasts.
                </p>

                <p className="text-xl leading-relaxed font-bold text-cyan-400">
                  Because while everyone else is focused on ads and algorithms, you'll be focused on people.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

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
