import { useApp } from '../app-context'

export default function PricingSection() {
  const { t } = useApp()

  return (
    <section id="section-4" className="py-20 px-8 max-w-page mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-h2 text-primary-dark dark:text-white mb-3">{t('pricing.title')}</h2>
        <p className="text-neutral-body dark:text-dark-muted text-h6 max-w-2xl mx-auto">
          {t('pricing.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Basic */}
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-200 dark:border-dark-border shadow-sm hover:shadow-md transition-all flex flex-col">
          <h3 className="text-h4 font-bold text-primary-dark dark:text-white mb-2">{t('pricing.basic_title')}</h3>
          <div className="mb-6">
            <span className="text-h1 font-extrabold text-primary-dark dark:text-white">{t('pricing.basic_price')}</span>
            <span className="text-neutral-body dark:text-dark-muted text-body">{t('pricing.basic_unit')}</span>
          </div>
          <div className="space-y-3 mb-8 flex-1">
            {[t('pricing.basic_f1'), t('pricing.basic_f2'), t('pricing.basic_f3')].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-body text-neutral-body dark:text-dark-muted">{item}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-3 rounded-full border-2 border-primary dark:border-v41-blue-500 text-primary dark:text-v41-blue-400 font-semibold hover:bg-primary dark:hover:bg-v41-blue-600 hover:text-white transition-all">
            {t('pricing.start_now')}
          </button>
        </div>

        {/* Professional - highlighted */}
        <div className="relative bg-primary dark:bg-v41-blue-700 rounded-3xl p-8 text-white shadow-xl shadow-primary/20 dark:shadow-v41-blue-700/30 z-10 flex flex-col">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-v41-gold-400 dark:bg-v41-gold-500 text-primary-dark text-caption font-bold px-4 py-1 rounded-full">
            {t('pricing.pro_badge')}
          </div>
          <h3 className="text-h4 font-bold mb-2">{t('pricing.pro_title')}</h3>
          <div className="mb-6">
            <span className="text-h1 font-extrabold">{t('pricing.pro_price')}</span>
            <span className="text-blue-200 dark:text-v41-blue-200 text-body">{t('pricing.pro_unit')}</span>
          </div>
          <div className="space-y-3 mb-8 flex-1">
            {[t('pricing.pro_f1'), t('pricing.pro_f2'), t('pricing.pro_f3'), t('pricing.pro_f4')].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-body">{item}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-3 rounded-full bg-white text-primary dark:text-v41-blue-700 font-semibold hover:bg-blue-50 dark:hover:bg-v41-blue-50 transition-all">
            {t('pricing.start_now')}
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-200 dark:border-dark-border shadow-sm hover:shadow-md transition-all flex flex-col">
          <h3 className="text-h4 font-bold text-primary-dark dark:text-white mb-2">{t('pricing.ent_title')}</h3>
          <div className="mb-2">
            <span className="text-h1 font-extrabold text-primary-dark dark:text-white">{t('pricing.ent_price')}</span>
          </div>
          <p className="text-neutral-body dark:text-dark-muted text-body-sm mb-6">
            {t('pricing.ent_desc')}
          </p>
          <div className="space-y-3 mb-8 flex-1">
            {[t('pricing.ent_f1'), t('pricing.ent_f2')].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-body text-neutral-body dark:text-dark-muted">{item}</span>
              </div>
            ))}
          </div>
          <button className="w-full py-3 rounded-full border-2 border-primary dark:border-v41-blue-500 text-primary dark:text-v41-blue-400 font-semibold hover:bg-primary dark:hover:bg-v41-blue-600 hover:text-white transition-all">
            {t('pricing.contact_now')}
          </button>
        </div>
      </div>
    </section>
  )
}
