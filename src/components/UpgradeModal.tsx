import React from "react";
import "./UpgradeModal.css"; // ← 追加！（後で作る）

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onUpgrade,
}) => {
  if (!isOpen) return null;

  return (
    <div className="upgrade-modal-overlay" onClick={onClose}>
      <div className="upgrade-modal" onClick={(e) => e.stopPropagation()}>
        <h2>プレミアムプランにアップグレード</h2>
        <p>
          食品をレスキューするには、有料プランへの登録が必要です。
          プランに登録して、フードロス削減に参加しましょう！
        </p>
        <div className="button-area">
          <button className="upgrade-button" onClick={onUpgrade}>
            プランをアップグレード
          </button>
          <button className="close-button" onClick={onClose}>
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
