import { useApp } from '../app-context'

export default function Navbar() {
  const { t, locale, toggleLocale, darkMode, toggleDark } = useApp()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-dark-surface/90 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-page mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-h4 font-extrabold text-primary-dark dark:text-white tracking-tight mt-1">CLARITY41</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[t('nav.solutions'), t('nav.capabilities'), t('nav.compare'), t('nav.process'), t('nav.pricing')].map((item, i) => (
            <a key={i} href={`#section-${i}`} className="text-body-sm font-medium text-gray-600 dark:text-dark-muted hover:text-primary dark:hover:text-v41-blue-400 transition-colors cursor-pointer">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:19001234" className="flex items-center gap-2 text-sm font-semibold text-primary-dark dark:text-white hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            1900 1234
          </a>
          <button className="bg-primary dark:bg-v41-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-light dark:hover:bg-v41-blue-400 transition-colors">
            Đăng ký demo
          </button>
        </div>
      </div>
    </nav>
  )
}
