"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    if (buttonRef.current) {
      const button = buttonRef.current
      const rect = button.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      const ripple = document.createElement("div")
      ripple.className = "theme-ripple"
      ripple.style.width = ripple.style.height = "100px"
      ripple.style.left = `${x - 50}px`
      ripple.style.top = `${y - 50}px`

      document.body.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 800)
    }

    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button ref={buttonRef} variant="ghost" size="icon" onClick={handleThemeChange} className="h-9 w-9">
      {theme === "dark" ? <Sun className="h-4 w-4 transition-all" /> : <Moon className="h-4 w-4 transition-all" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
