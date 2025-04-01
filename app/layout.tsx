import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollButton } from "@/components/scroll-button"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kalki 2898 - Vegan Developer Portfolio',
  description: 'A futuristic vegan developer portfolio inspired by Kalki 2898 AD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="circuit-background fixed inset-0 -z-10 opacity-10" />
          <CustomCursor />
          {children}
          <ScrollButton />
        </ThemeProvider>
      </body>
    </html>
  )
}