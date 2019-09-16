import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <span data-test="logo">Logo</span>
      </div>
    </header>
  );
};

export default Header;
