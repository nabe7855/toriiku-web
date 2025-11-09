"use client";

import React from "react";
import Image from "next/image";
import type { FoodItem } from "@/types";
import "./FoodCard.css"; // ← 追加！

interface FoodCardProps {
  item: FoodItem;
  onClick?: () => void;
  userPlan?: "free" | "premium";
  onUpgradeClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  item,
  onClick,
  userPlan = "free",
  onUpgradeClick,
  isFavorite,
  onToggleFavorite,
}) => {
  const handleClick = () => {
    if (userPlan === "free") {
      alert("プレミアムプラン限定の機能です！✨");
      onUpgradeClick();
    } else {
      onClick?.();
    }
  };

  return (
    <div className="foodcard-container" onClick={handleClick}>
      {/* 商品画像 */}
      <Image
        src={item.imageUrl || "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400"}
        alt={item.name}
        width={96}
        height={96}
        className="foodcard-image"
      />

      {/* 詳細情報 */}
      <div className="foodcard-content">
        <h2 className="foodcard-title">{item.name}</h2>
        <p className="foodcard-description">{item.description}</p>
        <p className="foodcard-time">
          受け取り時間: {item.pickupStartTime}〜{item.pickupEndTime}
        </p>
        <p className="foodcard-price">
          ¥{item.discountedPrice}
          <span className="foodcard-original">¥{item.originalPrice}</span>
        </p>
      </div>

      {/* お気に入りボタン */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default FoodCard;
