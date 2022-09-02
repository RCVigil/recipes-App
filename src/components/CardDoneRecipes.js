import React from 'react';
import shareIcon from '../images/shareIcon.svg';

function CardDoneRecipes() {
  const recipesDone = JSON.parse(localStorage.getItem('recipesDone')) || [];

  return (
    <div>

      {recipesDone.map((a, i) => (
        <div key={ i }>
          <img
            width="100px"
            data-testid={ `${i}-horizontal-image` }
            src={ a.image }
            alt=""
          />
          {a.type === 'food'
            ? (
              <p
                data-testid={ `${i}-horizontal-top-text` }
              >
                {`${a.nationality} - ${a.category}`}

              </p>)
            : (
              <p
                data-testid={ `${i}-horizontal-top-text` }
              >
                {`${a.alcoholicOrNot}`}

              </p>) }

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
