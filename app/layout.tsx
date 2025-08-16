import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Work_Sans, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { DemoAuthProvider } from "@/lib/demo-auth"
import "./globals.css"

const workSans = Work_Sans({ subsets: ["latin"] })
const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RePlate Campus - Food Waste Management",
  description: "Reduce food waste on campus with RePlate",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="font-sans bg-background text-foreground">
        <DemoAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </DemoAuthProvider>
      </body>
    </html>
  )
}
