import { useApp } from '../app-context'

export default function Footer() {
  const { t } = useApp()

  return (
    <footer className="bg-primary-dark dark:bg-dark-bg py-10 px-8 transition-colors border-t border-transparent dark:border-dark-border">
      <div className="max-w-page mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center gap-4 text-center w-full md:w-auto">
          <img src="/logo-v41.png" alt="V41" className="h-14 md:h-16 object-contain" />
          <p className="text-blue-200 dark:text-dark-muted text-body-sm whitespace-nowrap">
            {t('footer.tagline')}
          </p>
        </div>
        <div className="flex items-center gap-6">
          {[t('footer.privacy'), t('footer.terms'), t('footer.security'), t('footer.contact')].map((link, i) => (
            <a key={i} href="#" className="text-blue-200 dark:text-dark-muted text-body-sm hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
