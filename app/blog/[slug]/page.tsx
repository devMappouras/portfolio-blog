import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts: Record<
  string,
  {
    title: string
    date: string
    readTime: string
    tags: string[]
    content: string
  }
> = {
  "clean-architecture-dotnet": {
    title: "Implementing Clean Architecture in .NET Core",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["C#", ".NET Core", "Architecture", "Best Practices"],
    content: `
# Implementing Clean Architecture in .NET Core

Clean Architecture is a software design philosophy that separates the elements of a design into ring levels. The main rule of Clean Architecture is that code dependencies can only point inward.

## Core Principles

The architecture is divided into layers:

1. **Domain Layer** - Contains enterprise business rules and entities
2. **Application Layer** - Contains application business rules and use cases
3. **Infrastructure Layer** - Contains external concerns like databases and APIs
4. **Presentation Layer** - Contains UI and API controllers

## Benefits

- **Independence of Frameworks** - The architecture doesn't depend on the existence of some library
- **Testability** - Business rules can be tested without the UI, database, or any external element
- **Independence of UI** - The UI can change easily without changing the rest of the system
- **Independence of Database** - You can swap out SQL Server for MongoDB, or any other database

## Implementation in .NET Core

Here's a basic structure for a Clean Architecture project in .NET Core:

\`\`\`
Solution/
├── Domain/
│   ├── Entities/
│   ├── Interfaces/
│   └── ValueObjects/
├── Application/
│   ├── UseCases/
│   ├── DTOs/
│   └── Interfaces/
├── Infrastructure/
│   ├── Persistence/
│   ├── Services/
│   └── Repositories/
└── WebAPI/
    ├── Controllers/
    └── Middleware/
\`\`\`

This structure ensures that your business logic remains independent of external concerns, making your application more maintainable and testable.
    `,
  },
  "angular-performance-optimization": {
    title: "Angular Performance Optimization Techniques",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["Angular", "TypeScript", "Performance", "Frontend"],
    content: `
# Angular Performance Optimization Techniques

Performance is crucial for user experience. Here are proven techniques to optimize your Angular applications.

## 1. Lazy Loading

Implement lazy loading for feature modules to reduce initial bundle size:

\`\`\`typescript
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
\`\`\`

## 2. OnPush Change Detection

Use OnPush change detection strategy to reduce unnecessary checks:

\`\`\`typescript
@Component({
  selector: 'app-user-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '...'
})
export class UserListComponent {}
\`\`\`

## 3. TrackBy Functions

Always use trackBy with *ngFor to help Angular identify which items have changed:

\`\`\`typescript
trackByUserId(index: number, user: User): number {
  return user.id;
}
\`\`\`

## 4. Unsubscribe from Observables

Prevent memory leaks by unsubscribing from observables:

\`\`\`typescript
private destroy$ = new Subject<void>();

ngOnInit() {
  this.dataService.getData()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.data = data);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
\`\`\`

These techniques will significantly improve your Angular application's performance and user experience.
    `,
  },
  "microservices-communication-patterns": {
    title: "Microservices Communication Patterns",
    date: "2023-12-20",
    readTime: "10 min read",
    tags: ["Microservices", "Architecture", "APIs", "Backend"],
    content: `
# Microservices Communication Patterns

Understanding communication patterns is essential for building robust microservices architectures.

## Synchronous Communication

### REST APIs
The most common pattern using HTTP/HTTPS:

- **Pros**: Simple, widely understood, stateless
- **Cons**: Tight coupling, cascading failures
- **Use Case**: Direct client-to-service communication

### gRPC
High-performance RPC framework:

- **Pros**: Fast, efficient, strong typing
- **Cons**: More complex, less human-readable
- **Use Case**: Internal service-to-service communication

## Asynchronous Communication

### Message Queues
Using systems like RabbitMQ or Azure Service Bus:

- **Pros**: Decoupling, reliability, scalability
- **Cons**: Complexity, eventual consistency
- **Use Case**: Event-driven architectures

### Event Streaming
Using platforms like Apache Kafka:

- **Pros**: High throughput, event sourcing
- **Cons**: Operational complexity
- **Use Case**: Real-time data processing

## Best Practices

1. **Use async communication for non-critical operations**
2. **Implement circuit breakers for resilience**
3. **Add proper monitoring and tracing**
4. **Design for failure**
5. **Use API gateways for external communication**

Choose the right pattern based on your specific requirements for consistency, performance, and complexity.
    `,
  },
  "sql-query-optimization": {
    title: "SQL Query Optimization Best Practices",
    date: "2023-12-10",
    readTime: "7 min read",
    tags: ["SQL", "Database", "Performance", "Backend"],
    content: `
# SQL Query Optimization Best Practices

Optimizing SQL queries is crucial for application performance. Here are essential techniques.

## 1. Use Proper Indexing

Indexes are the foundation of query performance:

\`\`\`sql
-- Create index on frequently queried columns
CREATE INDEX idx_user_email ON Users(Email);

-- Composite index for multiple columns
CREATE INDEX idx_order_customer_date ON Orders(CustomerId, OrderDate);
\`\`\`

## 2. Avoid SELECT *

Always specify the columns you need:

\`\`\`sql
-- Bad
SELECT * FROM Users WHERE Id = 1;

-- Good
SELECT Id, Name, Email FROM Users WHERE Id = 1;
\`\`\`

## 3. Use WHERE Instead of HAVING

Filter data as early as possible:

\`\`\`sql
-- Less efficient
SELECT CustomerId, COUNT(*) as OrderCount
FROM Orders
GROUP BY CustomerId
HAVING CustomerId > 100;

-- More efficient
SELECT CustomerId, COUNT(*) as OrderCount
FROM Orders
WHERE CustomerId > 100
GROUP BY CustomerId;
\`\`\`

## 4. Optimize JOINs

- Use INNER JOIN when possible
- Ensure JOIN columns are indexed
- Consider denormalization for frequently joined tables

## 5. Use Query Execution Plans

Analyze your queries using execution plans to identify bottlenecks:

\`\`\`sql
-- SQL Server
SET SHOWPLAN_ALL ON;
GO
-- Your query here
GO
SET SHOWPLAN_ALL OFF;
\`\`\`

## 6. Avoid Functions on Indexed Columns

Functions prevent index usage:

\`\`\`sql
-- Bad (index not used)
SELECT * FROM Users WHERE YEAR(CreatedDate) = 2024;

-- Good (index used)
SELECT * FROM Users 
WHERE CreatedDate >= '2024-01-01' 
AND CreatedDate < '2025-01-01';
\`\`\`

Regular monitoring and optimization of your SQL queries will ensure your application remains performant as data grows.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <article className="container py-12 md:py-24">
          <div className="mx-auto max-w-3xl space-y-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <header className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl">{post.title}</h1>
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
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("# ")) {
                        return `<h1>${line.slice(2)}</h1>`
                      }
                      if (line.startsWith("## ")) {
                        return `<h2>${line.slice(3)}</h2>`
                      }
                      if (line.startsWith("### ")) {
                        return `<h3>${line.slice(4)}</h3>`
                      }
                      if (line.startsWith("- ")) {
                        return `<li>${line.slice(2)}</li>`
                      }
                      if (line.startsWith("```")) {
                        return line.includes("```") && !line.startsWith("```") ? "</code></pre>" : "<pre><code>"
                      }
                      if (line.trim() === "") {
                        return "<br />"
                      }
                      return `<p>${line}</p>`
                    })
                    .join(""),
                }}
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
