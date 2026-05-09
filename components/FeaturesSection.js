import { useApp } from '../app-context'

export default function FeaturesSection() {
  const { t } = useApp()

  return (
    <section id="section-1" className="py-20 px-8 max-w-page mx-auto">
      <div className="mb-12">
        <h2 className="text-h2 text-primary-dark dark:text-white mb-3">{t('features.title')}</h2>
        <p className="text-neutral-body dark:text-dark-muted text-h6">{t('features.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Row 1: Scan + Project Management */}
        <div className="lg:col-span-2 bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-all">
          <img src="/rocket13769-t8ts.svg" alt="rocket" className="w-10 h-10 mb-4 dark:invert dark:brightness-200" />
          <h3 className="text-h4 font-bold text-primary-dark dark:text-white mb-3">{t('features.scan_title')}</h3>
          <p className="text-body text-neutral-body dark:text-dark-muted leading-relaxed">
            {t('features.scan_desc')}
          </p>
        </div>
        <div className="bg-primary dark:bg-v41-blue-700 rounded-3xl p-8 text-white shadow-sm hover:shadow-md transition-all">
          <img src="/squaresfour13776-iol.svg" alt="squares" className="w-10 h-10 mb-4 brightness-0 invert" />
          <h3 className="text-h4 font-bold mb-3">{t('features.project_title')}</h3>
          <p className="text-body text-blue-100 dark:text-v41-blue-200 leading-relaxed">
            {t('features.project_desc')}
          </p>
          <a href="#" className="inline-block mt-4 text-white font-bold text-body-sm tracking-wider hover:underline">
            {t('features.consult_free')}
          </a>
        </div>

        {/* Row 2: Lifecycle + Expert Network */}
        <div className="lg:col-span-2 bg-v41-gold-400 dark:bg-v41-gold-600 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
          <img src="/arrowscounterclockwise13774-eybg.svg" alt="lifecycle" className="w-10 h-10 mb-4" />
          <h3 className="text-h4 font-bold text-primary-dark dark:text-white mb-3">{t('features.lifecycle_title')}</h3>
          <p className="text-body text-primary-dark/80 dark:text-white/80 leading-relaxed">
            {t('features.lifecycle_desc')}
          </p>
        </div>
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-all">
          <img src="/users13786-vhls.svg" alt="users" className="w-10 h-10 mb-4 dark:invert dark:brightness-200" />
          <h3 className="text-h4 font-bold text-primary-dark dark:text-white mb-3">{t('features.network_title')}</h3>
          <p className="text-body text-neutral-body dark:text-dark-muted leading-relaxed">
            {t('features.network_desc')}
          </p>
        </div>

        {/* Row 3: AI Intelligence + Payment */}
        <div className="lg:col-span-2 bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-h4 font-bold text-primary-dark dark:text-white mb-3">{t('features.ai_title')}</h3>
              <p className="text-body text-neutral-body dark:text-dark-muted leading-relaxed mb-4">
                {t('features.ai_desc')}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[t('features.ai_tag1'), t('features.ai_tag2'), t('features.ai_tag3'), t('features.ai_tag4')].map((tag, i) => (
                  <span key={i} className="bg-neutral-card dark:bg-dark-surface text-primary-dark dark:text-v41-blue-300 text-caption font-semibold px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-48 h-44 bg-neutral-card dark:bg-dark-surface rounded-2xl flex items-center justify-center flex-shrink-0">
              <img src="/brain13778-frqi.svg" alt="brain" className="w-16 h-16 dark:invert dark:brightness-200" />
            </div>
          </div>
        </div>
        <div className="bg-v41-red-600 dark:bg-v41-red-700 rounded-3xl p-8 text-white shadow-sm hover:shadow-md transition-all">
          <img src="/creditcard13788-ixbr.svg" alt="credit card" className="w-10 h-10 mb-4 brightness-0 invert" />
          <h3 className="text-h4 font-bold mb-3">{t('features.payment_title')}</h3>
          <p className="text-body text-red-100 dark:text-v41-red-200 leading-relaxed">
            {t('features.payment_desc')}
          </p>
        </div>
      </div>
    </section>
  )
}
