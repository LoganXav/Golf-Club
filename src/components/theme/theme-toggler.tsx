"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

interface Props {
  theme: string | undefined
  setTheme: (theme: string) => void
}

const ThemeToggler = ({ theme, setTheme }: Props) => (
  <SwitchPrimitives.Root
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    className={cn(
      "relative peer inline-flex w-[145px] p-[5px] shrink-0 cursor-pointer items-center rounded-full border-2 border-ring transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-transparent data-[state=unchecked]:bg-transparent"
    )}
  >
    {theme === "dark" && (
      <span className="left-4 absolute text-sm text-white scale-100 dark:scale-100">
        Light Mode
      </span>
    )}
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none h-8 w-8 rounded-full  shadow-lg ring-0  flex items-center justify-center transition-transform data-[state=checked]:translate-x-24 data-[state=unchecked]:translate-x-0  data-[state=checked]:bg-secondary data-[state=unchecked]:bg-black"
      )}
    >
      <Button variant="ghost" size="icon">
        <SunIcon
          className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black"
          aria-hidden="true"
        />
        {theme === "light" && (
          <MoonIcon
            className="absolute h-5 w-5 rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-0 text-white"
            aria-hidden="true"
          />
        )}
      </Button>
    </SwitchPrimitives.Thumb>
    {theme === "light" && (
      <span className="ml-2 text-sm text-input_invert scale-100 dark:scale-0">
        Dark Mode
      </span>
    )}
  </SwitchPrimitives.Root>
)
ThemeToggler.displayName = "ThemeToggler"

export { ThemeToggler }
