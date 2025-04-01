import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Estifanos Kebede | Web Developer & Software Engineer",
  description:
    "I'm Estifanos Kebede, a passionate web developer specializing in React, Next.js, and backend technologies like Spring Boot and Express.js. Explore my portfolio and projects.",
  keywords: [
    "Estifanos Kebede",
    "web developer",
    "React",
    "Next.js",
    "Spring Boot",
    "full-stack developer",
    "MongoDB",
    "software engineer",
    "JavaScript",
  ],
  authors: [{ name: "Estifanos Kebede", url: "https://yourportfolio.com" }],
  creator: "Estifanos Kebede",
  openGraph: {
    title: "Estifanos Kebede | Web Developer & Software Engineer",
    description:
      "Explore my portfolio featuring cutting-edge web development projects with React, Next.js, and backend technologies.",
    url: "https://yourportfolio.com",
    siteName: "Estifanos Kebede Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estifanos Kebede Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Estifanos Kebede | Web Developer & Software Engineer",
    description:
      "Check out my projects in React, Next.js, Spring Boot, and more!",
    images: ["https://yourportfolio.com/twitter-image.jpg"],
  },
  metadataBase: new URL("https://yourportfolio.com"),
  alternates: {
    canonical: "https://yourportfolio.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
