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
