import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"], display: "swap" }) // Ensures correct font loading

export const metadata: Metadata = {
  title: "David Cui",
  description: "Engineer | Innovator | Artist",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "David Cui",
    description: "Engineer | Innovator | Artist",
    type: "website",
    url: "https://davidcui.dev",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 512,
        height: 512,
        alt: "David Cui Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Cui",
    description: "Engineer | Innovator | Artist",
    images: ["/apple-touch-icon.png"],
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
