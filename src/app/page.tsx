import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Burhan Master Minds Consultancy. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com/hafiz.junaid3" className="text-sm text-muted-foreground hover:underline">
              Facebook
            </a>
            <a href="https://linkedin.com/in/junaid-khan" className="text-sm text-muted-foreground hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

