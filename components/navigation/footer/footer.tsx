import { Logo } from '@/components/atoms/logo/logo';
import { ReactNode } from 'react';
import styles from './footer.module.scss';

export const Footer: React.FC<FooterProps> = ({ children }) => {
  const count = [0, 1, 2];
  return (
    <footer className={styles['site-footer']}>
      <div className={styles['site-footer__inner']}>
        {children}
        <Logo className={styles['site-footer__logo']} />
        <div className={styles['site-footer__link-group']}>
          {count.map((index) => {
            return (
              <ul className={styles['site-footer__list']} key={index}>
                <li className={styles['site-footer__item']}>
                  <a href="#" className={styles['site-footer__link']}>
                    Nunc egestas
                  </a>
                </li>
                <li className={styles['site-footer__item']}>
                  <a href="#" className={styles['site-footer__link']}>
                    Dolor vel volutpat
                  </a>
                </li>
                <li className={styles['site-footer__item']}>
                  <a href="#" className={styles['site-footer__link']}>
                    Rutrum
                  </a>
                </li>
                <li className={styles['site-footer__item']}>
                  <a href="#" className={styles['site-footer__link']}>
                    Commodo metus
                  </a>
                </li>
                <li className={styles['site-footer__item']}>
                  <a href="#" className={styles['site-footer__link']}>
                    Semper sagittis
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className={styles['site-footer__social']}>
          <a href="#" className={styles['site-footer__link']} rel="noopener" title="facebook">
            <img src="/images/icons/facebook.svg" alt="facebook" width="24" height="24" loading="lazy" />
            <span hidden>Facebook</span>
          </a>
          <a href="#" className={styles['site-footer__link']} rel="noopener" title="linkedIn">
            <img src="/images/icons/linkedin.svg" alt="linkedin" width="24" height="24" loading="lazy" />
            <span hidden>LinkedIn</span>
          </a>
          <a href="#" className={styles['site-footer__link']} rel="noopener" title="twitter">
            <img src="/images/icons/twitter.svg" alt="twitter" width="24" height="24" loading="lazy" />
            <span hidden>Twitter</span>
          </a>
          <a href="#" className={styles['site-footer__link']} rel="noopener" title="instagram">
            <img src="/images/icons/instagram.svg" alt="instagram" width="24" height="24" loading="lazy" />
            <span hidden>Instagram</span>
          </a>
        </div>
        <p className={styles['site-footer__copyright']}>© 2021 Uniform Systems, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

interface FooterProps {
  children?: ReactNode;
}
