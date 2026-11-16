import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saadika Shaikh | Frontend Developer",
  description:
    "Frontend Developer in Mumbai building fast, scalable React and Next.js applications for FinTech and e-commerce products.",
  openGraph: {
    title: "Saadika | Frontend Developer",
    description: "React & Next.js developer. View projects, experience and contact details.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
