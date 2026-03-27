import { useTheme } from '../context/ThemeContext'

function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark'
                ? import.meta.env.BASE_URL + 'AWS-CC-GCE-Gaya-Night-logo.png'
                : import.meta.env.BASE_URL + 'AWS-CC-GCE-Gaya-Day-logo.png'
              }
              alt="AWS Cloud Club GCE Gaya"
              className="h-8 w-auto"
            />
            <span className="text-gray-600 dark:text-gray-400">
              AWS Cloud Club - GCE Gaya
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Learn by Building. Powered by AWS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
