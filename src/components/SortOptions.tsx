// src/components/SortOptions.tsx
// -------------------------------------------------------------
// このコンポーネントは「並び替え」オプションのボタン群を表示します。
// 価格が高い順・近い順・新着順などのタブを並べて、ユーザーが並び替え基準を切り替えられます。
// -------------------------------------------------------------

import React from "react";
import {
  StarIcon,
  CurrencyYenIcon,
  LocationMarkerIcon,
  HeartIcon,
} from "@/components/icons"; // ← 絶対パスに統一
import type { SortOrder } from "@/types"; // ← types.ts の共通型を使う
import "./SortOptions.css";

// -------------------------------------------------------------
// Props型定義
// -------------------------------------------------------------
interface SortOptionsProps {
  currentSort: SortOrder; // 現在選択中のソート
  onSortChange: (sort: SortOrder) => void; // ソート変更時に呼ばれる関数
}

// -------------------------------------------------------------
// 個々のボタン部品
// -------------------------------------------------------------
const SortButton: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`sort-button ${isActive ? "active" : ""}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

// -------------------------------------------------------------
// 並び替えメインコンポーネント
// -------------------------------------------------------------
const SortOptions: React.FC<SortOptionsProps> = ({
  currentSort,
  onSortChange,
}) => {
  return (
    <div className="sort-container">
      <div className="sort-scroll">
        {/* 新着順 */}
        <SortButton
          label="新着順"
          icon={<StarIcon className="sort-icon" />}
          isActive={currentSort === "new"}
          onClick={() => onSortChange("new")}
        />

        {/* 価格が高い順 */}
        <SortButton
          label="価格が高い順"
          icon={<CurrencyYenIcon className="sort-icon" />}
          isActive={currentSort === "priceHigh"}
          onClick={() => onSortChange("priceHigh")}
        />

        {/* 近い順 */}
        <SortButton
          label="近い順"
          icon={<LocationMarkerIcon className="sort-icon" />}
          isActive={currentSort === "near"}
          onClick={() => onSortChange("near")}
        />

        {/* お気に入り（UI例・まだ未実装でもOK） */}
        <SortButton
          label="お気に入り"
          icon={<HeartIcon className="sort-icon" />}
          isActive={currentSort === "near"} // 仮：お気に入りが未定義なので「near」と同じ扱い
          onClick={() => alert("お気に入り機能は準備中です💡")}
        />
      </div>
    </div>
  );
};

export default SortOptions;
