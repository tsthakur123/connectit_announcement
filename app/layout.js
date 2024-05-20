import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConnectIT - coming soon",
  description:
    "Get ready for ConnectIT, the revolutionary platform connecting top tech talent with leading companies. Discover, innovate, and elevate your career with us. Join the tech revolution today!",
  keywords:
    "ConnectIT, tech talent, tech jobs, hire tech professionals, tech platform, innovation, tech community, tech careers",
  openGraph: {
    title: "ConnectIT - The Ultimate Tech Talent Platform Coming Soon!",
    description:
      "Discover ConnectIT, the revolutionary platform where top tech talent meets leading companies. Unlock hidden talent, innovate, and elevate your career. Join the tech revolution now!",
    url: "https://www.connectiit.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
      </head>
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
