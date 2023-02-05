import { Link } from 'react-router-dom';

import { AppRouter } from './router';
import { useTheme } from 'app/providers/ThemeProvider';
import { cx } from 'shared/lib/cx';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
};
