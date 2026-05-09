import { useApp } from '../app-context'

export default function CTASection() {
  const { t } = useApp()

  return (
    <section className="py-20 px-8 max-w-page mx-auto">
      <div className="relative bg-primary dark:bg-v41-blue-800 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden">
        <img src="/gradient3625-j3a.svg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20" />
        <div className="relative z-10">
          <h2 className="text-h2 md:text-h1 mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-blue-100 dark:text-v41-blue-200 text-h6 mb-8 max-w-lg mx-auto">
            {t('cta.desc')}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="bg-white text-primary dark:text-v41-blue-700 font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-all shadow-lg">
              {t('cta.cta1')}
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all">
              {t('cta.cta2')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
