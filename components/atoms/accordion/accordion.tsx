import { useState } from 'react';
import { AccordionProps } from './accordionTypes';
import styles from './styles/accordion.module.scss';

export const Accordion: React.FC<any> = ({ children }) => {
  return <section className={styles['accordion']}>{children}</section>;
};

export const AccordionItem: React.FC<AccordionProps> = ({ title, desc, ariaControls }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggleEvent = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <h3 className={styles['accordion__title']}>
        <button className={styles['accordion__btn']} tabIndex={isOpen ? 0 : -1} onClick={handleToggleEvent}>
          {title}
          <i
            className={`${styles['accordion__icon']} ${isOpen ? styles['accordion__icon--open'] : ''}`}
            aria-hidden="true"
          ></i>
        </button>
      </h3>
      <div id={ariaControls} className={styles['accordion__region']} role="region" hidden={!isOpen}>
        <p className={styles['accordion__desc']}>{desc}</p>
      </div>
    </>
  );
};
