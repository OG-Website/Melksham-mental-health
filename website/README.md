# Melksham Mental Health Website

**Domain:** melksham-mentalhealth.us  
**Tagline:** ⚡ REAL STRUGGLES. REAL SUPPORT ⚡

A comprehensive mental health support website built with Next.js 14+, featuring resources, community features, and e-commerce functionality for the Post Creator desktop app.

## 🌟 Features

- **Mental Health Resources**: Comprehensive local (Melksham/Wiltshire) and national UK resources
- **24/7 Crisis Support**: Prominent crisis helplines and emergency contacts
- **Post Creator App**: Download page and support for the desktop application
- **License Sales**: E-commerce integration via Stripe for £20 license purchases
- **Blog System**: Mental health tips, stories, and updates
- **Community Stories**: User-submitted stories with moderation
- **Contact Forms**: Multiple forms for inquiries and support
- **SEO Optimized**: Full metadata and Open Graph tags
- **Fully Responsive**: Mobile-first design with accessibility compliance

## 🎨 Brand Colors

- **Primary Orange**: `#ff6600`
- **Secondary Orange**: `#ff9900`
- **Dark Background**: `#1a1a1a`
- **Darker Panel**: `#2a2a2a`
- **Light Text**: `#ffffff`
- **Muted Text**: `#ffcc99`
- **Accent Green**: `#00aa00`
- **Error Red**: `#cc0000`

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Payments**: Stripe (integration ready)
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌐 Pages Structure

```
/                           - Home page with hero, features, app promo
/about                      - About us, mission, values
/resources                  - Mental health resources hub
  /resources/local          - Melksham & Wiltshire services
  /resources/national       - UK-wide services
  /resources/crisis         - 24/7 crisis support (PRIORITY)
/app                        - Post Creator app information
  /app/download             - Download page with installer
  /app/features             - Detailed feature list
  /app/support              - FAQ and troubleshooting
/license                    - License information
  /license/purchase         - Purchase £20 license via Stripe
  /license/activate         - Activate and validate license keys
/blog                       - Blog listing page
  /blog/[slug]              - Individual blog posts (dynamic)
/community                  - Community hub
  /community/stories        - Submit and view community stories
/contact                    - Contact form
/privacy                    - Privacy policy (GDPR compliant)
/terms                      - Terms of service
/404                        - Custom 404 page
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Stripe Configuration (for license purchases)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# License Product ID (create in Stripe Dashboard)
STRIPE_LICENSE_PRICE_ID=price_...

# Email Configuration (optional)
RESEND_API_KEY=re_...
CONTACT_EMAIL=Melksham-mental-health@outlook.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-...
```

## 💳 Stripe Setup

1. **Create Stripe Account**: https://stripe.com
2. **Create Product**:
   - Name: "Post Creator License"
   - Price: £20.00 GBP (one-time)
   - Description: "Remove Melksham Mental Health branding from posts"
3. **Set Up Webhook**:
   - Endpoint: `https://your-domain.com/api/stripe/webhook`
   - Events: `checkout.session.completed`
4. **Copy Keys** to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy automatically

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🆘 Crisis Banner

The sticky crisis banner is always visible and provides:
- Samaritans: 116 123 (24/7)
- Emergency: 999
- Link to comprehensive crisis resources

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- Keyboard navigation support
- Screen reader compatible

## 📧 Contact & Support

- **Email**: Melksham-mental-health@outlook.com
- **Facebook**: /melkshammentalhealth
- **Website**: melksham-mentalhealth.us

---

**⚡ REAL STRUGGLES. REAL SUPPORT ⚡**
