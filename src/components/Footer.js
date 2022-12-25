import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../pages/Pages.styles/Footer.sass';

export default function Footer() {
  const history = useHistory();

  return (
    <div
      className="divFooter"
      data-testid="footer"
    >
      <button
        className="button1Footer"
        type="button"
        onClick={ () => history.push('/drinks') }
      >
        <img
          className="imgFooter"
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          alt="Imagem de Drinks"
        />
      </button>

      <button
        className="button2Footer"
        type="button"
        onClick={ () => history.push('/foods') }
      >
        <img
          className="imgFooter"
          src={ mealIcon }
          data-testid="food-bottom-btn"
          alt="Imagem de Comida"
        />
      </button>
    </div>
  );
}
