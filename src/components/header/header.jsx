import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import logo from '../../assets/img/pizza-logo.svg';
import {
  getSumQuantityInCartSelector,
  getSumPriceInCartSelector,
} from '../../store/reducers/cart/selectors';

import './header.scss';

const Header = ({sumQuantityInCart, sumPriceInCart}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__img-wrapper">
          <img src={logo} width="38" height="38" alt="Логотип Реакт Пиццы" />
        </div>
        <div className="header__logo-text">
          <h1 className="header__title">React Pizza</h1>
          <p className="header__subtitle">самая вкусная пицца в мире</p>
        </div>
      </div>
      <Link to="/cart" className="header__order">
        <p className="header__price">{sumPriceInCart} ₽</p>
        <p className="header__quantity">{sumQuantityInCart}</p>
      </Link>
    </header>
  );
};

Header.propTypes = {
  sumPriceInCart: PropTypes.number.isRequired,
  sumQuantityInCart: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  sumQuantityInCart: getSumQuantityInCartSelector(state),
  sumPriceInCart: getSumPriceInCartSelector(state),
});

export default connect(mapStateToProps)(Header);
