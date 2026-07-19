import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  metadataBase: new URL("https://builtbymhar.tech"),
  title: "Romar Bucad | Senior Full-Stack Developer",
  description:
      "Senior Full-Stack Developer from the Philippines specializing in Laravel, React, Next.js, WordPress, Tailwind CSS, and custom web applications. Building fast, scalable, and modern websites for businesses.",

  keywords: [
    "Romar Bucad",
    "Built by Mhar",
    "Senior Full-Stack Developer",
    "Full Stack Developer Philippines",
    "Freelance Web Developer Philippines",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "PHP Developer",
    "Tailwind CSS Developer",
    "Web Application Developer",
    "Custom Website Development",
    "Remote Full Stack Developer",
  ],


  openGraph: {
    title: "Romar Bucad | Senior Full-Stack Developer",
    description:
        "Senior Full-Stack Developer specializing in Laravel, React, Next.js, WordPress, and custom web applications.",
    url: "https://builtbymhar.tech",
    siteName: "Built by Mhar",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
      },
    ],
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
    <body className="bg-white text-gray-900">
      <main className="max-w-2xl mx-auto px-8 py-20">{children}</main>
    </body>
    </html>
);
}
