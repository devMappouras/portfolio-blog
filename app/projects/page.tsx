import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Events Customers Application",
    subtitle: "Honours Degree Thesis Project",
    description:
      "Your ultimate event companion powered by Flutter and GetX. A comprehensive mobile application for iOS and Android that enables users to buy tickets, manage bookings, and elevate their event experiences. Features real-time updates, secure payment processing, and intuitive booking management.",
    image: "/mobile-app-event-tickets-flutter.jpg",
    technologies: ["Flutter", "Dart", "GetX", "Firebase", "REST APIs"],
    highlights: [
      "Cross-platform mobile app for iOS and Android",
      "State management with GetX for optimal performance",
      "Real-time event updates and notifications",
      "Secure ticket purchasing and booking system",
      "Developed as Honours Degree thesis project",
    ],
  },
  {
    title: "Events Administration Website",
    subtitle: "Event Management Platform",
    description:
      "A comprehensive administration website developed using Angular and PrimeNG, designed to empower event organizers with complete control over their events. Manage events, tickets, sales, venues, and more through an intuitive and professional interface.",
    image: "/admin-dashboard-angular-events.jpg",
    technologies: ["Angular", "TypeScript", "PrimeNG", "RxJS", "REST APIs"],
    highlights: [
      "Full-featured admin dashboard for event management",
      "Real-time sales analytics and reporting",
      "Venue and capacity management",
      "Ticket inventory and pricing control",
      "Built with Angular and PrimeNG for professional UI",
    ],
  },
  {
    title: "Enterprise Web APIs",
    subtitle: "Microservices Architecture",
    description:
      "Designed and implemented scalable RESTful APIs using .NET Core following Clean Architecture principles. Built microservices for various business domains with proper separation of concerns, dependency injection, and comprehensive error handling.",
    image: "/api-microservices-architecture-dotnet.jpg",
    technologies: ["C#", ".NET Core", "SQL Server", "Azure", "Docker", "Clean Architecture"],
    highlights: [
      "Clean Architecture with CQRS pattern",
      "Microservices with independent deployment",
      "Comprehensive API documentation with Swagger",
      "Unit and integration testing with xUnit",
      "CI/CD pipeline with Azure DevOps",
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
              <p className="text-lg text-muted-foreground">
                Featured projects showcasing my expertise in full-stack development
              </p>
            </div>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid gap-6 md:grid-cols-5">
                    <div className="relative h-64 md:col-span-2 md:h-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <CardHeader>
                        <div className="space-y-2">
                          <CardTitle className="text-2xl">{project.title}</CardTitle>
                          <CardDescription className="text-base font-medium">{project.subtitle}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        <div>
                          <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/50">
              <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
                <h3 className="text-2xl font-bold">Want to see more?</h3>
                <p className="max-w-md text-muted-foreground">
                  Check out my GitHub profile for more projects and contributions to open source.
                </p>
                <Button asChild size="lg">
                  <a href="https://github.com/devmappouras" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
