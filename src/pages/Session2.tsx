import { Link } from 'react-router-dom'

interface CodeBlockProps {
  children: string
  title?: string
}

function CodeBlock({ children, title }: CodeBlockProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-gray-200 dark:bg-gray-800 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-300 dark:border-gray-700">
          {title}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-xs md:text-sm text-violet-700 dark:text-violet-300">
        <code>{children}</code>
      </pre>
    </div>
  )
}

interface ScreenshotPlaceholderProps {
  title: string
  description?: string
  highlights?: string[]
  image?: string
}

{/* <ScreenshotPlaceholder
  title="AWS Console Sign In"
  description="The AWS sign-in page"
  highlights={["Sign In button", "Root user option"]}
  image="/images/session-2/aws-signin.png"
/> */}

function ScreenshotPlaceholder({ title, description, highlights, image }: ScreenshotPlaceholderProps) {
  if (image) {
    return (
      <div className="my-4 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
        <img
          src={image}
          alt={title}
          className="w-full h-auto"
        />
        {(description || highlights) && (
          <div className="bg-gray-100 dark:bg-gray-800 p-4">
            {description && <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{description}</p>}
            {highlights && highlights.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 text-xs px-2 py-1 rounded-full"
                  >
                    <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 my-4">
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">{title}</h4>
        {description && <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{description}</p>}
        {highlights && highlights.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {highlights.map((highlight, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 text-xs px-2 py-1 rounded-full"
              >
                <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </span>
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface StepProps {
  number: number
  title: string
  children: React.ReactNode
}

function Step({ number, title, children }: StepProps) {
  return (
    <div className="relative pl-12 pb-8 border-l-2 border-violet-200 dark:border-violet-500/30 last:border-l-0 last:pb-0">
      <div className="absolute left-0 -translate-x-1/2 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
        {number}
      </div>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 md:p-5">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{title}</h4>
        {children}
      </div>
    </div>
  )
}

function Session2() {
  const iamPolicy = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:*"],
      "Resource": "*"
    },
    {
      "Effect": "Deny",
      "Action": [
        "ec2:*",
        "rds:*",
        "lambda:*",
        "iam:*",
        "organizations:*",
        "cloudformation:*",
        "budgets:*",
        "ce:*"
      ],
      "Resource": "*"
    }
  ]
}`

  const bucketPolicy = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}`

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
              02
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Hands-On Lab: IAM, Billing & S3 Website Hosting
              </h1>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 text-gray-500 dark:text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  40-50 mins
                </span>
                <span className="bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 text-xs px-2 py-1 rounded-full">
                  Hands-On Lab
                </span>
              </div>
            </div>
          </div>

          <div className="bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 rounded-xl p-4">
            <h3 className="text-violet-700 dark:text-violet-400 font-semibold mb-2">What You'll Build Today</h3>
            <p className="text-gray-700 dark:text-gray-300">
              By the end of this session, you'll have a <strong>live website</strong> hosted on AWS S3 that anyone in the world can access!
              You'll also learn to protect your AWS account from surprise bills.
            </p>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-8 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-xl p-4">
          <h3 className="text-blue-700 dark:text-blue-400 font-semibold mb-3 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Prerequisites
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
              An AWS account (free tier eligible)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
              A simple HTML file (we'll provide one if you don't have it)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
              Access to your email for verification
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="space-y-8 md:space-y-10">

          {/* Part 1: Account Safety */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Part 1: Account Safety First</h2>
            </div>

            <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-xl p-4 mb-6">
              <p className="text-red-700 dark:text-red-400 font-medium flex items-start gap-2">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>
                  <strong>CRITICAL:</strong> AWS charges real money! A misconfigured service can cost thousands of rupees.
                  We'll set up billing alerts FIRST before doing anything else.
                </span>
              </p>
            </div>

            {/* Understanding Root vs IAM */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Understanding Root User vs IAM User</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">👑</span>
                    <h4 className="font-medium text-red-700 dark:text-red-400">Root User (Owner)</h4>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Created when you sign up</li>
                    <li>• Has <strong>UNLIMITED</strong> access</li>
                    <li>• Can delete entire account</li>
                    <li>• <span className="text-red-600 dark:text-red-400 font-medium">Never use for daily work!</span></li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">👤</span>
                    <h4 className="font-medium text-green-700 dark:text-green-400">IAM User (Worker)</h4>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Created by you with specific permissions</li>
                    <li>• Limited access (you control)</li>
                    <li>• Can be deleted/disabled</li>
                    <li>• <span className="text-green-600 dark:text-green-400 font-medium">Use this for daily work!</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step by Step: Create Budget */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div className="bg-violet-50 dark:bg-violet-500/10 px-5 py-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Step-by-Step: Set Up Billing Alerts</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">This will email you when your spending reaches certain limits</p>
              </div>

              <div className="p-5">
                <div className="space-y-0">
                  <Step number={1} title="Open AWS Console">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Go to <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">aws.amazon.com</code></li>
                      <li>2. Click <strong>"Sign In to the Console"</strong> (top right)</li>

                      <ScreenshotPlaceholder
                        title="AWS Console Sign In"
                        image="/images/session-2/1-aws-signin.png"
                      />

                      <li>3. Clink on <strong>"Sign in using root user email"</strong> Button</li>

                      <ScreenshotPlaceholder
                        title="AWS Console Sign In"
                        image="/images/session-2/2-root-user-sign-in.png"
                      />

                      <li>4. Enter your Root user email and password and click on <strong>"Sign in"</strong></li>
                    </ol>
                      <ScreenshotPlaceholder
                        title="AWS Console Sign In"
                        image="images/session-2/3-click-sign-in.png"
                      />
                  </Step>

                  <Step number={2} title="Navigate to Billing Dashboard">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Click on your <strong>account name</strong> (top right corner)</li>
                      <ScreenshotPlaceholder
                        title="Account Menu"
                        image="public/images/session-2/4-account-name-dropdown.png"
                      />
                      <li>2. Select <strong>"Billing Dashboard"</strong> from dropdown</li>
                      <ScreenshotPlaceholder
                        title="Billing Dashboard"
                        image="public/images/session-2/5-billing-dashboard-option.png"
                      />
                    </ol>

                    
                    
                    <div className="bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 rounded-lg p-3 mt-3">
                      <p className="text-violet-700 dark:text-violet-400 text-sm">
                        <strong>Alternative:</strong> Type "Billing" in the search bar at the top
                      </p>
                    </div>
                  </Step>

                  <Step number={3} title="Go to Budgets">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. In the left sidebar, click <strong>"Budgets"</strong></li>
                        <ScreenshotPlaceholder
                          title="Budgets Page"
                          image='public/images/session-2/6-budgets-in-sidebar.png'
                        />
                      <li>2. Click the <strong>"Create budget"</strong> button</li>
                        <ScreenshotPlaceholder
                          title="Create Budget Button"
                          image='public/images/session-2/7-create-budget-button.png'
                        />
                    </ol>
                  </Step>

                  <Step number={4} title="Choose Budget Type">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Select <strong>"Use a template (simplified)"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create Budget Button"
                          image='public/images/session-2/8-use-template-option.png'
                        />
                      <li>2. Choose <strong>"Monthly cost budget"</strong></li>
                        <ScreenshotPlaceholder
                          title="Monthly Cost Budget"
                          image='public/images/session-2/9-monthly-cost-budget.png'
                        />
                    </ol>
                  </Step>

                  <Step number={5} title="Configure Budget Amount">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Budget name: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">My-Monthly-Budget</code></li>
                        <ScreenshotPlaceholder
                          title="Budget name"
                          image='public/images/session-2/10-budget-name.png'
                        />
                      <li>2. Enter budgeted amount: <strong>$2.00</strong> (or ₹160)</li>
                        <ScreenshotPlaceholder
                          title="Budget amount"
                          image='public/images/session-2/11-budget-amount.png'
                        />
                      <li>3. Email recipients: <strong>Enter your email address</strong></li>
                        <ScreenshotPlaceholder
                          title="Email recipients"
                          image='public/images/session-2/12-email-recipients.png'
                        />
                    </ol>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mt-3">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        <strong>Why $2?</strong> This is enough for learning. You'll get alerts at 50%, 80%, and 100% of this amount.
                      </p>
                    </div>
                  </Step>

                  <Step number={6} title="Create Budget">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Review your settings</li>
                      <li>2. Click <strong>"Create budget"</strong></li>
                        <ScreenshotPlaceholder
                          title="Review and Create Budget"
                          image='public/images/session-2/13-review-create-budget.png'
                        />
                      <li>3. You should see a success message!</li>
                    </ol>

                    <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-lg p-3 mt-3">
                      <p className="text-green-700 dark:text-green-400 text-sm font-medium flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        You'll now receive email alerts when spending reaches 50%, 80%, and 100%!
                      </p>
                    </div>
                  </Step>
                </div>
              </div>
            </div>
          </section>

          {/* Part 2: Create IAM User */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Part 2: Create a Safe IAM User</h2>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div className="bg-violet-50 dark:bg-violet-500/10 px-5 py-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Step-by-Step: Create IAM Group & User</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">We'll create a limited user that can only access S3</p>
              </div>

              <div className="p-5">
                <div className="space-y-0">
                  <Step number={1} title="Navigate to IAM">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. In the AWS Console search bar, type <strong>"IAM"</strong></li>
                      <li>2. Click on <strong>"IAM"</strong> (not IAM Identity Center)</li>
                    </ol>
                    <ScreenshotPlaceholder
                      title="Search for IAM"
                      image="public/images/session-2/14-search-iam.png"
                    />
                  </Step>

                  <Step number={2} title="Create User Group">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. In left sidebar, click <strong>"User groups"</strong></li>
                        <ScreenshotPlaceholder
                          title="User groups page"
                          image='public/images/session-2/15-user-group.png'
                        />
                      <li>2. Click <strong>"Create group"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create group button"
                          image='public/images/session-2/16-create-group-button.png'
                        />
                      <li>3. Group name: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">S3-Lab-Users</code></li>
                        <ScreenshotPlaceholder
                          title="Group name field"
                          image='public/images/session-2/17-create-group-name.png'
                        />
                      <li>4. <span className="text-red-600 dark:text-red-400">Don't attach any policy yet</span> - click <strong>"Create group"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create Group Finalize"
                          image='public/images/session-2/18-create-group.png'
                        />
                    </ol>
                  </Step>

                  <Step number={3} title="Create Custom Policy">
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      Now we'll create a policy that <strong>allows S3 access</strong> but <strong>blocks expensive services</strong>.
                    </p>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. In left sidebar, click <strong>"Policies"</strong></li>
                        <ScreenshotPlaceholder
                            title="Policies Page"
                            image='public/images/session-2/19-policies.png'
                        />
                      <li>2. Click <strong>"Create policy"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create Policy Button"
                          image='public/images/session-2/20-create-policy-button.png'
                        />
                      <li>3. Click the <strong>"JSON"</strong> tab</li>
                        <ScreenshotPlaceholder
                          title="Policy Editor - JSON Tab"
                          image='public/images/session-2/21-policy-json-tab.png'
                        />
                      <li>4. Delete everything and paste this policy:</li>
                    </ol>
                    <div className="mt-3">
                      <CodeBlock title="Custom IAM Policy - Copy this exactly">{iamPolicy}</CodeBlock>
                    </div>
                        <ScreenshotPlaceholder
                          title="Policy Editor - Paste JSON"
                          image='public/images/session-2/22-policy-json-paste.png'
                        />
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm mt-4" start={5}>
                      <li>5. Click <strong>"Next"</strong></li>
                        <ScreenshotPlaceholder
                          title="Policy Review Step"
                          image='public/images/session-2/23-policy-review.png'
                        />
                      <li>6. Policy name: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">S3-Only-Lab-Policy</code></li>
                        <ScreenshotPlaceholder
                          title="Policy Name"
                          image='public/images/session-2/24-policy-name.png'
                        />
                      <li>7. Click <strong>"Create policy"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create Policy Finalize"
                          image='public/images/session-2/25-create-policy.png'
                        />
                    </ol>
                    <div className="bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 rounded-lg p-3 mt-3">
                      <p className="text-violet-700 dark:text-violet-400 text-sm">
                        <strong>What this policy does:</strong> Allows all S3 operations but explicitly denies EC2, RDS, Lambda, and other expensive services.
                      </p>
                    </div>
                  </Step>

                  <Step number={4} title="Attach Policy to Group">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Go back to <strong>"User groups"</strong></li>
                      <li>2. Click on <strong>"S3-Lab-Users"</strong> group</li>
                        <ScreenshotPlaceholder
                          title="User Group List"
                          image='public/images/session-2/26-user-group-list.png'
                        />
                      <li>3. Go to <strong>"Permissions"</strong> tab</li>
                        <ScreenshotPlaceholder
                          title="Group Permissions Tab"
                          image='public/images/session-2/27-group-permissions-tab.png'
                        />
                      <li>4. Click <strong>"Add permissions"</strong> → <strong>"Attach policies"</strong></li>
                        <ScreenshotPlaceholder
                          title="Add Permissions to Group"
                          image='public/images/session-2/28-add-permissions.png'
                        />
                      <li>5. Search for <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">S3-Only-Lab-Policy</code></li>
                      <li>6. Check the box and click <strong>"Attach policies"</strong></li>
                    </ol>
                    <ScreenshotPlaceholder
                      title="Attach Policy to Group"
                      image='public/images/session-2/29-attach-policy.png'
                    />
                  </Step>

                  <Step number={5} title="Create IAM User">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. In left sidebar, click <strong>"Users"</strong></li>
                        <ScreenshotPlaceholder
                          title="Users Page"
                          image='public/images/session-2/30-users-page.png'
                        />
                      <li>2. Click <strong>"Create user"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create User Button"
                          image='public/images/session-2/31-create-user-button.png'
                        />
                      <li>3. User name: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">lab-user</code></li>
                      <li>4. Check <strong>"Provide user access to AWS Management Console"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create User - Access Type"
                          image='public/images/session-2/32-create-user-access-type.png'
                        />
                      <li>5. Select <strong>"I want to create an IAM user"</strong></li>
                      <li>6. Choose <strong>"Autogenerated password"</strong></li>
                      <li>7. Check <strong>"User must create a new password at next sign-in"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create User - Password Options"
                          image='public/images/session-2/33-create-user-password-options.png'
                        />
                      <li>8. Click <strong>"Next"</strong></li>
                    </ol>
        
                  </Step>

                  <Step number={6} title="Add User to Group">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Select <strong>"Add user to group"</strong></li>
                      <li>2. Check the box for <strong>"S3-Lab-Users"</strong> group</li>
                      <li>3. Click <strong>"Next"</strong></li>
                        <ScreenshotPlaceholder
                          title="Add User to Group"
                          image='public/images/session-2/34-add-user-to-group.png'
                        />
                      <li>4. Click <strong>"Create user"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create User Finalize"
                          image='public/images/session-2/35-create-user.png'
                        />
                    </ol>
                  </Step>

                  <Step number={7} title="Save Credentials">
                    <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg p-3 mb-3">
                      <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                        IMPORTANT: Download or copy the sign-in URL and password NOW! You won't see these again.
                      </p>
                    </div>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Click <strong>"Download .csv file"</strong> or copy the password</li>
                      <li>2. Copy the <strong>Console sign-in URL</strong></li>
                        <ScreenshotPlaceholder
                          title="Console Sign-In URL"
                          image='public/images/session-2/36-console-sign-in-url.png'
                        />
                      <li>3. Save these in a secure location</li>
                    </ol>
      
                    <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-lg p-3 mt-3">
                      <p className="text-green-700 dark:text-green-400 text-sm font-medium">
                        You can now sign out and sign in with your new IAM user for safer daily work!
                      </p>
                    </div>
                  </Step>
                </div>
              </div>
            </div>
          </section>

          {/* Part 3: S3 Website */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-violet-100 dark:bg-violet-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Part 3: Deploy Your Website on S3</h2>
            </div>

            {/* What is S3 */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">What is Amazon S3?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-violet-50 dark:bg-violet-500/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🪣</span>
                    <h4 className="font-medium text-violet-700 dark:text-violet-400">Bucket</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    A container for storing files. Think of it as a folder with a unique name across ALL of AWS.
                  </p>
                </div>
                <div className="bg-violet-50 dark:bg-violet-500/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">📄</span>
                    <h4 className="font-medium text-violet-700 dark:text-violet-400">Object</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    A file stored in a bucket. Your HTML, CSS, JS, images are all objects.
                  </p>
                </div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
              <h4 className="text-center text-gray-900 dark:text-white font-medium mb-4">How S3 Static Hosting Works</h4>
              <div className="flex items-center justify-center gap-3 md:gap-6 overflow-x-auto">
                <div className="text-center shrink-0">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">You</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="text-center shrink-0">
                  <div className="w-14 h-14 bg-violet-100 dark:bg-violet-500/20 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl">🪣</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">S3 Bucket</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="text-center shrink-0">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Internet</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="text-center shrink-0">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-500/20 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl">👥</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Visitors</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div className="bg-violet-50 dark:bg-violet-500/10 px-5 py-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">Step-by-Step: Create S3 Bucket & Host Website</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Follow these steps exactly to deploy your first website</p>
              </div>

              <div className="p-5">
                <div className="space-y-0">
                  <Step number={1} title="Navigate to S3">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. In the search bar, type <strong>"S3"</strong></li>
                      <li>2. Click on <strong>"S3"</strong> service</li>
                    </ol>
                    <ScreenshotPlaceholder
                      title="Search for S3"
                      image='public/images/session-2/37-search-s3.png'
                    />
                  </Step>

                  <Step number={2} title="Create Bucket">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Click <strong>"Create bucket"</strong></li>
                        <ScreenshotPlaceholder
                          title="Create Bucket Button"
                          image='public/images/session-2/38-create-bucket-button.png'
                        />
                      <li>2. AWS Region: <strong>Asia Pacific (Mumbai) ap-south-1</strong></li>
                        <ScreenshotPlaceholder
                          title="Choose Region"
                          image='public/images/session-2/39-choose-region.png'
                        />
                      <li>3. Bucket name: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">yourname-portfolio-2026</code></li>
                        <ScreenshotPlaceholder
                          title="Bucket Name"
                          image='public/images/session-2/40-bucket-name.png'
                        />
                    </ol>
                    <div className="bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 rounded-lg p-3 my-3">
                      <p className="text-violet-700 dark:text-violet-400 text-sm">
                        <strong>Important:</strong> Bucket names must be globally unique across ALL AWS accounts.
                        Add your name or random numbers to make it unique.
                      </p>
                    </div>
                  </Step>

                  <Step number={3} title="Disable Public Access Block (Critical!)">
                    <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg p-3 mb-3">
                      <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                        This step is required for public website access. Without it, no one can see your site!
                      </p>
                    </div>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Scroll down to <strong>"Block Public Access settings for this bucket"</strong></li>
                      <li>2. <strong className="text-red-600 dark:text-red-400">UNCHECK</strong> "Block all public access"</li>
                      <li>3. A warning will appear - <strong>check the acknowledgment box</strong></li>
                    </ol>
                    <ScreenshotPlaceholder
                      title="Disable Public Access Block"
                      image='public/images/session-2/41-disable-public-access-block.png'
                    />
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm mt-3" start={4}>
                      <li>4. Scroll down and click <strong>"Create bucket"</strong></li>
                    </ol>
                    <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-lg p-3 mt-3">
                      <p className="text-green-700 dark:text-green-400 text-sm font-medium">
                        Bucket created! You should see it in your bucket list.
                      </p>
                    </div>
                  </Step>

                  <Step number={4} title="Upload Your Website Files">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Click on your bucket name to open it</li>
                      <li>2. Click <strong>"Upload"</strong></li>
                        <ScreenshotPlaceholder
                          title="Upload Files"
                          image='public/images/session-2/42-upload-files.png'
                        />
                      <li>3. Click <strong>"Add files"</strong> and select your files:</li>
                        <ScreenshotPlaceholder
                          title="Add Files"
                          image='public/images/session-2/43-add-files.png'
                        />
                    </ol>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 my-3">
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-2"><strong>Required files:</strong></p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">index.html</code> - Your main page (required)</li>
                        <li>• <code className="text-gray-500">styles.css</code> - Your styles (optional)</li>
                        <li>• <code className="text-gray-500">script.js</code> - Your JavaScript (optional)</li>
                        <li>• <code className="text-gray-500">images/</code> - Your images folder (optional)</li>
                      </ul>
                    </div>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm mt-3" start={4}>
                      <li>4. Click <strong>"Upload"</strong> at the bottom</li>
                      <li>5. Wait for upload to complete, then click <strong>"Close"</strong></li>
                    </ol>
                  </Step>

                  <Step number={5} title="Enable Static Website Hosting">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Go to <strong>"Properties"</strong> tab</li>
                        <ScreenshotPlaceholder
                          title="Properties Tab"
                          image='public/images/session-2/44-properties-tab.png'
                        />
                      <li>2. Scroll ALL the way down to <strong>"Static website hosting"</strong></li>
                      <li>3. Click <strong>"Edit"</strong></li>
                        <ScreenshotPlaceholder
                          title="Static Website Hosting Section"
                          image='public/images/session-2/45-static-website-hosting-section.png'
                        />
                    </ol>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm mt-3" start={4}>
                      <li>4. Select <strong>"Enable"</strong></li>
                      <li>5. Index document: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">index.html</code></li>
                        <ScreenshotPlaceholder
                          title="Enable Static Website Hosting"
                          image='public/images/session-2/46-enable-static-hosting.png'
                        />
                      <li>6. Error document (optional): <code className="text-gray-500">error.html</code></li>
                      <li>7. Scroll down and Click <strong>"Save changes"</strong></li>
                    </ol>
                    <div className="bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 rounded-lg p-3 mt-3">
                      <p className="text-violet-700 dark:text-violet-400 text-sm">
                        <strong>Copy the endpoint URL!</strong> It will look like: <code className="text-xs">http://bucket-name.s3-website.ap-south-1.amazonaws.com</code>
                      </p>
                    </div>
                  </Step>

                  <Step number={6} title="Add Bucket Policy (Make Files Public)">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Go to <strong>"Permissions"</strong> tab</li>
                      <li>2. Scroll to <strong>"Bucket policy"</strong> and click <strong>"Edit"</strong></li>
                        <ScreenshotPlaceholder
                          title="Bucket Policy Section"
                          image='public/images/session-2/47-bucket-policy-section.png'
                        />
                      <li>3. Paste this policy (replace YOUR-BUCKET-NAME with your actual bucket name):</li>
                        
                    </ol>
                    <div className="mt-3">
                      <CodeBlock title="Bucket Policy - Replace YOUR-BUCKET-NAME">{bucketPolicy}</CodeBlock>
                    </div>
                    <ScreenshotPlaceholder
                      title="Bucket Policy Editor"
                      image='public/images/session-2/48-bucket-policy-editor.png'
                    />
                    <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg p-3 mt-3">
                      <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                        <strong>Very Important:</strong> Replace <code className="bg-red-100 dark:bg-red-500/20 px-1 rounded">YOUR-BUCKET-NAME</code> with your actual bucket name!
                        Example: <code className="bg-red-100 dark:bg-red-500/20 px-1 rounded">arn:aws:s3:::john-portfolio-2024/*</code>
                      </p>
                    </div>
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm mt-3" start={4}>
                      <li>4. Click <strong>"Save changes"</strong></li>
                        <ScreenshotPlaceholder
                          title="Save Bucket Policy"
                          image='public/images/session-2/49-save-bucket-policy.png'
                        />
                    </ol>
                  </Step>

                  <Step number={7} title="Test Your Website!">
                    <ol className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>1. Go back to <strong>"Properties"</strong> tab</li>
                      <li>2. Scroll to <strong>"Static website hosting"</strong></li>
                      <li>3. Click on the <strong>Bucket website endpoint</strong> URL</li>
                        <ScreenshotPlaceholder
                          title="Click Website Endpoint"
                          image='public/images/session-2/50-click-endpoint.png'
                        />
                      <li>4. Your website should open in a new tab! 🎉</li>
                    </ol>
                    <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 rounded-xl p-4 mt-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">🎉</span>
                        <h4 className="font-semibold text-green-700 dark:text-green-400 text-lg">Congratulations!</h4>
                      </div>
                      <p className="text-green-700 dark:text-green-300">
                        Your website is now LIVE on the internet! Anyone with the URL can access it.
                        Share this URL with friends and family!
                      </p>
                    </div>
                  </Step>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-red-50 dark:bg-red-500/10 px-5 py-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Troubleshooting Common Errors
              </h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">403 Forbidden / Access Denied</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>✓ Check if "Block Public Access" is disabled</li>
                  <li>✓ Make sure bucket policy is added correctly</li>
                  <li>✓ Verify bucket name matches in the policy</li>
                </ul>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">404 Not Found</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>✓ Make sure you uploaded <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">index.html</code> (not Index.html - case sensitive!)</li>
                  <li>✓ Check that Static Website Hosting is enabled</li>
                  <li>✓ Verify Index document is set to <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">index.html</code></li>
                </ul>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">CSS/Images Not Loading</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>✓ Use relative paths: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">./styles.css</code> not <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/styles.css</code></li>
                  <li>✓ Make sure all files are uploaded to the bucket</li>
                  <li>✓ Check file names match exactly (case sensitive)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cleanup */}
          <section className="bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 rounded-xl p-5">
            <h3 className="font-semibold text-violet-700 dark:text-violet-400 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Cleanup After Lab (Important!)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To avoid any charges, clean up resources after practicing:
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Delete S3 Bucket:</h4>
                <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>1. Open bucket → Select all objects → Delete</li>
                  <li>2. Then delete the bucket itself</li>
                </ol>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Delete IAM User (optional):</h4>
                <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>1. IAM → Users → Select user → Delete</li>
                </ol>
              </div>
              <div className="bg-green-100 dark:bg-green-500/20 rounded-lg p-4">
                <p className="text-green-700 dark:text-green-400 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Keep your budget alerts active - they're free and protect you!
                </p>
              </div>
            </div>
          </section>

          {/* Session Outcome */}
          <section className="bg-gradient-to-r from-violet-100 to-violet-50 dark:from-violet-500/10 dark:to-violet-600/10 border border-violet-200 dark:border-violet-500/30 rounded-xl p-5 md:p-6">
            <h2 className="text-xl font-semibold text-violet-700 dark:text-violet-400 mb-4">What You Accomplished Today</h2>
            <ul className="space-y-3">
              {[
                "Deployed a LIVE website on AWS that anyone can access",
                "Set up billing alerts to avoid surprise charges",
                "Created a safe IAM user with limited permissions",
                "Learned S3 bucket policies and public access settings",
                "Practiced troubleshooting common deployment issues"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              to="/sessions/1"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous: Session 1
            </Link>
            <Link
              to="/sessions"
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              All Sessions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Session2
