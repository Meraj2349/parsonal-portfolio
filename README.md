# 🚀 Personal Portfolio - Md. Meraj Mridha

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

**🔗 [View Live Portfolio](https://merajmridha.xyz)**

## 👨‍💻 About Me

Junior Software Engineer at Deep Mind Labs and Software Engineering student at SUST. Full-stack developer working with Next.js, React, TypeScript, .NET and Kotlin.

## ✨ Features

- 🌙 **Dark/Light Theme** - Toggle between themes
- 📱 **Responsive Design** - Works on all devices
- 📧 **Contact Form** - Sends email through Gmail (Nodemailer), with a mailto fallback
- 🎓 **Education Section** - Academic background
- 🏅 **Achievements** - Competitions and research
- 💼 **Projects Showcase** - Featured work and projects
- 🏆 **Skills & Certificates** - Technical expertise display
- 📄 **CV Download** - Downloadable resume
- ⚡ **Fast Performance** - Optimized with Next.js

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Email**: Nodemailer
- **HTTP Client**: Axios

## 📁 Project Structure

```
FrontEnd/
├── src/
│   ├── app/                 # App router pages
│   ├── components/          # Reusable components
│   └── contexts/           # React contexts (Theme)
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Meraj2349/parsonal-portfolio.git
   cd parsonal-portfolio/FrontEnd
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create `FrontEnd/.env.local` (never commit it, and never put these in `vercel.json`):

   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_gmail_app_password
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to [myaccount.google.com](https://myaccount.google.com) → Security
   - App passwords → Mail → Other → "Portfolio Contact"
3. Add `EMAIL_USER` and `EMAIL_PASS` to `.env.local` locally, and in Vercel under Settings → Environment Variables
4. Without them, the form opens the visitor's email app instead

## 🌐 Deployment

This project is deployed on Vercel at [merajmridha.xyz](https://merajmridha.xyz) with automatic deployments from the `master` branch. The Vercel project's Root Directory must be `FrontEnd`.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Meraj2349/parsonal-portfolio&project-name=my-portfolio&repository-name=my-portfolio&root-directory=FrontEnd)

## 📱 Pages

- **Home** - Hero section with introduction
- **About** - Detailed background and experience
- **Skills** - Technical skills and proficiencies
- **Education** - Academic background
- **Experience** - Work experience, including Deep Mind Labs
- **Achievements** - Competitions and research
- **Projects** - Portfolio of completed projects
- **Certificates** - Professional certifications
- **Contact** - Contact form and information

## 🎨 Theme Support

The portfolio includes a custom theme context that provides:

- Dark and light mode toggle
- Persistent theme selection
- Smooth transitions between themes
- Dark by default

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: mdmerajmridha34@gmail.com
- **LinkedIn**: [Md. Meraj Mridha](https://www.linkedin.com/in/md-meraj-mridha/)
- **GitHub**: [@Meraj2349](https://github.com/Meraj2349)

---

⭐ **Star this repository if you found it helpful!**
