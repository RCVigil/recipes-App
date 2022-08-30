import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import Ingredientes from '../components/Ingredientes';
import receitasContext from '../Context/ReceitasContext';

function RecipeInProgress() {
  const { recipeDetail, setRecipeDetail } = useContext(receitasContext);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');

  const getFoodDetail = async () => {
    if (splited[1] === 'foods') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${splited[2]}`);
      const dataResponse = await response.json();
      setRecipeDetail(dataResponse);
    } else {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${splited[2]}`);
      const dataResponse = await response.json();
      setRecipeDetail(dataResponse);
    }
  };

  useEffect(() => {
    getFoodDetail();
  }, []);

  return (
    <div>
      <h1>RecipeInProgress</h1>
      {splited[1] === 'foods' ? (
        recipeDetail.meals && (
          <div>
            <img
              data-testid="recipe-photo"
              src={ recipeDetail.meals[0].strMealThumb }
              width="400px"
              alt=""
            />
            <h2 data-testid="recipe-title">{recipeDetail.meals[0].strMeal}</h2>
            <button
              type="button"
              data-testid="share-btn"
            >
              Compartilhar
            </button>
            <button
              type="button"
              data-testid="favorite-btn"
            >
              Favoritar
            </button>
            <h4 data-testid="recipe-category">
              {recipeDetail.meals[0].strCategory}
            </h4>

            { recipeDetail.meals && <Ingredientes />}

            <h5 data-testid="instructions">
              {recipeDetail.meals[0].strInstructions}
            </h5>

            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finish Recipes
            </button>
          </div>
        )
      ) : (
        recipeDetail.drinks && (

          <div>
            <img
              data-testid="recipe-photo"
              src={ recipeDetail.drinks[0].strDrinkThumb }
              width="400px"
              alt=""
            />
            <h2 data-testid="recipe-title">{recipeDetail.drinks[0].strDrink}</h2>
            <h4 data-testid="recipe-category">
              {recipeDetail.drinks[0].strCategory}
            </h4>
            { recipeDetail.drinks && <Ingredientes />}
            <h5 data-testid="instructions">
              {recipeDetail.drinks[0].strInstructions}
            </h5>

            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finish Recipes
            </button>
            <button
              type="button"
              data-testid="share-btn"
            >
              Compartilhar
            </button>
            <button
              type="button"
              data-testid="favorite-btn"
            >
              Favoritar
            </button>
          </div>)
      )}
    </div>
  );
}

export default RecipeInProgress;
