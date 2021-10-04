import React, { useContext } from 'react';
import styles from './styles/basket-summary.module.scss';
import { BasketSummaryProps } from './cartTypes';
import { Button } from '@/components/atoms/buttons/button';
import { BasketContext } from './providers/basketProvider';

export const BasketSummary: React.FC<BasketSummaryProps> = ({ id }) => {
  const { isCartOpen, toggleCartVisibility, cart, checkout } = useContext(BasketContext);

  return (
    <div hidden={!isCartOpen}>
      <section id={id} className={styles['basket-summary']} role="dialog">
        <h2 className={styles['basket-summary__title']}>Your Basket</h2>
        {cart.length ? (
          <div className={styles['basket-summary__details']}>
            <table className={styles['basket-summary__table']}>
              <thead>
                <tr className={styles['basket-summary__table-head']}>
                  <th className={styles['basket-summary__table-head-data']}>Product</th>
                  <th className={styles['basket-summary__table-head-data']}>Price</th>
                  <th className={styles['basket-summary__table-head-data']}>Quantity</th>
                  <th className={styles['basket-summary__table-head-data']}></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item: BasketListProps, i) => {
                  return (
                    <BasketList
                      title={item.title}
                      price={item.price}
                      id={item.id}
                      quantity={item.quantity}
                      key={i}
                    />
                  );
                })}
              </tbody>
            </table>
            <Button
              text="Checkout"
              buttonType="secondary"
              onClick={() => {
                checkout(cart);
              }}
            />
          </div>
        ) : (
          <p>Your basket is empty</p>
        )}
        <button className={styles['basket-summary__close-btn']} onClick={toggleCartVisibility}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </section>
      <div className={styles['basket-overlay']} aria-hidden="true" onClick={toggleCartVisibility}></div>
    </div>
  );
};

interface BasketListProps {
  title: string;
  price: number;
  id: string;
  quantity: number;
}

const BasketList: React.FC<BasketListProps> = ({ title, price, id, quantity }) => {
  const { removeFromCart } = useContext(BasketContext);
  return (
    <tr className={styles['basket-summary__data']}>
      <td className={styles['basket-summary__item-title']}>{title}</td>
      <td className={styles['basket-summary__price']}>${price}</td>
      <td className={styles['basket-summary__quantity']}>{quantity}</td>
      <td>
        <button
          className={styles['basket-summary__btn']}
          onClick={() => removeFromCart(id)}
          title={`delete ${title}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
              fill="currentColor"
            />
            <path d="M9 9H11V17H9V9Z" fill="currentColor" />
            <path d="M13 9H15V17H13V9Z" fill="currentColor" />
          </svg>
          <span hidden>Delete</span>
        </button>
      </td>
    </tr>
  );
};
