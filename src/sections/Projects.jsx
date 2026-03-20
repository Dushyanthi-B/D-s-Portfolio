import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AI Volunteer Based emergency system',
      description: 'React.js, Python, PostgreSQL, PgAdmin 4, Docker',
      tags: ['React.js', 'Python', 'PostgreSQL', 'Docker'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1613977257595-3f4b3fbc0d25?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/ai-volunteer-system',
      live: null
    },
    {
      id: 2,
      title: 'Shopping Website',
      description: 'Firebase Authentication, Dialogflow, Cloud Services, Docker, AWS',
      tags: ['Firebase', 'Dialogflow', 'Docker', 'AWS'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/shopping-website',
      live: null
    },
    {
      id: 3,
      title: 'Online Bookstore Website',
      description: 'React + Vite, Node.js, JWT Tokens, API',
      tags: ['React', 'Vite', 'Node.js', 'JWT', 'API'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/online-bookstore',
      live: null
    },
    {
      id: 4,
      title: 'Digital Workforce Management System',
      description: 'React.js, Spring Boot, MariaDB',
      tags: ['React.js', 'Spring Boot', 'MariaDB'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/workforce-management',
      live: null
    },
    {
      id: 5,
      title: 'Responsive Website for hotel management for customers',
      description: 'HTML, CSS, JS, PHP, MySQL',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/hotel-management',
      live: null
    },
    {
      id: 6,
      title: 'Library Management System',
      description: 'Java, PHP, MySQL',
      tags: ['Java', 'PHP', 'MySQL'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7278b66?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/library-system',
      live: null
    },
    {
      id: 7,
      title: 'Automated Instagram Login Testing',
      description: 'Selenium WebDriver',
      tags: ['Selenium', 'Automation'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1613564813238-b21c50884954?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/instagram-testing',
      live: null
    },
    {
      id: 8,
      title: 'Responsive Website for hotel management for customers',
      description: 'HTML, CSS, JS, PHP, MySQL',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/hotel-management',
      live: null
    },
    {
      id: 9,
      title: 'Tuition management mobile app',
      description: 'Java, Firebase',
      tags: ['Java', 'Firebase'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/tuition-app',
      live: null
    },
    {
      id: 10,
      title: 'Gym promotional website',
      description: 'HTML, CSS, JS, EmailJS',
      tags: ['HTML', 'CSS', 'JavaScript', 'EmailJS'],
      category: 'design',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/gym-website',
      live: null
    },
    {
      id: 11,
      title: 'Tuition management mobile app',
      description: 'Java, Firebase',
      tags: ['Java', 'Firebase'],
      category: 'design',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/tuition-app-design',
      live: null
    },
    {
      id: 12,
      title: 'Job recruitment website',
      description: 'Responsive design for job recruitment platform',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'design',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      github: 'https://github.com/Dushyanthi-B/job-recruitment',
      live: null
    }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  const categories = [
    { id: 'all', label: 'All Projects (12)', count: projects.length },
    { id: 'web', label: 'Web Development (8)', count: projects.filter(p => p.category === 'web').length },
    { id: 'design', label: 'Designing (3)', count: projects.filter(p => p.category === 'design').length },
    { id: 'mobile', label: 'Mobile App (1)', count: projects.filter(p => p.category === 'mobile').length }
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Complete portfolio with Web, Mobile, and Design projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
                className="group bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 dark:border-gray-800/50 hover:bg-white dark:hover:bg-gray-900 hover:shadow-2xl hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-500 overflow-hidden"
              >
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gray-200 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-xs font-medium rounded-full group-hover:from-blue-100 group-hover:to-purple-100 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c Ascend Media - All Rights Reserved. - 2023." />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects

