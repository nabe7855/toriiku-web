import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

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
      <body style={{ backgroundColor: "#fafaf9" }} className={notoSansJP.className}>
        {children}
      </body>
    </html>
  );
}
