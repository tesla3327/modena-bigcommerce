import { useState } from 'react';
import styles from './FeaturedProduct.module.scss';
import { Button } from '@/components/atoms/buttons/button';
import { BasketContext } from '../cart/providers/basketProvider';
import { useContext } from 'react';
import Image from 'next/image';

export const FeaturedProduct: React.FC<any> = ({ component, product }) => {
  const variant = component?.variant ? component?.variant : 'primary';
  const { name, tag, description, price, images } = product || {};
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const { addToCart, toggleCartVisibility } = useContext(BasketContext);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide - 1);
  };

  const handleNextSlide = () => {
    setActiveSlide(activeSlide + 1);
  };

  const isDisabled = (value) => {
    return activeSlide === value;
  };

  return (
    <section className={`${styles[`product`]} ${styles[`product--${variant}`]}`}>
      <article className={styles[`product__details`]}>
        <h2 className={styles[`product__title`]}>
          {tag ? <span className={styles[`product__tag`]}>{tag}</span> : null}
          {name}
        </h2>
        {description && (
          <div className={styles[`product__desc`]} dangerouslySetInnerHTML={{ __html: description }} />
        )}
        {price && (
          <span className={styles[`product__price`]}>
            {typeof price === 'number' ? formatter.format(price) : price}
          </span>
        )}
        <Button
          text="Buy"
          buttonType={variant}
          onClick={() => {
            addToCart({
              id: 1,
              price: parseInt(price),
              title: name,
              quantity: 1,
            });
            toggleCartVisibility();
          }}
        />
      </article>
      <aside className={styles[`product__gallery`]}>
        {images &&
          images.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.url}
                alt={name}
                layout="fill"
                objectFit="cover"
                className={`${styles[`product__img`]} ${
                  index === activeSlide ? `${styles[`product__img--active`]}` : ''
                }`}
                quality="75"
                loading="lazy"
              />
            );
          })}
        <div className={styles[`product__btn-group`]}>
          <button
            className={styles[`product__icon-btn`]}
            title="prev"
            onClick={handlePrevSlide}
            disabled={isDisabled(0)}
          >
            <svg
              className={styles[`product__chevron-prev`]}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            className={styles[`product__icon-btn`]}
            title="next"
            onClick={handleNextSlide}
            disabled={!images || isDisabled(images.length - 1)}
          >
            <svg
              className={styles[`product__chevron-next`]}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </aside>
    </section>
  );
};
