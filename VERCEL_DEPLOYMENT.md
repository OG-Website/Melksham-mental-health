# Vercel Deployment Guide - Melksham Mental Health

## Quick Start - Deploy to Vercel

This repository is configured for easy deployment to Vercel. Follow these steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New Project"
   - Select this repository: `wobbob89/Melksham-Mental-Health`
   - Vercel will automatically detect the Next.js framework

3. **Configure Project**
   - **Root Directory**: Leave as default (Vercel will use `vercel.json` configuration)
   - **Framework**: Next.js (auto-detected)
   - **Build Settings**: Automatically configured via `vercel.json`

4. **Environment Variables** (Optional - for full functionality)
   Add these in Vercel Project Settings → Environment Variables:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   STRIPE_LICENSE_PRICE_ID=price_...
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to repository root
cd Melksham-Mental-Health

# Deploy to Vercel
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Confirm settings
# - Deploy!

# For production deployment
vercel --prod
```

### Project ID Reference
```
Project ID: prj_lu136UlR6S9JxZC8t9n17SDLItx4
```

## What Gets Deployed

The Vercel configuration (`vercel.json`) is set up to:
- Build the Next.js website from the `/website` directory
- Install dependencies automatically
- Optimize for production
- Enable Edge Functions
- Configure automatic HTTPS

## Deployment Features

✅ **Automatic Deployments**: Push to GitHub = automatic deploy  
✅ **Preview Deployments**: Each PR gets a unique preview URL  
✅ **Zero Configuration**: Works out of the box with Next.js  
✅ **Global CDN**: Fast worldwide access  
✅ **HTTPS**: Automatic SSL certificates  
✅ **Environment Variables**: Secure secrets management  

## Post-Deployment Steps

### 1. Verify Deployment
- [ ] Homepage loads correctly at your Vercel URL
- [ ] All pages are accessible (about, resources, blog, etc.)
- [ ] Crisis banner is visible
- [ ] Navigation works properly
- [ ] Mobile responsive layout works
- [ ] Forms render correctly

### 2. Configure Custom Domain (Optional)
1. Go to Vercel Project Settings → Domains
2. Add `melksham-mentalhealth.us` (or your domain)
3. Update DNS records at your registrar:
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```
4. SSL certificate is automatically provisioned

### 3. Set Up Stripe (For License Sales)
1. **Create Stripe Account**: https://stripe.com
2. **Create Product**:
   - Name: "Post Creator License"
   - Price: £20.00 GBP
   - Type: One-time payment
3. **Configure Webhook**:
   - Endpoint: `https://your-domain.vercel.app/api/stripe/webhook`
   - Events: `checkout.session.completed`
4. **Update Environment Variables** in Vercel with your Stripe keys

### 4. Enable Analytics (Optional)
Vercel provides built-in analytics:
1. Go to Project Settings → Analytics
2. Enable Vercel Analytics
3. Or add Google Analytics via environment variable:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## Continuous Deployment

Once connected to GitHub:
- **Push to main branch** → Automatic production deployment
- **Open a PR** → Automatic preview deployment
- **Merge PR** → Automatic production deployment

## Rollback

If something goes wrong:
1. Go to Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "..." menu → "Promote to Production"
4. Instant rollback!

## Monitoring

Vercel provides:
- **Build Logs**: View build process and errors
- **Runtime Logs**: See server-side errors
- **Analytics**: Page views, performance metrics
- **Speed Insights**: Core Web Vitals monitoring

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies in `website/package.json`
- Ensure Node.js version compatibility (18+)

### Environment Variables Not Working
- Verify variable names match exactly
- Remember: Client-side variables need `NEXT_PUBLIC_` prefix
- Redeploy after adding new variables

### 404 Errors
- Verify file names match URLs in `website/app/` directory
- Check Next.js routing is correct
- Clear build cache and redeploy

## Cost

- **Hobby Plan**: FREE
  - Unlimited deployments
  - Automatic HTTPS
  - 100 GB bandwidth/month
  - Perfect for this project!

- **Pro Plan**: $20/month (if you need more)
  - Unlimited bandwidth
  - Advanced analytics
  - Custom deployment protection

## Support

For deployment help:
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Project Email**: help@melksham-mentalhealth.us

## Quick Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Stripe Integration Guide](https://stripe.com/docs/payments/checkout)

---

**Ready to deploy?** Click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wobbob89/Melksham-Mental-Health)

---

Last Updated: January 2026
