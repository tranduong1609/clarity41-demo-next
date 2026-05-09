import { useApp } from '../app-context'

export default function ProcessSection() {
  const { t } = useApp()

  const steps = [
    { num: '01', title: t('process.s1_title'), desc: t('process.s1_desc') },
    { num: '02', title: t('process.s2_title'), desc: t('process.s2_desc') },
    { num: '03', title: t('process.s3_title'), desc: t('process.s3_desc') },
    { num: '04', title: t('process.s4_title'), desc: t('process.s4_desc') },
    { num: '05', title: t('process.s5_title'), desc: t('process.s5_desc') },
  ]

  return (
    <section id="section-3" className="py-20 px-8 bg-neutral-section dark:bg-dark-surface transition-colors">
      <div className="max-w-page mx-auto">
        <h2 className="text-h2 text-primary-dark dark:text-white text-center mb-16">{t('process.title')}</h2>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20 dark:bg-v41-blue-500/30" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-24 h-24 bg-primary dark:bg-v41-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 dark:shadow-v41-blue-600/30">
                  <span className="text-white text-h3 font-bold">{step.num}</span>
                </div>
                <h4 className="text-h6 font-bold text-primary-dark dark:text-white mb-2">{step.title}</h4>
                <p className="text-neutral-body dark:text-dark-muted text-body-sm leading-relaxed whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
