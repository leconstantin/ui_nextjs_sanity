import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/utils/theme-provider";
const firaCode = Fira_Code({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Blog in Sanity",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.className} antialiased `}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="max-w-5xl mx-auto px-6">
            {children}
          </main>
          <TailwindIndicator />
        </ThemeProvider>

      </body>
    </html>
  );
}
