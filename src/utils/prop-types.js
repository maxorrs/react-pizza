import PropTypes from 'prop-types';

export const cartPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    typeId: PropTypes.string.isRequired,
    type: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
);

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
