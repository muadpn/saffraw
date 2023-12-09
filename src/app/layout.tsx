import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
const manrope = Manrope({
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saffraw",
  description: "Saffraw is a online product showcase website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="UBwky1Rm6wOZAv6AJZDnHmSScAzhEzlTT4ajCidB07k"
        />
      </head>
      <body className={`${manrope.className} relative md:px-2`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
