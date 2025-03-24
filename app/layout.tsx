import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"], display: "swap" }) // Ensures correct font loading

export const metadata: Metadata = {
  title: "DavidCui.dev",
  icons: {
    icon: "favicon.ico", // or "/favicon.png"
  },
  description: "Engineer | Innovator | Artist",
  openGraph: {
    title: "David Cui",
    description: "Engineer | Innovator | Artist",
    images: [
      {
        url: "apple-touch-icon.png", // can be a better OG image if desired
        width: 600,
        height: 600,
        alt: "David Cui Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Cui",
    description: "Engineer | Innovator | Artist",
    images: ["apple-touch-icon.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
