import { useApp } from '../app-context'

export default function ComparisonSection() {
  const { t } = useApp()

  const clarity41Items = [t('comparison.c1'), t('comparison.c2'), t('comparison.c3'), t('comparison.c4'), t('comparison.c5')]
  const traditionalItems = [t('comparison.t1'), t('comparison.t2'), t('comparison.t3'), t('comparison.t4'), t('comparison.t5')]

  return (
    <section id="section-2" className="py-20 px-8 max-w-page mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-h2 text-primary-dark dark:text-white mb-3">{t('comparison.title')}</h2>
        <p className="text-neutral-body dark:text-dark-muted text-h6">{t('comparison.subtitle')}</p>
      </div>

      <div className="bg-white dark:bg-dark-card rounded-3xl shadow-md dark:shadow-dark-border/20 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Clarity41 side */}
        <div className="bg-primary dark:bg-v41-blue-700 p-8 md:p-10 text-white">
          <div className="flex items-center gap-2 mb-8">
            <img src="/container3393-rjg.svg" alt="bolt" className="w-5 h-5 brightness-0 invert" />
            <span className="font-bold text-h6">{t('comparison.clarity_label')}</span>
          </div>
          <div className="space-y-5">
            {clarity41Items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-body font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional side */}
        <div className="p-8 md:p-10 dark:bg-dark-surface">
          <div className="flex items-center gap-2 mb-8">
            <img src="/container3378-8t0o.svg" alt="clock" className="w-5 h-5 dark:invert dark:brightness-200" />
            <span className="font-bold text-h6 text-primary-dark dark:text-dark-text">{t('comparison.trad_label')}</span>
          </div>
          <div className="space-y-5">
            {traditionalItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-v41-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-body font-semibold text-gray-700 dark:text-dark-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
