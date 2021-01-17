import PropTypes from 'prop-types';
import {SortType} from '../consts';

export const pizzaCartPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  typeId: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  dough: PropTypes.string.isRequired,
});

export const cartPropTypes = PropTypes.arrayOf(pizzaCartPropTypes);

export const pizzaPropTypes = PropTypes.shape({
  typeId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isHot: PropTypes.bool.isRequired,
  isVegan: PropTypes.bool.isRequired,
  isNew: PropTypes.bool.isRequired,
  structure: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      dough: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      conditions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          size: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
        }),
      ),
    }),
  ),
});

export const sortTypesPropTypes = PropTypes.oneOf([...Object.values(SortType)]).isRequired;
