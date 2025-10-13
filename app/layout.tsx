import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Christos Mappouras | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer specializing in C#/.NET, Angular, and modern web technologies. Building professional web applications and RESTful APIs.",
  keywords: ["Full Stack Developer", "Software Engineer", "C#", ".NET", "Angular", "TypeScript", "SQL", "Azure"],
  authors: [{ name: "Christos Mappouras" }],
  icons: {
    icon: '/chris03.png',
    shortcut: '/chris03.png',
    apple: '/chris03.png',
  },
  openGraph: {
    title: "Christos Mappouras | Full Stack Software Engineer",
    description: "Full Stack Software Engineer specializing in C#/.NET, Angular, and modern web technologies.",
    type: "website",
    images: ['/chris03.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="animated-bg" />
            {children}
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
