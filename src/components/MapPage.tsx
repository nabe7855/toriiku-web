'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import type { Store } from '@/types';
import { LocationMarkerIcon, XIcon } from '@/components/icons';
import '@/components/MapPage.css';

interface MapPageProps {
  stores?: Store[];
  onSelectStore?: (store: Store) => void;
}

/**
 * 緯度経度を地図上の座標(%)に変換する補助関数
 */
const projectCoordinates = (
  lat: number,
  lon: number,
  bounds: { minLat: number; maxLat: number; minLon: number; maxLon: number }
) => {
  const latRange = bounds.maxLat - bounds.minLat;
  const lonRange = bounds.maxLon - bounds.minLon;
  const buffer = 0.05;

  const clampedLat = Math.max(bounds.minLat, Math.min(lat, bounds.maxLat));
  const clampedLon = Math.max(bounds.minLon, Math.min(lon, bounds.maxLon));

  let top = ((bounds.maxLat - clampedLat) / latRange) * (100 - buffer * 200) + buffer * 100;
  let left = ((clampedLon - bounds.minLon) / lonRange) * (100 - buffer * 200) + buffer * 100;

  top = Math.max(5, Math.min(top, 95));
  left = Math.max(5, Math.min(left, 95));

  return { top: `${top}%`, left: `${left}%` };
};

const MapPage: React.FC<MapPageProps> = ({
  stores = [],
  onSelectStore = () => {},
}) => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  // ✅ storesが空でも安全に境界値を計算
  const bounds = useMemo(() => {
    if (!stores || stores.length === 0) {
      return { minLat: 35.6, maxLat: 35.8, minLon: 139.6, maxLon: 139.8 };
    }

    const latitudes = stores.map((s) => s.latitude);
    const longitudes = stores.map((s) => s.longitude);
    const latBuffer = (Math.max(...latitudes) - Math.min(...latitudes)) * 0.1 || 0.01;
    const lonBuffer = (Math.max(...longitudes) - Math.min(...longitudes)) * 0.1 || 0.01;

    return {
      minLat: Math.min(...latitudes) - latBuffer,
      maxLat: Math.max(...latitudes) + latBuffer,
      minLon: Math.min(...longitudes) - lonBuffer,
      maxLon: Math.max(...longitudes) + lonBuffer,
    };
  }, [stores]);

  return (
    <div className="map-container">
      {/* 地図背景 */}
      <Image
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
  alt="Map background"
  fill
  className="map-background"
/>

      <div className="map-overlay">
        {/* ピン */}
        {stores.map((store) => {
          const { top, left } = projectCoordinates(store.latitude, store.longitude, bounds);
          return (
            <button
              key={store.id}
              className={`map-pin ${selectedStore?.id === store.id ? 'selected' : ''}`}
              style={{ top, left }}
              onClick={() => setSelectedStore(store)}
              aria-label={`${store.name}の場所を表示`}
            >
              <LocationMarkerIcon className="pin-icon" />
            </button>
          );
        })}
      </div>

      {/* 店舗カード */}
      {selectedStore && (
        <div className="store-info">
          <div className="store-card">
            <div className="store-header">
              <div>
                <h3 className="store-name">{selectedStore.name}</h3>
                <p className="store-address">{selectedStore.address}</p>
              </div>
              <button
                onClick={() => setSelectedStore(null)}
                className="close-button"
                aria-label="閉じる"
              >
                <XIcon className="close-icon" />
              </button>
            </div>

            <button
              onClick={() => onSelectStore(selectedStore)}
              className="view-button"
            >
              このお店の商品を見る
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
