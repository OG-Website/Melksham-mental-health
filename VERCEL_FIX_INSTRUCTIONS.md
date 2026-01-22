# Fix Vercel 404 Error - Manual Configuration Required

## The Problem
Your Vercel deployment is returning a 404 error because the project is configured to deploy from the repository root, but the Next.js application is actually in the `/website` subdirectory.

## Why the vercel.json Change Isn't Enough
While we've added the correct configuration to `vercel.json`, **existing Vercel projects may not automatically pick up this change**. You need to manually update your Vercel project settings.

## Solution: Update Vercel Project Settings

### Option 1: Update Existing Project Settings (Recommended)

1. **Go to your Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sign in if needed

2. **Select Your Project**
   - Find and click on your "Melksham Mental Health" or "melksham-mental-health" project

3. **Open Settings**
   - Click on "Settings" tab at the top

4. **Update Root Directory**
   - In the left sidebar, click on "General"
   - Scroll down to find "Root Directory" section
   - Click "Edit" next to Root Directory
   - Enter: `website`
   - Click "Save"

5. **Redeploy**
   - Go to "Deployments" tab
   - Click on the three dots (...) next to the latest deployment
   - Click "Redeploy"
   - Wait for the deployment to complete

### Option 2: Delete and Recreate Project

If updating settings doesn't work:

1. **Delete the existing project** from Vercel dashboard
2. **Use the One-Click Deploy** button from README.md
3. The deploy button automatically sets the root directory to `website`

## Verifying the Fix

After updating and redeploying:

1. Visit your deployment URL (e.g., `your-project.vercel.app`)
2. You should see the Melksham Mental Health website homepage
3. No more 404 errors!

## Why This Happened

The Vercel project was initially created without specifying the root directory. When Vercel couldn't find a valid Next.js application at the repository root, it returned a 404 error. The `vercel.json` configuration file we added **will** work for new deployments, but existing projects need the manual update described above.

## Need Help?

If you're still seeing 404 errors after following these steps:

1. Check that the Root Directory is set to `website` (not `/website` or `./website`, just `website`)
2. Make sure you clicked "Save" after changing the setting
3. Verify that you redeployed after saving the changes
4. Check the deployment logs for any build errors

## Automated Fix (For Future Deployments)

The `vercel.json` file now contains:
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "rootDirectory": "website"
}
```

This ensures that **new** projects or deployments will automatically use the correct root directory.
