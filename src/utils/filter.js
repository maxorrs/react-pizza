import {SortType} from '../consts';

export const getTypesFilter = (pizzas) => {
  const types = pizzas.map((pizza) => pizza.type).sort();
  const uniqueTypes = ['Все', ...new Set(types)];

  return uniqueTypes;
};

const filterByAvailable = (pizza) => {
  const {options} = pizza;
  const filteredOptions = options
    .filter((option) => option.isAvailableDough === true)
    .map((option) => {
      const filteredConditions = option.conditions.filter(({isAvailable}) => isAvailable === true);
      return {...option, conditions: filteredConditions};
    });

  return {...pizza, options: filteredOptions};
};

export const filterPizzas = (pizzas, activeType, activeSortType) => {
  const filteredPizzasByDoughType = pizzas.filter((pizza) => {
    if (pizza.type === activeType) {
      return true;
    }
    if (activeType === 'Все') {
      return true;
    }

    return false;
  });

  switch (activeSortType) {
    case SortType.POPULAR:
      return filteredPizzasByDoughType;

    case SortType.PRICE:
      return filteredPizzasByDoughType.slice().sort((a, b) => {
        const onlyAvailableA = filterByAvailable(a);
        const onlyAvailableB = filterByAvailable(b);

        const priceA = onlyAvailableA.options[0].conditions[0].price;
        const priceB = onlyAvailableB.options[0].conditions[0].price;

        if (priceA > priceB) {
          return 1;
        }
        if (priceA < priceB) {
          return -1;
        }
        return 0;
      });

    case SortType.ALPHABET:
      return filteredPizzasByDoughType.slice().sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    default:
      return filteredPizzasByDoughType;
  }
};
