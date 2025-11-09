// src/types.ts
// -------------------------------------------------------------
// このファイルは、アプリで使うデータの「型」を定義する場所です。
// 「型」とは、データの構造を決める設計図のようなもので、
// 例えば「お店（Store）には必ず店名（name）と住所（address）がある」
// といったルールを定め、アプリ全体の安全性を高めます。
// -------------------------------------------------------------

/**
 * @interface Store
 * 店舗情報を表すデータの設計図です。
 */
export interface Store {
  id: string;               // お店を区別するための一意のID
  name: string;             // 店名
  address: string;          // 住所
  distance: string;         // ユーザーからの距離（例: "500m"）
  latitude: number;         // 緯度（地図表示用）
  longitude: number;        // 経度（地図表示用）
}

/**
 * @interface FoodItem
 * 出品されている食品情報を表すデータ構造です。
 */
export interface FoodItem {
  id: string;               // 一意のID
  name: string;             // 商品名
  description: string;      // 商品説明
  imageUrl: string;         // 商品画像URL
  originalPrice: number;    // 元の価格
  discountedPrice: number;  // レスキュー価格（0なら無料）
  quantity: number;         // 現在の在庫数
  initialQuantity: number;  // 初期在庫数
  pickupStartTime: string;  // 受け取り開始時間
  pickupEndTime: string;    // 受け取り終了時間
  store: Store;             // 出品店舗情報
  category: string;         // カテゴリ（例: "パン", "野菜" など）
}

/**
 * @type ActiveTab
 * 主要な画面タブを表す型。
 * 'home'（ホーム）, 'map'（マップ）, 'orders'（予約一覧）, 'profile'（マイページ）
 */
export type ActiveTab = "home" | "map" | "orders" | "profile";

/**
 * @type SortOrder
 * 並び替えオプションの種類。
 * 各画面（Home, SortOptionsなど）で共通して使用。
 */
export type SortOrder = "new" | "priceHigh" | "near";

/**
 * @interface User
 * 将来的な拡張に備えたユーザー情報型。
 * （今は最低限にしておく）
 */
export interface User {
  id: string;
  name: string;
  plan: "free" | "premium";
}
