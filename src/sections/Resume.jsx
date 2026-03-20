import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { containerVariants, itemVariants } from '../utils/animations'

const Resume = () => {
  const experiences = [
    {
      title: 'Business Analyst Intern',
      company: 'Gamage Recruiters Pvt Ltd',
      duration: 'August 2025 - February 2026',
      description: [
        'Prepared and finalized Business Requirements Documents (BRD) including functional and non-functional requirements',
        'Conducted Change Impact Analysis based on client feedback and updated documentation accordingly',
        'Performed stakeholder analysis, AS-IS and TO-BE process mapping, and GAP analysis',
        'Created Requirements Traceability Matrix (RTM) to track requirement changes',
        'Developed dashboards and data visualizations using Power BI, Tableau, R, and Excel',
        'Practiced advanced SQL queries for data analysis and reporting',
        'Designed KPI dashboards and wireframes to support business decision-making',
        'Collaborated with QA, Mobile, and Backend teams to understand testing, version control, and deployment processes',
        'Managed project tasks using Trello, Jira, and other collaboration tools',
        'Presented final project findings and solution recommendations to stakeholders'
      ]
    }
  ]

  const education = [
    {
      degree: 'BSc (Hons) in Software Engineering',
      school: 'CINEC Campus, Malabe',
      duration: '2022 - 2026'
    },
    {
      degree: 'Bachelor of Information Technology (Diploma)',
      school: 'University of Colombo School of Computing',
      duration: '2022 - present'
    },
    {
      degree: 'GCE Advanced Level (Physical Science Stream)',
      school: '',
      duration: '2020'
    },
    {
      degree: 'GCE Ordinary Level (9A)',
      school: '',
      duration: '2017'
    }
  ]

  const skillsData = [
    { category: 'Programming Languages', skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java'] },
    { category: 'Frameworks & Libraries', skills: ['React.js'] },
    { category: 'Databases', skills: ['MySQL', 'MariaDB', 'Firebase', 'MongoDB', 'PostgreSQL'] },
    { category: 'Testing', skills: ['Selenium WebDriver'] },
    { category: 'DevOps', skills: ['Docker'] },
    { category: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Figma', 'Canva'] },
    { category: 'Project Management', skills: ['Trello', 'Jira', 'ClickUp'] },
    { category: 'Other Tools', skills: ['Microsoft Office'] }
  ]

  const projects = [
    'AI Volunteer Based emergency system – React.js, Python, PostgreSQL, PgAdmin 4, Docker',
    'Gym promotional website - HTML, CSS, JS, EmailJS',
    'Shopping Website – Firebase Authentication, Dialogflow, Cloud Services, Docker, AWS',
    'Tuition management mobile app - Java, Firebase',
    'Online Bookstore Website – React + Vite – Node.js – JWT Tokens – API',
    'Digital Workforce Management System – React.js, Spring Boot, MariaDB',
    'Responsive Website for hotel management – HTML, CSS, JS, PHP, MySQL',
    'Library Management System – Java, PHP, MySQL',
    'Automated Instagram Login Testing – Selenium WebDriver'
  ]

  const softSkills = [
    'Problem Solving & Analytical Thinking',
    'Team Collaboration & Communication',
    'Technical & Tools Proficiency',
    'Attention to Detail',
    'Adaptability & Continuous Learning',
    'Agile Teamwork'
  ]

  const certifications = [
    'Certificate in Introduction to Cybersecurity - Cisco Networking Academy (2025 March)',
    'Certificate in Angular Basics - Simplilearn (2025 March)',
    'Certificate in Build Your Generative AI Productivity Skills - Microsoft and LinkedIn Learning (2025 March)',
    'Diploma in IT & Web Programming - Asian Computer Education (PVT) Ltd. (2013) - Distinction pass',
    'Professional Diploma in Graphic Design - Asian Computer Education (PVT) Ltd. (2013) - Merit pass'
  ]

  const competitions = [
    'Participated in 5th International Research symposium (CIRS-2024)',
    'Participated in 4th International Research symposium (CIRS-2023)',
    'Secretary of CINEC Techstrike Club 2025',
    'Team leader of Bolton house in Rotaract club of CINEC 24/25',
    'Head of content writing of CINEC Techstrike Club 23/24',
    'Member of Rotaract club of CINEC 23/24'
  ]

  const handleDownload = () => {
    window.print()
  }

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100"
        >
          Dushyanthi Baskaran
        </motion.h1>
        <motion.p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
          SOFTWARE ENGINEERING UNDERGRADUATE
        </motion.p>
        <motion.p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
          Negombo, Sri Lanka | +94 767396460 | dushyanthibaskaran8@gmail.com
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <motion.a 
            href="https://linkedin.com/in/dushyanthi-baskaran-85227827a"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/Dushyanthi-B"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
          >
            GitHub
          </motion.a>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 gap-2 shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L12 21l5.5-5.5m-5.5 5.5V8a1 1 0 012 0v7.5" />
          </svg>
          Download PDF Resume
        </motion.button>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-20">
        {/* Summary */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/70 to-blue-50/70 dark:from-gray-900/70 dark:to-blue-900/30 backdrop-blur-xl rounded-3xl p-12 border border-white/50 dark:border-gray-800/50 shadow-2xl"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
            Professional Summary
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
            As a passionate Software Engineering undergraduate, I bring a strong mix of technical skills and problem-solving abilities to every project. 
            With a solid foundation in programming and attention to detail, I excel in collaborative environments focused on innovation and efficiency. 
            I am eager to apply my skills, contribute fresh ideas, and help drive impactful solutions in a forward-thinking tech team.
          </motion.p>
        </motion.section>

        {/* Professional Experience */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
            Professional Experience
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full hidden lg:block" />
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-16 flex items-start lg:pl-16 relative"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center mr-6 -mt-2 flex-shrink-0 z-10">
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg" />
                </div>
                <div className="flex-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all lg:ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                  <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-lg font-medium text-emerald-600 mb-6">{exp.duration}</p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 text-emerald-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="group bg-gradient-to-br from-emerald-50 to-teal-50/70 dark:from-emerald-900/40 dark:to-teal-900/40 backdrop-blur-xl p-10 rounded-3xl border border-emerald-200/50 dark:border-emerald-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:from-emerald-100 hover:to-teal-100/70"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{edu.degree}</h3>
                {edu.school && <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">{edu.school}</p>}
                <p className="text-lg font-medium text-emerald-600">{edu.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-black mb-16 text-center bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-800/50 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-500"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">{category.category}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={skill} className="flex items-center p-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-4" />
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50/70 dark:from-orange-900/30 dark:to-yellow-900/30 backdrop-blur-xl rounded-3xl border border-orange-200/50 hover:border-orange-300/70 hover:shadow-xl transition-all group"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{project.split(' – ')[0]}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{project.split(' – ')[1]}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Soft Skills & Certifications */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-8 bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
              Soft Skills
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="group p-6 bg-emerald-50/70 dark:bg-emerald-900/40 rounded-2xl border border-emerald-200/50 hover:bg-emerald-100/70 dark:hover:bg-emerald-800/60 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4 group-hover:scale-125 transition-transform" />
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-8 bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  variants={itemVariants}
                  className="group p-6 bg-purple-50/70 dark:bg-purple-900/40 rounded-2xl border border-purple-200/50 hover:border-purple-300/70 hover:shadow-xl transition-all"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium block">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Competitions & Extracurricular */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-resume-800 via-resume-600 to-resume-400 bg-clip-text text-transparent dark:from-resume-400 dark:to-resume-100">
            Competitions & Extracurricular
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Competitions</h3>
              {competitions.map((comp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-indigo-50/70 dark:bg-indigo-900/40 rounded-2xl border border-indigo-200/50 hover:shadow-md transition-all"
                >
                  <span className="font-medium text-gray-800 dark:text-gray-200">{comp}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={itemVariants}
              className="p-12 text-center bg-gradient-to-br from-indigo-50 to-blue-50/70 dark:from-indigo-900/30 dark:to-blue-900/30 backdrop-blur-xl rounded-3xl border-4 border-dashed border-indigo-200 dark:border-indigo-800/50 hover:border-indigo-300 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">References</h3>
              <p className="text-xl font-medium text-gray-700 dark:text-gray-300">Available upon request</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  )
}

export default Resume

