import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/resume', label: 'Resume' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
    { to: '/fun', label: 'Fun' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-primary-50/90 dark:bg-primary-800/90 backdrop-blur-xl shadow-lg border-b border-primary-200/50 dark:border-primary-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-black bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent drop-shadow-lg">
              Portfolio
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 text-base lg:text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-500 shadow-md hover:shadow-xl ${
                  location.pathname === link.to
                    ? 'bg-primary-300/80 text-primary-800 dark:bg-primary-600/80 dark:text-primary-50 shadow-primary-400/50'
                    : 'text-primary-800/80 dark:text-primary-200/80 hover:text-primary-700 hover:bg-primary-200/50 dark:hover:bg-primary-700/30 hover:shadow-primary-300/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-primary-50/95 dark:bg-primary-800/95 backdrop-blur-xl border-t border-primary-200/50 dark:border-primary-700/50 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
              className={`block px-4 py-3 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-500 shadow-md hover:shadow-xl ${
                  location.pathname === link.to
                    ? 'bg-primary-300/80 text-primary-800 dark:bg-primary-600/80 dark:text-primary-50 shadow-primary-400/50'
                    : 'text-primary-800/80 dark:text-primary-200/80 hover:text-primary-700 hover:bg-primary-200/50 dark:hover:bg-primary-700/30 hover:shadow-primary-300/30'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar

