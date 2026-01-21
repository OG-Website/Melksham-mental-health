# Deployment Guide - Melksham Mental Health Website

## Pre-Deployment Checklist

- [ ] All pages built and tested locally
- [ ] Environment variables configured
- [ ] Stripe account set up (if using license sales)
- [ ] Domain DNS configured
- [ ] SSL certificate ready (automatic with Vercel/Netlify)
- [ ] Contact email address verified
- [ ] Social media accounts created
- [ ] Content reviewed and finalized
- [ ] Accessibility audit completed
- [ ] Mobile responsiveness verified
- [ ] Performance optimization done

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers:
- Automatic deployments from GitHub
- Built-in SSL certificates
- Global CDN
- Edge Functions
- Zero configuration

#### Steps:

1. **Sign up for Vercel**
   - Go to https://vercel.com
   - Sign up with your GitHub account

2. **Import Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Environment Variables**
   - In project settings, go to "Environment Variables"
   - Add all variables from `.env.example`:
     ```
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
     STRIPE_SECRET_KEY
     STRIPE_WEBHOOK_SECRET
     STRIPE_LICENSE_PRICE_ID
     RESEND_API_KEY
     CONTACT_EMAIL
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Site is live at `your-project.vercel.app`

5. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `melksham-mentalhealth.us`
   - Update DNS records at your registrar:
     ```
     A Record: 76.76.21.21
     CNAME: cname.vercel-dns.com
     ```
   - SSL certificate automatically provisioned

6. **Set Up Stripe Webhook**
   - Get your webhook URL: `https://melksham-mentalhealth.us/api/stripe/webhook`
   - Add to Stripe Dashboard
   - Update `STRIPE_WEBHOOK_SECRET` in Vercel environment variables

### Option 2: Netlify

1. **Sign up for Netlify**
   - Go to https://netlify.com
   - Connect GitHub account

2. **Create New Site**
   - Import from GitHub
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables**
   - Add same variables as Vercel

4. **Deploy**
   - Automatic deployment on push to main branch

### Option 3: Self-Hosted (VPS/Dedicated Server)

Requirements:
- Node.js 18+ installed
- Process manager (PM2 recommended)
- Nginx or Apache for reverse proxy
- SSL certificate (Let's Encrypt)

#### Steps:

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2**
   ```bash
   sudo npm install -g pm2
   ```

3. **Clone and Build**
   ```bash
   git clone https://github.com/yourusername/Melksham-Mental-Health.git
   cd Melksham-Mental-Health/website
   npm install
   npm run build
   ```

4. **Create Environment File**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   nano .env.local
   ```

5. **Start with PM2**
   ```bash
   pm2 start npm --name "melksham-mh" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name melksham-mentalhealth.us;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Install SSL with Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d melksham-mentalhealth.us
   ```

## Post-Deployment

### 1. Verify Deployment
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Crisis banner visible
- [ ] Navigation works
- [ ] Forms submit properly
- [ ] Mobile responsive
- [ ] SSL certificate active

### 2. Set Up Monitoring
- [ ] Google Analytics configured
- [ ] Error tracking (Sentry)
- [ ] Uptime monitoring (UptimeRobot)
- [ ] Performance monitoring

### 3. Submit to Search Engines
- [ ] Google Search Console
- [ ] Bing Webmaster Tools
- [ ] Submit sitemap.xml

### 4. Social Media Integration
- [ ] Facebook page linked
- [ ] Open Graph tags working
- [ ] Share buttons functional

### 5. Email Configuration
- [ ] Contact form delivers emails
- [ ] License keys sent successfully
- [ ] Email templates tested

## Stripe Production Setup

### Switch to Live Mode

1. **In Stripe Dashboard**
   - Switch from Test mode to Live mode
   - Get live API keys
   - Update environment variables in production

2. **Create Live Product**
   - Same as test: "Post Creator License"
   - Price: £20.00 GBP
   - Get new `STRIPE_LICENSE_PRICE_ID`

3. **Configure Webhook for Production**
   - URL: `https://melksham-mentalhealth.us/api/stripe/webhook`
   - Events: `checkout.session.completed`
   - Get webhook secret
   - Update `STRIPE_WEBHOOK_SECRET`

4. **Test Live Purchase**
   - Use real payment method
   - Verify license key delivery
   - Check webhook logs

## Continuous Deployment

### Automatic Deployments (Vercel/Netlify)
- Push to `main` branch = automatic production deployment
- Push to `develop` branch = preview deployment
- Pull requests = preview deployments

### Manual Deployments
```bash
# Using Vercel CLI
vercel --prod

# Using git on VPS
ssh user@your-server
cd /path/to/project
git pull origin main
npm install
npm run build
pm2 restart melksham-mh
```

## Rollback Procedure

### Vercel/Netlify
- Go to Deployments
- Select previous working deployment
- Click "Promote to Production"

### Self-Hosted
```bash
git log  # Find working commit
git checkout <commit-hash>
npm install
npm run build
pm2 restart melksham-mh
```

## Troubleshooting

### Build Fails
1. Check build logs
2. Verify all dependencies in package.json
3. Ensure Node version compatibility (18+)
4. Check for TypeScript errors

### Environment Variables Not Working
1. Verify variable names match exactly
2. Restart deployment after adding variables
3. Check if variables need `NEXT_PUBLIC_` prefix

### 404 Errors
1. Verify file names match URLs
2. Check Next.js routing in app directory
3. Clear build cache and rebuild

### Slow Performance
1. Enable caching headers
2. Optimize images (use Next.js Image component)
3. Enable compression
4. Use CDN for static assets

## Support

For deployment issues:
- Email: Melksham-mental-health@outlook.com
- Check Next.js docs: https://nextjs.org/docs
- Vercel support: https://vercel.com/support

## Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] API keys not in source code
- [ ] CORS configured properly
- [ ] Rate limiting on forms
- [ ] Content Security Policy headers
- [ ] Regular security updates

---

**Last Updated:** December 2024
