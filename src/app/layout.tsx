import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

import { NavBar } from "@/components/nav-bar"

import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Front End Gallery",
  description: "$description"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(inter.className, "dark:bg-[#1C1A1E]")}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col">
            <NavBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}