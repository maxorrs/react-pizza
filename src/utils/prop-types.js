import PropTypes from 'prop-types';

export const cartPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    typeId: PropTypes.number.isRequired,
    type: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
);

export const pizzaPropTypes = PropTypes.shape({
  typeId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      dough: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      conditions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          size: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
        }),
      ),
    }),
  ),
});
