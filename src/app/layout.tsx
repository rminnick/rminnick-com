import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ryan Minnick — Public Sector Technologist",
    template: "%s | Ryan Minnick",
  },
  description:
    "Ryan Minnick is a public sector technologist focused on AI, data, and modern platforms reshaping tax administration and government operations.",
  metadataBase: new URL("https://rminnick.com"),
  openGraph: {
    title: "Ryan Minnick — Public Sector Technologist",
    description:
      "Public sector technologist focused on AI, data, and modern platforms for government.",
    url: "https://rminnick.com",
    siteName: "Ryan Minnick",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Minnick — Public Sector Technologist",
    description:
      "Public sector technologist focused on AI, data, and modern platforms for government.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
