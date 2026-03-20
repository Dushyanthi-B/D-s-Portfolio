import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EnvelopeIcon } from '../components/Icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // EmailJS integration (replace with your service ID, template ID, public key)
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent to-primary-50/50 dark:to-primary-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-primary-400 leading-tight">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's talk! I'm currently available for internships and freelance work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 md:order-1"
          >
            <div className="p-6 sm:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">Let's Connect</h3>
              
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 p-4 bg-gradient-to-r from-white/80 to-primary-50/50 dark:from-gray-900/80 dark:to-primary-900/80 rounded-xl">
                  <EnvelopeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 flex-shrink-0 mt-1" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-sm sm:text-base mb-1">Email</h4>
                    <a href="mailto:dushyanthibaskaran8@gmail.com" className="text-gray-600 dark:text-gray-300 hover:underline text-sm sm:text-base break-all">
                      dushyanthibaskaran8@gmail.com
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <a href="https://github.com/Dushyanthi-B" target="_blank" rel="noopener noreferrer" className="group p-3 sm:p-4 bg-gradient-to-r from-white/80 to-primary-50/50 dark:from-gray-900/80 dark:to-primary-900/80 rounded-xl hover:bg-white/90 dark:hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 text-center">
                    <span className="font-semibold block group-hover:translate-x-1 transition-transform text-sm sm:text-base">GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/dushyanthi-baskaran-85227827a" target="_blank" rel="noopener noreferrer" className="group p-3 sm:p-4 bg-gradient-to-r from-white/80 to-primary-50/50 dark:from-gray-900/80 dark:to-primary-900/80 rounded-xl hover:bg-white/90 dark:hover:bg-gray-900 hover:shadow-2xl transition-all duration-300 text-center">
                    <span className="font-semibold block group-hover:translate-x-1 transition-transform text-sm sm:text-base">LinkedIn</span>
                  </a>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                  <h4 className="font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-gray-100 text-sm sm:text-base">Availability</h4>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    Available for work
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.a
                href="https://calendar.app.google/your-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block p-5 sm:p-6 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white font-semibold rounded-2xl text-center hover:brightness-105 shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-lg"
              >
                Book a Call
              </motion.a>
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block p-5 sm:p-6 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white font-semibold rounded-2xl text-center hover:brightness-105 shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-lg"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full order-1 md:order-2"
          >
            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-gray-100">Send Message</h3>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-5 sm:mb-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-sm"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-5 sm:mb-8">
                <label className="block text-xs sm:text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-sm"
                  placeholder="Project collaboration, internship, etc."
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <label className="block text-xs sm:text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4 sm:5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-vertical placeholder-gray-500 text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center p-4 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-2xl mb-6 font-medium shadow-sm text-sm sm:text-base"
                  >
                    🎉 Message sent successfully! I'll get back to you within 24 hours.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center p-4 bg-red-100 border border-red-300 text-red-800 rounded-2xl mb-6 font-medium shadow-sm text-sm sm:text-base"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className="w-full p-4 sm:p-6 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white font-bold text-base sm:text-lg rounded-2xl hover:brightness-105 shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

