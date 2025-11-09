"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import FoodCard from "@/components/FoodCard";
import FoodDetailModal from "@/components/FoodDetailModal"; // ← これ追加！
import type { ActiveTab } from "@/types";
import type { FoodItem } from "@/types"; // ← これも上の import に追加！


export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [userPlan, setUserPlan] = useState<"free" | "premium">("free");

  // 仮データ
  const mockFoodItems = [
    {
      id: "1",
      name: "余ったパンセット",
      description: "閉店前のパン3個入りセット",
      imageUrl:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
      originalPrice: 400,
      discountedPrice: 100,
      store: {
        id: "s1",
        name: "ベーカリー・リノ",
        address: "東京都渋谷区",
        distance: "500m",
        latitude: 0,
        longitude: 0,
      },
      category: "パン",
      quantity: 3,
      initialQuantity: 5,
      pickupStartTime: "17:00",
      pickupEndTime: "19:00",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fafaf9",
        paddingBottom: "80px",
      }}
    >
      <Header onSummaryClick={() => alert("このアプリについて 🌿")} />

      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "24px",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px" }}>
          Torīku（トリーク）
        </h1>
        <p style={{ marginBottom: "24px" }}>フードロス削減アプリへようこそ！</p>

        {/* FoodCard一覧 */}
        {mockFoodItems.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            onClick={() => setSelectedItem(item)} // ← クリックでモーダルを開く
            userPlan={userPlan}
            onUpgradeClick={() => alert("アップグレード画面へ✨")}
            isFavorite={false}
            onToggleFavorite={() => {}}
          />
        ))}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* ✅ モーダルを開く */}
      {selectedItem && (
        <FoodDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          userPlan={userPlan}
          onUpgradeClick={() => alert("プレミアムプラン限定機能です✨")}
          isFavorite={false}
          onToggleFavorite={() => alert("お気に入りを切り替えました")}
        />
      )}
    </div>
  );
}
