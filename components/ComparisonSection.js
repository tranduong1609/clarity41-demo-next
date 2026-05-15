import { useApp } from '../app-context'

export default function ComparisonSection() {
  const { t } = useApp()

  const clarity41Items = [t('comparison.c1'), t('comparison.c2'), t('comparison.c3'), t('comparison.c4'), t('comparison.c5')]
  const traditionalItems = [t('comparison.t1'), t('comparison.t2'), t('comparison.t3'), t('comparison.t4'), t('comparison.t5')]

  return (
    <section id="section-2" className="py-20 px-8 max-w-page mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-h2 font-bold text-primary-dark dark:text-white uppercase">{t('comparison.title', { defaultValue: 'SO SÁNH VỚI PENTEST TRUYỀN THỐNG' })}</h2>
      </div>

      <div className="max-w-5xl mx-auto relative border border-gray-200 dark:border-dark-border rounded-2xl overflow-hidden shadow-sm">
        {/* VS Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary-dark dark:bg-v41-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10 border-4 border-white dark:border-dark-card">
          VS
        </div>

        {/* Header Row */}
        <div className="grid grid-cols-2">
          <div className="bg-primary-dark dark:bg-v41-blue-800 text-white text-center py-4 font-bold text-lg">
            Clarity41 Platform
          </div>
          <div className="bg-gray-50 dark:bg-dark-surface text-primary-dark dark:text-white text-center py-4 font-bold text-lg border-b border-gray-200 dark:border-dark-border">
            Pentest truyền thống
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-2 bg-white dark:bg-dark-card divide-x divide-gray-200 dark:divide-dark-border">
          {/* Clarity41 side */}
          <div className="p-8 space-y-5">
            {[
              'Tự động hóa 80% quy trình',
              'Thời gian hoàn thành: 24h - 72h',
              'Phát hiện lỗ hổng sâu với AI + 10.000+ kiểm tra',
              'Báo cáo trực quan, dễ hiểu',
              'Chi phí tối ưu - Tiết kiệm đến 60%',
              'Cập nhật liên tục - Không bỏ sót lỗ hổng mới'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-body-sm font-semibold text-gray-800 dark:text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          {/* Traditional side */}
          <div className="p-8 space-y-5">
            {[
              'Thực hiện thủ công hoàn toàn',
              'Thời gian kéo dài: 2 - 6 tuần',
              'Phụ thuộc vào kỹ năng chuyên gia',
              'Báo cáo dài, khó theo dõi',
              'Chi phí cao',
              'Không phát hiện kịp thời lỗ hổng mới'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-v41-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-body-sm font-semibold text-gray-600 dark:text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
