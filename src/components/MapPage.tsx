import React, { useState, useMemo } from "react";
import type { Store } from "@/types";
import { LocationMarkerIcon, XIcon } from "./icons";
import "./MapPage.css"; // ← CSSを読み込み

interface MapPageProps {
  stores: Store[];
  onSelectStore: (store: Store) => void;
}

// 座標→パーセンテージ変換関数（元のロジックはそのまま）
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

  let top =
    ((bounds.maxLat - clampedLat) / latRange) * (100 - buffer * 200) +
    buffer * 100;
  let left =
    ((clampedLon - bounds.minLon) / lonRange) * (100 - buffer * 200) +
    buffer * 100;

  top = Math.max(5, Math.min(top, 95));
  left = Math.max(5, Math.min(left, 95));

  return { top: `${top}%`, left: `${left}%` };
};

const MapPage: React.FC<MapPageProps> = ({ stores, onSelectStore }) => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const bounds = useMemo(() => {
    if (stores.length === 0) {
      return { minLat: 35.6, maxLat: 35.8, minLon: 139.6, maxLon: 139.8 };
    }
    const latitudes = stores.map((s) => s.latitude);
    const longitudes = stores.map((s) => s.longitude);
    const latBuffer =
      (Math.max(...latitudes) - Math.min(...latitudes)) * 0.1 || 0.01;
    const lonBuffer =
      (Math.max(...longitudes) - Math.min(...longitudes)) * 0.1 || 0.01;

    return {
      minLat: Math.min(...latitudes) - latBuffer,
      maxLat: Math.max(...latitudes) + latBuffer,
      minLon: Math.min(...longitudes) - lonBuffer,
      maxLon: Math.max(...longitudes) + lonBuffer,
    };
  }, [stores]);

  return (
    <div className="map-container">
      {/* 背景マップ */}
      <img
        src="https://www.maptiler.com/img/maps/streets-v2.png"
        alt="Map background"
        className="map-background"
      />

      <div className="map-pins">
        {stores.map((store) => {
          const { top, left } = projectCoordinates(
            store.latitude,
            store.longitude,
            bounds
          );
          return (
            <button
              key={store.id}
              className={`map-pin ${
                selectedStore?.id === store.id ? "active" : ""
              }`}
              style={{ top, left }}
              onClick={() => setSelectedStore(store)}
              aria-label={`${store.name}の場所を表示`}
            >
              <LocationMarkerIcon className="map-pin-icon" />
            </button>
          );
        })}
      </div>

      {selectedStore && (
        <div className="store-card animate-slide-up">
          <div className="store-card-header">
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
      )}
    </div>
  );
};

export default MapPage;
