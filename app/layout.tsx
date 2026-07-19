import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {

  title: "Romar Bucad | Senior Full-Stack Developer",
  description:
      "Experienced Full-Stack Developer specializing in Laravel, React, Angular, PHP, TypeScript, and modern web application development.",
  keywords: [
    "Romar Bucad",
    "Full Stack Developer",
    "Senior Full-Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Angular Developer",
    "PHP Developer",
    "Next.js Developer",
    "Freelance Developer Philippines",
  ],
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-8 py-20">{children}</div>
    </body>
    </html>
);
}
