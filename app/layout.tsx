import type { Metadata } from "next";
import { Noto_Sans_JP, Oswald } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lincqord | Differenceをチカラに、人と組織に革新を。",
  description:
    "Lincqord（リンクォード）は、組織課題を文化の視点で捉え、CQ（文化知性）を軸に「自分たちを知る→他者と対話する→個人と組織が変わる→成果を産む」のアプローチで、違いをチカラにする組織づくりを支援します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
