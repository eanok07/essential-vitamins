import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1>Essential Vitamins</h1>
        <img 
          src="/images3" 
          alt="Vitamin Bottle" 
          className="header__image"
          loading="lazy" // Lazy loading for image
        />
        <div className="header__tags">
          <p>Vitamins</p>
          <p>Weight Loss</p>
          <p>Functional Foods</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
