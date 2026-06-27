import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ishara Senarath | Portfolio",
  description: "Personal portfolio of Ishara Senarath - IT Undergraduate, Software Engineer, and Full-Stack Web Developer. Specializing in high-performance React/Next.js and Java/Spring Boot solutions.",
  authors: [{ name: "Ishara Senarath" }],
  keywords: ["Ishara Senarath", "Software Engineer", "Full Stack Developer", "Sri Lanka", "SLIIT", "Next.js", "Spring Boot", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col select-none">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
