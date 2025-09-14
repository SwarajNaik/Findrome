'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Portfolio Website',
      description: 'Modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features PWA capabilities, smooth animations, and AI-powered contact form handling.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PWA', 'React', 'Framer Motion'],
      category: 'web',
      github: 'https://github.com/SwarajNaik',
      demo: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Smart Data Analytics Dashboard',
      description: 'Advanced data visualization dashboard with real-time analytics, interactive charts, and machine learning insights. Built for Binary Data Labs client projects.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Machine Learning', 'APIs'],
      category: 'data',
      github: 'https://github.com/SwarajNaik',
      demo: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'E-Commerce ML Recommendation Engine',
      description: 'Intelligent product recommendation system using collaborative filtering and deep learning. Achieved 85% accuracy in user preference prediction.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
      category: 'ml',
      github: 'https://github.com/SwarajNaik',
      demo: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Real-Time Stock Market Predictor',
      description: 'Advanced financial modeling application that predicts stock prices using LSTM neural networks and sentiment analysis from news and social media.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'LSTM', 'Sentiment Analysis', 'APIs', 'Pandas', 'Matplotlib'],
      category: 'ml',
      github: 'https://github.com/SwarajNaik',
      demo: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Smart Health Monitoring App',
      description: 'IoT-powered health monitoring application that tracks vital signs and provides AI-driven health insights and recommendations.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Python', 'IoT', 'Machine Learning', 'APIs', 'Database'],
      category: 'web',
      github: 'https://github.com/SwarajNaik',
      demo: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Automated Code Review Assistant',
      description: 'AI-powered tool that automatically reviews code quality, suggests improvements, and detects potential bugs using natural language processing.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'NLP', 'OpenAI API', 'GitHub API', 'FastAPI', 'Docker'],
      category: 'ml',
      github: 'https://github.com/SwarajNaik',
      demo: '#',
      featured: false,
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'data', name: 'Data Science' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for technology
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {filter === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h4>
                      <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">

                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          <Github className="h-4 w-4" />
                          <span className="text-sm">Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-sm">Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-32 bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  {project.featured && (
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">

                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
