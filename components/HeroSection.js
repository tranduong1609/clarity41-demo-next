import { useApp } from '../app-context'

export default function HeroSection() {
  const { t } = useApp()

  return (
    <section id="section-0" className="pt-28 pb-16 px-8 max-w-page mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          <div className="inline-block bg-indigo-50 dark:bg-v41-blue-900/50 border border-indigo-200 dark:border-v41-blue-700 rounded-full px-4 py-1.5 mb-6">
            <span className="text-caption font-bold text-primary dark:text-v41-blue-300 tracking-widest uppercase">
              {t('hero.badge')}
            </span>
          </div>
          <h1 className="text-display font-bold text-primary-dark dark:text-white leading-tight mb-4">
            {t('hero.title1')}<br />{t('hero.title2')}<br />{t('hero.title3')}
          </h1>
          <p className="text-h6 text-neutral-body dark:text-dark-muted leading-relaxed mb-8">
            {t('hero.desc')}
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-primary dark:bg-v41-blue-500 text-white font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-primary-light dark:hover:bg-v41-blue-400 transition-all shadow-lg shadow-primary/20 dark:shadow-v41-blue-500/20">
              {t('hero.cta1')}
              <img src="/container3424-onf.svg" alt="arrow" className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 dark:border-dark-border text-primary-dark dark:text-dark-text font-semibold px-8 py-3.5 rounded-full hover:border-primary dark:hover:border-v41-blue-400 hover:text-primary dark:hover:text-v41-blue-400 transition-all">
              {t('hero.cta2')}
            </button>
          </div>
        </div>

        {/* Right visual - Replaced 3D with new Image */}
        <div className="relative flex-1 hidden lg:flex items-center justify-end pr-4">
          <div className="relative w-full">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/15 dark:bg-v41-blue-500/10 rounded-full blur-[120px] -z-10" />

            <img
              src="/Gemini_Generated_Image_fjac3qfjac3qfjac.png"
              alt="Hero Illustration"
              className="w-full h-auto object-contain drop-shadow-2xl scale-110 lg:scale-140 transform-gpu"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
