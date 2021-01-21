import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

import logo from '../../assets/img/pizza-logo.svg';
import {
  getSumQuantityInCartSelector,
  getSumPriceInCartSelector,
} from '../../store/reducers/cart/selectors';
import {areEqualByValue} from '../../utils/memo';

import './header.scss';

const Header = ({sumQuantityInCart, sumPriceInCart, isMainPage}) => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <div className="header__img-wrapper">
          <img src={logo} width="38" height="38" alt="Логотип Реакт Пиццы" />
        </div>
        <div className="header__logo-text">
          <h1 className="header__title">React Pizza</h1>
          <p className="header__subtitle">самая вкусная пицца в мире</p>
        </div>
      </Link>
      {isMainPage && (
        <Link to="/cart" className="header__order">
          <p className="header__price">{sumPriceInCart}Р</p>
          <p className="header__quantity">{sumQuantityInCart}</p>
        </Link>
      )}
    </header>
  );
};

Header.propTypes = {
  sumPriceInCart: PropTypes.number.isRequired,
  sumQuantityInCart: PropTypes.number.isRequired,
  isMainPage: PropTypes.bool,
};

Header.defaultProps = {
  isMainPage: false,
};

const mapStateToProps = (state) => ({
  sumQuantityInCart: getSumQuantityInCartSelector(state),
  sumPriceInCart: getSumPriceInCartSelector(state),
});

export default compose(connect(mapStateToProps), memo)(Header, areEqualByValue);
