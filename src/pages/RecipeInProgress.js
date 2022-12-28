import React, { useEffect, useContext, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import '../Sass/index.sass';
import Ingredientes from '../components/Ingredientes';
import heartClick from './funcs/heartClick';
import shareIcon from '../images/shareIcon.svg';
import receitasContext from '../Context/ReceitasContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../pages/Pages.styles/RecipeInProg.sass';

const RecipeInProgress = () => {
  const {
    recipeDetail,
    setRecipeDetail,
    ingredientsRec,
    locBase,
  } = useContext(receitasContext);
  const [share, setShare] = useState(false);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');
  const [fav, setFav] = useState(false);
  const [disabledOn, setDisabledOn] = useState(true);

  const ingredientsLength = ingredientsRec.length;

  const getFoodDetail = async () => {
    if (splited[1] === 'foods') {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${splited[2]}`,
      );
      const dataResponse = await response.json();
      setRecipeDetail(dataResponse);
    } else {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${splited[2]}`,
      );
      const dataResponse = await response.json();
      setRecipeDetail(dataResponse);
    }
  };

  const shareClick = () => {
    clipboardCopy(`http://localhost:3000/${splited[1]}/${splited[2]}`);
    setShare(true);
  };

  const finishClick = () => {
    if (locBase.length === ingredientsLength && locBase.length > 0) {
      setDisabledOn(false);
    }
  };

  const finishRecipDone = () => {
    history.push('/done-recipes');
  };

  useEffect(() => {
    getFoodDetail();
    const local = () => {
      if (
        localStorage.getItem('favoriteRecipes') !== null
        && splited[1] === 'foods'
      ) {
        setFav(
          JSON.parse(localStorage.getItem('favoriteRecipes')).some(
            (a) => a.id === splited[2],
          ),
        );
      }
      if (
        localStorage.getItem('favoriteRecipes') !== null
        && splited[1] === 'drinks'
      ) {
        setFav(
          JSON.parse(localStorage.getItem('favoriteRecipes')).some(
            (a) => a.id === splited[2],
          ),
        );
      }
    };
    finishClick();
    local();
  }, [ingredientsRec, locBase]);

  return (
    <div className="divRecInProg">
      <h1 className="h1HeaderRecipProg">Recipe In Progress</h1>
      {splited[1] === 'foods'
        ? recipeDetail.meals && (
          <div className="divRecipeDetInProg">
            <div className="divHeaderRecipInProgress">
              <img
                className="imgRecipInProg"
                data-testid="recipe-photo"
                src={ recipeDetail.meals[0].strMealThumb }
                alt=""
              />
              <div className="h2H4HeaderRecInProg">
                <h2
                  className="h2HeaderRecInProg"
                  data-testid="recipe-title"
                >
                  {recipeDetail.meals[0].strMeal}
                </h2>

                <h4
                  className="h4HeaderRecInProg"
                  data-testid="recipe-category"
                >
                  {recipeDetail.meals[0].strCategory}
                </h4>
              </div>
            </div>

          <div className="instPrepRecipInProg">
            {recipeDetail.meals && <Ingredientes />}

            <h5
              className="h5RecipeInProg"
              data-testid="instructions"
            >
              {recipeDetail.meals[0].strInstructions}
            </h5>
            </div>

            <div className="buttonRecInProgFooter">
            <input
              className="buttonsFavCompRecInProg"
              type="image"
              alt=""
              src={ shareIcon }
              data-testid="share-btn"
              onClick={ shareClick }
            />

              <input
              className="buttonsFavCompRecInProg"
                data-testid="favorite-btn"
                type="image"
                alt=""
                src={ fav ? blackHeartIcon : whiteHeartIcon }
                onClick={ () => heartClick(recipeDetail, splited, fav, setFav) }
              />

              {share && <p>Link copied!</p>}

              <button
                className="ButtonFinRecInProg"
                type="button"
                data-testid="finish-recipe-btn"
                disabled={ disabledOn }
                onClick={ finishRecipDone }
              >
                Finish Recipes
              </button>
              </div>
          </div>
        )
        : recipeDetail.drinks && (
          <div>
            <img
              data-testid="recipe-photo"
              src={ recipeDetail.drinks[0].strDrinkThumb }
              alt=""
            />
            <h2 data-testid="recipe-title">
              {recipeDetail.drinks[0].strDrink}
            </h2>
            <h4 data-testid="recipe-category">
              {recipeDetail.drinks[0].strCategory}
            </h4>
            {recipeDetail.drinks && <Ingredientes />}
            <h5
              data-testid="instructions"
            >
              {recipeDetail.drinks[0].strInstructions}
            </h5>
            <div
              className="buttonRecInProgFooter"
            >
              <button
                type="button"
                data-testid="finish-recipe-btn"
                disabled={ disabledOn }
                onClick={ finishRecipDone }
              >
                Finish Recipes
              </button>
              <input
                type="image"
                alt=""
                src={ shareIcon }
                data-testid="share-btn"
                onClick={ shareClick }
              />
              <input
                type="image"
                alt=""
                data-testid="favorite-btn"
                src={ fav ? blackHeartIcon : whiteHeartIcon }
                onClick={ () => heartClick(recipeDetail, splited, fav, setFav) }
              />
              {share && <p>Link copied!</p>}
            </div>
          </div>
        )}
    </div>
  );
};

export default RecipeInProgress;
