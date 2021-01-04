export const getDoughTypes = (pizza) => {
  const doughTypes = pizza.options.map((option) => option.dough)
  return doughTypes;
};

export const getDefaultPizzaSize = (conditions) => {
  const sizes = conditions.map((condition) => condition.size);
  const minSize = Math.min(...sizes);
  return minSize;
};
