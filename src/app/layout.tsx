import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "Play Tic Tac Toe game",
  icons: {
    icon: "/favicon.ico",
  },
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body className="relative min-h-screen flex flex-col bg-linear-to-br from-yellow-300 to-orange-200">
        {children}
      </body>
    </html>
  );
}
