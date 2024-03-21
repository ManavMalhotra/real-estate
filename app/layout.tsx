import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
const cormant = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Deals on real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cormant.className}>{children}</body>
    </html>
  );
}
