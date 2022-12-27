import React from 'react';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../pages/Pages.styles/CardFavoritesR.sass';

function CardFavoritRecip() {
  const recipesFavorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  return (
    <div className="divFullFavorR">

      {recipesFavorite.map((a, i) => (
        <div
          className="divCardFavor"
          key={ i }
        >
          <img
            className="imgFavor"
            width="100px"
            data-testid={ `${i}-horizontal-image` }
            src={ a.image }
            alt=""
          />
          {a.type === 'food'
            ? (
              <p
                className="pCardFavType"
                data-testid={ `${i}-horizontal-top-text` }
              >
                {`${a.nationality} - ${a.category}`}

              </p>)
            : (
              <p
                className="pCardFavType"
                data-testid={ `${i}-horizontal-top-text` }
              >
                {`${a.alcoholicOrNot}`}

              </p>) }

          <p
            className="pCardFavName"
            data-testid={ `${i}-horizontal-name` }
          >
            {a.name}
          </p>
          <div className="iconHeartShare">
            <input
              className="inpShareIcon"
              type="image"
              data-testid={ `${i}-horizontal-share-btn` }
              src={ shareIcon }
              alt=""
            />
            <input
              className="inpBHeart"
              type="image"
              alt=""
              data-testid={ `${i}-horizontal-favorite-btn` }
              src={ blackHeartIcon }
              // onClick={ () => heartClick(recipeDetail, splited, fav, setFav) }
            />
          </div>
        </div>))}
    </div>
  );
}

export default CardFavoritRecip;
