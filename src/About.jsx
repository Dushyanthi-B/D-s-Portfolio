import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { containerVariants, itemVariants } from '../utils/animations'

const About = () => {
  return (


    <section id="about" className="py-24 px-4 bg-gradient-to-b from-transparent to-primary-50/50 dark:to-primary-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-primary-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-72 h-72 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] rounded-2xl overflow-hidden border-4 border-white/70 dark:border-gray-800/70 shadow-2xl ring-4 ring-primary-50/70 dark:ring-primary-900/50 mx-auto lg:mx-0 relative z-10 group-hover:ring-primary-500/50 transition-all duration-500">
                <img 
                  src="/1.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-contain bg-gradient-to-br from-white/90 dark:to-gray-900/90 p-6 lg:p-8"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent group-hover:from-primary-400/20" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          </motion.div>


          <motion.div
            className="space-y-8 lg:space-y-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 text-gray-900 dark:text-gray-100">
                Software Engineering Undergraduate
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate developer from Sri Lanka crafting elegant web solutions with React, Next.js, and modern technology stacks. Experienced in full-stack development with a focus on clean code and user experience.
              </p>
            </div>


            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                'React & Next.js',
                'Node.js & Express', 
                'Tailwind CSS',
                'MongoDB & Prisma',
                'Git & Docker',
                'TypeScript'
              ].map((skill) => (
                <div 
                  className="group p-4 lg:p-6 border border-gray-200/50 dark:border-gray-700/50 rounded-xl hover:border-primary-400 hover:bg-primary-50/50 dark:hover:bg-gray-800/30 transition-all duration-300 cursor-pointer flex items-center gap-3 hover:shadow-md"
                >
                  <div className="w-3 h-3 bg-primary-500 rounded-full group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary-600">
                    {skill}
                  </span>
                </div>
              ))}
            </motion.div>


            <div className="grid md:grid-cols-2 gap-6 pt-4">
            <motion.div 
              className="p-6 lg:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-3xl lg:text-4xl font-black text-primary-600 mb-2">10+</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Projects</div>
            </motion.div>
            <motion.div 
              className="p-6 lg:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-3xl lg:text-4xl font-black text-primary-600 mb-2">Open</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">To Work</div>
            </motion.div>
            </div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#89986D] via-[#9CAB84] to-[#C5D89D] text-black font-bold text-lg rounded-2xl hover:shadow-2xl hover:brightness-105 transition-all duration-300 gap-2 shadow-xl border border-[#89986D]/30 hover:border-[#89986D]"
              >
                <Link to="/resume">View Resume</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About




