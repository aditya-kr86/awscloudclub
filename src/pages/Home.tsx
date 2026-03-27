import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-violet-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300"></div>
        <div className="absolute inset-0 opacity-10 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 dark:bg-violet-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400 dark:bg-violet-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">AWS </span>
            <span className="text-violet-600 dark:text-violet-400">Cloud Club, GCE Gaya</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Learn cloud computing by building real projects. From fundamentals to deployment —
            we make AWS accessible for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sessions"
              className="bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start Learning
            </Link>
            <a
              href="#about"
              className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-violet-600 dark:text-violet-400">What</span>
            <span className="text-gray-900 dark:text-white"> We Do</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-violet-400 dark:hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Learn by Building</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hands-on workshops where you build real cloud projects, not just watch tutorials.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-violet-400 dark:hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AWS Focused</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master the world's largest cloud platform used by Netflix, Airbnb, and more.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-violet-400 dark:hover:border-violet-500/50 transition-colors">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Driven</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn together, help each other, and grow as cloud practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Learning Path */}
      <section className="py-16 px-4 bg-white dark:bg-transparent transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="text-violet-600 dark:text-violet-400">Current</span>
            <span className="text-gray-900 dark:text-white"> Learning Path</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Web Hosting & Cloud Foundations
          </p>

          <div className="space-y-4">
            <Link to="/sessions/1" className="block bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 md:p-6 hover:border-violet-400 dark:hover:border-violet-500/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-600 dark:bg-violet-600 rounded-lg flex items-center justify-center font-bold text-white shrink-0">
                  01
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate">
                    Introduction to Cloud & Web Hosting Fundamentals
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm hidden sm:block">Cloud basics, service models, AWS ecosystem</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link to="/sessions/2" className="block bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 md:p-6 hover:border-violet-400 dark:hover:border-violet-500/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-600 dark:bg-violet-600 rounded-lg flex items-center justify-center font-bold text-white shrink-0">
                  02
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate">
                    Hands-On Lab: IAM, Billing & S3 Website Hosting
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm hidden sm:block">IAM users, budgets, deploy your first website</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <div className="bg-gray-50 dark:bg-gray-900/50 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-4 md:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center font-bold text-gray-400 dark:text-gray-500 shrink-0">
                  03
                </div>
                <div className="flex-grow">
                  <h3 className="text-base md:text-lg font-semibold text-gray-400 dark:text-gray-500">Coming Soon</h3>
                  <p className="text-gray-400 dark:text-gray-600 text-sm">EC2, custom domains, and more...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-violet-100 to-violet-50 dark:from-violet-500/10 dark:to-violet-600/10 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Cloud Journey?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Access our session handbooks and start learning AWS today.
          </p>
          <Link
            to="/sessions"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View All Sessions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
