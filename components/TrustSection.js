import { useApp } from '../app-context'

export default function TrustSection() {
  const { t } = useApp()

  const certs = [
    { img: '/image1109-2797-200w.png', label: 'SOC2 TYPE II' },
    { img: '/image21015-l1do-200h.png', label: 'CREST ACCREDITED' },
    { img: '/image31020-oq9g-200w.png', label: 'ISO 27001' },
    { img: '/image41023-fkma-200h.png', label: 'PCI DSS' },
  ]

  const stats = [
    { value: t('trust.stat1_value'), label: t('trust.stat1_label') },
    { value: t('trust.stat2_value'), label: t('trust.stat2_label') },
    { value: t('trust.stat3_value'), label: t('trust.stat3_label') },
  ]

  const partners = [t('trust.partner_a'), t('trust.partner_b'), t('trust.partner_c'), t('trust.partner_d')]

  return (
    <section className="py-20 px-8 max-w-page mx-auto">
      {/* Certifications */}
      <h2 className="text-h2 text-primary-dark dark:text-white text-center mb-12">
        {t('trust.cert_title')}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {certs.map((cert, i) => (
          <div key={i} className="bg-white dark:bg-dark-card rounded-2xl p-6 flex flex-col items-center gap-3 border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-all">
            <img src={cert.img} alt={cert.label} className="h-12 object-contain dark:brightness-90" />
            <span className="text-caption font-bold text-primary-dark dark:text-dark-text tracking-wider">{cert.label}</span>
          </div>
        ))}
      </div>

      {/* Partners - Two column layout matching design mockup */}
      <div className="bg-neutral-card dark:bg-dark-card rounded-3xl p-10 md:p-14 border border-transparent dark:border-dark-border transition-colors">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left column: Title + description + stats */}
          <div className="flex-1 lg:max-w-md">
            <h2 className="text-h2 text-primary-dark dark:text-white mb-3 italic">
              {t('trust.partner_title')}
            </h2>
            <p className="text-body text-neutral-body dark:text-dark-muted leading-relaxed mb-8">
              {t('trust.partner_desc')}
            </p>

            {/* Stats row */}
            <div className="flex items-start gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <span className="text-h2 font-extrabold text-primary-dark dark:text-white block">{stat.value}</span>
                  <p className="text-caption font-semibold text-neutral-body dark:text-dark-muted mt-1 uppercase tracking-wider whitespace-pre-line leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Partner grid 2x2 */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, i) => (
                <div key={i} className="bg-white dark:bg-dark-surface rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-dark-border flex items-center justify-center min-h-[100px]">
                  <span className="text-primary-dark dark:text-dark-text font-semibold text-h6">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
