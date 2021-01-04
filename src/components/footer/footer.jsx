import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="page__footer footer">
      <div className="footer__copyright">
        <p className="footer__label">
          Design by:{' '}
          <a className="footer__link" href="https://archakov.im/" target="_blank" rel="noreferrer">
            Archakov Blog
          </a>
        </p>
        <p className="footer__label">
          Developed by:{' '}
          <a
            className="footer__link"
            href="https://github.com/maxorrs"
            target="_blank"
            rel="noreferrer">
            Max Strokov
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
