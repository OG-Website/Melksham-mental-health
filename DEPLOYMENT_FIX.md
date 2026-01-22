# ✅ DEPLOYMENT FIX - READ THIS

## The Problem
Getting 404 errors when deploying to Vercel.

## The Solution
**You MUST set Root Directory to `website` in Vercel Dashboard.**

## How to Fix

### Option 1: Use the One-Click Deploy Button (Easiest!)
Click this button - it automatically configures everything:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wobbob89/Melksham-Mental-Health&project-name=melksham-mental-health&repository-name=Melksham-Mental-Health&root-directory=website)

The deploy button URL includes `&root-directory=website` which tells Vercel where the Next.js app is located.

### Option 2: Fix Existing Deployment

If you already created a Vercel project and it's failing:

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Settings** → **General**
3. Scroll down to **Root Directory**
4. Click **Edit**
5. Type `website` or select it from dropdown
6. Click **Save**
7. Go to **Deployments** and click **Redeploy**

### Option 3: Manual New Deployment

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this repository: `wobbob89/Melksham-Mental-Health`
4. In "Configure Project" section:
   - Find **Root Directory** 
   - Click **Edit**
   - Set it to: `website`
   - This is CRITICAL - do not skip!
5. Click "Deploy"

## Why This Works

The Next.js application is inside the `website/` folder, not at the repository root. When you set Root Directory to `website`, Vercel:

- ✅ Knows where to find package.json
- ✅ Knows where to run `npm install`
- ✅ Knows where to run `npm run build`
- ✅ Auto-detects it's a Next.js app
- ✅ Deploys all 22 pages successfully

## Verification

After deployment, you should see:
- ✅ Build status: Success
- ✅ "Compiled successfully"
- ✅ "Generating static pages (22/22)"
- ✅ Your site live at your-project.vercel.app

## Still Getting 404?

Double-check the Root Directory setting:
```
Dashboard → Settings → General → Root Directory = "website"
```

If it's empty or says anything else, that's the problem!

## More Help

- See [VERCEL_SETUP.md](./VERCEL_SETUP.md) for detailed guide
- See [README.md](./README.md) for project overview
- Email: Melksham-mental-health@outlook.com
