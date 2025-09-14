# Swaraj Naik - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and PWA capabilities. Features a clean, professional design showcasing skills, projects, and experience.

🚀 **Live Portfolio:** [https://swarajnaik.github.io/Findrome/](https://swarajnaik.github.io/Findrome/)

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Python](https://img.shields.io/badge/Python-3.9-3776AB?style=for-the-badge&logo=python)

## 🚀 Live Demo

Visit the live portfolio: [Coming Soon]

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Frontend Features
- **Modern Design**: Clean, professional, and responsive design
- **PWA Support**: Progressive Web App capabilities with offline support
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Mobile First**: Responsive design optimized for all devices

### Sections
- **Hero Section**: Animated introduction with typing effect
- **About**: Personal information, education, and interests
- **Skills**: Interactive skill bars and technology showcase
- **Experience**: Professional work experience and achievements
- **Projects**: Portfolio of completed projects with filtering
- **Contact**: Interactive contact form with validation

### Backend Features
- **Flask API**: Simple Python backend for form handling
- **Contact Form**: Secure form submission with validation
- **Project Data**: RESTful API for project information
- **Logging**: Contact form submissions logging
- **CORS Support**: Cross-origin resource sharing enabled

## 🛠 Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **PWA**: Progressive Web App capabilities

### Backend
- **Python 3.9+**: Programming language
- **Flask**: Lightweight web framework
- **Flask-CORS**: Cross-origin resource sharing
- **SMTP**: Email functionality (optional)

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Git**: Version control

## 📁 Project Structure

```
Findrome/
├── app/                    # Next.js 15 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Experience.tsx     # Work experience
│   ├── Projects.tsx       # Projects portfolio
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── backend/               # Python Flask backend
│   ├── app.py            # Main Flask application
│   ├── requirements.txt  # Python dependencies
│   └── README.md         # Backend documentation
├── public/               # Static assets
│   ├── manifest.json     # PWA manifest
│   └── sw.js            # Service worker
├── package.json          # Node.js dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- Git

### Frontend Setup

1. **Clone the repository**
```bash
git clone https://github.com/SwarajNaik/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Create virtual environment (recommended)**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

4. **Run the Flask server**
```bash
python app.py
```

The backend API will be available at [http://localhost:5000](http://localhost:5000)

## 🛠 Development

### Available Scripts

```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Backend
python app.py        # Start Flask development server
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Customization

1. **Personal Information**: Update personal details in components
2. **Projects**: Modify project data in `components/Projects.tsx`
3. **Skills**: Update skills in `components/Skills.tsx`
4. **Styling**: Customize colors and themes in `tailwind.config.js`

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

### Backend Deployment (Heroku)

1. **Install Heroku CLI**
2. **Create Heroku app**
```bash
heroku create your-app-name
```

3. **Deploy**
```bash
git subtree push --prefix backend heroku main
```

### Manual Deployment

1. **Build the frontend**
```bash
npm run build
```

2. **Deploy the `out` directory** to your hosting provider

## 📚 API Documentation

### Endpoints

#### GET /
Health check endpoint
```json
{
  "message": "Swaraj Naik Portfolio Backend API",
  "status": "running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### POST /api/contact
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here"
}
```

#### GET /api/projects
Get all projects
```json
{
  "projects": [...],
  "count": 5
}
```

#### GET /api/stats
Get portfolio statistics
```json
{
  "total_projects": 15,
  "years_experience": 2,
  "technologies_used": 10,
  "github_repos": 11
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 About the Developer

**Swaraj Naik** is a passionate tech enthusiast and first-year Computer Engineering student at MPSTME. With 2+ years of experience as a Data Scientist at Binary Data Labs, he specializes in:

- **Data Science & Machine Learning**: Python, Pandas, NumPy, Scikit-learn
- **Web Development**: Next.js, React, TypeScript, Tailwind CSS
- **Database Management**: SQL, PostgreSQL, MySQL
- **Problem Solving**: Algorithm design, system optimization

### Contact Information
- **Email**: naik.swaraj2007@gmail.com
- **Phone**: +91 9561732088
- **GitHub**: [@SwarajNaik](https://github.com/SwarajNaik)
- **LinkedIn**: [Swaraj Naik](https://www.linkedin.com/in/swaraj-naik-24a316200/)
- **Location**: Virar West, Maharashtra, India

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Flask](https://flask.palletsprojects.com/) for the Python backend

---

**Made with ❤️ by Swaraj Naik**

*This portfolio represents my journey as a tech enthusiast, showcasing projects built with passion and dedication to continuous learning and innovation.*
