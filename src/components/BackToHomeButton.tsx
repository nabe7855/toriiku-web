// components/BackToHomeButton.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "@/components/icons";
import "@/components/BackToHomeButton.css"; // ← 後で作るCSSファイル

const BackToHomeButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className="back-home-button"
      onClick={() => router.push("/home")}
      aria-label="ホームへ戻る"
    >
      <HomeIcon className="back-home-icon" />
      <span className="back-home-label">ホームへ戻る</span>
    </button>
  );
};

export default BackToHomeButton;
