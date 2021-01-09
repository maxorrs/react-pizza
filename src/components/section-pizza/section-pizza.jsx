import React from 'react';

import Nav from '../nav/nav';
import Sorting from '../sorting/sorting';

import './section-pizza.scss';

const SectionPizza = () => {
  return (
    <section className="section-pizza">
      <h2 className="visually-hidden">Выбрать вид пиццы</h2>
      <div className="section-pizza__wrapper">
        <Nav />
        <Sorting />
      </div>
    </section>
  );
};

export default SectionPizza;
