import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Burhan Master Minds Consultancy",
    template: "%s | Burhan Master Minds Consultancy",
  },
  description: "Professional consultancy services for business growth and development",
  keywords: ["consultancy", "business development", "training", "youth development", "professional development"],
  authors: [
    {
      name: "Junaid Azeem Khan",
      url: "https://linkedin.com/in/junaid-khan",
    },
  ],
  creator: "Junaid Azeem Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://burhanmasterminds.com",
    title: "Burhan Master Minds Consultancy",
    description: "Professional consultancy services for business growth and development",
    siteName: "Burhan Master Minds Consultancy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burhan Master Minds Consultancy",
    description: "Professional consultancy services for business growth and development",
    creator: "@junaidkhan",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

