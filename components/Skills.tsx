'use client'

import { 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  Cloud,
  FileCode,
  Server,
  BarChart3,
  Terminal
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, color: 'bg-yellow-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-400' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-500' },
        { name: 'SQL', level: 90, color: 'bg-red-500' },
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'Next.js', level: 85, color: 'bg-black dark:bg-white' },
        { name: 'React', level: 80, color: 'bg-blue-400' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-cyan-400' },
      ]
    },
    {
      title: 'Data Science & ML',
      icon: BarChart3,
      skills: [
        { name: 'Pandas', level: 90, color: 'bg-blue-600' },
        { name: 'NumPy', level: 85, color: 'bg-green-600' },
        { name: 'Scikit-learn', level: 80, color: 'bg-orange-600' },
        { name: 'Matplotlib', level: 85, color: 'bg-red-600' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Cpu,
      skills: [
        { name: 'Git', level: 85, color: 'bg-red-600' },
        { name: 'Docker', level: 70, color: 'bg-blue-500' },
        { name: 'VS Code', level: 95, color: 'bg-blue-600' },
        { name: 'Jupyter', level: 90, color: 'bg-orange-500' },
      ]
    }
  ]

  const technologies = [
    { name: 'Python', icon: Terminal, color: 'text-yellow-500' },
    { name: 'JavaScript', icon: FileCode, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: FileCode, color: 'text-blue-500' },
    { name: 'Next.js', icon: Globe, color: 'text-black dark:text-white' },
    { name: 'React', icon: Code, color: 'text-blue-400' },
    { name: 'SQL', icon: Database, color: 'text-red-500' },
    { name: 'Git', icon: GitBranch, color: 'text-red-600' },
    { name: 'Docker', icon: Server, color: 'text-blue-500' },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary-100 dark:bg-primary-900 w-12 h-12 rounded-lg flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              >
                <tech.icon className={`h-8 w-8 ${tech.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <Cloud className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Cloud Platforms
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              AWS, Google Cloud Platform, Heroku
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <Database className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Databases
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              PostgreSQL, MySQL, MongoDB, SQLite
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <GitBranch className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Development Tools
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Git, Docker, VS Code, Postman
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
