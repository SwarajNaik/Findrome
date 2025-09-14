'use client'

import { Code, Database, Brain, Coffee, BookOpen, MapPin } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '18+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Coffee Cups', value: '∞' },
  ]

  const interests = [
    { icon: Code, title: 'Web Development', description: 'Building modern, responsive web applications' },
    { icon: Database, title: 'Data Science', description: 'Extracting insights from complex datasets' },
    { icon: Brain, title: 'Machine Learning', description: 'Creating intelligent systems and models' },
    { icon: Coffee, title: 'Tech Innovation', description: 'Exploring cutting-edge technologies' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know the person behind the code and the passion that drives innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hello! I'm Swaraj Naik
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate tech enthusiast from Virar West, currently pursuing my first year at 
                  <span className="font-semibold text-primary-600 dark:text-primary-400"> MPSTME MBATECH CE</span>. 
                  My journey in technology started with curiosity and has evolved into a deep passion for 
                  creating innovative solutions.
                </p>
                
                <p>
                  With <span className="font-semibold text-primary-600 dark:text-primary-400">2 years of experience</span> as a 
                  Data Scientist at Binary Data Labs, I've had the opportunity to work on multiple projects 
                  that have enhanced my skills in data analysis, machine learning, and problem-solving.
                </p>
                
                <p>
                  I'm always working on some project or another - whether it's building web applications, 
                  exploring machine learning algorithms, or diving into new technologies. The tech world 
                  fascinates me, and I'm constantly learning and growing.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
              <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              <span>Based in Virar West, Maharashtra, India</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What I'm <span className="gradient-text">Passionate About</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-primary-100 dark:bg-primary-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <interest.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8">
          <div className="flex items-center space-x-4 mb-6">
            <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Education
            </h3>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
              MPSTME MBATECH CE (Computer Engineering)
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              First Year Student | 2024 - Present
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently pursuing my Bachelor's degree in Computer Engineering with a focus on 
              modern software development and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
