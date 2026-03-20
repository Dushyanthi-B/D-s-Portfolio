import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GithubIcon } from '../components/Icons'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [cursorBlink, setCursorBlink] = useState(true)

  const texts = [
    'Software Engineering Student',
    'Full-Stack Developer',
    'React Enthusiast',
    'Building Modern Apps'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex % texts.length]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullText - 1) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setTimeout(() => setTextIndex((prev) => prev + 1), 500)
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, textIndex, texts])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Dushyanthi B
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 p-4 bg-white/50 dark:bg-black/30 rounded-2xl backdrop-blur-md max-w-2xl mx-auto">
            <div className="text-left">
              <div className="text-sm font-mono text-gray-600 dark:text-gray-400 mb-2">$ whoami</div>
              <div className="flex items-center">
                <span className="font-mono text-2xl md:text-3xl min-h-[3rem] font-bold text-gray-900 dark:text-white">
                  {currentText}
                </span>
                <span className={`ml-2 w-4 h-10 bg-blue-600 block ${cursorBlink ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#89986D] via-[#9CAB84] to-[#C5D89D] text-black font-bold text-lg rounded-2xl hover:shadow-2xl hover:brightness-105 transition-all duration-300 gap-2 shadow-xl max-w-sm border border-[#89986D]/30 hover:border-[#89986D]"
            >
              <Link to="/resume">View Resume</Link>
            </motion.button>
            
            <motion.a
              href="https://github.com/Dushyanthi-B?tab=overview&from=2025-01-01&to=2025-01-31"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold text-lg rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 flex items-center gap-3 max-w-sm"
            >
              <GithubIcon className="w-6 h-6" />
              View GitHub
            </motion.a>
          </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6 justify-center text-sm text-gray-500 dark:text-gray-400"
            >
              <span>Available for internships & freelance</span>
              <span>Location: Negombo, Sri Lanka</span>
              <span>Currently learning Next.js 14</span>
            </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
          >
            <svg className="w-6 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

