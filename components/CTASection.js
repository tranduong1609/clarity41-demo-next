import { useApp } from '../app-context'

export default function CTASection() {
  const { t } = useApp()

  return (
    <section className="py-20 mx-auto bg-[#F8FAFC] dark:bg-dark-bg">
      <div className="max-w-page mx-auto px-8">
        {/* Main CTA Block */}
        <div className="bg-[#0055D4] rounded-[32px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Left Stats - Vibrant Blue */}
          <div className="flex-[3] p-8 md:p-12 flex items-center justify-between gap-4 text-white">
            <div className="flex flex-col items-center text-center px-2">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 40V36C12 33.8783 12.8429 31.8434 14.3431 30.3431C15.8434 28.8429 17.8783 28 20 28H28C30.1217 28 32.1566 28.8429 33.6569 30.3431C35.1571 31.8434 36 33.8783 36 36V40" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-2">500+</h3>
              <p className="text-[12px] font-medium text-blue-100 opacity-90">Khách hàng tin tưởng</p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L4 14L24 24L44 14L24 4Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 24L24 34L44 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 34L24 44L44 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-2">12k+</h3>
              <p className="text-[12px] font-medium text-blue-100 opacity-90">Dự án đã triển khai</p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 4H10C8.93913 4 7.92172 4.42143 7.17157 5.17157C6.42143 5.92172 6 6.93913 6 8V40C6 41.0609 6.42143 42.0783 7.17157 42.8284C7.92172 43.5786 8.93913 44 10 44H38C39.0609 44 40.0783 43.5786 40.8284 42.8284C41.5786 42.0783 42 41.0609 42 40V18L28 4Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 4V18H42" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 26V36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 31H29" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-2">$2B+</h3>
              <p className="text-[12px] font-medium text-blue-100 opacity-90">Tài sản khách hàng được bảo vệ</p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 12V24L32 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-2">99.9%</h3>
              <p className="text-[12px] font-medium text-blue-100 opacity-90">Thời gian hoạt động</p>
            </div>
          </div>

          {/* Right CTA - Darker Blue */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-[#0042A5] text-white">
            <h3 className="text-[22px] font-bold mb-4 leading-tight">Sẵn sàng nâng cấp bảo mật?</h3>
            <p className="text-[13px] text-blue-100 mb-8 leading-relaxed opacity-90">
              Đăng ký demo miễn phí và trải nghiệm nền tảng Pentest tự động hàng đầu Việt Nam.
            </p>
            <button className="bg-[#FFCC33] text-primary-dark font-bold py-4 px-8 rounded-full text-sm hover:bg-[#FFD65C] transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]">
              Đăng ký demo miễn phí
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mt-8 bg-[#F0F7FF] dark:bg-v41-blue-900/20 border border-[#D9E9FF] dark:border-v41-blue-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-dark-card flex items-center justify-center shadow-sm text-blue-500 flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="8" width="18" height="12" rx="2" ry="2" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <path d="M12 12V20" />
                <path d="M7.5 8C7.5 8 7.5 4 12 4C16.5 4 16.5 8 16.5 8" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#003366] dark:text-white mb-1">Ưu đãi đặc biệt cho khách hàng mới</h4>
              <p className="text-[13px] text-[#475569] dark:text-gray-300">Tặng 1 lần quét lỗ hổng cơ bản miễn phí khi đăng ký demo trong tháng này!</p>
            </div>
          </div>
          <button className="bg-[#0044BB] text-white font-bold py-3.5 px-10 rounded-2xl text-sm hover:bg-[#003399] transition-all shadow-md">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </section>
  )

}
