// components/ClientLayout.tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import type { ActiveTab } from "@/types";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home"); // ✅ 型指定で安全！

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fafaf9",
      }}
    >
      {/* ✅ 全ページ共通ヘッダー */}
      <Header
        onSummaryClick={() =>
          alert("🌿 Torīkuはフードロス削減を目指すアプリです！")
        }
      />

      {/* ✅ 各ページのコンテンツ */}
      <main
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "960px",
          margin: "0 auto",
          padding: "24px 16px 96px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>

      {/* ✅ 全ページ共通フッター */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
