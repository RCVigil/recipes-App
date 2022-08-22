import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  const style = {
    position: 'fixed',
    bottom: '0px',
  };
  return (
    <div
      data-testid="footer"
      style={ style }
    >
      <img
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        alt="Imagem de Drinks"
      />

      <img
        src={ mealIcon }
        data-testid="food-bottom-btn"
        alt="Imagem de Comida"
      />
    </div>
  );
}
