import React from "react";
import {
  StarIcon,
  CurrencyYenIcon,
  LocationMarkerIcon,
  HeartIcon,
} from "./icons";
import "./SortOptions.css"; // ← 追加！

export type SortOrder = "recommended" | "price" | "distance" | "favorites";

interface SortOptionsProps {
  currentSort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

const SortButton: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`sort-button ${isActive ? "active" : ""}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const SortOptions: React.FC<SortOptionsProps> = ({
  currentSort,
  onSortChange,
}) => {
  return (
    <div className="sort-container">
      <div className="sort-scroll">
        <SortButton
          label="おすすめ"
          icon={<StarIcon className="sort-icon" />}
          isActive={currentSort === "recommended"}
          onClick={() => onSortChange("recommended")}
        />
        <SortButton
          label="価格が高い順"
          icon={<CurrencyYenIcon className="sort-icon" />}
          isActive={currentSort === "price"}
          onClick={() => onSortChange("price")}
        />
        <SortButton
          label="近い順"
          icon={<LocationMarkerIcon className="sort-icon" />}
          isActive={currentSort === "distance"}
          onClick={() => onSortChange("distance")}
        />
        <SortButton
          label="お気に入り"
          icon={<HeartIcon className="sort-icon" />}
          isActive={currentSort === "favorites"}
          onClick={() => onSortChange("favorites")}
        />
      </div>
    </div>
  );
};

export default SortOptions;
