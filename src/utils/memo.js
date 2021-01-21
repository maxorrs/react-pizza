export const areEqualByIdAndQuantity = (prevProps, nextProps) => {
  const {typeId} = prevProps.pizza;
  const isEqualById = nextProps.cart.some((item) => item.typeId === typeId);

  const prevQuantity = prevProps.cart
    .slice()
    .filter((item) => item.typeId === typeId)
    .reduce((acc, item) => acc + item.quantity, 0);
  const nextQuantity = nextProps.cart
    .slice()
    .filter((item) => item.typeId === typeId)
    .reduce((acc, item) => acc + item.quantity, 0);

  const isEqualByQuantity = prevQuantity === nextQuantity;

  return !isEqualById || isEqualByQuantity;
};

export const areEqualByQuantity = (prevProps, nextProps) => {
  return (
    prevProps.quantity === nextProps.quantity &&
    prevProps.isShownPopup === nextProps.isShownPopup &&
    prevProps.price === nextProps.price
  );
};

export const areEqualByLength = (prevProps, nextProps) => {
  return prevProps.cart.length !== nextProps.cart.length;
};

export const areEqualByValue = (_, nextProps) => {
  return !nextProps.isMainPage;
};
