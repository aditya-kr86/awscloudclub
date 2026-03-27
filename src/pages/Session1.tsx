import { Link } from 'react-router-dom'

function Session1() {
  return (
    <div className="py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/sessions"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Sessions
          </Link>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-600 rounded-lg flex items-center justify-center font-bold text-lg md:text-xl text-white shrink-0">
              01
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Introduction to Cloud & Web Hosting Fundamentals
              </h1>
              <div className="flex items-center gap-4 mt-2 text-gray-500 dark:text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  20-25 mins
                </span>
              </div>
            </div>
          </div>

          <div className="bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 rounded-xl p-4">
            <h3 className="text-violet-700 dark:text-violet-400 font-semibold mb-2">Session Objective</h3>
            <p className="text-gray-700 dark:text-gray-300">
              By the end of this session, you'll understand what cloud computing is, why it matters,
              the difference between cloud service models, and why AWS is the leading cloud platform.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          {/* Section 1: Hook */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">The Big Question</h2>
            </div>
            <div className="p-4 md:p-6 space-y-4">
              <div className="bg-violet-50 dark:bg-violet-500/10 rounded-lg p-4 border-l-4 border-violet-500">
                <p className="text-gray-700 dark:text-gray-300 italic text-lg">"You deploy apps on Render, Vercel, or Netlify... but what actually runs behind the scenes?"</p>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                When you push your code and see your website go live, there's an entire infrastructure working behind the scenes.
                Understanding this infrastructure is the first step to becoming a cloud practitioner.
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Think about these scenarios:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400 mt-1">•</span>
                    What happens when 10,000 users suddenly visit your website?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400 mt-1">•</span>
                    What if your server crashes at midnight?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400 mt-1">•</span>
                    How does Netflix serve millions of users simultaneously without lag?
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                The answer to all these questions lies in understanding <strong className="text-violet-600 dark:text-violet-400">cloud computing</strong>.
              </p>
            </div>
          </section>

          {/* Section 2: Traditional vs Cloud */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Traditional Servers vs Cloud Computing</h2>
            </div>
            <div className="p-4 md:p-6 space-y-6">
              <div>
                <h3 className="text-violet-700 dark:text-violet-400 font-medium mb-3 text-lg">The Old Way: Physical Servers (CapEx Model)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Traditionally, companies had to buy and maintain their own servers. This is called the <strong>Capital Expenditure (CapEx)</strong> model.
                </p>

                <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg p-4">
                  <h4 className="font-medium text-red-700 dark:text-red-400 mb-3">Challenges with Physical Servers:</h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 text-sm font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <strong>Hardware Costs:</strong> Servers cost lakhs of rupees upfront. Need more capacity? Buy another server.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 text-sm font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <strong>Electricity Bills:</strong> Servers run 24/7, consuming massive amounts of power. A single rack can cost ₹50,000+/month in electricity.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 text-sm font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <strong>Cooling Systems:</strong> Servers generate heat. You need expensive AC systems running constantly.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 text-sm font-bold shrink-0 mt-0.5">4</span>
                      <div>
                        <strong>Maintenance Team:</strong> Need full-time IT staff to manage hardware failures, updates, and security.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 text-sm font-bold shrink-0 mt-0.5">5</span>
                      <div>
                        <strong>Downtime Risk:</strong> If your server fails, your entire business goes offline until it's fixed.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h3 className="text-violet-700 dark:text-violet-400 font-medium mb-3 text-lg">The New Way: Cloud Computing (OpEx Model)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Cloud computing eliminates all these problems. Instead of buying servers, you <strong>rent computing resources</strong> from providers like AWS. This is the <strong>Operational Expenditure (OpEx)</strong> model.
                </p>

                <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 dark:text-green-400 mb-3">Benefits of Cloud:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <strong>No upfront costs</strong> — Start with $0 and pay as you grow
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <strong>Pay only for what you use</strong> — Like an electricity bill
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <strong>Scale instantly</strong> — Need more servers? Add them in minutes, not months
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <strong>Global reach</strong> — Deploy in any country with one click
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Cloud Computing Basics */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">What is Cloud Computing?</h2>
            </div>
            <div className="p-4 md:p-6 space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                <strong>Cloud computing</strong> is the delivery of computing services—like storage, databases, servers, networking,
                software, and analytics—over the internet ("the cloud") on a pay-as-you-go basis.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-violet-50 dark:bg-violet-500/10 rounded-lg p-4 border border-violet-200 dark:border-violet-500/30">
                  <div className="w-10 h-10 bg-violet-100 dark:bg-violet-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div className="text-violet-700 dark:text-violet-400 font-medium mb-1">Storage</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Store unlimited data in the cloud (S3, EBS)</p>
                </div>
                <div className="bg-violet-50 dark:bg-violet-500/10 rounded-lg p-4 border border-violet-200 dark:border-violet-500/30">
                  <div className="w-10 h-10 bg-violet-100 dark:bg-violet-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="text-violet-700 dark:text-violet-400 font-medium mb-1">Compute</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Run applications on virtual servers (EC2, Lambda)</p>
                </div>
                <div className="bg-violet-50 dark:bg-violet-500/10 rounded-lg p-4 border border-violet-200 dark:border-violet-500/30">
                  <div className="w-10 h-10 bg-violet-100 dark:bg-violet-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="text-violet-700 dark:text-violet-400 font-medium mb-1">Networking</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Connect services securely (VPC, CloudFront)</p>
                </div>
                <div className="bg-violet-50 dark:bg-violet-500/10 rounded-lg p-4 border border-violet-200 dark:border-violet-500/30">
                  <div className="w-10 h-10 bg-violet-100 dark:bg-violet-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-violet-700 dark:text-violet-400 font-medium mb-1">Analytics</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Process and analyze data (Athena, Redshift)</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Concept: Pay-as-you-go</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Just like your electricity bill — you don't pay for a power plant, you pay for the units you consume.
                  Cloud works the same way. Use a server for 1 hour? Pay for 1 hour. Use 1GB storage? Pay for 1GB.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Real-World Analogies */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Understanding with Real-World Analogies</h2>
            </div>
            <div className="p-4 md:p-6 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🍕</span>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">The Pizza Analogy</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-500/10 rounded-lg p-4">
                    <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">CapEx: Buying a Pizza Oven</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Buy oven → Pay for ingredients → Learn to cook → Make pizza yourself → Maintain equipment → What if oven breaks?
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">OpEx: Ordering from Domino's</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Just order → Pay per pizza → No equipment needed → Scale up/down easily → Someone else handles everything
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 italic">
                  Cloud is like Domino's — you get what you need, when you need it, without owning the kitchen.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🚗</span>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">The Uber Analogy</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-500/10 rounded-lg p-4">
                    <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">Owning a Car (Traditional)</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Buy car (₹5L+) → Insurance → Fuel → Maintenance → Parking → Driver salary → What if you don't use it daily?
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">Using Uber (Cloud)</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Open app → Book ride → Pay per trip → No maintenance → Scale up (book multiple cabs) → No idle costs
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 italic">
                  Cloud resources work like Uber — on-demand, pay-per-use, no ownership hassles.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Cloud Superpowers */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">The 5 Cloud Superpowers</h2>
            </div>
            <div className="p-4 md:p-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-500/10 dark:to-transparent rounded-lg p-4 border-l-4 border-violet-500">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">1. Scalability</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Grow your resources as your business grows. Start with 1 server, scale to 1000 servers when needed.
                    <span className="text-violet-600 dark:text-violet-400"> Example: E-commerce site handling Diwali sale traffic.</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-500/10 dark:to-transparent rounded-lg p-4 border-l-4 border-violet-500">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">2. Elasticity</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Automatically scale up during peak hours and scale down during quiet times. Pay only for what you use.
                    <span className="text-violet-600 dark:text-violet-400"> Example: News website during election results — traffic spikes for few hours.</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-500/10 dark:to-transparent rounded-lg p-4 border-l-4 border-violet-500">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">3. Fault Tolerance</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    System continues working even if some components fail. Data is replicated across multiple locations.
                    <span className="text-violet-600 dark:text-violet-400"> Example: Your files in Google Drive are safe even if one server crashes.</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-500/10 dark:to-transparent rounded-lg p-4 border-l-4 border-violet-500">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">4. Disaster Recovery</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Recover quickly from natural disasters, power outages, or cyber attacks with backups in multiple regions.
                    <span className="text-violet-600 dark:text-violet-400"> Example: Mumbai data center down? Automatically switch to Singapore.</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-violet-50 to-transparent dark:from-violet-500/10 dark:to-transparent rounded-lg p-4 border-l-4 border-violet-500">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">5. High Availability</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Your application stays online 99.99% of the time (only ~52 minutes downtime per year).
                    <span className="text-violet-600 dark:text-violet-400"> Example: Banks and payment gateways need 24/7 uptime.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Real-World Example */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Real-World Example: How Hotstar Handles IPL</h2>
            </div>
            <div className="p-4 md:p-6 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                During an IPL final, Hotstar serves <strong>25+ million concurrent viewers</strong>. How do they handle this?
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">The Auto-Scaling Magic:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-violet-100 dark:bg-violet-500/20 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 text-sm font-bold shrink-0">1</span>
                    <p className="text-gray-700 dark:text-gray-300">Normal day: 100 servers running</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-violet-100 dark:bg-violet-500/20 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 text-sm font-bold shrink-0">2</span>
                    <p className="text-gray-700 dark:text-gray-300">Match starts: Traffic increases → Cloud automatically adds 500 more servers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-violet-100 dark:bg-violet-500/20 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 text-sm font-bold shrink-0">3</span>
                    <p className="text-gray-700 dark:text-gray-300">Final over: Peak traffic → 2000+ servers running</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-violet-100 dark:bg-violet-500/20 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 text-sm font-bold shrink-0">4</span>
                    <p className="text-gray-700 dark:text-gray-300">Match ends: Traffic drops → Servers automatically scale down to 100</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-lg p-4">
                <p className="text-green-700 dark:text-green-400 font-medium">
                  This is the power of cloud — automatically scaling to meet demand, and paying only for what you use!
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Cloud Service Models */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Cloud Service Models: IaaS vs PaaS vs SaaS</h2>
            </div>
            <div className="p-4 md:p-6 space-y-4">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cloud services come in three main flavors, each offering different levels of control and management:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                      IaaS
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Infrastructure as a Service</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Maximum control, most responsibility</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    You get raw computing resources (servers, storage, networking). You manage everything else — OS, runtime, applications.
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm"><strong>Examples:</strong> AWS EC2, Google Compute Engine, DigitalOcean Droplets</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1"><strong>Use when:</strong> You need full control over your infrastructure</p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                      PaaS
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Platform as a Service</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Focus on code, platform handles infrastructure</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    You just deploy your code. The platform manages servers, OS updates, scaling, and load balancing.
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 text-sm"><strong>Examples:</strong> Heroku, Vercel, AWS Elastic Beanstalk, Railway</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1"><strong>Use when:</strong> You want to focus on code, not infrastructure</p>
                </div>

                <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
                      SaaS
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Software as a Service</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Ready-to-use software, zero management</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    Complete applications delivered over the internet. Just sign up and start using — no installation, no maintenance.
                  </p>
                  <p className="text-green-600 dark:text-green-400 text-sm"><strong>Examples:</strong> Gmail, Slack, Notion, Zoom, Netflix</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1"><strong>Use when:</strong> You need ready-made software solutions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Why AWS */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Why Are We Learning AWS?</h2>
            </div>
            <div className="p-4 md:p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">Market Leader</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    AWS holds ~32% of the global cloud market share — more than Azure and GCP combined. Most companies use AWS.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">200+ Services</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    From basic compute to AI/ML, IoT, blockchain — AWS has a service for everything you can imagine.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">Global Infrastructure</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    33 regions, 105 availability zones across the world. Deploy in Mumbai, Singapore, or anywhere else.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">Career Opportunities</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    AWS skills are in high demand. Cloud engineers earn 30-50% more than traditional developers.
                  </p>
                </div>
              </div>

              <div className="bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 rounded-lg p-4">
                <h4 className="font-medium text-violet-700 dark:text-violet-400 mb-2">Companies Using AWS</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Netflix, Airbnb, Spotify, Samsung, BMW, Coca-Cola, McDonald's, NASA, and thousands more trust AWS for their infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Club Vision */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Our Club Vision</h2>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-medium text-sm">Learn by Building</h3>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197v-1a6 6 0 00-9-5.197" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-medium text-sm">Hands-on Labs</h3>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-medium text-sm">Real Projects</h3>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-center">
                In the coming sessions, we'll deploy real websites, work with databases,
                set up serverless functions, and build portfolio-worthy cloud projects together.
              </p>
            </div>
          </section>

          {/* Outcome */}
          <section className="bg-gradient-to-r from-violet-100 to-violet-50 dark:from-violet-500/10 dark:to-violet-600/10 border border-violet-200 dark:border-violet-500/30 rounded-xl p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-violet-700 dark:text-violet-400 mb-4">What You Learned Today</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                What runs behind Vercel/Render and why cloud matters
              </li>
              <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Traditional servers vs Cloud computing (CapEx vs OpEx)
              </li>
              <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                The 5 cloud superpowers: Scalability, Elasticity, Fault Tolerance, DR, HA
              </li>
              <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Service models: IaaS, PaaS, SaaS and when to use each
              </li>
              <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Why AWS is the industry standard and worth learning
              </li>
            </ul>
          </section>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              to="/sessions"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Sessions
            </Link>
            <Link
              to="/sessions/2"
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Next: Session 2
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Session1
