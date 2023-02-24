import { useTheme } from 'app/providers/ThemeProvider';
import { FC, MouseEvent, ReactNode, useState, useRef, useEffect, useCallback } from 'react';

import { cx } from 'shared/lib/cx';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DURATION = 300;

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  const { theme } = useTheme();

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeoutRef.current = window.setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DURATION);
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isOpen, handleKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.open]: isOpen,
    [cls.isClosing]: isClosing
  };

  return (
    <Portal>
      <div className={cx(cls.modal, mods, [className, theme])}>
        <div
          className={cls.overlay}
          onClick={handleClose}
          onKeyDown={handleClose}
          role="button"
          tabIndex={0}
        >
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
