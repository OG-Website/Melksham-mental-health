# 🚀 Deploy to Vercel - Quick Start

This repository is ready to deploy to Vercel!

## Vercel Project Information

**Project ID:** `prj_lu136UlR6S9JxZC8t9n17SDLItx4`

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wobbob89/Melksham-Mental-Health&project-name=melksham-mental-health&repository-name=Melksham-Mental-Health&root-directory=website)

**Important:** The deploy button above automatically sets the root directory to `website`.

### Manual Deploy via Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "Add New Project"**
3. **Import this repository:** `wobbob89/Melksham-Mental-Health`
4. **IMPORTANT: Configure Root Directory**
   - In "Configure Project" section
   - Set **Root Directory** to: `website`
   - Click "Continue"
5. **Click "Deploy"** ✅

## Critical Configuration

⚠️ **You MUST set the Root Directory to `website`** or the deployment will fail.

This is because the Next.js application lives in the `/website` subdirectory, not at the repository root.

## What You Get

✅ **Live Website** at `your-project.vercel.app`  
✅ **Automatic HTTPS** with SSL certificate  
✅ **Global CDN** for fast worldwide access  
✅ **Automatic deployments** on every push to main branch  
✅ **Preview deployments** for every pull request  

## Post-Deployment (Optional)

### Add Environment Variables
For full functionality (Stripe payments), add these in Vercel Project Settings:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### Add Custom Domain
In Vercel Project Settings → Domains, add your custom domain.

## Troubleshooting

### Deployment Fails?
**Check this first:** Is the Root Directory set to `website`?
- Go to Project Settings → General → Root Directory
- It should be set to `website`
- If it's empty or different, change it to `website` and redeploy

### Build Errors?
The build command should automatically be: `npm run build`
The install command should be: `npm install`
These are auto-detected when Root Directory is correctly set to `website`.

## 📚 Full Documentation

For detailed deployment instructions, see:
- [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) - Complete Vercel guide
- [website/DEPLOYMENT.md](./website/DEPLOYMENT.md) - General deployment options

## 🌐 Website Preview

![Melksham Mental Health Website](https://github.com/user-attachments/assets/fd5a3457-2621-488f-bfd2-d2ca4f1f5e6c)

The website includes:
- Mental health resources and crisis support
- Post Creator desktop app (Coming Soon)
- Blog and community features
- Mobile-responsive design
- Accessibility features

## 💚 About This Project

**Melksham Mental Health** - Real Struggles. Real Support.

Mental health support for Melksham, Wiltshire and beyond. This website provides:
- 24/7 crisis support information
- Local and national mental health resources
- Community stories and blog posts

**Contact:** Melksham-mental-health@outlook.com

---

**Ready to deploy?** Click the Deploy button above (it automatically sets root directory to `website`) or follow the manual steps!
