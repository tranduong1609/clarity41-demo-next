import { useApp } from '../app-context'

export default function HeroSection() {
  const { t } = useApp()

  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-white dark:bg-dark-bg">
      <div className="max-w-page mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-block bg-white dark:bg-v41-blue-900/50 border border-blue-100 dark:border-v41-blue-700 rounded-full px-6 py-2 mb-8 shadow-sm">
              <span className="text-[13px] font-bold text-primary dark:text-v41-blue-300 tracking-wider">
                AI-Powered • Tự động • Chính xác • Nhanh chóng
              </span>
            </div>
            <h1 className="text-[48px] md:text-[62px] font-extrabold leading-[1.1] text-primary-dark dark:text-white mb-8 tracking-tight">
              <span className="text-[#0055D4] dark:text-v41-blue-400">Pentest tự động trong 24h</span>
              <br />
              Bảo mật vững chắc cho doanh nghiệp hiện đại
            </h1>
            <p className="text-[18px] md:text-[20px] text-neutral-body dark:text-dark-muted leading-relaxed mb-10 max-w-xl">
              Clarity41 kết hợp AI và chuyên gia bảo mật để phát hiện lỗ hổng nhanh hơn, chính xác hơn, giúp bạn giảm thiểu rủi ro và tuân thủ các tiêu chuẩn bảo mật.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="w-full sm:w-auto bg-[#0055D4] text-white font-bold px-10 py-4 rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                Đăng ký demo miễn phí
              </button>
              <button className="w-full sm:w-auto bg-white dark:bg-dark-surface border border-[#E2E8F0] dark:border-v41-blue-500 text-[#0055D4] dark:text-v41-blue-400 font-bold px-10 py-4 rounded-full hover:bg-gray-50 dark:hover:bg-v41-blue-900/30 transition-all shadow-sm">
                Xem bảng giá
              </button>
            </div>
          </div>

          {/* Right visual - Giant Illustration */}
          <div className="relative flex-[1.2] hidden lg:flex items-center justify-end pr-0 min-h-[500px]">
            <div className="relative w-full h-full flex items-center justify-end">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-blue-400/20 dark:bg-v41-blue-500/15 rounded-full blur-[140px] -z-10" />

              <img
                src="/banner.png"
                alt="Hero Illustration"
                className="w-full h-auto object-contain scale-125 lg:scale-150 translate-x-20 transform-gpu"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-100 dark:border-dark-border">
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] dark:bg-v41-blue-900/50 flex items-center justify-center text-[#0055D4] dark:text-v41-blue-400 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <div>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 font-semibold mb-0.5">Nhanh hơn</p>
              <p className="text-3xl font-extrabold text-[#003366] dark:text-white leading-tight">5X</p>
              <p className="text-[12px] text-gray-400 dark:text-gray-500">so với pentest truyền thống</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] dark:bg-v41-blue-900/50 flex items-center justify-center text-[#0055D4] dark:text-v41-blue-400 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <div>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 font-semibold mb-0.5">Tiết kiệm đến</p>
              <p className="text-3xl font-extrabold text-[#003366] dark:text-white leading-tight">60%</p>
              <p className="text-[12px] text-gray-400 dark:text-gray-500">chi phí bảo mật</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-[#F0F7FF] dark:bg-v41-blue-900/50 flex items-center justify-center text-[#0055D4] dark:text-v41-blue-400 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            </div>
            <div>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 font-semibold mb-0.5">Chính xác đến</p>
              <p className="text-3xl font-extrabold text-[#003366] dark:text-white leading-tight">98%</p>
              <p className="text-[12px] text-gray-400 dark:text-gray-500">nhờ AI & chuyên gia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
