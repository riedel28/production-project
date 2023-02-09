import { Suspense } from 'react';

import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { cx } from 'shared/lib/cx';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cx('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
