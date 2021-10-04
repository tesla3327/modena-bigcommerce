import { Accordion, AccordionItem } from '@/components/atoms/accordion/accordion';

import styles from './ProductSpecs.module.scss';

type SpecsProps = {
  internalName: string;
  header: string;
  copy: string;
};

export const ProductSpecs: React.FC<any> = ({ component }) => {
  const entry = component?.parameters?.entry?.value;
  const { smallIntroHeader, header, benefits } = entry || {};

  return (
    <article className={styles['product-specs']}>
      <h3 className={styles['product-specs__title']}>
        <span className={styles['product-specs__tag']}>{smallIntroHeader}</span>
        {header}
      </h3>
      <aside className={styles['product-specs__supporting']}>
        <Accordion>
          {benefits &&
            benefits.map((item: SpecsProps, index: number) => {
              const { header, copy } = item || {};
              return (
                <AccordionItem key={index} title={header} desc={copy} ariaControls={`accordion-${index}`} />
              );
            })}
        </Accordion>
      </aside>
    </article>
  );
};
