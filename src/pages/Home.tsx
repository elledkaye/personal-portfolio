import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] to-[#a855f7] blur-[100px] opacity-10"></div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl relative">
            <span className="block bg-gradient-to-r from-[#60a5fa] to-[#a855f7] text-transparent bg-clip-text">Hi, I'm</span>
            <span className="block text-transparent bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text">Danielle Kaye</span>
          </h1>
          
          <p className="text-xl text-gray-400 mt-2 font-medium">Software test engineer, freelancer and so much more</p>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl relative leading-relaxed">
            Software test engineer passionate about tech who also enjoys creating beautiful and functional web applications.
          </p>
          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 relative">
            <div className="rounded-md">
              <Link
                to="/projects"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-[#60a5fa] to-[#a855f7] hover:opacity-90 transform hover:translate-y-[-2px] transition-all duration-200 md:py-4 md:text-lg md:px-10 shadow-lg shadow-blue-500/25"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#60a5fa] blur-[100px] opacity-5"></div>
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Featured Skills</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Software Testing', description: '.....' },
              { title: 'Web/Mobile Development', description: '.....' },
              { title: 'Automation', description: '....' },
            ].map((skill) => (
              <div
                key={skill.title}
                className="bg-white/5 backdrop-blur-md rounded-lg p-8 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300 border border-white/10 hover:border-[#60a5fa]/30 group hover:translate-y-[-2px]"
              >
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#60a5fa] transition-colors">{skill.title}</h3>
                <p className="text-gray-400 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}