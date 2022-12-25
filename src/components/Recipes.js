import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import receitasContext from '../Context/ReceitasContext';
import '../pages/Pages.styles/Recipes.sass';

export default function Recipes() {
  const { recipes } = useContext(receitasContext);

  const num = 12;

  return (
    <div className="divRecipes">
      {recipes.meals && recipes.meals.map((elem, index) => (
        index < num
          ? (

            <div
              className="divRecipesFood"
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <Link
                className="linkRecipes"
                to={ `/foods/${elem.idMeal}` }
              >
                <img
                  className="imgRecipes"
                  data-testid={ `${index}-card-img` }
                  src={ elem.strMealThumb }
                  alt=""
                />
                <p
                  className="pRecipes"
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
