import type { Metadata } from "next"
import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { fontMono, fontRoboto, fontRoobert } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/providers"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,

  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-secondary font-roobert font-medium antialiased",
          fontRoboto.variable,
          fontMono.variable,
          fontRoobert.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
