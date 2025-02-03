import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Target, Users2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Youth Development Programs",
  description: "Career readiness training, leadership workshops, and personal growth programs.",
}

export default function YouthDevelopmentPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Youth Development Programs</h1>
            <p className="text-lg text-muted-foreground">
              Empowering the next generation with essential skills and knowledge for success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6 space-y-2">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Career Readiness Training</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive training programs to prepare youth for successful careers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Leadership Workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive workshops focused on developing leadership skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Personal Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Programs designed to enhance personal development and life skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Users2 className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">Communication Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Training in effective communication and public speaking.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Program Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Enhanced career prospects and employability</li>
              <li>Improved leadership and management skills</li>
              <li>Better communication and interpersonal abilities</li>
              <li>Increased self-confidence and personal growth</li>
              <li>Networking opportunities with industry professionals</li>
            </ul>
          </div>

          <Button asChild size="lg" className="gradient-bg animate-gradient">
            <Link href="/contact">Enroll Now</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <Image
            src="/youth-development.jpg"
            alt="Youth Development"
            width={400}
            height={600}
            className="rounded-lg object-cover"
          />
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Program Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Duration: 3-6 months</p>
                <p>Format: In-person & Virtual</p>
                <p>Certificate: Yes</p>
                <p>Industry Recognition: Yes</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

