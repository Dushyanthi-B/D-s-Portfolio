import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon } from './Icons'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-primary-100 py-12 mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-primary-200 mb-4">
              Software Engineering Undergraduate building modern web applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-300">
              <li><a href="/home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" aria-label="GitHub" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-primary-300 mt-4">© 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

