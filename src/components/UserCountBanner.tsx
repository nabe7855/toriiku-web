import React from "react";
import { LeafIcon } from "./icons";
import "./UserCountBanner.css"; // ← 追加！

interface UserCountBannerProps {
  count: number;
}

const UserCountBanner: React.FC<UserCountBannerProps> = ({ count }) => {
  return (
    <div className="user-banner">
      <LeafIcon className="leaf-icon" />
      <p className="banner-text">
        現在{" "}
        <span className="highlight">{count.toLocaleString()}人</span> が地球にやさしい選択をしています！
      </p>
    </div>
  );
};

export default UserCountBanner;
