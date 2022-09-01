import React, { useEffect } from 'react';
import shareIcon from '../images/shareIcon.svg';

// [{"id":"52771","type":"food","nationality":"Italian","category":"Vegetarian","alcoholicOrNot":"","name":"Spicy Arrabiata Penne","image":"https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg","doneDate":"23/06/2020","tags":["Pasta","Curry"]},{"id":"178319","type":"drink","nationality":"","category":"Cocktail","alcoholicOrNot":"Alcoholic","name":"Aquamarine","image":"https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg","doneDate":"23/06/2020","tags":[]}]

function CardDoneRecipes() {
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  useEffect(() => {
    console.log(recipesDone);
  }, []);
  return (
    <div>

      {recipesDone && recipesDone.map((a, i) => (
        <div key={ i }>
          <img
            width="100px"
            data-testid={ `${i}-horizontal-image` }
            src={ a.image }
            alt=""
          />
          <p data-testid={ `${i}-horizontal-top-text` }>
            {`${a.nationality} - ${a.category}`}
          </p>
          <p data-testid={ `${i}-horizontal-name` }>{a.name}</p>
          <p data-testid={ `${i}-horizontal-done-date` }>{a.doneDate}</p>
          <input
            type="image"
            data-testid={ `${i}-horizontal-share-btn` }
            src={ shareIcon }
            alt=""
          />
          {a.tags.map((ele, index) => (
            <p
              key={ index }
              data-testid={ `${i}-${ele}-horizontal-tag` }
            >
              {ele}
            </p>))}
        </div>))}
    </div>
  );
}

export default CardDoneRecipes;
