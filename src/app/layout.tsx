// app/layout.tsx
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import ClientLayout from "../components/ClientLayout"; // ← クライアント用レイアウトを分離（useStateを安全に使う）

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Torīku (トリーク) - フードロス削減アプリ",
  description: "フードロスを減らし、食品レスキューを促進するアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={notoSansJP.className}
        style={{
          backgroundColor: "#fafaf9",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
