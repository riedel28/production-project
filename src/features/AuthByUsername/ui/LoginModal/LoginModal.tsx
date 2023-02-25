import { FC } from 'react';

import { cx } from 'shared/lib/cx';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

import cls from './LoginModal.module.scss';

export interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={cx(cls.loginModal, {}, [className])} lazy>
      <LoginForm />
    </Modal>
  );
};
