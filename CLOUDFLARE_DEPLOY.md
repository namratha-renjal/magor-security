# Cloudflare Pages Deployment Guide

## Option 1: Deploy via Git (Recommended for Automatic Deployments)

### Steps:

1. **Initialize Git and create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
   
2. **Create a new repository on GitHub**, then:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Authorize and select your GitHub repository
   - Configure build settings:
     - **Framework preset:** Next.js (Static HTML Export)
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Root directory:** `/` (leave as default)
     - **Node version:** 18 or 20

4. **Deploy:**
   - Click **Save and Deploy**
   - Cloudflare will automatically build and deploy your site
   - Your site will be available at `https://YOUR_PROJECT_NAME.pages.dev`

---

## Option 2: Deploy via Wrangler CLI (Manual Deployment)

### Steps:

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   # or
   npm install -D wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build your project:**
   ```bash
   npm run build
   ```

4. **Deploy the dist folder:**
   ```bash
   wrangler pages deploy dist --project-name=YOUR_PROJECT_NAME
   ```

---

## Option 3: Manual Upload via Dashboard (One-time)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Upload via Dashboard:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Select **Upload assets**
   - Drag and drop the `dist` folder (or zip it first)
   - Click **Deploy site**

---

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your project in Cloudflare Pages
2. Click on **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow DNS configuration instructions

---

## Environment Variables - EmailJS Configuration

To enable the contact form email functionality, you need to set up EmailJS environment variables in Cloudflare Pages:

### Steps to Add Environment Variables:

1. **Go to your Cloudflare Pages project:**
   - Navigate to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **Pages** → Select your project

2. **Open Settings:**
   - Click on **Settings** in the top navigation
   - Scroll down to **Environment variables** section

3. **Add Production Environment Variables:**
   Click **Add variable** and add each of the following:
   
   - **Variable name:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     **Value:** Your EmailJS Service ID
   
   - **Variable name:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     **Value:** Your EmailJS Template ID
   
   - **Variable name:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     **Value:** Your EmailJS Public Key
   
   - **Variable name:** `NEXT_PUBLIC_CONTACT_EMAIL` (optional)
     **Value:** `info@magorsecurity.com` (or your preferred email)

4. **Set Environment:**
   - Make sure to select **Production** environment for each variable
   - You can also add them for **Preview** if you want to test in preview deployments

5. **Redeploy:**
   - After adding the variables, trigger a new deployment
   - Go to **Deployments** tab
   - Click **Retry deployment** on the latest deployment, or push a new commit to trigger automatic deployment

### Important Notes:

- These variables are embedded into your build at build time (since they start with `NEXT_PUBLIC_`)
- They will be visible in the client-side code, which is safe for EmailJS public keys
- Make sure your EmailJS service is properly configured and active
- Test the contact form after deployment to ensure emails are being sent correctly

---

## Build Configuration

Your project is already configured correctly:
- ✅ Static export enabled (`output: 'export'` in next.config.js)
- ✅ Build output directory: `dist`
- ✅ Images are unoptimized (required for static export)

No additional configuration needed!

