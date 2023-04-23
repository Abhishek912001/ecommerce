import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

const getCartItemsFromLocalStorage = () => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  };

const getCartQuantities = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getCartPrice = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());
    const [totalPrice, setTotalPrice] = useState(getCartPrice(cartItems));
    const [totalQuantities, setTotalQuantities] = useState(getCartQuantities(cartItems));
    const [qty, setQty] = useState(1);
  
    let foundProduct;
    // eslint-disable-next-line
    let index;
  
    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      setTotalPrice(getCartPrice(cartItems));
      setTotalQuantities(getCartQuantities(cartItems));
    }, [cartItems]);
  
    const onAdd = (product, quantity) => {
      const checkProductInCart = cartItems.find((item) => item._id === product._id);
  
      if (checkProductInCart) {
        const updatedCartItems = cartItems.map((cartProduct) => {
          if (cartProduct._id === product._id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          } else {
            return { ...cartProduct };
          }
        });
  
        setCartItems(updatedCartItems);
      } else {
        product.quantity = quantity;
  
        setCartItems([...cartItems, { ...product }]);
      }
  
      toast.success(`${quantity} ${product.name} added to the cart.`);
    };
  
    const onRemove = (product) => {
      foundProduct = cartItems.find((item) => item._id === product._id);
      const newCartItems = cartItems.filter((item) => item._id !== product._id);
  
      setCartItems(newCartItems);
  
      toast.success(`${foundProduct.quantity} ${product.name} removed from the cart.`);
    };
  
    const toggleCartItemQuantity = (id, value) => {
      foundProduct = cartItems.find((item) => item._id === id);
      index = cartItems.findIndex((item) => item._id === id);
  
      if (value === 'inc') {
        foundProduct.quantity++;
      } else {
        foundProduct.quantity--;
      }
  
      if (foundProduct.quantity < 1) {
        foundProduct.quantity = 1;
      }
  
      setCartItems([...cartItems]);
    };
  
    const incQty = () => {
      setQty((prevQty) => prevQty + 1);
    };
  
    const decQty = () => {
      setQty((prevQty) => {
        if (prevQty - 1 < 1) return 1;
  
        return prevQty - 1;
      });
    };  

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                setCartItems,
                totalPrice,
                setTotalPrice,
                totalQuantities,
                setTotalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove,
            }}
        >
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => useContext(Context);