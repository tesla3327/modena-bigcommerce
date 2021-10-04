import { ReactNode } from 'react';

import { Logo } from 'components/atoms/logo/logo';
import { Basket } from 'components/commerce/cart';

import styles from './header.module.scss';

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles['site-header']}>
      <Logo />
      <Basket ariaControls="basket-summary" />
    </header>
  );
};

interface HeaderProps {
  children?: ReactNode;
}
