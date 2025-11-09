// types.ts
// このファイルは、アプリで使うデータの「型」を定義する場所です。
// 「型」とは、データの構造を決める設計図のようなもので、
// 例えば「お店（Store）の情報には、必ず店名（name）と住所（address）が含まれる」
// といったルールを定めます。これにより、予期せぬエラーを防ぎ、コードを安全に保ちます。

/**
 * @interface Store
 * 店舗情報を表すデータの設計図です。
 */
export interface Store {
  id: string; // お店を区別するための一意のID
  name: string; // 店名
  address: string; // 住所
  distance: string; // ユーザーからの距離（例: "500m"）
  latitude: number; // 地図に表示するための緯度
  longitude: number; // 地図に表示するための経度
}

/**
 * @interface FoodItem
 * 食品情報を表すデータの設計図です。
 */
export interface FoodItem {
  id: string; // 食品を区別するための一意のID
  name:string; // 商品名
  description: string; // 商品説明
  imageUrl: string; // 商品画像のURL
  originalPrice: number; // 元の価格
  discountedPrice: number; // レスキュー価格（0円の場合は無料）
  quantity: number; // 残り数量
  initialQuantity: number; // 初期の出品数量
  pickupStartTime: string; // 受け取り可能時間の開始時刻
  pickupEndTime: string; // 受け取り可能時間の終了時刻
  store: Store; // この商品を出品している店舗の情報
  category: string; // 食品のカテゴリ（例: "パン", "野菜"）
}

/**
 * @type ActiveTab
 * 現在表示している主要な画面（タブ）の種類を定義します。
 * 'home' (ホーム), 'map' (マップ), 'orders' (予約一覧), 'profile' (マイページ) のいずれかです。
 */
export type ActiveTab = 'home' | 'map' | 'orders' | 'profile';
