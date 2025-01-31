import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Burhan Master Minds Consultancy. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="https://facebook.com/hafiz.junaid3"
            className="text-sm text-muted-foreground hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>
          <Link
            href="https://linkedin.com/in/junaid-khan"
            className="text-sm text-muted-foreground hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}

