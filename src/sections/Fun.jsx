import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Fun = () => {
  const [terminalInput, setTerminalInput] = useState('')
  const [output, setOutput] = useState([
    "Welcome to Developer Terminal v1.0",
    "",
    "Available commands:",
    "  whoami    - Display developer info",
    "  skills    - Show programming skills",
    "  projects  - List recent projects",
    "  clear     - Clear terminal",
    "  help      - Show this help",
    "",
    "> "
  ])
  const [cursorPos, setCursorPos] = useState(0)
  const inputRef = useRef(null)

  const commands = {
    whoami: () => [
      "👋 Hi! I'm a Software Engineering student",
      "💻 Building modern web apps with React & Node.js",
      "🎯 Currently seeking internship opportunities",
      "📧 Reach me: hello@yourname.com"
    ],
    skills: () => [
      "Frontend: React, Next.js, TypeScript, Tailwind CSS",
      "Backend: Node.js, Express, MongoDB, PostgreSQL",
      "Tools: Git, Docker, Vercel, Vite, Figma",
      "Learning: Three.js, GraphQL, Rust"
    ],
    projects: () => [
      "🌐 E-Commerce Platform (React + Stripe)",
      "📱 Task Manager (Real-time WebSockets)",
      "📊 Weather Dashboard (API + Charts)",
      "💬 Chat App (Firebase + Socket.io)",
      "Check GitHub for more!"
    ],
    clear: () => ["Terminal cleared!"],
    help: () => [
      "Available commands:",
      "  whoami    - Display developer info",
      "  skills    - Show programming skills",
      "  projects  - List recent projects",
      "  clear     - Clear terminal",
      "  help      - Show this help"
    ],
    easteregg: () => ["🥚 You found the easter egg! 🚀", "Follow me on GitHub for more secrets!"]
  }

  const handleCommand = useCallback(() => {
    const trimmedInput = terminalInput.trim().toLowerCase()
    let response = []

    if (trimmedInput === '') {
      response = ["Please enter a command"]
    } else if (commands[trimmedInput]) {
      response = commands[trimmedInput]()
    } else {
      response = [`Unknown command: ${trimmedInput}`, "Type \"help\" for available commands"]
    }

    setOutput(prev => [...prev.slice(0, -1), `> ${terminalInput}`, ...response.map(line => line), ''])
    setTerminalInput('')
  }, [terminalInput])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleCommand()
      }
      if (e.key === 'Tab') {
        e.preventDefault()
        const available = Object.keys(commands)
        const match = available.find(cmd => cmd.startsWith(terminalInput.toLowerCase()))
        if (match && match !== terminalInput.toLowerCase()) {
          setTerminalInput(match)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [terminalInput, handleCommand])

  const blinkCursor = cursorPos % 2 === 0

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-primary-50/50 dark:to-primary-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-primary-400">
            Interactive Terminal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Try typing commands! Test your developer skills in this interactive terminal.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/95 backdrop-blur-3xl rounded-3xl p-8 border border-emerald-500/30 shadow-2xl max-h-96 overflow-y-auto font-mono text-emerald-400"
        >
          <div className="flex items-center mb-4 pb-4 border-b border-emerald-500/30">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            </div>
            <span className="text-xs uppercase tracking-wider text-emerald-400">developer@portfolio:~$</span>
          </div>

          <div className="space-y-1 text-sm leading-relaxed">
            {output.slice(0, -1).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }}
                className="flex"
              >
                {line}
              </motion.div>
            ))}
            
            <div className="flex">
              <span className="text-emerald-400 flex-shrink-0">></span>
              <span className="ml-1">{terminalInput}</span>
              <span className={`ml-1 w-2 h-4 ${blinkCursor ? 'bg-emerald-400' : 'bg-transparent'} animate-pulse flex-shrink-0`} />
            </div>
          </div>
        </motion.div>

        <div className="mt-8 p-4 bg-primary-50/50 dark:bg-primary-900/50 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <input
              ref={inputRef}
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCommand()
              }}
              className="flex-1 max-w-md px-4 py-3 bg-white/60 border border-slate-300/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm font-mono"
              placeholder="Try 'help' or 'skills'..."
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCommand}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-mono font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Execute
            </motion.button>
          </div>
          
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            💡 Desktop users: Use the input above | Mobile: Click commands below
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:hidden gap-4">
          {['whoami', 'skills', 'projects', 'help'].map((cmd) => (
            <motion.button
              key={cmd}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setTerminalInput(cmd)
                handleCommand()
              }}
              className="px-6 py-4 bg-gradient-to-r from-emerald-500/80 to-teal-600/80 backdrop-blur-sm text-white font-mono font-semibold rounded-2xl hover:from-emerald-600 hover:to-teal-700 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-400/30"
            >
              {cmd}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl border border-emerald-200/30"
        >
          <h3 className="text-2xl font-bold mb-4 text-emerald-800">
            🎮 Bonus: Easter Egg!
          </h3>
          <p className="text-emerald-700 mb-4">
            Try typing "easteregg" for a surprise! 🐣
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Fun

