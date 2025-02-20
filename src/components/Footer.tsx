import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f]/80 backdrop-blur-md border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-xl font-bold text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a855f7] bg-clip-text hover:opacity-80 transition-opacity">
              superdanie.com
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Software test engineer, freelancer and developer passionate about creating beautiful and functional web applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <div className="space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-white transition-all hover:translate-x-1">Home</Link>
              <Link to="/projects" className="block text-gray-300 hover:text-white transition-all hover:translate-x-1">Projects</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-all hover:translate-x-1">About</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-all hover:translate-x-1">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-all hover:translate-x-1"
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/danielle-k-53955014a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-all hover:translate-x-1"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn
              </a>
              <a
                href="mailto:danielle.dearmond.k@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-all hover:translate-x-1"
              >
                <Mail className="w-5 h-5 mr-3" />
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Danielle Kaye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}