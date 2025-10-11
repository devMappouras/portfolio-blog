import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample blog posts - in a real app, these would come from a CMS or database
const blogPosts = [
  {
    slug: "clean-architecture-dotnet",
    title: "Implementing Clean Architecture in .NET Core",
    excerpt:
      "Learn how to structure your .NET applications using Clean Architecture principles for maintainable and testable code.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["C#", ".NET Core", "Architecture", "Best Practices"],
  },
  {
    slug: "angular-performance-optimization",
    title: "Angular Performance Optimization Techniques",
    excerpt:
      "Discover practical strategies to improve your Angular application performance, from lazy loading to change detection optimization.",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["Angular", "TypeScript", "Performance", "Frontend"],
  },
  {
    slug: "microservices-communication-patterns",
    title: "Microservices Communication Patterns",
    excerpt:
      "Explore different communication patterns in microservices architecture, including synchronous and asynchronous approaches.",
    date: "2023-12-20",
    readTime: "10 min read",
    tags: ["Microservices", "Architecture", "APIs", "Backend"],
  },
  {
    slug: "sql-query-optimization",
    title: "SQL Query Optimization Best Practices",
    excerpt:
      "Master the art of writing efficient SQL queries with indexing strategies, query plans, and performance tuning techniques.",
    date: "2023-12-10",
    readTime: "7 min read",
    tags: ["SQL", "Database", "Performance", "Backend"],
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
              <p className="text-lg text-muted-foreground">
                Thoughts on software development, architecture, and best practices
              </p>
            </div>

            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">{post.excerpt}</CardDescription>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/50">
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">
                  More articles coming soon. Stay tuned for insights on software development, architecture patterns, and
                  technology trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
