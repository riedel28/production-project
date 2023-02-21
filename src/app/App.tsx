import { Suspense, useState } from 'react';

import { cx } from 'shared/lib/cx';
import { Button } from 'shared/ui/Button/Button';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './router';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={cx('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          123
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(!isOpen);
          }}
        >
          123
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
