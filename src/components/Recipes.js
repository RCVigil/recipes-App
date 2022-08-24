import React, { useContext } from 'react';
import receitasContext from '../Context/ReceitasContext';

export default function Recipes() {
  const { recipes } = useContext(receitasContext);
  const style = {
    flexWrap: 'wrap',
    width: '5px',
    display: 'flex',
  };

  // const style2 = {
  //   diplay: 'flex',
  // };

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
              {console.log(index)}
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
            </div>) : ''
      ))}

      {recipes.drinks && recipes.drinks.map((elem, index) => (
        index < num
          ? (
            <div
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              {console.log(elem)}
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
            </div>) : ''
      ))}

    </div>
  );
}
