"use client"

import { useTheme } from "next-themes"
import { ThemeToggler } from "./theme-toggler"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div>
      <ThemeToggler theme={theme} setTheme={setTheme} />
    </div>
  )
}
