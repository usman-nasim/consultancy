import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 transition-colors hover:text-primary">
          <Lightbulb className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight">Burhan Master Minds</span>
        </Link>
        <div className="flex items-center">
          <nav className="flex items-center space-x-6">
            <Link
              href="/services"
              className="hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block"
            >
              Services
            </Link>
            <Link
              href="/"
              className="hidden text-sm font-medium transition-colors hover:text-primary sm:inline-block"
            >
              About
            </Link>
            <Button asChild size="sm" className="gradient-bg animate-gradient text-white font-medium">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

