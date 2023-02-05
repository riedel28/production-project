import { Link } from 'react-router-dom';

import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { cx } from 'shared/lib/cx';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cx('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
