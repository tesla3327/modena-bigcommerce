import styles from './styles/product-detail.module.scss';
import { Slot } from '@uniformdev/canvas-react';

const ProductCollectionContainer: React.FC<any> = ({ tag, heading }) => {
  return (
    <article className={styles['product-detail']}>
      <h3 className={styles['product-detail__title']}>
        {tag && <span className={styles['product-detail__tag']}>{tag}</span>}
        {heading}
      </h3>
      <section className={styles['product-detail__supporting']}>
        <Slot name="products" />
      </section>
    </article>
  );
};

export default ProductCollectionContainer;
