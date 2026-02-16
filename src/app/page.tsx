import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import Navbar from '@/components/layout/Navbar'
import "./globals.css"
import BigQuote from '@/components/home/BigQuote'
import PortfolioSection from '@/components/layout/PortfolioSection'
import AboutStatsFaqSection from '@/components/home/AboutStatsFaqSection'
import ContactSection from '@/components/home/ContactSection'
import Footer from '@/components/layout/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <BigQuote />
      <PortfolioSection />
      <AboutStatsFaqSection />
      <ContactSection />
      <Footer />
    </>
  )
}
