# 🎨 PR Visual Proof Workflow

## What This Does

This GitHub Actions workflow provides **VISUAL PROOF** that the website is working on every Pull Request!

## Features

✅ **Automatic Build Verification** - Builds the Next.js site on every PR  
📸 **Screenshot Generation** - Takes full-page screenshots of key pages  
💬 **PR Comments** - Automatically posts results to the PR  
📦 **Artifact Storage** - Saves screenshots for 30 days  

## What Gets Tested

On every PR, this workflow will:

1. ✅ Build the website
2. 🚀 Start a local server
3. 📸 Take screenshots of:
   - Homepage (`/`)
   - About page (`/about`)
   - Resources page (`/resources`)
   - Contact page (`/contact`)
4. 💬 Post a comment on the PR with proof of success
5. 📦 Upload screenshots as downloadable artifacts

## How to View Results

### Method 1: PR Comment
Every PR will get an automatic comment showing:
- ✅ Build status
- 📸 List of screenshots taken
- 🔗 Link to download full screenshots
- 📋 Summary of what was tested

### Method 2: GitHub Actions Artifacts
1. Go to the PR
2. Click on "Checks" tab
3. Click on the workflow run
4. Scroll to "Artifacts" section
5. Download `site-screenshots-{PR-number}.zip`

## Workflow Triggers

This workflow runs when:
- A new PR is opened
- New commits are pushed to an existing PR
- A PR is reopened
- Changes are made to files in the `website/` directory

## Technologies Used

- **GitHub Actions** - Automation
- **Playwright** - Screenshot capture
- **Next.js** - Website build and serve
- **wait-on** - Server readiness check

## Example Output

When the workflow runs successfully, you'll see:

```
✅ VISUAL PROOF GENERATED SUCCESSFULLY!
📸 Screenshots taken of:
  - Homepage
  - About page
  - Resources page
  - Contact page
📦 Artifacts uploaded to GitHub Actions
💬 PR comment posted with results
🎉 THE SITE IS WORKING!
```

## Troubleshooting

If the workflow fails:
1. Check the GitHub Actions logs
2. Ensure the website builds locally with `npm run build`
3. Verify all dependencies are installed
4. Check that pages exist at the expected URLs

## Maintenance

The workflow is configured to:
- Keep screenshots for 30 days
- Use Node.js 20
- Cache npm dependencies for faster runs
- Only run when website files change

---

**PROOF BABY YEAHHHHHHHH!** 🎉
