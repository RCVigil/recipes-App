import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function CardFavoritRecip() {
  const recipesFavorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  return (
    <div>

      {recipesFavorite.map((a, i) => (
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
          <input
            type="image"
            data-testid={ `${i}-horizontal-share-btn` }
            src={ shareIcon }
            alt=""
          />
          <input
            type="image"
            alt=""
            data-testid={ `${i}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            // onClick={ () => heartClick(recipeDetail, splited, fav, setFav) }
          />
        </div>))}
    </div>
  );
}

export default CardFavoritRecip;
