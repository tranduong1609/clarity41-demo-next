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

  

  return (
    <section className="w-full bg-[#F8FAFC] dark:bg-dark-bg pb-5">
      <div className="max-w-page mx-auto px-8">
        <div className="flex flex-col gap-16">

          {/* Section: Certifications */}
          <div>
            <h3 className="text-[28px] font-bold text-[#003366] dark:text-white text-center mb-10 uppercase tracking-widest">
              {t('trust.cert_title', { defaultValue: 'Chứng chỉ & Kiểm định' })}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {certs.map((cert, i) => (
                <div key={i} className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-[#E2E8F0] dark:border-dark-border shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                  <img src={cert.img} alt={cert.label} className=" object-contain mb-4 dark:brightness-90" />
                  <span className="text-[15px] font-bold text-[#64748B] dark:text-dark-text tracking-widest uppercase text-center">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Partners */}
              

        </div>
      </div>
    </section>
  )
}
