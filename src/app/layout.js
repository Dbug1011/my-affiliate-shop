import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const pressStart2P = {
  variable: "--font-press-start",
  style: {
    fontFamily: '"Courier New", "Monaco", "Menlo", monospace',
    fontWeight: "bold",
    letterSpacing: "0.1em",
  },
}

export const metadata = {
  title: "KiSelects",
  description:
    "Hi there! I'm kiki, a computer engineering student and these are my trusted shops & products since Year 1, please support me by buying through my links!<3",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased overflow-x-hidden overflow-y-auto`}
      >
        {children}
      </body>
    </html>
  )
}
