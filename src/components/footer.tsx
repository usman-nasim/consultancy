import Link from "next/link"
import { Lightbulb, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-background to-gray-50/50 dark:from-background dark:to-gray-950/50">
      <div className="container px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Burhan Master Minds</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional consultancy services for business growth and development. Empowering organizations through
              expert guidance and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#youth-development" className="text-muted-foreground hover:text-primary">
                  Youth Development
                </Link>
              </li>
              <li>
                <Link href="#professional-development" className="text-muted-foreground hover:text-primary">
                  Professional Development
                </Link>
              </li>
              <li>
                <Link href="#corporate-solutions" className="text-muted-foreground hover:text-primary">
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link href="#auditing-services" className="text-muted-foreground hover:text-primary">
                  Auditing Services
                </Link>
              </li>
              <li>
                <Link href="#legal-support" className="text-muted-foreground hover:text-primary">
                  Legal Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>DHA Phase 2 House # W38</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>0315-2218347</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>Junaidazeem91jk@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <div className="space-y-2 pt-4">
              <h3 className="text-sm font-semibold">Follow Us</h3>
              <div className="flex space-x-2">
                <Link
                  href="https://facebook.com/hafiz.junaid3"
                  className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://linkedin.com/in/junaid-khan"
                  className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Burhan Master Minds Consultancy. All rights reserved.
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  )
}

