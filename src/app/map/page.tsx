'use client';

import React from 'react';
import MapPage from '@/components/MapPage';
import type { Store } from '@/types';

/**
 * MapPageを安全に呼び出すためのラッパーページ。
 * - 仮データを用意して、初期状態でも地図とピンが表示されるようにする。
 * - Supabase等を接続する場合は、ここにfetch処理を追加してOK。
 */
const MapWrapper: React.FC = () => {
  // ✅ 仮の店舗データ（まずはこれで地図がちゃんと動作確認できる！）
  const mockStores: Store[] = [
    {
      id: '1',
      name: 'ベーカリー・トリーク',
      address: '東京都渋谷区代々木1-2-3',
      latitude: 35.68,
      longitude: 139.70,
      distance: '500m',
    },
    {
      id: '2',
      name: 'オーガニック青果店 Green Farm',
      address: '東京都世田谷区三軒茶屋2-4-5',
      latitude: 35.65,
      longitude: 139.67,
      distance: '1.2km',
    },
  ];

  return (
    <main style={{ padding: '24px' }}>
      <h1
        style={{
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#047857',
          marginBottom: '16px',
        }}
      >
        📍店舗マップ（デモ）
      </h1>
      <MapPage
        stores={mockStores}
        onSelectStore={(store) => alert(`${store.name} を選択しました！`)}
      />
    </main>
  );
};

export default MapWrapper;
