import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'DATAFICATION: A Global Revolution in Progress',
    excerpt: 'Learn how I built a production-ready e-commerce platform using App Router, Server Actions, and Stripe payments. Complete guide with code.',
    date: '2023-12-12',
    readTime: '3 min',
    image: 'https://yogrove.medium.com/datafication-a-global-revolution-in-progress-2313e44a4d91',
    tags: ['Next.js', 'Stripe', 'TypeScript', 'Prisma']
  }

  const upcomingTopics = [
    'AI Projects & Case Studies',
    'Web Development Tutorials',
    'Internship Experience & Career Growth'
  ]

  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100 drop-shadow-lg">
            Welcome to my Blog
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto rounded-full mb-8 shadow-sm" />
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sharing my journey in software engineering, web development, AI projects, and career insights.
          </p>
          <p className="block mt-4 font-semibold text-slate-800 dark:text-slate-200 text-lg">
            More articles coming soon...
          </p>
        </motion.div>

        {/* FEATURED POST - BIG CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-300">
            Latest Article
          </h2>
          <div className="max-w-6xl mx-auto group bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl p-12 border border-slate-200/70 dark:border-slate-800/70 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="flex flex-wrap gap-3 mb-10">
                  {featuredPost.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700 group-hover:opacity-80">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-slate-900 dark:text-slate-100 transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-lg text-slate-500 dark:text-slate-400 mb-12">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime} read</span>
                </div>
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:brightness-[1.05] transition-all duration-500 shadow-lg border border-slate-200/30 hover:-translate-y-1"
                >
                  Read Full Article
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-[450px] object-cover rounded-3xl shadow-xl group-hover:scale-[1.02] group-hover:brightness-[1.02] transition-all duration-700 border-2 border-slate-200/50 dark:border-slate-700/50"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* COMING SOON SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-12 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-300">
            More Articles Coming Soon
          </h2>
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 p-12 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200">
                Topics I'll Write About
              </h3>
              <ul className="space-y-6">
                {upcomingTopics.map((topic, index) => (
                  <motion.li 
                    key={topic}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start gap-6 p-6 bg-white/70 dark:bg-slate-900/50 rounded-2xl hover:bg-white dark:hover:bg-slate-900 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group border border-slate-200/50 dark:border-slate-800/50"
                  >
                    <div className="w-3 h-3 bg-slate-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-slate-700 transition-colors" />
                    <span className="text-xl font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">{topic}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8 p-8 rounded-2xl bg-gradient-to-r from-slate-50/30 to-transparent dark:from-slate-900/30 border-r border-slate-200/50 dark:border-slate-700/50">
              <div className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">✍</div>
              <p className="text-xl text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                Stay tuned for in-depth technical guides and personal stories from my developer journey
              </p>
            </div>
          </div>
        </motion.div>

        {/* MEDIUM ARTICLES BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <a 
            href="https://medium.com/@dushyanthibaskaran/list/reading-list"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white font-bold text-xl rounded-3xl hover:shadow-xl hover:brightness-[1.05] transition-all duration-500 hover:-translate-y-1 shadow-lg border border-slate-300/20 backdrop-blur-sm"
          >
            Explore My Medium Articles
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        {/* GET IN TOUCH CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center p-16 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl transition-all duration-500"
        >
          <h3 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-300">
            Enjoyed Reading?
          </h3>
          <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto text-slate-700 dark:text-slate-300 leading-relaxed">
            Let's connect! I'd love to hear your thoughts and discuss collaboration opportunities.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold text-xl rounded-3xl hover:shadow-xl hover:brightness-[1.05] transition-all duration-500 hover:-translate-y-1 shadow-lg border border-slate-300/20 group"
          >
            Get In Touch
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Blog

