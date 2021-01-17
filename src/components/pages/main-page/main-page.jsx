import React from 'react';

import Header from '../../header/header';
import SectionPizza from '../../section-pizza/section-pizza';
import PizzaList from '../../pizza-list/pizza-list';

import './main-page.scss';
import Footer from '../../footer/footer';

const MainPage = () => {
  return (
    <div className="page page--yellow page--main">
      <Header isMainPage />
      <main>
        <SectionPizza />
        <PizzaList />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
