import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "Play Tic Tac Toe game",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <body className="relative min-h-screen flex flex-col bg-gradient-to-br from-yellow-300 to-orange-200">{children}</body>
    </html>
  );
}
