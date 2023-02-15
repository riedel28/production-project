import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cx } from 'shared/lib/cx';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={cx(
        cls.sidebar,
        {
          [cls.collapsed]: collapsed
        },
        [className]
      )}
    >
      <button data-testid="sidebar-toggle" onClick={onToggle}>
        {t('sidebar.toggle')}
      </button>
    </aside>
  );
};
