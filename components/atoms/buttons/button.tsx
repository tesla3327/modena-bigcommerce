import React, { HTMLAttributes } from 'react';

import styles from './button.module.scss';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  text: string;
  buttonType: 'primary' | 'secondary';
  onClick?: any;
};

export const Button: React.FC<ButtonProps> = ({ text, buttonType, onClick }) => {
  return (
    <button className={`${styles['btn']} ${styles[`btn--${buttonType}`]}`} title={text} onClick={onClick}>
      {text}
      <i className={styles['btn__icon']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
          <path
            fill="currentColor"
            d="M0,7.69220887 C0,7.8788244 0.108173649,8.12868695 0.216347298,8.24888948 L6.370226,15.1314861 C6.65718521,15.4446199 7.12292228,15.4809924 7.45796252,15.1631157 C7.75694102,14.8800304 7.76445645,14.3265158 7.48801075,14.018135 L2.54798463,8.50193624 L19.2307652,8.50193624 C19.6559597,8.50193624 20,8.13977805 20,7.69221899 C20,7.24465993 19.6559482,6.88250174 19.2307652,6.88250174 L2.54798463,6.88250174 L7.48801075,1.36630299 C7.76445452,1.05791408 7.74492365,0.518610003 7.45796252,0.221322316 C7.1544763,-0.0918115382 6.65265057,-0.064924877 6.370226,0.252951896 L0.216347298,7.1355485 C0.036057883,7.32216404 0.00300386204,7.50245163 0,7.69222911 L0,7.69220887 Z"
            transform="rotate(180 10 7.692)"
          />
        </svg>
      </i>
    </button>
  );
};
