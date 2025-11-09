// components/icons.tsx
// -------------------------------------------------------------
// アプリ内で使用するすべてのアイコンをまとめて管理するファイル。
// SVG形式でReactコンポーネント化し、className/styleでカスタマイズ可能。
// -------------------------------------------------------------

import React from "react";
import "./icons.css"; // 任意（スピナーなどのアニメーション用CSS）

// 🧩 共通Props定義（全アイコンで使えるように）
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

// 🏠 各アイコン定義
export const HomeIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export const LocationMarkerIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const XIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const PencilIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"
    />
  </svg>
);

export const CreditCardIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

export const TrashIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);


export const MapIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13v-6m0 6l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 20.382V9.618a1 1 0 00-1.447-.894L15 11m0 6v-6m0 6V11"
    />
  </svg>
);

// ✏️ 以下、同様にstyleとclassName対応
export const DocumentTextIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export const UserIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

// 📍 LocationSearchIcon（修正版！style対応済み）
export const LocationSearchIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v2m0 12v2M4 12h2m12 0h2"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a6 6 0 100-12 6 6 0 000 12z"
    />
  </svg>
);

// 🌀 SpinnerIcon（CSSアニメーション対応）
export const SpinnerIcon = ({ className, style }: IconProps) => (
  <svg
    className={`spinner ${className || ""}`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="spinner-circle"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="spinner-path"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A7.96 7.96 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z"
    />
  </svg>
);

// 🍃 LeafIcon（例）
export const LeafIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5,5.5c-3-3-8,0-8,6s5,11,8,8s11-5,6-8S18.5,8.5,15.5,5.5z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9,9c0,0,4,4,8,0" />
  </svg>
);

// 🎛 フィルター設定アイコン（スライダーのマーク）
export const AdjustmentsIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8v2m0-2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v-2m0 2H2m4 0h2m10 0h2m-2 0h-2m-2-4v2m0-2a2 2 0 100 4m0-4a2 2 0 110 4m0 0v2m0-2H8m4 0h2"
    />
  </svg>
);


// 🔍 SearchIcon
export const SearchIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

// 🕓 ClockIcon（受け取り時間などに使用）
export const ClockIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// ❤️ HeartIcon（お気に入り）
export const HeartIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.672l1.318-1.354a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);

// ✨ SparklesIcon（おすすめ表示など）
export const SparklesIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6.22 6.22l1.42 1.42m8.14-5.64l-1.42 1.42M12 2v2M12 22v-2m6.22-1.78l-1.42-1.42M18 19h4m-4-2v4m-8-14v2m-3.78 3.78l1.42 1.42M3 19h4m-4-2v4"
    />
  </svg>
);

// ⭐ StarIcon（評価用）
export const StarIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

// 💴 CurrencyYenIcon（価格表示など）
export const CurrencyYenIcon = ({ className, style }: IconProps) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 8l3 4m0 0l3-4m-3 4v8m-7 0h14"
    />
  </svg>
);
