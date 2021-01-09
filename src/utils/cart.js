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
  const price = 0;
  return price;
};
