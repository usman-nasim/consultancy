"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const MotionDiv = motion.div

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg animate-gradient opacity-10" />
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <MotionDiv
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                <span className="gradient-text">Empowering Growth</span>
                <br />
                Through Expert Consultancy
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Professional solutions for business development, training, and organizational excellence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="gradient-bg animate-gradient text-white">
                <Link href="#book-consultation">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg"
              alt="Team Meeting"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
              priority
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

