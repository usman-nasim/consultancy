import  SiteHeader from "@/components/site-header"
import  HeroSection from "@/components/hero-section"
import  ServicesSection from "@/components/services-section"
import  ContactSection from "@/components/contact-section"
import  Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

