'use client'

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/SwarajNaik',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/swaraj-naik-24a316200/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:naik.swaraj2007@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const technologies = [
    'Next.js 15',
    'TypeScript',
    'Tailwind CSS',
    'Python',
    'Machine Learning',
    'Data Science'
  ]

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Swaraj Naik
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                A passionate tech enthusiast and data scientist from Virar West, Maharashtra. 
                Currently pursuing Computer Engineering at MPSTME and working at Binary Data Labs. 
                Always building something new and exciting!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary-400" />
                <a 
                  href="mailto:naik.swaraj2007@gmail.com"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  naik.swaraj2007@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-primary-400">📱</span>
                <a 
                  href="tel:+919561732088"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  +91 9561732088
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-all duration-300 ${social.color} transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 dark:bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} Swaraj Naik. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>in India</span>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                Built with Next.js 15 + TypeScript + Tailwind CSS
              </span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </footer>
  )
}

export default Footer
