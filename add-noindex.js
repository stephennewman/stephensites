const fs = require('fs');
const path = require('path');

// List of customer pages that should have noindex
const customerPages = [
  'app/auto-service/page.tsx',
  'app/barlowsquicklube/page.tsx',
  'app/beautybythebeast/page.tsx',
  'app/cabanapools/page.tsx',
  'app/elwarshauto/page.tsx',
  'app/harborparkoffice/page.tsx',
  'app/junk-removal/page.tsx',
  'app/landscaping/page.tsx',
  'app/mobile-mechanic/page.tsx',
  'app/office-space/page.tsx',
  'app/palmharborplaza/page.tsx',
  'app/plaza/page.tsx',
  'app/pool-cleaning/page.tsx',
  'app/quick-lube/page.tsx',
  'app/rapidresponsemechanic/page.tsx',
  'app/showcase/page.tsx',
  'app/tire-service/page.tsx',
  'app/wilsonstire/page.tsx'
];

const noindexMetadata = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

`;

customerPages.forEach(pagePath => {
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if metadata is already added
    if (!content.includes('export const metadata')) {
      // Add metadata at the beginning
      content = noindexMetadata + content;
      fs.writeFileSync(pagePath, content);
      console.log(`✅ Added noindex to ${pagePath}`);
    } else {
      console.log(`⏭️  Skipped ${pagePath} - already has metadata`);
    }
  } else {
    console.log(`❌ File not found: ${pagePath}`);
  }
});

console.log('🎉 Finished adding noindex metadata to customer pages');
