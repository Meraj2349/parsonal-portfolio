# Vercel Deployment Guide for Portfolio

## Project is Ready for Deployment! ✅

Your portfolio project has been prepared and is ready to deploy to Vercel.

### Method 1: Deploy via Vercel Website (Recommended)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com)

2. **Sign up/Login**: Use your GitHub account to sign in

3. **Import Project**:

   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `parsonal-portfolio` repository
   - **Important**: Set the root directory to `FrontEnd`

4. **Configure Project**:

   - **Framework Preset**: Next.js
   - **Root Directory**: `FrontEnd`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. **Environment Variables**: Add these in Vercel dashboard:

   ```
   EMAIL_USER=mdmerajmridha34@gmail.com
   EMAIL_PASS=your_16_character_gmail_app_password
   ```

   **Important**: Get your Gmail App Password:

   - Go to myaccount.google.com → Security
   - Enable 2-Step Verification
   - Go to App passwords → Mail → Other → "Portfolio Contact"
   - Copy the 16-character password

6. **Deploy**: Click "Deploy" and wait for deployment to complete

### Method 2: Deploy via CLI (if you want to try later)

```bash
# Install Vercel CLI (with sudo if needed)
sudo npm install -g vercel

# Navigate to your project
cd /home/meraj/Desktop/parsonal-portfolio/FrontEnd

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts and set root directory to current directory
```

### Project Structure

```
FrontEnd/
├── src/
├── public/
├── package.json
├── vercel.json          ← Already configured
├── next.config.ts
└── .env.local          ← Contains email config
```

### Features Ready for Production:

- ✅ Dark/Light theme support
- ✅ Responsive design
- ✅ Contact form with email functionality
- ✅ Project showcase
- ✅ Education & experience pages
- ✅ Skills & certificates
- ✅ CV download functionality
- ✅ Build errors fixed
- ✅ SEO optimized

### Post-Deployment:

1. Test all pages and functionality
2. Verify contact form works with proper Gmail App Password
3. Check responsive design on different devices
4. Update any hardcoded localhost URLs if any

### Your Vercel URL will be:

`https://your-project-name.vercel.app`

The deployment should take 2-3 minutes once started.
