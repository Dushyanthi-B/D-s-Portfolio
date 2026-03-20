import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
// import { Helmet } from 'react-helmet-async' // npm i react-helmet-async

import { containerVariants } from './utils/animations'

import Hero from './sections/Hero'
import About from './sections/About'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Fun from './sections/Fun'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'


function AppContent() {
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)

  const pageTitles = {
    '/': 'Home - Software Engineer Portfolio',
    '/about': 'About - Software Engineer',
    '/resume': 'Resume - Software Engineering Student',
    '/projects': 'Projects - React Developer Portfolio',
    '/blog': 'Blog - Web Development Articles',
    '/contact': 'Contact - Get In Touch',
    '/fun': 'Fun - Interactive Developer Terminal'
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-primary-100' : 'bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900'}`} 
    >
{/* Helmet - install react-helmet-async for dynamic SEO */}
  <title>{pageTitles[location.pathname] || 'Software Engineer Portfolio'}</title>
  <meta name="description" content="Modern React portfolio website for software engineering undergraduate with projects, blog, resume, and contact form." />
  <meta name="keywords" content="software engineer, react developer, portfolio, web developer" />
  <link rel="canonical" href={`https://yourportfolio.com${location.pathname}`} />
      
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fun" element={<Fun />} />
        </Routes>
      </main>
      <Footer />
    </motion.div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

