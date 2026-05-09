import { useApp } from '../app-context'

export default function Navbar() {
  const { t, locale, toggleLocale, darkMode, toggleDark } = useApp()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-dark-surface/90 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-page mx-auto px-8 h-16 flex items-center justify-between">
        <span className="text-h5 font-extrabold text-primary-dark dark:text-white tracking-tight">Clarity41</span>
        <div className="hidden md:flex items-center gap-8">
          {[t('nav.solutions'), t('nav.capabilities'), t('nav.compare'), t('nav.process'), t('nav.pricing')].map((item, i) => (
            <a key={i} href={`#section-${i}`} className="text-body-sm font-medium text-gray-600 dark:text-dark-muted hover:text-primary dark:hover:text-v41-blue-400 transition-colors cursor-pointer">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-v41-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          
          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="text-body-sm font-medium text-gray-600 dark:text-dark-muted hover:text-primary dark:hover:text-v41-blue-400 transition-colors px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card"
          >
            {locale === 'vi' ? 'EN' : 'VI'}
          </button>
          
          <button className="bg-primary dark:bg-v41-blue-500 text-white text-body-sm font-semibold px-5 py-2 rounded-full hover:bg-primary-light dark:hover:bg-v41-blue-400 transition-colors">
            {t('nav.tryDemo')}
          </button>
        </div>
      </div>
    </nav>
  )
}
