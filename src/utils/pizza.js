export const getDoughTypes = (pizza) => {
  const doughTypes = pizza.options
    .filter(({isAvailableDough}) => isAvailableDough === true)
    .map((option) => option.dough);

  return doughTypes;
};

export const getAvailableConditions = (conditions) => {
  const isAvailableConditions = conditions.filter(({isAvailable}) => isAvailable === true);
  return isAvailableConditions;
};

export const getDefaultPizzaSize = (conditions) => {
  const isAvailableConditions = getAvailableConditions(conditions);
  const sizes = isAvailableConditions.map((condition) => condition.size);
  const minSize = Math.min(...sizes);
  return minSize;
};

export const getAvailableMinSizeIndex = (conditions) => {
  const indexes = conditions.map(({isAvailable}, index) => {
    if (isAvailable) {
      return index;
    }

    return 999;
  });

  const minIndex = Math.min(...indexes);

  return minIndex;
};

export const getAvailableDoughIndex = (options) => {
  const indexes = options.map(({isAvailableDough}, index) => {
    if (isAvailableDough) {
      return index;
    }

    return 999;
  });

  const minIndex = Math.min(...indexes);

  return minIndex;
};
