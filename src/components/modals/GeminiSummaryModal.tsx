import React from "react";
import { SparklesIcon } from "../icons";
import "./GeminiSummaryModal.css"; // ← 新しいCSSを作成！

interface GeminiSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  summary: string;
  error: string | null;
}

const GeminiSummaryModal: React.FC<GeminiSummaryModalProps> = ({
  isOpen,
  onClose,
  isLoading,
  summary,
  error,
}) => {
  if (!isOpen) return null;

  const formattedSummary = summary
    .split("* ")
    .filter((s) => s.trim() !== "")
    .map((s, index) => (
      <li key={index} className="summary-item">
        {s.trim().replace(/\n/g, "")}
      </li>
    ));

  return (
    <div className="gemini-modal-overlay" onClick={onClose}>
      <div className="gemini-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <SparklesIcon className="sparkles-icon" />
          <h2 className="modal-title">トリークについて</h2>
        </div>

        {isLoading ? (
          <div className="loading-skeleton">
            <div className="skeleton-bar"></div>
            <div className="skeleton-bar short"></div>
            <div className="skeleton-bar shorter"></div>
          </div>
        ) : error ? (
          <p className="error-text">{error}</p>
        ) : (
          <ul className="summary-list">{formattedSummary}</ul>
        )}

        <button onClick={onClose} className="close-btn">
          閉じる
        </button>
      </div>
    </div>
  );
};

export default GeminiSummaryModal;
