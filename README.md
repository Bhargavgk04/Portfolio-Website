# Bhargav Katkam - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This project showcases my skills, projects, and professional experience as a Full Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.2.13-purple?style=for-the-badge&logo=framer)

## 🌟 Features

### ✨ Interactive UI/UX
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Type Animation**: Dynamic text animations using react-type-animation
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark Theme**: Modern dark theme with gradient accents
- **Scroll to Top**: Smooth scrolling navigation with a floating scroll-to-top button

### 📱 Sections
- **Hero Section**: Animated introduction with typewriter effect and call-to-action buttons
- **Achievement Section**: Showcase of key accomplishments and statistics
- **About Section**: Personal information and background
- **Skills Section**: Technical skills with interactive treadmill animation
- **Projects Section**: Portfolio projects with filtering capabilities
- **Contact Section**: Email contact form with EmailJS integration
- **Footer**: Social links and additional information

### 🛠 Technical Features
- **Email Integration**: Contact form powered by EmailJS and Resend
- **PDF Viewer**: Interactive CV/resume viewer with download functionality
- **Project Filtering**: Dynamic project filtering by technology stack
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Image optimization and code splitting

## 🚀 Technologies Used

### Frontend
- **Next.js 14.2.4** - React framework with App Router
- **React 18.2.0** - UI library
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 11.2.13** - Animation library
- **React Type Animation 3.2.0** - Typewriter animations
- **React Animated Numbers 0.18.0** - Number counting animations

### Backend & Services
- **EmailJS 4.4.1** - Email service integration
- **Resend 3.4.0** - Email API for contact form
- **Next.js API Routes** - Server-side functionality

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation & Setup

### Prerequisites
- Node.js >= 18.0.0
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   RESEND_API_KEY=your_resend_api_key
   FROM_EMAIL=your_email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗 Project Structure

```
portfolio-website/
├── public/
│   ├── images/           # Static images
│   │   ├── hero-image.png
│   │   ├── about-image.png
│   │   ├── projects/     # Project screenshots
│   │   └── skills/       # Skill icons
│   ├── files/           # PDF files (resume)
│   └── icons/           # SVG icons
├── src/
│   └── app/
│       ├── components/   # React components
│       │   ├── HeroSection.jsx
│       │   ├── AboutSection.jsx
│       │   ├── SkillsSection.jsx
│       │   ├── ProjectsSection.jsx
│       │   ├── EmailSection.jsx
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       ├── api/         # API routes
│       │   └── send/    # Email API
│       ├── context/     # React context
│       ├── globals.css  # Global styles
│       ├── layout.js    # Root layout
│       └── page.js      # Home page
├── tailwind.config.js   # Tailwind configuration
├── next.config.mjs      # Next.js configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Personal Information
Update the following files to customize your portfolio:

1. **Hero Section** (`src/app/components/HeroSection.jsx`)
   - Change name, title, and description
   - Update hero image in `public/images/hero-image.png`

2. **About Section** (`src/app/components/AboutSection.jsx`)
   - Modify personal description
   - Update about image in `public/images/about-image.png`

3. **Skills Section** (`src/app/components/SkillsSection.jsx`)
   - Add/remove skills
   - Update skill icons in `public/images/skills/`

4. **Projects Section** (`src/app/components/ProjectsSection.jsx`)
   - Add your projects
   - Include project screenshots in `public/images/projects/`

5. **Contact Information** (`src/app/components/EmailSection.jsx`)
   - Update social media links
   - Configure email settings

### Styling
- **Colors**: Modify the gradient colors in components
- **Fonts**: Update font families in `tailwind.config.js`
- **Animations**: Adjust animation parameters in Framer Motion components

## 🚀 Deployment

### Netlify (Recommended)
This project is configured for Netlify deployment:

1. **Connect your repository** to Netlify
2. **Build settings** (automatically detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

3. **Environment variables** (set in Netlify dashboard):
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   RESEND_API_KEY
   FROM_EMAIL
   ```

### Vercel
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- **Railway**
- **Heroku**
- **DigitalOcean App Platform**

## 📧 Email Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Add your credentials to environment variables

### Resend Setup (Alternative)
1. Create an account at [Resend](https://resend.com/)
2. Get your API key
3. Configure the API route in `src/app/api/send/route.js`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bhargav Katkam**
- LinkedIn: [Bhargav Katkam](https://linkedin.com/in/bhargav-katkam)
- GitHub: [@bhargavkatkam](https://github.com/bhargavkatkam)
- Email: bhargavkatkam0@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Resend](https://resend.com/) for email API

---

⭐ If you find this portfolio template helpful, please give it a star!
