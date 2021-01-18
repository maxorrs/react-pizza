import React from 'react';
import {Link} from 'react-router-dom';

import './cart-empty.scss';

const CartEmpty = () => {
  return (
    <section className="cart-empty">
      <h1 className="cart-empty__title">Корзина пустая</h1>
      <p className="cart-empty__info">
        Вероятней всего, вы не заказывали еще пиццу. Для того, чтобы заказать пиццу, перейдите на
        главную страницу.
      </p>
      <Link className="cart-empty__link" to="/">
        На главную
      </Link>
    </section>
  );
};

export default CartEmpty;
