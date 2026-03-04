import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name — MERN Stack Developer",
  description:
    "Full-stack MERN developer building beautiful, scalable web applications with React, Node.js, MongoDB & Express.",
  keywords: ["MERN", "React", "Next.js", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — MERN Stack Developer",
    description: "Full-stack MERN developer building beautiful, scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-cream font-body antialiased">
        {children}
      </body>
    </html>
  );
}
