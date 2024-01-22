import type { Metadata } from "next"
import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { fontMono, fontRoboto } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-roboto antialiased",
          fontRoboto.variable,
          fontMono.variable
        )}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
