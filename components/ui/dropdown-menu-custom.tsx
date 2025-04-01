'use client'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PaintbrushIcon, Palette } from "lucide-react"
import { useEffect, useState } from "react";

export function DropdownMenuCustom() {
  const [theme, setTheme] = useState<string>("red")
  const [themes, setThemes] = useState<Record<string, Record<string, string>>>({})

  useEffect(() => {
    // Fetch themes from CSS variables
    const fetchThemes = () => {
      const styles = getComputedStyle(document.documentElement)
      const themeKeys = ["orange", "red", "blue", "green", "purple"] // Define your theme keys
      const themeData: Record<string, Record<string, string>> = {}

      themeKeys.forEach((key) => {
        themeData[key] = {
          "--background": styles.getPropertyValue(`--${key}-background`).trim(),
          "--border": styles.getPropertyValue(`--${key}-border`).trim(),
          "--sidebar": styles.getPropertyValue(`--${key}-sidebar`).trim(),
          "--sidebar-primary-foreground": styles.getPropertyValue(`--${key}-sidebar-primary-foreground`).trim(),
          "--sidebar-accent": styles.getPropertyValue(`--${key}-sidebar-accent`).trim(),
          "--sidebar-border": styles.getPropertyValue(`--${key}-sidebar-border`).trim(),
        }
      })

      setThemes(themeData)

      // Set the initial theme from localStorage
      const storedTheme = localStorage.getItem("theme") || "red"
      setTheme(storedTheme)
    }

    fetchThemes()
  }, [])

  useEffect(() => {
    // Apply the theme only after themes are loaded
    if (Object.keys(themes).length > 0) {
      applyTheme(theme)
    }
  }, [theme, themes])

  function applyTheme(selectedTheme: string) {
    const themeVariables = themes[selectedTheme]
    if (themeVariables) {
      Object.entries(themeVariables).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value)
      })
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", selectedTheme)
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-sidebar" align="end" forceMount>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger icon={<Palette className="size-5" />}>
              Themes
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {Object.keys(themes).map((key) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => setTheme(key)}
                    className={theme === key ? "font-bold" : ""}
                  >
                    <span
                      className="w-4 h-4 rounded-full mr-2"
                      style={{ backgroundColor: themes[key]["--background"] }}
                    ></span>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Share calendar via</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team

          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out

        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
