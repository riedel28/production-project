import { useState, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cx } from 'shared/lib/cx';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const { t } = useTranslation();

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
      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        square
        size={SizeButton.LARGE}
      >
        {collapsed ? '>>' : '<<'}
      </Button>

      <div className={cls.sidebarItems}>
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
        <AppLink to={RoutePath.main} className={cls.sidebarItem}>
          {t('MainPage.title')}
        </AppLink>
        <AppLink to={RoutePath.about} className={cls.sidebarItem}>
          {t('AboutPage.title')}
        </AppLink>
      </div>
    </aside>
  );
});
