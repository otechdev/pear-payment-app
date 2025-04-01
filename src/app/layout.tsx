import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pear - The Future of Payment",
  description: "Fast, easy, and convenient payments with QR codes. No more fumbling with cash or waiting in line.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
