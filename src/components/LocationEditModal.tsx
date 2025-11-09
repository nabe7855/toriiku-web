import React, { useState, useEffect } from "react";
import "./LocationEditModal.css"; // ← 追加！

interface LocationEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: string;
  onSave: (newLocation: string) => void;
}

const LocationEditModal: React.FC<LocationEditModalProps> = ({
  isOpen,
  onClose,
  currentLocation,
  onSave,
}) => {
  const [locationInput, setLocationInput] = useState(currentLocation);

   // ✅ モーダルが開いた瞬間だけ初期値を同期する
  useEffect(() => {
    if (!isOpen) return;
    // レンダーが完全に終わったあとにstateを更新することで警告を回避
    const timeout = setTimeout(() => {
      setLocationInput(currentLocation);
    }, 0);
    return () => clearTimeout(timeout);
  }, [currentLocation, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(locationInput);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">受取エリアを編集</h2>
        <p className="modal-description">
          フードロス情報を受け取りたい中心地を郵便番号や住所で入力してください。
        </p>

        <div className="modal-field">
          <label htmlFor="location" className="modal-label">
            エリア
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            className="modal-input"
            placeholder="例：東京都渋谷区"
          />
        </div>

        <div className="modal-buttons">
          <button type="button" onClick={onClose} className="btn-cancel">
            キャンセル
          </button>
          <button type="button" onClick={handleSave} className="btn-save">
            このエリアで設定
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationEditModal;
