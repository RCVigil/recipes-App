import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  const history = useHistory();
  const style = {
    position: 'fixed',
    bottom: '0px',
  };
  return (
    <div
      data-testid="footer"
      style={ style }
    >
      <button
        type="button"
        onClick={ () => history.push('/drinks') }
      >
        <img
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          alt="Imagem de Drinks"
        />
      </button>

      <button
        type="button"
        onClick={ () => history.push('/foods') }
        // style
      >
        <img
          src={ mealIcon }
          data-testid="food-bottom-btn"
          alt="Imagem de Comida"
        />
      </button>
      <button
        type="button"
        data-testid="start-recipe-btn"
        style={ style }
      >
        Start Recipe
      </button>
    </div>
  );
}
