import { useApp } from '../app-context'
import { Search, Brain, UserCheck, Wrench, FileText, ArrowRight } from 'lucide-react'

export default function ProcessSection() {
  const { t } = useApp()

  const steps = [
    { num: '1', title: t('process.s1_title', { defaultValue: 'Yêu cầu & Khởi tạo' }), desc: t('process.s1_desc', { defaultValue: 'Tiếp nhận yêu cầu và xác định\nphạm vi kiểm thử.' }), icon: Search },
    { num: '2', title: t('process.s2_title', { defaultValue: 'Tự động quét' }), desc: t('process.s2_desc', { defaultValue: 'Hệ thống AI tiến hành quét toàn\ndiện theo phạm vi.' }), icon: Brain },
    { num: '3', title: t('process.s3_title', { defaultValue: 'AI phân tích & Ưu tiên' }), desc: t('process.s3_desc', { defaultValue: 'AI phân tích, xác định mức độ\nnghiêm trọng và ưu tiên lỗ hổng.' }), icon: UserCheck },
    { num: '4', title: t('process.s4_title', { defaultValue: 'Chuyên gia xác thực' }), desc: t('process.s4_desc', { defaultValue: 'Chuyên gia bảo mật kiểm tra và\nxác nhận lỗ hổng quan trọng.' }), icon: Wrench },
    { num: '5', title: t('process.s5_title', { defaultValue: 'Báo cáo & Hỗ trợ' }), desc: t('process.s5_desc', { defaultValue: 'Báo cáo chi tiết và hướng dẫn\nkhắc phục đi kèm hỗ trợ.' }), icon: FileText },
  ]

  return (
    <section id="section-3" className="py-24 px-8 bg-[#F8FAFC] dark:bg-dark-bg transition-colors">
      <div className="max-w-page mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[28px] font-extrabold text-[#003366] dark:text-white uppercase mb-3 tracking-wider">
            {t('process.title', { defaultValue: 'QUY TRÌNH HOẠT ĐỘNG' })}
          </h2>
          <p className="text-[#64748B] dark:text-dark-muted font-medium">Đơn giản – Minh bạch – Hiệu quả</p>
        </div>
        
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1.5px] bg-[#0055D4]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center relative group">
                  {/* Circle Icon */}
                  <div className="w-[120px] h-[120px] bg-white dark:bg-dark-surface rounded-full border border-[#0055D4]/20 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md group-hover:border-[#0055D4]/40 transition-all duration-300">
                    <Icon className="w-10 h-10 text-[#0055D4] dark:text-v41-blue-400" strokeWidth={1.5} />
                  </div>
                  
                  {/* Arrow for Desktop (centered on the line) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-[60px] left-[100%] w-12 h-0 items-center justify-center z-20">
                      <div className="bg-[#F8FAFC] dark:bg-dark-bg px-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0055D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {/* Step Number */}
                  <div className="text-[32px] font-black text-[#1E293B] dark:text-white mb-4 leading-none">
                    {step.num}
                  </div>

                  {/* Text Content */}
                  <h4 className="text-[17px] font-bold text-[#003366] dark:text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-[13px] text-[#64748B] dark:text-dark-muted leading-relaxed max-w-[180px]">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
