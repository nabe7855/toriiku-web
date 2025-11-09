import React from "react";
import type { ActiveTab } from "@/types";
import { HomeIcon, MapIcon, DocumentTextIcon, UserIcon } from "./icons";
import "./BottomNav.css"; // ← 新しく追加するCSSを読み込む！

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

/**
 * 各ナビゲーションボタン
 */
const NavItem: React.FC<NavItemProps> = ({
  label,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`nav-item ${isActive ? "active" : ""}`}
    >
      <div className="nav-icon">{icon}</div>
      <span className="nav-label">{label}</span>
    </button>
  );
};

/**
 * ボトムナビゲーションバー本体
 */
const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <footer className="bottom-nav">
      <div className="nav-inner">
        <NavItem
          label="ホーム"
          icon={<HomeIcon className="icon-size" />}
          isActive={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
        <NavItem
          label="マップ"
          icon={<MapIcon className="icon-size" />}
          isActive={activeTab === "map"}
          onClick={() => setActiveTab("map")}
        />
        <NavItem
          label="予約一覧"
          icon={<DocumentTextIcon className="icon-size" />}
          isActive={activeTab === "orders"}
          onClick={() => setActiveTab("orders")}
        />
        <NavItem
          label="マイページ"
          icon={<UserIcon className="icon-size" />}
          isActive={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
      </div>
    </footer>
  );
};

export default BottomNav;
