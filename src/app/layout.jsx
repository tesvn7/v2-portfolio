import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  
  title: "tesvn7",
  description: "a project website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
