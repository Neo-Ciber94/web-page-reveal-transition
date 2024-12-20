import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "@/components/Link";
import Announcer from "@/components/Announcer";
import AnnouncerProvider from "@/components/AnnouncerContext";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnnouncerProvider>
        <body className={geistSans.className}>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/a">Page A</Link>
            <Link href="/b">Page B</Link>
          </nav>

          <main>
            <Announcer />
            {children}
          </main>
        </body>
      </AnnouncerProvider>
    </html>
  );
}
