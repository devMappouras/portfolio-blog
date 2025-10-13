import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const skills = {
  languages: ["C#", "TypeScript", "JavaScript", "SQL", "Python", "Dart"],
  frameworks: ["ASP.NET Core", "Angular", "React", "Next.js", "Flutter"],
  tools: ["Azure DevOps", "Git", "Docker", "SSMS", "Visual Studio"],
  methodologies: ["Agile/Scrum", "Clean Architecture", "Microservices", "TDD", "REST APIs"],
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-5xl space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-md animate-pulse" />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin-slow" style={{ animationDuration: '3s' }} />
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <Image
                      src="/chris03.png"
                      alt="Christos Mappouras"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                    Christos Mappouras
                  </h1>
                  <p className="text-xl text-muted-foreground md:text-2xl">Full Stack Software Engineer</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Larnaca, Cyprus</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>D.G. Techlink</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground text-balance">
                  I'm a dedicated Full Stack Developer with expertise in building professional web applications and RESTful
                  APIs. Specializing in <span className="text-foreground font-medium">C#/.NET</span>,{" "}
                  <span className="text-foreground font-medium">Angular</span>, and modern web technologies, I create
                  innovative and efficient solutions following Clean Architecture and Agile methodologies.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:devmappouras@gmail.com">
                      <Download className="mr-2 h-4 w-4" />
                      Contact Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="border-t border-border/40 bg-muted/30 py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    BSc (Hons) Computing graduate from the University of Central Lancashire, specializing in software
                    development. I'm highly motivated to take every new opportunity to expand my knowledge and practical
                    skills in the field.
                  </p>
                  <p>
                    Currently working as a{" "}
                    <span className="text-foreground font-medium">Mid Full Stack Software Engineer</span> at D.G.
                    Techlink, where I build .NET Core MVC Web APIs following Clean Architecture and Microservices,
                    develop professional UIs using Angular and PrimeNG, and create efficient database solutions with
                    SQL.
                  </p>
                  <p>
                    I enjoy working both as a team member and independently, contributing to projects using Agile
                    methodologies over two-week sprints. My passion lies in creating well-architected, maintainable
                    solutions that solve real-world problems.
                  </p>
                </div>
              </div>

              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-xl font-semibold">Certifications</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="px-3 py-1">
                    Microsoft Certified: Azure Fundamentals
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    Microsoft Certified: Azure Data Fundamentals
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Technologies</h2>
                <p className="text-muted-foreground">A comprehensive toolkit for building modern web applications</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 justify-items-center">
                <Card className="animate-fade-in-up w-full" style={{ animationDelay: "0.3s" }}>
                  <CardContent className="pt-6 text-center">
                    <h3 className="mb-4 text-lg font-semibold">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in-up w-full" style={{ animationDelay: "0.4s" }}>
                  <CardContent className="pt-6 text-center">
                    <h3 className="mb-4 text-lg font-semibold">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in-up w-full" style={{ animationDelay: "0.5s" }}>
                  <CardContent className="pt-6 text-center">
                    <h3 className="mb-4 text-lg font-semibold">Tools & Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in-up w-full" style={{ animationDelay: "0.6s" }}>
                  <CardContent className="pt-6 text-center">
                    <h3 className="mb-4 text-lg font-semibold">Methodologies & Practices</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.methodologies.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
