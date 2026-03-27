import { Link } from 'react-router-dom'

interface Session {
  id: number
  number: string
  title: string
  description: string
  duration: string
  topics: string[]
  status: 'available' | 'coming'
}

const sessions: Session[] = [
  {
    id: 1,
    number: '01',
    title: 'Introduction to Cloud & Web Hosting Fundamentals',
    description: 'Understanding cloud computing concepts, service models (IaaS, PaaS, SaaS), and AWS ecosystem overview.',
    duration: '60-75 mins',
    topics: ['Cloud Basics', 'Traditional vs Cloud', 'Service Models', 'AWS Overview'],
    status: 'available'
  },
  {
    id: 2,
    number: '02',
    title: 'Hands-On Lab: IAM, Billing & S3 Website Hosting',
    description: 'Practical session on AWS account safety, IAM users/groups, billing protection, and deploying a static website on S3.',
    duration: '90-120 mins',
    topics: ['IAM Basics', 'Billing & Budgets', 'S3 Hosting', 'Security'],
    status: 'available'
  },
  {
    id: 3,
    number: '03',
    title: 'Coming Soon: EC2 & Dynamic Hosting',
    description: 'Learn about EC2 instances, custom domains, and CloudFront for dynamic web hosting.',
    duration: 'TBD',
    topics: ['EC2', 'Custom Domain', 'CloudFront'],
    status: 'coming'
  }
]

function Sessions() {
  return (
    <div className="py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-violet-600 dark:text-violet-400">Session</span>
            <span className="text-gray-900 dark:text-white"> Handbooks</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Step-by-step guides for each session. Use these as reference material
            while working on your cloud projects.
          </p>
        </div>

        <div className="space-y-6">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`bg-white dark:bg-gray-900 border rounded-xl overflow-hidden transition-all ${
                session.status === 'available'
                  ? 'border-gray-200 dark:border-gray-800 hover:border-violet-400 dark:hover:border-violet-500/50'
                  : 'border-dashed border-gray-300 dark:border-gray-700'
              }`}
            >
              <div className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center font-bold text-base md:text-lg shrink-0 ${
                    session.status === 'available'
                      ? 'bg-violet-600 dark:bg-violet-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500'
                  }`}>
                    {session.number}
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <h2 className={`text-lg md:text-xl font-semibold ${
                        session.status === 'available' ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
                      }`}>
                        {session.title}
                      </h2>
                      {session.status === 'available' && (
                        <span className="bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded-full">
                          Available
                        </span>
                      )}
                    </div>

                    <p className={`mb-4 text-sm md:text-base ${
                      session.status === 'available' ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400 dark:text-gray-600'
                    }`}>
                      {session.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {session.duration}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {session.topics.map((topic, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2 py-1 rounded ${
                              session.status === 'available'
                                ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
                            }`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {session.status === 'available' && (
                <Link
                  to={`/sessions/${session.id}`}
                  className="flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-800 hover:bg-violet-50 dark:hover:bg-violet-500/10 text-violet-600 dark:text-violet-400 font-medium py-3 md:py-4 border-t border-gray-200 dark:border-gray-800 transition-colors"
                >
                  View Handbook
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sessions
