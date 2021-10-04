import { createContext, useState } from 'react';
import { analytics } from 'lib/tracking/local-tracker';

export const BasketContext = createContext({
  isCartOpen: false,
  toggleCartVisibility: (e) => {
    console.log({ e });
  },
  cart: [],
  addToCart: (e) => {
    console.log({ e });
  },
  removeFromCart: (e) => {
    console.log({ e });
  },
  checkout: (e) => {
    console.log({ e });
  },
});

export const BasketContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleCartVisibility = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (obj) => {
    const payload = {
      label: obj.title,
      value: parseInt(obj.price),
    };
    analytics.track('addToCart', payload);
    return setCart((prevState) => [...prevState, obj]);
  };

  const checkout = (cart) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const cartTotal = cart.map((c) => c.quantity * c.price).reduce(reducer);
    const cartLabel = [...new Set(cart.map((c) => c.title))].join(', ');
    const payload = {
      label: cartLabel,
      value: cartTotal,
    };
    analytics.track('checkout', payload);
    return setCart(() => []);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id != id);
    setCart(newCart);
  };

  // TODO: cart needs to update quantity if in selection
  // useEffect(() => {
  //   return cart.filter((item) => {
  //     console.log(item);
  //     debugger;
  //     if (item.name) {
  //       return {
  //         ...item,
  //         quantity: item.quantity >= 1 ? item.quantity + 1 : item.quantity,
  //       };
  //     }
  //     return item;
  //   })
  // }, [cart])

  return (
    <BasketContext.Provider
      value={{
        isCartOpen,
        toggleCartVisibility,
        cart,
        addToCart,
        removeFromCart,
        checkout,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
