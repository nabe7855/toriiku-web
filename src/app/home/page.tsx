"use client";
import "@/components/HomePage.css";
import { FaSpinner } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import FoodCard from "@/components/FoodCard";
import UserCountBanner from "@/components/UserCountBanner";
import SortOptions from "@/components/SortOptions";
import {
  AdjustmentsIcon,
  LocationSearchIcon,
  SearchIcon,
} from "@/components/icons";
import type { FoodItem } from "@/types";

export default function UnifiedHome() {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [sortOrder, setSortOrder] = useState<"new" | "priceHigh" | "near">("new");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    console.log("✅ 統合版 HomePage 読み込み完了");
  }, []);

  // 仮データ
  const mockFoodItems: FoodItem[] = [
    {
      id: "1",
      name: "焼きたてパン詰め合わせ",
      description: "本日焼き上げたパンの残りを詰め合わせました。クロワッサン、カレーパンなど。",
      imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400",
      originalPrice: 1200,
      discountedPrice: 0,
      store: {
        id: "s1",
        name: "ベーカリー・トリーク",
        address: "東京都渋谷区",
        distance: "500m",
        latitude: 0,
        longitude: 0,
      },
      category: "パン",
      quantity: 3,
      initialQuantity: 5,
      pickupStartTime: "18:00",
      pickupEndTime: "20:00",
    },
    {
      id: "2",
      name: "新鮮野菜セット",
      description:
        "形が不揃いなため規格外となった新鮮な野菜のセットです。トマト、きゅうり、レタスなど。",
      imageUrl: "https://images.unsplash.com/photo-1607301405390-985b7dfe3f46?w=400",
      originalPrice: 800,
      discountedPrice: 0,
      store: {
        id: "s2",
        name: "グリーンファーム",
        address: "東京都世田谷区",
        distance: "1.2km",
        latitude: 0,
        longitude: 0,
      },
      category: "野菜",
      quantity: 4,
      initialQuantity: 8,
      pickupStartTime: "16:00",
      pickupEndTime: "19:00",
    },
  ];

  return (
    <div style={{ backgroundColor: "#fafaf9", minHeight: "100vh" }}>
      {/* ✅ ヘッダー */}
      <Header
        onSummaryClick={() =>
          alert("🌿 Toriku（トリーク）はフードロス削減を目指すアプリです！")
        }
      />

      <main className="home-container">
        {/* ✅ ユーザー数バナー */}
        <UserCountBanner count={5432} />

        {/* ✅ タイトルとサブ説明 */}
        <h1 className="home-title">Toriku（トリーク）</h1>
        <p className="home-subtitle">
          フードロス削減アプリへようこそ！地球にやさしい選択を始めましょう🌍
        </p>

        {/* ✅ 現在地ボタン */}
        <button
          onClick={() => {
            setIsLocating(true);
            setTimeout(() => setIsLocating(false), 1500);
          }}
          disabled={isLocating}
          className="searchButton"
        >
          {isLocating ? (
            <div className="flex items-center">
              <FaSpinner
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  animation: "spin 1s linear infinite",
                }}
              />
              現在地を取得中…
            </div>
          ) : (
            <div className="flex items-center">
              <LocationSearchIcon
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              現在地から探す
            </div>
          )}
        </button>

        {/* ✅ 検索バー */}
        <div className="searchContainer">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="お店や商品名で検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="searchInput"
          />
        </div>

        {/* ✅ 並び替え・フィルター */}
        <div className="sort-filter-row">
          <SortOptions currentSort={sortOrder} onSortChange={setSortOrder} />
          <button
            onClick={() => alert("フィルター画面開く")}
            className="toriku-filter-btn"
          >
            <AdjustmentsIcon className="icon" />
            <span>フィルター</span>
            {activeFilters.length > 0 && (
              <span className="toriku-filter-badge">{activeFilters.length}</span>
            )}
          </button>
        </div>

        {/* ✅ 商品カード一覧 */}
        <div className="food-list">
          {mockFoodItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
              userPlan="free"
              onUpgradeClick={() => alert("アップグレード画面へ✨")}
              isFavorite={false}
              onToggleFavorite={() => alert("お気に入り切り替え")}
            />
          ))}
        </div>

        {/* ✅ 結果が0件の場合 */}
        {mockFoodItems.length === 0 && (
          <div className="no-results">
            <p>条件に合う商品が見つかりませんでした。</p>
            <p>検索キーワードやフィルター条件を変更してみてください。</p>
          </div>
        )}
      </main>

      {/* ✅ フッター */}
      <BottomNav activeTab="home" setActiveTab={() => {}} />
    </div>
  );
}
