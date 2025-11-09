import React, { useState, useEffect } from "react";
import "./FilterModal.css"; // ← CSSファイルを読み込む！

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  allCategories: string[];
  selectedCategories: string[];
  onApplyFilter: (newFilters: string[]) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  allCategories,
  selectedCategories,
  onApplyFilter,
}) => {
  const [localSelected, setLocalSelected] =
    useState<string[]>(selectedCategories);

 useEffect(() => {
  // モーダルが開いたときだけ同期する
  if (isOpen) {
    // setStateを同期的に呼ばないよう、非同期に実行
    const timer = setTimeout(() => {
      setLocalSelected(selectedCategories);
    }, 0);

    return () => clearTimeout(timer);
  }
}, [isOpen, selectedCategories]);


  if (!isOpen) return null;

  const toggleCategory = (category: string) => {
    setLocalSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleApply = () => {
    onApplyFilter(localSelected);
    onClose();
  };

  const handleClear = () => {
    setLocalSelected([]);
  };

  return (
    <div className="filter-overlay" onClick={onClose}>
      <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
        <div className="filter-header">
          <h2>カテゴリで絞り込む</h2>
        </div>

        <div className="filter-body">
          <div className="category-grid">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`category-btn ${
                  localSelected.includes(category) ? "selected" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-footer">
          <button onClick={handleClear} className="reset-btn">
            リセット
          </button>
          <button onClick={handleApply} className="apply-btn">
            適用する
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
