import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Card Career — ship visible progress",
  description: "career OS as public progress cards",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
