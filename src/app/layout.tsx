import { Playfair_Display, Raleway } from "next/font/google"
import CustomCursor from "@/components/layout/CustomCursor"

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${raleway.variable}`}>
      
      <body><CustomCursor />{children}</body>
    </html>
  )
}
