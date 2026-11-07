import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "J.ROME.WEB | Websites That Do More",
    template: "%s | J.ROME.WEB",
  },

  description:
    "J.ROME.WEB builds professional, modern websites for businesses, entrepreneurs, and organizations. From business websites and e-commerce to custom web applications.",

  keywords: [
    "web development",
    "website design",
    "business websites",
    "e-commerce websites",
    "custom web applications",
    "website redesign",
    "J.ROME.WEB",
  ],

  authors: [{ name: "J.ROME.WEB" }],
  creator: "J.ROME.WEB",

  openGraph: {
    title: "J.ROME.WEB | Websites That Do More",
    description:
      "Professional websites built around your goals, your customers, and your business.",
    url: "https://web-studio-jrome.netlify.app",
    siteName: "J.ROME.WEB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "J.ROME.WEB | Websites That Do More",
    description:
      "Professional websites built around your goals, your customers, and your business.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
