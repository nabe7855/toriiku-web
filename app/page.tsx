"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import FoodCard from "@/components/FoodCard";
import FoodDetailModal from "@/components/FoodDetailModal";
import UpgradeModal from "@/components/UpgradeModal";
import UserCountBanner from "@/components/UserCountBanner";
import { mockFoodItems } from "@/data/mockData";
import type { ActiveTab, FoodItem } from "@/types";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [userPlan, setUserPlan] = useState<"free" | "premium">("free");
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);

  /** プレミアムプランにアップグレードする処理 */
  const handleUpgrade = () => {
    setUserPlan("premium");
    setUpgradeModalOpen(false);
    alert("✨プレミアムプランにアップグレードしました！");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fafaf9",
        paddingBottom: "80px",
      }}
    >
      {/* ヘッダー */}
      <Header
        onSummaryClick={() =>
          alert("🌿 Torīku（トリーク）はフードロス削減を目指すアプリです！")
        }
      />

      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "24px",
        }}
      >
        {/* 参加者バナー */}
        <UserCountBanner count={5432} />

        {/* タイトル */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Torīku（トリーク）
        </h1>
        <p
          style={{
            marginBottom: "24px",
            color: "#555",
            fontSize: "15px",
          }}
        >
          フードロス削減アプリへようこそ！
        </p>

        {/* フードカード一覧 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {mockFoodItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
              userPlan={userPlan}
              onUpgradeClick={() => setUpgradeModalOpen(true)}
              isFavorite={false}
              onToggleFavorite={() => alert("お気に入りを切り替えました")}
            />
          ))}
        </div>
      </main>

      {/* ボトムナビゲーション */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 商品詳細モーダル */}
      {selectedItem && (
        <FoodDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          userPlan={userPlan}
          onUpgradeClick={() => setUpgradeModalOpen(true)}
          isFavorite={false}
          onToggleFavorite={() => alert("お気に入りを切り替えました")}
        />
      )}

      {/* アップグレードモーダル */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setUpgradeModalOpen(false)}
        onUpgrade={handleUpgrade}
      />
    </div>
  );
}
