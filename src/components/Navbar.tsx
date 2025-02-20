import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0a0a0f]/80 backdrop-blur-md fixed w-full z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a855f7] bg-clip-text hover:opacity-80 transition-opacity">
              superdanie.com
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-all hover:translate-y-[-1px]">Home</Link>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-all hover:translate-y-[-1px]">Projects</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-all hover:translate-y-[-1px]">About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-all hover:translate-y-[-1px]">Contact</Link>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all hover:translate-y-[-1px]">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/danielle-k-53955014a/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-all hover:translate-y-[-1px]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:danielle.dearmond.k@gmail.com" className="text-gray-300 hover:text-white transition-all hover:translate-y-[-1px]">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#60a5fa]"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}