import { useState } from 'react';
/* import Data from '../products.json';
const productsData = Data.products;
let initialProducts = productsData.map((item) => {
  return { ...item, selected: false };
});
 */
function useProducts() {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    let newCart = cart.concat(product);
    setCart(newCart);
  };

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const calculateSum = (cart) => {
    let totalAmount = 0;
    cart.forEach((product) => (totalAmount += parseInt(product.price)));
    return totalAmount;
  };

  return { cart, addProduct, removeProduct, calculateSum };
}

export default useProducts;
