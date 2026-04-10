# CodeWithAqib Portfolio Website

> A modern, elegant, and fully responsive portfolio website to showcase your development work, projects, skills, and professional experience.

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38b2ac?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## About

A stunning personal portfolio website built with cutting-edge technologies to showcase development work, projects, technical skills, and contact information. Features smooth animations, modern UI design patterns, and is fully optimized for all devices with excellent performance metrics.

---

## Key Features

<table>
<tr>
<td width="50%">

**Modern Design**
- Clean and professional UI
- Gradient accents and effects
- Eye-catching animations

**Responsive Layout**
- Works perfectly on all devices
- Mobile-first approach
- Adaptive components

</td>
<td width="50%">

**Smooth Animations**
- Framer Motion integration
- Engaging interactions
- Page transitions

**Project Showcase**
- Filter projects by technology
- Detailed project information
- Live demos and source links

</td>
</tr>
<tr>
<td width="50%">

**Skills Section**
- Technical expertise display
- Technology categories
- Visual skill representation

**Contact System**
- Interactive contact form
- Form validation
- Multiple contact methods

</td>
<td width="50%">

**SEO Optimized**
- Meta tags and structured data
- Sitemap and robots.txt
- Open Graph integration

**High Performance**
- Optimized bundle size
- Fast loading times
- Excellent Lighthouse scores

</td>
</tr>
</table>

---

## Tech Stack

<div align="center">

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 |
| **UI Library** | React 19 |
| **Styling** | TailwindCSS 4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Language** | TypeScript |
| **UI Components** | Radix UI + Tailwind |
| **Build Tool** | Turbopack |

</div>



---

## Installation & Setup

### Step 1: Clone Repository
```bash
git clone <repository-url>
cd Portfolio
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Environment Configuration
Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Contact Information
NEXT_PUBLIC_EMAIL=your-email@example.com
NEXT_PUBLIC_PHONE=your-phone-number
```

---

## Quick Start

### Development Server
Start the development server with hot-reload:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.

### Production Build
Create an optimized production build:

```bash
npm run build
```

### Run Production Server
```bash
npm start
```

### Code Quality
Run ESLint to check code quality:

```bash
npm run lint
```

---

## Project Structure

```
Portfolio/
│
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # TailwindCSS setup
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
│
├── src/
│   │
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout component
│   │   ├── globals.css       # Global styles
│   │   ├── not-found.tsx     # 404 page
│   │   │
│   │   ├── about/            # About section
│   │   │   └── page.tsx
│   │   │
│   │   ├── skills/           # Skills section
│   │   │   └── page.tsx
│   │   │
│   │   ├── projects/         # Projects section
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   └── contact/          # Contact section
│   │       └── page.tsx
│   │
│   ├── components/           # Reusable components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Particles.tsx     # Background particles
│   │   ├── AnimatedSection.tsx
│   │   ├── CategoryMarquee.tsx
│   │   │
│   │   ├── ClientComponents/ # Client-side components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── SingleProject.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Not-Found.tsx
│   │   │
│   │   └── ui/               # UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       └── card.tsx
│   │
│   └── lib/                  # Utilities
│       └── utils.tsx
│
├── public/                   # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       └── [Project images]
│
└── README.md                 # This file
```

---

## Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with introduction and featured projects |
| **About** | `/about` | Personal background and professional journey |
| **Skills** | `/skills` | Technical expertise and technology stack |
| **Projects** | `/projects` | Portfolio showcase with project filtering |
| **Project Details** | `/projects/[id]` | Individual project information and details |
| **Contact** | `/contact` | Contact form and communication channels |
| **404** | `/*` | Custom not found page |

---

## Customization Guide

### Update Content

**Edit Projects:**
- File: [src/components/ClientComponents/Home.tsx](src/components/ClientComponents/Home.tsx)
- Update the `projects` array with your project information

**Edit Skills:**
- File: [src/components/ClientComponents/Skills.tsx](src/components/ClientComponents/Skills.tsx)
- Modify skill categories and technologies

**Update Profile:**
- Edit respective page files in `src/app/`
- Update metadata and descriptions

### Customize Styling

- **Global Styles:** `src/app/globals.css`
- **TailwindCSS Config:** `tailwind.config.ts`
- **Component Styles:** Use TailwindCSS utility classes
- **Animations:** Configure Framer Motion in components

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL     # Your website domain
NEXT_PUBLIC_EMAIL        # Contact email address
NEXT_PUBLIC_PHONE        # Contact phone number
```

---

## Deployment

### Deploy on Vercel (Recommended)

Vercel is the optimal platform for Next.js applications:

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. **Auto-deployment**
   - Vercel automatically detects Next.js
   - Builds and deploys on every push
   - Environment variables auto-configured

### Deploy on Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Connect your Git repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

### Deploy on Other Platforms

Refer to [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

---

## Key Dependencies

### Production Dependencies
```json
{
  "next": "^16.1.1",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "tailwindcss": "^4",
  "framer-motion": "^12.34.0",
  "lucide-react": "^0.539.0",
  "@radix-ui/react-slot": "^1.2.3",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1"
}
```

### Development Dependencies
```json
{
  "typescript": "^6.0.2",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@types/node": "^25.5.0",
  "@tailwindcss/postcss": "^4"
}
```

---

## SEO & Performance

**SEO Features**
- Meta tags for all pages
- Open Graph integration
- Twitter card support
- Structured data markup
- XML sitemap
- Robots.txt

**Performance Optimizations**
- Image optimization
- Code splitting
- CSS minification
- JavaScript bundling
- Fast page loads
- Lighthouse ready

---

## Troubleshooting

### Issue: Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Issue: Dependencies not installed
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
```bash
# Rebuild TypeScript
npx tsc --noEmit
```

---

## License

This project is open source and available under the **MIT License**. Feel free to use it as a template for your own portfolio.

---

## Contributing

Contributions are welcome! If you'd like to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Support & Contact

For questions, issues, or suggestions:

- **Email:** [your-email@example.com](mailto:your-email@example.com)
- **Website:** [https://codewithaqib.com](https://codewithaqib.com)
- **Phone:** [your-phone-number](tel:your-phone-number)
- **Contact Form:** Available on the website

---

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] CMS integration

---

<div align="center">

### If you found this helpful, please give it a star!

**Made with love by CodeWithAqib**

[Website](https://codewithaqib.com) • [GitHub](https://github.com) • [LinkedIn](https://linkedin.com)

</div>
