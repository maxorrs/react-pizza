export const getSumQuantityInCart = (cart) => {
  if (!cart) {
    return 0;
  }

  const quantity = cart.reduce((acc, item) => item.quantity + acc, 0);
  return quantity;
};

export const getSumPriceInCart = (cart) => {
  if (!cart) {
    return 0;
  }

  const price = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return price;
};
