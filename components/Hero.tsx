'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Data Scientist',
    'Web Developer',
    'Tech Enthusiast',
    'Problem Solver',
    'Innovation Seeker'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, texts])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              SN
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Swaraj Naik</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-12">
            I'm a{' '}
            <span className="text-primary-600 dark:text-primary-400">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            A passionate tech enthusiast and first-year student at MPSTME MBATECH CE. 
            I love exploring new technologies, building innovative projects, and solving complex problems. 
            Currently working as a Data Scientist at Binary Data Labs with 2 years of experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/SwarajNaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/swaraj-naik-24a316200/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:naik.swaraj2007@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={scrollToNext}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
