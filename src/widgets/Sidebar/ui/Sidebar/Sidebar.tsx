import { useState, FC } from 'react';
import { cx } from 'shared/lib/cx';
import { Button } from 'shared/ui/Button/Button';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev: boolean) => {
      return !prev;
    });
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
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        {collapsed ? '>>' : '<<'}
      </Button>
    </aside>
  );
};
