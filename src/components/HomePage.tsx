"use client";
import "./HomePage.css";

import React, { useEffect } from "react";
import FoodCard from "./FoodCard";
import UserCountBanner from "./UserCountBanner";
import SortOptions from "./SortOptions";
import {
  AdjustmentsIcon,
  XIcon,
  LocationSearchIcon,
  SpinnerIcon,
  SearchIcon,
} from "./icons";
import type { FoodItem, Store } from "../types";
import type { SortOrder } from "../types";

interface HomePageProps {
  foodItems: FoodItem[];
  onCardClick: (item: FoodItem) => void;
  onSearchFromCurrentLocation: () => void;
  isLocating: boolean;
  storeFilter: Store | null;
  onClearStoreFilter: () => void;
  sortOrder: SortOrder;
  onSortChange: (sort: SortOrder) => void;
  activeFilters: string[];
  onFilterButtonClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  foodItems,
  onCardClick,
  onSearchFromCurrentLocation,
  isLocating,
  storeFilter,
  onClearStoreFilter,
  sortOrder,
  onSortChange,
  activeFilters,
  onFilterButtonClick,
  searchQuery,
  onSearchChange,
}) => {
  useEffect(() => {
    console.log("✅ HomePage.tsx 読み込み完了");
  }, []);

  return (
    <div className="home-container">
      {/* ✅ 上部バナー */}
      <UserCountBanner count={5432} />

      {/* ✅ タイトルと説明 */}
      <h1 className="home-title">Toriku（トリーク）</h1>
      <p className="home-subtitle">
        フードロス削減アプリへようこそ！地球にやさしい選択を始めましょう🌍
      </p>

      {/* ✅ 現在地ボタン */}
      <button
        onClick={onSearchFromCurrentLocation}
        disabled={isLocating}
        className="location-button"
      >
        {isLocating ? (
          <>
            <SpinnerIcon className="icon" />
            <span>現在地を取得中...</span>
          </>
        ) : (
          <>
            <LocationSearchIcon className="icon" />
            <span>現在地から探す</span>
          </>
        )}
      </button>

      {/* ✅ 検索バー */}
      <div className="search-area">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="お店や商品名で検索..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      {/* ✅ 店舗フィルターバナー */}
      {storeFilter && (
        <div className="store-filter-banner">
          <div className="store-filter-text">
            <p className="store-name">{storeFilter.name}</p>
            <p className="store-desc">このお店の商品のみ表示中</p>
          </div>
          <button
            onClick={onClearStoreFilter}
            className="clear-store-btn"
            aria-label="店舗フィルターを解除"
          >
            <XIcon className="icon" />
          </button>
        </div>
      )}

      {/* ✅ 並び替え & フィルター */}
      <div className="sort-filter-row">
        <div className="sort-container">
          <SortOptions currentSort={sortOrder} onSortChange={onSortChange} />
        </div>
        <button onClick={onFilterButtonClick} className="toriku-filter-btn">
          <AdjustmentsIcon className="icon" />
          <span>フィルター</span>
          {activeFilters.length > 0 && (
            <span className="toriku-filter-badge">
              {activeFilters.length}
            </span>
          )}
        </button>
      </div>

      {/* ✅ 食品カード一覧 */}
      <div className="food-list">
        {foodItems.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            onClick={() => onCardClick(item)}
            userPlan="free"
            onUpgradeClick={() => alert("アップグレード画面へ✨")}
            isFavorite={false}
            onToggleFavorite={() => alert("お気に入り切り替え")}
          />
        ))}
      </div>

      {/* ✅ 検索結果が0件の場合 */}
      {foodItems.length === 0 && (
        <div className="no-results">
          <p>条件に合う商品が見つかりませんでした。</p>
          <p>検索キーワードやフィルター条件を変更してみてください。</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
