import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Raheel | Senior Full Stack Engineer",
  description: "Senior Full Stack Developer with 7+ years of experience in React, Node.js, Next.js, Ruby on Rails, and AWS. Building scalable, high-performance web applications.",
  keywords: ["Full Stack Developer", "React", "Node.js", "Next.js", "TypeScript", "AWS"],
  authors: [{ name: "Abdul Raheel" }],
  openGraph: {
    title: "Abdul Raheel | Senior Full Stack Engineer",
    description: "Senior Full Stack Developer with 7+ years of experience building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
