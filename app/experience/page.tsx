import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Mid Full Stack Software Engineer",
    company: "D.G. Techlink",
    location: "Limassol, Cyprus",
    period: "Dec 2023 - Present",
    description: [
      "Building .NET Core MVC Web APIs following Clean Architecture and Microservices patterns",
      "Developing professional UIs using Angular, Angular Material, and PrimeNG",
      "Creating efficient database solutions with SQL Server and stored procedures",
      "Collaborating with cross-functional teams using Azure DevOps and Git",
      "Implementing best practices in code quality, testing, and deployment",
    ],
    technologies: ["C#", ".NET Core", "Angular", "TypeScript", "SQL", "Azure DevOps", "PrimeNG"],
  },
  {
    title: "Junior Full Stack Software Engineer",
    company: "D.G. Techlink",
    location: "Limassol, Cyprus",
    period: "Sep 2021 - Dec 2023",
    description: [
      "Built RESTful APIs using C#/.NET following industry best practices",
      "Developed responsive web applications with Angular and Angular Material",
      "Designed and implemented database schemas and queries using SQL",
      "Participated in Agile development with two-week sprint cycles",
      "Contributed to code reviews and team knowledge sharing",
    ],
    technologies: ["C#", ".NET", "Angular", "SQL", "Git", "Agile"],
  },
  {
    title: "Software Developer Intern",
    company: "D.G. Techlink",
    location: "Limassol, Cyprus",
    period: "Jun 2021 - Sep 2021",
    description: [
      "Gained hands-on experience in full-stack web development",
      "Learned C#/.NET backend development and Angular frontend development",
      "Worked with SQL databases and query optimization",
      "Collaborated with senior developers on real-world projects",
    ],
    technologies: ["C#", ".NET", "Angular", "SQL"],
  },
]

const education = {
  degree: "Bachelor of Science (BSc) in Computing",
  grade: "First Class with Honours",
  institution: "University of Central Lancashire",
  period: "Sep 2018 - Jul 2023",
  description:
    "Specialized in software development with a focus on full-stack web technologies, algorithms, and software engineering principles.",
}

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Experience</h1>
              <p className="text-lg text-muted-foreground">My professional journey in software engineering</p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:items-end">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4 pt-8">
              <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{education.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {education.institution}
                      </CardDescription>
                      <Badge variant="outline" className="w-fit">
                        {education.grade}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{education.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
