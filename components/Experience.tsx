'use client'

import { Briefcase, Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist',
      company: 'Binary Data Labs',
      location: 'Remote',
      period: '2022 - Present',
      duration: '2+ Years',
      type: 'Full-time',
      description: 'Working as a Data Scientist with expertise in data analysis, machine learning model development, and business intelligence solutions.',
      achievements: [
        'Developed multiple machine learning models for predictive analytics',
        'Implemented data pipelines for processing large datasets',
        'Collaborated with cross-functional teams to deliver data-driven insights',
        'Created automated reporting systems for business stakeholders',
        'Improved data processing efficiency by 40% through optimization'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Jupyter', 'Git']
    }
  ]

  const projects = [
    {
      title: 'AI-Powered Portfolio Website',
      description: 'Modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features PWA capabilities and smooth animations.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PWA', 'React', 'Framer Motion'],
      link: 'https://github.com/SwarajNaik',
      status: 'Completed'
    },
    {
      title: 'Smart Data Analytics Dashboard',
      description: 'Advanced data visualization dashboard with real-time analytics, interactive charts, and machine learning insights. Built for Binary Data Labs client projects.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Machine Learning', 'APIs'],
      link: 'https://github.com/SwarajNaik',
      status: 'Completed'
    },
    {
      title: 'E-Commerce ML Recommendation Engine',
      description: 'Intelligent product recommendation system using collaborative filtering and deep learning. Achieved 85% accuracy in user preference prediction.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
      link: 'https://github.com/SwarajNaik',
      status: 'Completed'
    },
    {
      title: 'Real-Time Stock Market Predictor',
      description: 'Advanced financial modeling application that predicts stock prices using LSTM neural networks and sentiment analysis from news and social media.',
      tech: ['Python', 'LSTM', 'Sentiment Analysis', 'APIs', 'Pandas', 'Matplotlib'],
      link: 'https://github.com/SwarajNaik',
      status: 'Completed'
    },
    {
      title: 'Automated Code Review Assistant',
      description: 'AI-powered tool that automatically reviews code quality, suggests improvements, and detects potential bugs using natural language processing.',
      tech: ['Python', 'NLP', 'OpenAI API', 'GitHub API', 'FastAPI', 'Docker'],
      link: 'https://github.com/SwarajNaik',
      status: 'Completed'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey and notable projects that showcase my skills and growth
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
            Work Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Job Info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                        {exp.company}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-5 w-5" />
                        <span>{exp.period} ({exp.duration})</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                        <MapPin className="h-5 w-5" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                        <Users className="h-5 w-5" />
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Achievements & Tech */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Award className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Award className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
            Notable Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
