'use client';

import React, { useState, useMemo } from 'react';
import LocationEditModal from '@/components/LocationEditModal';
import {
  PencilIcon,
  LocationMarkerIcon,
  CreditCardIcon,
  TrashIcon,
} from '@/components/icons';
import type { Store } from '@/types';
import '@/components/ProfilePage.css';

// カテゴリ一覧
const CATEGORIES = ['パン', 'お弁当', '野菜', 'スイーツ', '惣菜', 'ドリンク'];

interface ProfilePageProps {
  userPlan?: 'free' | 'premium';
  onUpgrade?: () => void;
  favoriteStoreIds?: string[];
  allStores?: Store[];
  onToggleFavorite?: (storeId: string) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  userPlan = 'free',
  onUpgrade = () => {},
  favoriteStoreIds = [],
  allStores = [],
  onToggleFavorite = () => {},
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['パン', '野菜']);
  const [location, setLocation] = useState('東京都渋谷区');
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);

  // ✅ undefined対策付き
  const favoriteStores = useMemo(() => {
    if (!Array.isArray(allStores) || !Array.isArray(favoriteStoreIds)) return [];
    return allStores.filter((store) => favoriteStoreIds.includes(store.id));
  }, [allStores, favoriteStoreIds]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSaveLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  return (
    <>
      <div className="profile-container">
        {/* プロフィール情報 */}
        <section className="profile-section">
          <h2 className="section-title">マイページ</h2>
          <div className="card">
            <div className="profile-header">
              <img
                className="avatar"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="User avatar"
              />
              <div className="profile-info">
                <h3 className="profile-name">田中 太郎</h3>
                <p className="profile-email">tanaka.taro@example.com</p>
                <button className="edit-button">
                  <PencilIcon className="icon-small" />
                  プロフィールを編集
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 利用プラン */}
        <section className="profile-section">
          <h2 className="section-title">利用プラン</h2>
          <div className="card">
            <p className="text-muted">
              {userPlan === 'free'
                ? '現在のプランです。食品をレスキューするにはアップグレードが必要です。'
                : 'プレミアムプランをご利用いただきありがとうございます。'}
            </p>

            <div className="plan-box">
              <div className="plan-info">
                <CreditCardIcon className="icon-medium" />
                <div>
                  <span className="plan-name">
                    {userPlan === 'free' ? 'フリープラン' : 'プレミアムプラン'}
                  </span>
                  <p className="text-muted-small">
                    {userPlan === 'free'
                      ? '商品の閲覧が可能です'
                      : '全ての機能をご利用いただけます'}
                  </p>
                </div>
              </div>

              {userPlan === 'free' && (
                <button onClick={onUpgrade} className="upgrade-button">
                  アップグレード
                </button>
              )}
            </div>
          </div>
        </section>

        {/* お気に入り店舗 */}
        <section className="profile-section">
          <h2 className="section-title">お気に入り店舗</h2>
          <div className="card">
            {favoriteStores.length > 0 ? (
              <ul className="favorites-list">
                {favoriteStores.map((store) => (
                  <li key={store.id} className="favorite-item">
                    <div>
                      <p className="store-name">{store.name}</p>
                      <p className="store-address">{store.address}</p>
                    </div>
                    <button
                      onClick={() => onToggleFavorite(store.id)}
                      className="delete-button"
                      aria-label={`${store.name}をお気に入りから削除`}
                    >
                      <TrashIcon className="icon-medium" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted text-center">
                気になるお店を「お気に入り」に追加すると、ここに表示されます。
              </p>
            )}
          </div>
        </section>

        {/* 受取エリア */}
        <section className="profile-section">
          <h2 className="section-title">受取エリア設定</h2>
          <div className="card">
            <p className="text-muted">
              通知を受け取るエリアを設定してください。設定したエリアの近くでレスキューが募集されるとお知らせが届きます。
            </p>
            <div className="plan-box">
              <div className="plan-info">
                <LocationMarkerIcon className="icon-medium" />
                <span className="plan-name">{location}</span>
              </div>
              <button
                onClick={() => setLocationModalOpen(true)}
                className="edit-button"
              >
                <PencilIcon className="icon-small" />
                編集
              </button>
            </div>
          </div>
        </section>

        {/* カテゴリ設定 */}
        <section className="profile-section">
          <h2 className="section-title">希望カテゴリ設定</h2>
          <div className="card">
            <p className="text-muted">
              通知を受け取りたい食品のカテゴリを選択してください。
            </p>
            <div className="category-grid">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`category-button ${
                    selectedCategories.includes(category) ? 'active' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* モーダル */}
      <LocationEditModal
        isOpen={isLocationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        currentLocation={location}
        onSave={handleSaveLocation}
      />
    </>
  );
};

export default ProfilePage;
