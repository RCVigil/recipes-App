import React, { useContext } from 'react';
import receitasContext from '../Context/ReceitasContext';

export default function Categories() {
  const { category } = useContext(receitasContext);
  const num = 5;
  return (
    <div>
      {category.meals
        && category.meals.map((elem, index) => (index < num ? (
          <button
            data-testid={ `${elem.strCategory}-category-filter` }
            type="button"
            key={ index }
          >
            {elem.strCategory}
          </button>
        ) : (
          ''
        )))}

      {category.drinks
        && category.drinks.map((e, ind) => (ind < num ? (
          <button
            data-testid={ `${e.strCategory}-category-filter` }
            type="button"
            key={ ind }
          >
            {e.strCategory}
          </button>
        ) : (
          ''
        )))}
    </div>
  );
}
