# Vercel Deployment Setup

## Quick Deploy to Vercel

### ⚠️ CRITICAL: Root Directory Configuration

This repository contains a Next.js app in the `website/` subdirectory. **You MUST configure the Root Directory in Vercel Dashboard**.

### Option 1: One-Click Deploy (Recommended)

Click this button - it automatically sets the root directory:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wobbob89/Melksham-Mental-Health&project-name=melksham-mental-health&repository-name=Melksham-Mental-Health&root-directory=website)

### Option 2: Manual Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Select repository: `wobbob89/Melksham-Mental-Health`
4. **IMPORTANT:** In "Configure Project" section:
   - Find "Root Directory" setting
   - Click "Edit" 
   - Select `website` from dropdown (or type `website`)
   - This is REQUIRED!
5. Click "Deploy"

### What Happens When Root Directory is Set

When you set Root Directory to `website`, Vercel will:
- ✅ Automatically detect Next.js framework
- ✅ Use `npm install` to install dependencies  
- ✅ Use `npm run build` to build the project
- ✅ Deploy the `.next` output directory
- ✅ Configure optimized caching and edge functions

**No additional configuration needed!**

## Troubleshooting

### "404 NOT_FOUND" or Build Fails

**Solution:** Check the Root Directory setting:
1. Go to your project in Vercel Dashboard
2. Click Settings → General
3. Scroll to "Root Directory"
4. Verify it's set to `website`
5. If not, change it and redeploy

### "Module not found" Errors

This usually means Root Directory is not set correctly. When it's wrong, Vercel tries to build from the repository root instead of the `website/` subdirectory.

### Environment Variables (Optional)

For Stripe functionality, add these in Project Settings → Environment Variables:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## Why No vercel.json?

For monorepos with subdirectories, Vercel's best practice is:
1. Set Root Directory in the dashboard (not in code)
2. Let Vercel auto-detect the framework
3. No vercel.json needed at repository root

This avoids configuration conflicts and follows Vercel's recommended approach.

## Need Help?

- [Vercel Monorepo Docs](https://vercel.com/docs/monorepos)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Contact: Melksham-mental-health@outlook.com
