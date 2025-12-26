# AI Onboarding - Stephen's Local Sites

## Project Overview
**Name:** Stephen's Local Sites  
**Purpose:** Portfolio/marketing website for Stephen Newman's local business web development and marketing services based in Palm Harbor, Florida.

## Tech Stack
- **Framework:** Next.js 15.5.4 (with Turbopack)
- **UI Library:** React 19.1
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel
- **Fonts:** Geist Sans & Geist Mono (via next/font)

## Project Structure
```
/app
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout with metadata
├── globals.css           # Global styles
├── blog/                 # Blog section
│   ├── page.tsx
│   └── customer-experience/
├── showcase/             # Portfolio showcase
│   └── page.tsx
├── [business-pages]/     # Individual business showcase sites
│   ├── allawayhaulaway/
│   ├── barlowsquicklube/
│   ├── beautybythebeast/
│   ├── cabanapools/
│   ├── elwarshauto/
│   ├── harborparkoffice/
│   ├── palmharborplaza/
│   ├── rapidresponsemechanic/
│   └── wilsonstire/
├── [service-pages]/      # Service category landing pages
│   ├── auto-service/
│   ├── junk-removal/
│   ├── landscaping/
│   ├── mobile-mechanic/
│   ├── office-space/
│   ├── pool-cleaning/
│   ├── quick-lube/
│   ├── plaza/
│   └── tire-service/
/public
├── images/               # Static images
```

## Main Features
1. **Landing Page** - Hero section with problem/solution messaging, services overview, testimonials
2. **Business Showcases** - Individual pages for client businesses
3. **Service Pages** - Category-specific landing pages (auto service, pool cleaning, etc.)
4. **Blog** - Content marketing section
5. **Contact Integration** - Calendly booking, phone number for calls/texts
6. **Analytics** - Vercel Analytics + custom tracking script

## Running the Project
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development URLs
- **Local:** http://localhost:3000
- **Production:** Deployed on Vercel

## Key Contact Points
- Phone: (617) 347-2721
- Calendly: https://calendly.com/stephen-krezzo/connect-with-stephen-30-mins

---

## Deployment Log

### December 26, 2025
- **Newman Properties LLC - Supabase Integration** - Connected to v7-form-builder project (Lasterday org)
  - Created `newman_leads` table (namespaced, 100% separate from form builder tables)
  - Added SUPABASE_URL and SUPABASE_ANON_KEY env vars to Vercel
  - RLS enabled with public insert policy for contact form submissions
  - View leads at: https://supabase.com/dashboard/project/xsncgdnctnbzvokmxlex/editor/29855
- **Newman Properties LLC - NEW PROJECT** - Created separate Next.js project at `/Users/stephennewman/newmanpropertiesllc`
  - Digital real estate platform for commercial property lead generation
  - 3 plaza subdomains: Palm Harbor Plaza, Coral Landings, Highland Lakes
  - Multi-step inquiry form with lead scoring (0-100) and priority-based scheduling
  - Resend email integration + Supabase lead storage
  - Deployed to Vercel: https://newmanpropertiesllc.vercel.app
  - GitHub: https://github.com/stephennewman/newmanpropertiesllc
  - **Next steps:** Add custom domain `newmanpropertiesllc.com` + wildcard `*.newmanpropertiesllc.com` in Vercel, add RESEND_API_KEY env var

### November 30, 2025
- **Palm Harbor Plaza Update** - Synced local with live version, added contact form with Resend email notifications to stephen@krezzo.com, created `/api/contact` route, removed broken analytics script from layout.tsx
- **Initial AI Onboarding** - Created AI_Onboarding.md document, installed npm dependencies (54 packages)

---

## Current Analysis

### Problems (Stack Ranked, 0-100)
*To be updated after each deployment*

### Opportunities (Stack Ranked, 0-100)
*To be updated after each deployment*

