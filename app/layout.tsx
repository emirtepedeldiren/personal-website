import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emir Tepedeldiren — Software Developer",
  description:
    "Mathematics & Computer Science Student & Software Developer. Bridging the gap between rigid mathematical logic and elegant software architecture.",
  keywords: [
    "Emir Tepedeldiren",
    "Software Developer",
    "Python",
    "Portfolio",
    "Mathematics",
    "Computer Science",
  ],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
