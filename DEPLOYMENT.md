# Deploying to Vercel - Step by Step Guide

## ✅ Is Vercel Free?

**YES!** Vercel offers a generous free tier (Hobby plan) that's perfect for personal portfolios:

- ✅ **Unlimited personal projects**
- ✅ **100GB bandwidth/month**
- ✅ **Automatic HTTPS**
- ✅ **Custom domains** (you can use your own domain)
- ✅ **Automatic deployments** from GitHub
- ✅ **Preview deployments** for every push
- ✅ **Global CDN** (fast worldwide)

**Limits:**
- 100GB bandwidth/month (plenty for a portfolio)
- 100 serverless function executions/day
- No team collaboration features (but you don't need them)

---

## 🚀 Deployment Steps

### Step 1: Commit Your Changes

First, make sure all your changes are committed:

```bash
cd /Users/mac116/Desktop/personal/portfolio
git add .
git commit -m "Complete portfolio with all features"
```

### Step 2: Push to GitHub

If you haven't pushed to GitHub yet:

**Option A: Create a new GitHub repository**
1. Go to https://github.com/new
2. Create a new repository (e.g., `portfolio` or `abdulraheel-portfolio`)
3. **Don't** initialize with README (you already have files)
4. Copy the repository URL

Then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Option B: If you already have a GitHub repo**
```bash
git push origin main
```

### Step 3: Deploy to Vercel

**Method 1: Using Vercel Dashboard (Recommended for first time)**

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub" (easiest option)

2. **Import Your Project**
   - After logging in, click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find your portfolio repository and click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
   - Click "Deploy"!

4. **Wait for Deployment**
   - Vercel will build and deploy your site
   - Takes 1-3 minutes
   - You'll see a success message with your live URL!

**Method 2: Using Vercel CLI (Alternative)**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from your portfolio directory)
cd /Users/mac116/Desktop/personal/portfolio
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No (first time)
# - Project name? portfolio (or your choice)
# - Directory? ./
# - Override settings? No
```

### Step 4: Your Site is Live! 🎉

After deployment, you'll get:
- **Production URL**: `https://your-project-name.vercel.app`
- **Automatic HTTPS**: Already configured
- **Global CDN**: Fast worldwide

---

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel will:
- ✅ **Auto-deploy** every time you push to `main` branch
- ✅ **Create preview deployments** for pull requests
- ✅ **Run builds automatically**

---

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `abdulraheel.dev`):

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS configuration instructions
5. Vercel will automatically configure SSL

---

## 📝 Environment Variables (If Needed)

If you add environment variables later:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy (or they'll be added on next deployment)

---

## 🐛 Troubleshooting

**Build fails?**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Ensure `npm run build` works locally first

**Images not loading?**
- Make sure images are in the `public/` folder
- Use `/image-name.jpg` (not `./image-name.jpg`)

**Styling issues?**
- Clear browser cache
- Check if Tailwind CSS is properly configured

---

## 🎯 Quick Checklist

- [ ] All changes committed to git
- [ ] Pushed to GitHub
- [ ] Created Vercel account
- [ ] Imported GitHub repository
- [ ] Deployment successful
- [ ] Site is live!

---

## 📚 Useful Links

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

---

**Need help?** Vercel has excellent documentation and support!

