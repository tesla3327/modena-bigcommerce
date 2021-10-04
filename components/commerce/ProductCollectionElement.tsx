import React, { useContext } from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms/buttons/button';
import { BasketContext } from './cart/providers/basketProvider';

import styles from './styles/productCollectionContainer.module.scss';

interface ProductImage {
  url_zoom: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  images: Array<ProductImage>;
}

export const ProductCollectionElement: React.FC<any> = ({ product }) => {
  const { id, name, price, images } = product || {};
  const productImage = images && images.length > 0 ? images[0]?.url : undefined;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const { toggleCartVisibility, addToCart } = useContext(BasketContext);
  return (
    <div className={styles['multi-product']}>
      <div className={styles['multi-product__col']}>
        {productImage && (
          <div className={styles['multi-product__spot-img']}>
            <Image
              src={productImage}
              alt={name}
              className={styles['multi-product__img']}
              layout="fill"
              loading="lazy"
              quality="75"
              objectFit="cover"
            />
          </div>
        )}
        <article className={styles['multi-product__detail']}>
          <h2 className={styles['multi-product__title']}>
            {price !== undefined && (
              <span className={styles['multi-product__tag']}>
                {typeof price === 'number' ? formatter.format(price) : price}
              </span>
            )}
            {name}
          </h2>
          <Button
            text="Buy"
            buttonType="secondary"
            onClick={() => {
              addToCart({ id, price, title: name, quantity: 1 });
              toggleCartVisibility();
            }}
          />
        </article>
      </div>
    </div>
  );
};
