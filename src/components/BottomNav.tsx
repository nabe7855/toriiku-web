'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { ActiveTab } from '@/types';
import { HomeIcon, MapIcon, DocumentTextIcon, UserIcon } from './icons';
import '@/components/BottomNav.css';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const NavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`nav-item ${isActive ? 'active' : ''}`}
      aria-label={label}
    >
      <div className="nav-icon icon-size">{icon}</div>
      <span className="nav-label">{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const router = useRouter();

  const handleNav = (tab: ActiveTab, path: string) => {
    setActiveTab(tab);
    router.push(path);
  };

  return (
    <footer className="bottom-nav">
      <div className="nav-inner">
        <NavItem
          label="ホーム"
          icon={<HomeIcon />}
          isActive={activeTab === 'home'}
          onClick={() => handleNav('home', '/home')}
        />
        <NavItem
          label="マップ"
          icon={<MapIcon />}
          isActive={activeTab === 'map'}
          onClick={() => handleNav('map', '/map')}
        />
        <NavItem
          label="予約一覧"
          icon={<DocumentTextIcon />}
          isActive={activeTab === 'orders'}
          onClick={() => handleNav('orders', '/orders')}
        />
        <NavItem
          label="マイページ"
          icon={<UserIcon />}
          isActive={activeTab === 'profile'}
          onClick={() => handleNav('profile', '/profile')}
        />
      </div>
    </footer>
  );
};

export default BottomNav;
