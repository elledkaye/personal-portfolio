export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-[100px] opacity-20"></div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
            <p> Image section coming soon...</p>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-6">About Me</h1>
                <p className="text-gray-300 mb-6">
                I’m a Software Engineer with 7 years of experience in QA and software testing. I’ve earned certifications, completed my degree, and consider myself a driven, motivated, and eager learner. I’m passionate about automation, test design, and technology. When I’m not working on side projects, I enjoy spending time outdoors and staying active.
                </p>
              
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Experience</h2>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-white">Software Test Engineer</h3>
                    <p className="text-gray-400">May 2022 - Present</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-white">Software Testing Engineer (Anrdoid & iOS)</h3>
                    <p className="text-gray-400">April 2021 - May 2022</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-white">Software Quality Assurance Engineer</h3>
                  <p className="text-gray-400">Jun 2020 - Mar 2021</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}