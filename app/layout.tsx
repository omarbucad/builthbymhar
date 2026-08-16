import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://builtbymhar.tech"),

  title: {
    default: "Romar Bucad | Full Stack Developer",
    template: "%s | Romar Bucad",
  },

  description:
      "Romar Bucad is a Full Stack Developer from the Philippines with 10+ years of experience building web applications with Laravel, React, Angular, PHP, and modern web technologies.",

  keywords: [
    "Romar Bucad",
    "Mhar Bucad",
    "BuiltByMhar",
    "Full Stack Developer",
    "Full Stack Developer Philippines",
    "Laravel Developer",
    "PHP Developer",
    "React Developer",
    "Angular Developer",
    "Web Application Developer",
    "Laravel React Developer",
    "Remote Full Stack Developer Philippines",
  ],

  authors: [
    {
      name: "Romar Bucad",
      url: "https://builtbymhar.tech",
    },
  ],

  creator: "Romar Bucad",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Romar Bucad | Full Stack Developer",
    description:
        "Full Stack Developer with 10+ years of experience building and improving web applications using Laravel, React, Angular, PHP, and modern technologies.",
    url: "/",
    siteName: "BuiltByMhar",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Romar Bucad - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Romar Bucad | Full Stack Developer",
    description:
        "Full Stack Developer building web applications with Laravel, React, Angular, and PHP.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
