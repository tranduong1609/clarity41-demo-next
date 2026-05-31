import Head from 'next/head'
import { useApp } from '../app-context'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ComparisonSection from '../components/ComparisonSection'
import ProcessSection from '../components/ProcessSection'
import TrustSection from '../components/TrustSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  const { locale } = useApp()

  return (
    <>
      <Head>
        <title>{locale === 'vi' ? 'Clarity41 - Nền tảng Pentest Thế hệ mới' : 'Clarity41 - Next-Gen Pentest Platform'}</title>
        <meta name="description" content={locale === 'vi'
          ? 'Nền tảng PtaaS thế hệ mới kết hợp kiểm thử tự động với chuyên gia. Triển khai nhanh. Chi phí tối ưu.'
          : 'Next-generation PtaaS platform combining automated testing with experts. Fast deployment. Optimized cost.'
        } />
        <meta property="og:title" content="Clarity41 - Next-Gen Pentest Platform" />
        <link rel="canonical" href="https://clarity41.com/" />
      </Head>

      <Navbar />

      <main className="bg-neutral-bg dark:bg-dark-bg min-h-screen transition-colors duration-300 mt-16">
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <ProcessSection />
        {/* <TrustSection /> */}
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
