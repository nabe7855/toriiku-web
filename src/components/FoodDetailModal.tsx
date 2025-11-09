import React from "react";
import type { FoodItem } from "../types";
import { ClockIcon, LocationMarkerIcon, HeartIcon, XIcon } from "./icons";
import "./FoodDetailModal.css"; // ← 追加（下に作る）

interface FoodDetailModalProps {
  item: FoodItem;
  onClose: () => void;
  userPlan: "free" | "premium";
  onUpgradeClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: (storeId: string) => void;
}

const FoodDetailModal: React.FC<FoodDetailModalProps> = ({
  item,
  onClose,
  userPlan,
  onUpgradeClick,
  isFavorite,
  onToggleFavorite,
}) => {
  const handleRescueClick = () => {
    if (userPlan === "free") {
      onUpgradeClick();
    } else {
      alert(`${item.name}のレスキュー予約が完了しました！`);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-area">
          <img src={item.imageUrl} alt={item.name} className="modal-image" />
          <button className="close-btn" onClick={onClose}>
            <XIcon className="icon-close" />
          </button>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{item.name}</h2>

          <div className="price-area">
            <span className="original-price">¥{item.originalPrice}</span>
            {item.discountedPrice === 0 ? (
              <span className="discounted-price free">無料</span>
            ) : (
              <span className="discounted-price paid">
                ¥{item.discountedPrice}
              </span>
            )}
          </div>

          <p className="description">{item.description}</p>

          <div className="info-section">
            <div className="store-info">
              <LocationMarkerIcon className="icon" />
              <div className="store-text">
                <p className="store-name">{item.store.name}</p>
                <p className="store-address">{item.store.address}</p>
              </div>
              <button
                className={`favorite-btn ${
                  isFavorite ? "active" : "inactive"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(item.store.id);
                }}
                aria-label={
                  isFavorite ? "お気に入りから削除" : "お気に入りに追加"
                }
              >
                <HeartIcon className="icon-heart" />
              </button>
            </div>

            <div className="pickup-info">
              <ClockIcon className="icon" />
              <div>
                <p className="pickup-label">受け取り時間</p>
                <p className="pickup-time">
                  {item.pickupStartTime} - {item.pickupEndTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-area">
          <button className="rescue-btn" onClick={handleRescueClick}>
            {item.discountedPrice === 0
              ? "無料でレスキューする"
              : "レスキューする"}{" "}
            (残り{item.quantity}/{item.initialQuantity}個)
          </button>
          {userPlan === "free" && (
            <p className="notice">
              レスキューするには有料プランへの登録が必要です。
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDetailModal;
