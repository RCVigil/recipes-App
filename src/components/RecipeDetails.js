import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import receitasContext from '../Context/ReceitasContext';
import '../Sass/index.sass';
import StartButton from './StartButton';
import heartClick from '../pages/funcs/heartClick';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function RecipeDetails() {
  const { recipeDetail, getMeals, getDrinks, recipes } = useContext(receitasContext);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');
  const numCarros = 6;
  const [share, setShare] = useState(false);
  const [fav, setFav] = useState(false);
  const style = {
    margin: '0,0,20px,0',
    padding: '30px',
  };

  const ingredient = () => {
    if (splited[1] === 'foods') {
      const magicIngre1 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strIngredient1',
      );
      const magicIngre2 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strIngredient20',
      );
      return Object.values(recipeDetail.meals[0]).filter(
        (a, i) => i <= magicIngre2 && i >= magicIngre1,
      );
    }
    const magicDrink1 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strIngredient1',
    );
    const magicDrink2 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strIngredient15',
    );
    return Object.values(recipeDetail.drinks[0]).filter(
      (a, i) => i <= magicDrink2 && i >= magicDrink1,
    );
  };

  const measure = () => {
    if (splited[1] === 'foods') {
      const magicIngre1 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strMeasure1',
      );
      const magicIngre2 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strMeasure20',
      );
      return Object.values(recipeDetail.meals[0]).filter(
        (a, i) => i <= magicIngre2 && i >= magicIngre1,
      );
    }
    const magicDrink1 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strMeasure1',
    );
    const magicDrink2 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strMeasure15',
    );
    return Object.values(recipeDetail.drinks[0]).filter(
      (a, i) => i <= magicDrink2 && i >= magicDrink1,
    );
  };

  const ingredientes = ingredient().filter((a) => a !== null && a !== '');
  const medidas = measure().filter((a) => a !== null && a !== '');
  const shareClick = () => {
    clipboardCopy(`http://localhost:3000${pathname}`);
    setShare(true);
  };

  useEffect(() => {
    const indication = () => {
      if (splited[1] === 'foods') {
        getDrinks();
      } else {
        getMeals();
      }
    };
    const local = () => {
      if (localStorage.getItem('favoriteRecipes') !== null
        && splited[1] === 'foods') {
        setFav(JSON.parse(localStorage.getItem('favoriteRecipes'))
          .some((a) => a.id === recipeDetail.meals[0].idMeal));
      }
      if (localStorage.getItem('favoriteRecipes') !== null
        && splited[1] === 'drinks') {
        setFav(JSON.parse(localStorage.getItem('favoriteRecipes'))
          .some((a) => a.id === recipeDetail.drinks[0].idDrink));
      }
    };
    indication();
    local();
  }, []);

  return (
    <div>
      {splited[1] === 'foods' ? (
        <div>
          <img
            data-testid="recipe-photo"
            src={ recipeDetail.meals[0].strMealThumb }
            width="200px"
            alt=""
          />
          <h2 data-testid="recipe-title">{recipeDetail.meals[0].strMeal}</h2>
          <h4 data-testid="recipe-category">{recipeDetail.meals[0].strCategory}</h4>
          <ul>
            {ingredientes.map((a, i) => (
              <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>
                {`${a} ${medidas[i]}`}
              </li>))}
          </ul>
          <p data-testid="instructions">{recipeDetail.meals[0].strInstructions}</p>
          <iframe
            src={ recipeDetail.meals[0].strYoutube }
            title="video"
            data-testid="video"
          />
          {recipes.drinks && (
            <div className="carrossel">
              {recipes.drinks
                .filter((a, i) => i < numCarros)
                .map((el, ind) => (
                  <div
                    className="carrosselItem"
                    data-testid={ `${ind}-recomendation-card` }
                    key={ ind }
                  >
                    <img className="carrosselimg" src={ el.strDrinkThumb } alt="" />
                    <p data-testid={ `${ind}-recomendation-title` }>{el.strDrink}</p>
                  </div>))}
            </div>)}
          { localStorage.getItem('doneRecipes') !== null
            ? !(JSON.parse(localStorage.getItem('doneRecipes'))
              .some((a) => a.id === recipeDetail.meals[0].idMeal))
          && (<StartButton />) : <StartButton />}
          <button
            type="button"
            data-testid="share-btn"
            onClick={ shareClick }
            style={ style }
          >
            Compartilhar
          </button>
          <input
            type="image"
            alt=""
            data-testid="favorite-btn"
            src={ fav ? blackHeartIcon : whiteHeartIcon }
            onClick={ () => heartClick(recipeDetail, splited, fav, setFav) }
          />
          { share && <p>Link copied!</p> }
        </div>
      ) : (
        <div>
          <img
            data-testid="recipe-photo"
            src={ recipeDetail.drinks[0].strDrinkThumb }
            width="50px"
            alt=""
          />
          <h2 data-testid="recipe-title">{recipeDetail.drinks[0].strDrink}</h2>
          <h4 data-testid="recipe-category">
            {recipeDetail.drinks[0].strCategory
              + recipeDetail.drinks[0].strAlcoholic}
          </h4>
          <ul>
            {ingredientes.map((a2, i2) => (
              <li key={ i2 } data-testid={ `${i2}-ingredient-name-and-measure` }>
                {`${a2} ${medidas[i2]}`}
              </li>))}
          </ul>
          <p data-testid="instructions">{recipeDetail.drinks[0].strInstructions}</p>
          {recipes.meals && (
            <div className="carrossel">
              {recipes.meals
                .filter((a, i) => i < numCarros).map((el, ind) => (
                  <div
                    className="carrosselItem"
                    data-testid={ `${ind}-recomendation-card` }
                    key={ ind }
                  >
                    <img
                      className="carrosselimg"
                      src={ el.strMealThumb }
                      alt=""
                    />
                    <p data-testid={ `${ind}-recomendation-title` }>{el.strMeal}</p>
                  </div>))}
            </div>)}
          { localStorage.getItem('doneRecipes') !== null
            ? !(JSON.parse(localStorage.getItem('doneRecipes'))
              .some((a) => a.id === recipeDetail.drinks[0].idDrink))
          && (<StartButton />) : <StartButton />}
          <button
            type="button"
            data-testid="share-btn"
            onClick={ shareClick }
            style={ style }
          >
            Compartilhar
          </button>
          <input
            type="image"
            alt=""
            data-testid="favorite-btn"
            src={ fav ? blackHeartIcon : whiteHeartIcon }
            onClick={ () => heartClick(recipeDetail, splited, fav, setFav) }
          />
          { share && <p>Link copied!</p> }
        </div>)}
    </div>);
}
