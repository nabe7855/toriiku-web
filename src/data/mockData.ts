// data/mockData.ts
// このファイルは、開発中に使用する「仮のデータ（モックデータ）」を保管する場所です。
// 実際のサーバー（データベース）が完成する前でも、この仮データを使うことで、
// アプリの画面表示や機能のテストを行うことができます。
// まるで本物のデータがあるかのように振る舞う、サンプル食品リストです。

import type { FoodItem } from '@/types';

/**
 * @const mockFoodItems
 * アプリに表示される食品アイテムのサンプルリスト。
 * FoodItemという設計図（型）に基づいて作られています。
 */
export const mockFoodItems: FoodItem[] = [
  {
    id: '1',
    name: '焼きたてパン詰め合わせ',
    description: '本日焼き上げたパンの残りを詰め合わせました。クロワッサン、カレーパン、メロンパンなどが入っています。',
    imageUrl: 'https://picsum.photos/seed/bread/600/400',
    originalPrice: 1200,
    discountedPrice: 0,
    quantity: 5,
    initialQuantity: 8,
    pickupStartTime: '18:00',
    pickupEndTime: '20:00',
    store: {
      id: 's1',
      name: 'みどりベーカリー',
      address: '東京都渋谷区...',
      distance: '500m',
      latitude: 35.6585,
      longitude: 139.7013,
    },
    category: 'パン',
  },
  {
    id: '2',
    name: '新鮮野菜セット',
    description: '形が不揃いなため規格外となった新鮮な野菜のセットです。トマト、きゅうり、レタスなど。',
    imageUrl: 'https://picsum.photos/seed/veg/600/400',
    originalPrice: 800,
    discountedPrice: 0,
    quantity: 10,
    initialQuantity: 15,
    pickupStartTime: '16:00',
    pickupEndTime: '19:00',
    store: {
      id: 's2',
      name: 'サンシャインストア',
      address: '東京都新宿区...',
      distance: '1.2km',
      latitude: 35.6909,
      longitude: 139.7004,
    },
    category: '野菜',
  },
  {
    id: '3',
    name: '日替わりお弁当',
    description: '本日のお弁当の余りです。唐揚げ弁当、生姜焼き弁当など、何が入るかはお楽しみ。',
    imageUrl: 'https://picsum.photos/seed/bento/600/400',
    originalPrice: 750,
    discountedPrice: 0,
    quantity: 3,
    initialQuantity: 5,
    pickupStartTime: '17:30',
    pickupEndTime: '19:30',
    store: {
      id: 's3',
      name: 'キッチンはなこ',
      address: '東京都港区...',
      distance: '800m',
      latitude: 35.6665,
      longitude: 139.7409,
    },
    category: 'お弁当',
  },
  {
    id: '4',
    name: 'シェフの気まぐれサラダ',
    description: 'ディナーで余った新鮮な食材を使った特製サラダ。ドレッシング付きです。',
    imageUrl: 'https://picsum.photos/seed/salad/600/400',
    originalPrice: 600,
    discountedPrice: 0,
    quantity: 8,
    initialQuantity: 10,
    pickupStartTime: '20:00',
    pickupEndTime: '21:00',
    store: {
      id: 's4',
      name: 'Bistro Le Ciel',
      address: '東京都中央区...',
      distance: '2.5km',
      latitude: 35.6702,
      longitude: 139.7719,
    },
    category: '惣菜',
  },
  {
    id: '5',
    name: '手作りケーキセット',
    description: 'ショーケースに残ったケーキ2個のセット。種類は選べませんが、大変お得です。',
    imageUrl: 'https://picsum.photos/seed/cake/600/400',
    originalPrice: 900,
    discountedPrice: 0,
    quantity: 4,
    initialQuantity: 6,
    pickupStartTime: '19:00',
    pickupEndTime: '21:00',
    store: {
      id: 's1',
      name: 'みどりベーカリー',
      address: '東京都渋谷区...',
      distance: '500m',
      latitude: 35.6585,
      longitude: 139.7013,
    },
    category: 'スイーツ',
  }
];
