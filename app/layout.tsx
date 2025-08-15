import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Noto_Kufi_Arabic } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/Navbar"

const kufiFont = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-arabic'
})

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Celebrating Freedom: Indian Independence Day",
  description:
    "An educational journey through the history and significance of Indian Independence Day for university students",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={kufiFont.variable}>
      <body className="font-sans">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
