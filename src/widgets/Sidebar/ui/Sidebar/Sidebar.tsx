import { useState } from 'react';
import { cx } from 'shared/lib/cx';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
        Toggle
      </button>
    </aside>
  );
};
