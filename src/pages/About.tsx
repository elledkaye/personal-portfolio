export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-[100px] opacity-20"></div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <img
                  src=""
                  alt="Profile"
                  className="rounded-lg shadow-md w-full h-auto border border-gray-700"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-6">About Me</h1>
                <p className="text-gray-300 mb-6">
                  I'm a passionate full-stack developer with 5 years of experience in building web applications.
                  My journey in software development started when I built my first website in college, and I've
                  been hooked ever since.
                </p>
                <p className="text-gray-300 mb-6">
                  I specialize in modern web technologies and have a strong foundation in both frontend and
                  backend development. I love solving complex problems and creating intuitive user experiences.
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Experience</h2>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-white">Senior Developer at Tech Corp</h3>
                    <p className="text-gray-400">2020 - Present</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-white">Full Stack Developer at StartUp Inc</h3>
                    <p className="text-gray-400">2018 - 2020</p>
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