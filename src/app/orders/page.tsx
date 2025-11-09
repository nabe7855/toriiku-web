'use client';

import React from 'react';
import '@/components/OrdersPage.css'; // 👈 新しく作るCSSファイル

/**
 * @component OrdersPage
 * 「予約一覧」画面のコンポーネント。
 * 開発中のため、仮のメッセージを表示します。
 */
const OrdersPage: React.FC = () => (
  <div className="orders-container">
    <div className="orders-message">
      <h2 className="orders-title">予約一覧</h2>
      <p className="orders-subtitle">このページは現在開発中です。</p>
    </div>
  </div>
);

export default OrdersPage;
