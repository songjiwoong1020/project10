import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  articles
}: Readonly<{
  children: React.ReactNode;
  articles: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
          <header className="fixed z-50 top-0 w-full bg-[#90654E] text-[#4E3333] p-4 text-xl font-[GangwonEduPowerExtraBoldA]">
            뉴스뉴스
          </header>
          <main className="mt-20 px-4 flex flex-col items-center">
            <section className="w-full max-w-4xl min-h-[100px] bg-white p-4 rounded-lg">
            </section>
            {articles}
          </main>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
