# CLAUDE.md - Clear Smile London Development Guide

## Project Overview
**Domain:** clear-smile-london.co.uk  
**Purpose:** AI-powered lead generation site for Sarah Holmes' Invisalign practice  
**Target:** Capture leads searching for Invisalign pricing in London  
**Conversion Goal:** Drive qualified consultations to Carnaby Street Dental

## Business Context
- Sarah Holmes: 25+ years experience, Invisalign provider since 2006
- Practice: Carnaby Street Dental (multiple London locations)
- Competition: High for Invisalign keywords
- Opportunity: Price-focused keywords showing 900% growth

## Technical Stack
- **Framework:** Next.js (static export for GitHub Pages)
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages
- **Domain:** 123-reg DNS → GitHub Pages
- **Forms:** Netlify Forms or Formspree
- **Analytics:** Google Analytics + Plausible

## Project Structure
```
clear-smile-london/
├── .gitignore
├── package.json
├── next.config.js
├── tailwind.config.js
├── README.md
├── CLAUDE.md (this file)
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── pages/
│   │   ├── index.js                 # Homepage
│   │   ├── invisalign-price.js      # Main landing page
│   │   ├── invisalign-vs-braces.js  # Comparison page
│   │   ├── cheap-invisalign.js      # Budget-focused page
│   │   ├── consultation.js          # Booking page
│   │   └── areas/
│   │       ├── soho.js
│   │       ├── covent-garden.js
│   │       └── west-end.js
│   ├── components/
│   │   ├── Layout.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── CostCalculator.js
│   │   ├── LeadForm.js
│   │   ├── PriceComparison.js
│   │   └── TestimonialSection.js
│   ├── data/
│   │   ├── keywords.js
│   │   ├── pricing.js
│   │   └── testimonials.js
│   └── styles/
│       └── globals.css
└── docs/
    └── keyword-research.csv
```

## Priority Keywords (from research data)
### High-Priority (Target First)
- `invisalign price` (50,000 monthly searches)
- `invisalign price london` (derived)
- `invisalign monthly cost` (900% YoY growth)
- `cheap invisalign` (500 searches)
- `invisalign vs braces` (derived)
- `invisalign consultation near me` (50 searches, low competition)

### Secondary Keywords
- `clear aligners cost`
- `invisalign treatment cost`
- `invisalign deals`
- `invisible aligners price`
- `teeth straightening cost london`

### Local SEO Keywords
- `invisalign soho london`
- `invisalign carnaby street`
- `invisalign west end london`
- `dentist invisalign near me`

## Page Strategy & Content

### Homepage (`/`)
**Primary Keyword:** "invisalign price london"
**Goal:** Capture broad search traffic, direct to specific pages
**Components:**
- Hero section with cost calculator
- Price comparison table
- Link to Sarah's practice
- Local testimonials
- Trust signals (25+ years experience)

### Invisalign Price Page (`/invisalign-price`)
**Primary Keywords:** "invisalign price", "invisalign monthly cost"
**Goal:** Convert price-conscious searchers
**Content Strategy:**
- Transparent pricing breakdown
- Payment plan calculator
- "What affects Invisalign cost in London"
- Sarah's practice pricing (with consultation CTA)
- Financing options

### Comparison Page (`/invisalign-vs-braces`)
**Primary Keywords:** "invisalign better than braces", "invisalign vs braces cost"
**Goal:** Educate and convert people considering options
**Content Strategy:**
- Side-by-side comparison charts
- Treatment time differences
- Comfort and convenience factors
- Professional appearance benefits

### Budget Page (`/cheap-invisalign`)
**Primary Keywords:** "cheap invisalign", "invisalign deals", "invisalign discounts"
**Goal:** Capture budget-conscious searchers
**Content Strategy:**
- "How to get affordable Invisalign in London"
- Insurance and financing options
- Sarah's practice payment plans
- Value vs cheap alternatives warning

### Consultation Page (`/consultation`)
**Primary Keywords:** "invisalign consultation near me", "free invisalign assessment"
**Goal:** Direct conversion to Sarah's practice
**Content Strategy:**
- What to expect at consultation
- Sarah's credentials and experience
- Preparation checklist
- Direct booking integration

### Local Pages (`/areas/...`)
**Primary Keywords:** Location-specific variations
**Goal:** Capture "near me" searches
**Content Strategy:**
- Location-specific information
- Proximity to Sarah's practices
- Local landmarks and transport
- Area-specific testimonials

## Lead Capture Strategy

### Cost Calculator Component
- Interactive pricing estimate
- Captures: email, phone, treatment interest
- Provides instant estimate range
- Follows up with consultation offer

### Lead Forms (on every page)
- "Get Accurate Quote" CTA
- Minimal fields: name, email, phone
- Hidden fields: source page, keyword
- Auto-response with Sarah's contact info

### Chat Widget (future)
- AI-powered initial qualification
- Captures contact info
- Routes to human for complex questions
- Available during UK business hours

## Technical Requirements

### Next.js Configuration
```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/clear-smile-london' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/clear-smile-london' : '',
}
```

### Tailwind Setup
- Use CDN version for GitHub Pages compatibility
- Focus on mobile-first responsive design
- Professional medical/dental color scheme
- High contrast for accessibility

### SEO Requirements
- Dynamic meta titles/descriptions per page
- Structured data (LocalBusiness, MedicalBusiness)
- XML sitemap generation
- Robots.txt optimization
- Image alt tags for accessibility

### Performance Requirements
- Static generation for fast loading
- Image optimization
- Minimal JavaScript for GitHub Pages
- Critical CSS inlining
- Lazy loading for non-critical content

## Content Guidelines

### Tone & Voice
- Professional but approachable
- Trustworthy and authoritative
- Clear, jargon-free explanations
- Focus on benefits over features

### Legal Compliance
- No medical advice claims
- Include appropriate disclaimers
- GDPR-compliant data collection
- Clear privacy policy
- Trademark attribution (Invisalign®)

### Trust Building Elements
- Sarah's credentials prominently displayed
- Patient testimonials (with permission)
- Before/after photos (if available)
- Awards and certifications
- Years of experience emphasis

## Development Phases

### Phase 1: MVP (Week 1-2)
- Basic Next.js setup
- Homepage with cost calculator
- Simple lead capture form
- Deploy to GitHub Pages

### Phase 2: Core Pages (Week 3-4)
- All main landing pages
- SEO optimization
- Form integration
- Analytics setup

### Phase 3: Enhancement (Week 5-8)
- Local area pages
- Advanced lead capture
- A/B testing setup
- Performance optimization

### Phase 4: AI Integration (Month 2+)
- OpenAI content generation
- Dynamic pricing updates
- Automated lead scoring
- Chat bot integration

## Integration Points

### Sarah's Practice Integration
- Direct phone: +442077346421
- Email: enquiries@carnabystreetdentist.co.uk
- Booking system integration (if available)
- Practice website: carnabystreetdentist.co.uk

### Analytics & Tracking
- Google Analytics 4
- Google Search Console
- Lead source tracking
- Conversion funnel analysis
- Keyword ranking monitoring

### Lead Management
- Form submissions to email
- CRM integration (future)
- Lead scoring system
- Follow-up automation

## Success Metrics

### Primary KPIs
- Organic search traffic growth
- Lead generation volume
- Cost per lead (SEO vs paid)
- Lead-to-consultation conversion rate

### Technical KPIs
- Page load speed (Core Web Vitals)
- Mobile usability score
- Search Console impressions/clicks
- Keyword ranking improvements

## Maintenance & Updates

### Weekly Tasks
- Monitor keyword rankings
- Review lead quality
- Update pricing data
- Check site performance

### Monthly Tasks
- Content updates based on performance
- SEO optimization improvements
- Competitor analysis
- Lead source analysis

## Getting Started Commands

```bash
# Initial setup
npx create-next-app@latest clear-smile-london --tailwind --eslint
cd clear-smile-london

# Install additional dependencies
npm install next-sitemap

# Development
npm run dev

# Build for production
npm run build
npm run export

# Deploy to GitHub Pages
# (GitHub Actions will handle this automatically)
```

## Environment Variables
```
# .env.local
NEXT_PUBLIC_SITE_URL=https://clear-smile-london.co.uk
NEXT_PUBLIC_GA_ID=your-analytics-id
FORM_ENDPOINT=your-form-service-endpoint
```

## Important Notes for Claude

1. **Always prioritize mobile-first design** - Most dental searches happen on mobile
2. **Focus on conversion optimization** - Every page should have clear CTAs to Sarah's practice
3. **Maintain professional medical site standards** - Clean, trustworthy design
4. **SEO is critical** - This site's success depends on ranking for target keywords
5. **Lead capture is the primary goal** - Balance user experience with lead generation
6. **Keep content fresh** - Static sites need regular updates to maintain rankings

## Quick Start Checklist

- [ ] Initialize Next.js project with Tailwind
- [ ] Set up basic file structure
- [ ] Create Layout component with header/footer
- [ ] Build homepage with hero and cost calculator
- [ ] Implement lead capture form
- [ ] Add SEO meta tags and structured data
- [ ] Configure for static export
- [ ] Deploy to GitHub Pages
- [ ] Test domain connection
- [ ] Set up analytics tracking

## Support Resources

- **Domain Management:** 123-reg control panel
- **DNS Settings:** Point to GitHub Pages IPs
- **Sarah's Practice:** Direct integration preferred
- **Keyword Data:** See attached CSV file
- **Design Inspiration:** Professional dental/medical sites

---

**Last Updated:** January 2025  
**Next Review:** After Phase 1 completion
