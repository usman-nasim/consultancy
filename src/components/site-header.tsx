import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb } from 'lucide-react'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Lightbulb className="h-6 w-6" />
          <span className="inline-block font-bold">Burhan Master Minds</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/services" className="hidden sm:inline-block">
              Services
            </Link>
            <Link href="/about" className="hidden sm:inline-block">
              About
            </Link>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
