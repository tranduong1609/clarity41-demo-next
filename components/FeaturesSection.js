import { useApp } from '../app-context'

export default function FeaturesSection() {
  const { t } = useApp()

  return (
    <section id="section-1" className="py-20 px-8 max-w-page mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-h2 font-bold text-primary-dark dark:text-white mb-4 uppercase">{t('features.title', { defaultValue: 'TÍNH NĂNG CỐT LÕI' })}</h2>
        <p className="text-neutral-body dark:text-dark-muted text-h6">{t('features.subtitle', { defaultValue: 'Tất cả những gì bạn cần trong một nền tảng Pentest hiện đại' })}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Row 1 */}
        <div className="lg:col-span-2 bg-white dark:bg-dark-card rounded-3xl p-8 border border-blue-100 dark:border-v41-blue-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
          <div className="w-12 h-12 bg-blue-50 dark:bg-v41-blue-900/50 rounded-xl flex items-center justify-center mb-4 text-primary dark:text-v41-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 className="text-h5 font-bold text-primary-dark dark:text-white mb-3">Quét lỗ hổng theo yêu cầu</h3>
          <p className="text-body-sm text-neutral-body dark:text-dark-muted leading-relaxed">
            Chủ động kiểm tra web, API, ứng dụng và hệ thống; theo nhu cầu với hơn 10.000+ kiểm tra bảo mật tự động.
          </p>
        </div>

        <div className="bg-v41-gold-400 dark:bg-v41-gold-600 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 text-primary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/></svg>
          </div>
          <h3 className="text-h6 font-bold text-primary-dark dark:text-white mb-3">Quản lý vòng đời</h3>
          <p className="text-body-sm text-primary-dark/80 dark:text-white/80 leading-relaxed">
            Theo dõi lỗ hổng từ phát hiện đến khắc phục, phân công, theo dõi và cảnh báo theo thời gian thực.
          </p>
        </div>

        <div className="bg-primary-dark dark:bg-v41-blue-900 rounded-3xl p-8 text-white shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-v41-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <h3 className="text-h6 font-bold mb-3">Quản lý dự án</h3>
          <p className="text-body-sm text-blue-100 dark:text-v41-blue-200 leading-relaxed">
            Tạo và quản lý nhiều dự án pentest song song, phân quyền linh hoạt và kiểm soát tiến độ dễ dàng.
          </p>
        </div>

        {/* Row 2 */}
        <div className="lg:col-span-2 bg-white dark:bg-dark-card rounded-3xl p-8 border border-blue-100 dark:border-v41-blue-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
          <div className="w-12 h-12 bg-blue-50 dark:bg-v41-blue-900/50 rounded-xl flex items-center justify-center mb-4 text-primary dark:text-v41-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M21.18 8.02c-1-2.3-2.85-4.17-5.16-5.18"/></svg>
          </div>
          <h3 className="text-h5 font-bold text-primary-dark dark:text-white mb-3">Trí tuệ bảo mật dựa trên AI</h3>
          <p className="text-body-sm text-neutral-body dark:text-dark-muted leading-relaxed">
            AI phân tích ngữ cảnh, ưu tiên rủi ro và đưa ra gợi ý remediation chính xác, giúp phát hiện sâu hơn và giảm false positive.
          </p>
        </div>

        <div className="lg:col-span-2 bg-v41-red-600 dark:bg-v41-red-700 rounded-3xl p-8 text-white shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-red-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          </div>
          <h3 className="text-h5 font-bold mb-3">Thanh toán linh hoạt</h3>
          <p className="text-body-sm text-red-100 dark:text-v41-red-200 leading-relaxed">
            Hỗ trợ đa dạng phương thức chuyển khoản, thẻ tín dụng, ví điện tử và xuất hóa đơn đáp ứng mọi nhu cầu.
          </p>
        </div>
      </div>
    </section>
  )
}
