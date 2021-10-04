import styles from './styles/product-detail.module.scss';
import { ProductCollectionElement } from './ProductCollectionElement';

export type ProductSlots = 'products';

export const ProductCollectionList: React.FC<any> = ({ tag, heading, products }) => (
  <article className={styles['product-detail']}>
    <h3 className={styles['product-detail__title']}>
      {tag && <span className={styles['product-detail__tag']}>{tag}</span>}
      {heading}
    </h3>
    {products && Array.isArray(products) && products.length > 0 && (
      <section className={styles['product-detail__supporting']}>
        {products.map((product, index) => (
          <ProductCollectionElement key={index} product={product} />
        ))}
      </section>
    )}
  </article>
);
