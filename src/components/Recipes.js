import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import receitasContext from '../Context/ReceitasContext';

export default function Recipes() {
  const { recipes } = useContext(receitasContext);
  const style = {
    flexWrap: 'wrap',
    width: '5px',
    display: 'flex',
  };

  const num = 12;

  return (
    <div>
      {recipes.meals && recipes.meals.map((elem, index) => (
        index < num
          ? (

            <div
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <Link
                to={ `/foods/${elem.idMeal}` }
              >
                <img
                  style={ style }
                  data-testid={ `${index}-card-img` }
                  src={ elem.strMealThumb }
                  alt=""
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  {elem.strMeal}
                </p>
              </Link>
            </div>
          ) : ''
      ))}

      {recipes.drinks && recipes.drinks.map((elem, index) => (
        index < num
          ? (

            <div
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <Link
                to={ `/drinks/${elem.idDrink}` }
              >
                <img
                  style={ style }
                  data-testid={ `${index}-card-img` }
                  src={ elem.strDrinkThumb }
                  alt=""
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  {elem.strDrink}
                </p>
              </Link>
            </div>
          ) : ''
      ))}

    </div>
  );
}
