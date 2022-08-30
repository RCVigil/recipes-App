import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function RecipeInProgress() {
  const [recipeProgress, setRecipeProgress] = useState([]);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');
  const foodDrinks = splited[1];
  const idRecipes = splited[2];

  useEffect(() => {
    const getRecipe = async () => {
      let endPoint = '';
      if (foodDrinks === 'foods') {
        endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipes}`;
      } else {
        endPoint = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipes}`;
      }

      const responseApi = await fetch(endPoint);
      const dataApi = await responseApi.json();
      console.log('Resposta API e: ', dataApi);
      setRecipeProgress(dataApi);
    };
    getRecipe().catch(console.error);
  }, []);

  const ingredient = () => {
    console.log('RecipeProgress     ', recipeProgress);
    if (foodDrinks === 'foods') {
      const magicIngre1 = Object.keys(recipeProgress.meals[0]).indexOf(
        'strIngredient1',
      );
      const magicIngre2 = Object.keys(recipeProgress.meals[0]).indexOf(
        'strIngredient20',
      );
      // getDrinks();
      return Object.values(recipeProgress.meals[0]).filter(
        (a, i) => i <= magicIngre2 && i >= magicIngre1,
      );
    }
    const magicDrink1 = Object.keys(recipeProgress.drinks[0]).indexOf(
      'strIngredient1',
    );
    const magicDrink2 = Object.keys(recipeProgress.drinks[0]).indexOf(
      'strIngredient15',
    );
    // getMeals();
    return Object.values(recipeProgress.drinks[0]).filter(
      (a, i) => i <= magicDrink2 && i >= magicDrink1,
    );
  };

  const measure = () => {
    if (foodDrinks === 'foods') {
      const magicIngre1 = Object.keys(recipeProgress.meals[0]).indexOf(
        'strMeasure1',
      );
      const magicIngre2 = Object.keys(recipeProgress.meals[0]).indexOf(
        'strMeasure20',
      );
      return Object.values(recipeProgress.meals[0]).filter(
        (a, i) => i <= magicIngre2 && i >= magicIngre1,
      );
    }
    const magicDrink1 = Object.keys(recipeProgress.drinks[0]).indexOf(
      'strMeasure1',
    );
    const magicDrink2 = Object.keys(recipeProgress.drinks[0]).indexOf(
      'strMeasure15',
    );
    return Object.values(recipeProgress.drinks[0]).filter(
      (a, i) => i <= magicDrink2 && i >= magicDrink1,
    );
  };

  const ingredientes = ingredient().filter((a) => a !== null && a !== '');
  const medidas = measure().filter((a) => a !== null && a !== '');

  return (
    <div>
      <h1>RecipeInProgress</h1>
      {foodDrinks === 'foods' ? (
        recipeProgress.meals && (
          <div>
            <img
              data-testid="recipe-photo"
              src={ recipeProgress.meals[0].strMealThumb }
              width="400px"
              alt=""
            />
            <h2 data-testid="recipe-title">{recipeProgress.meals[0].strMeal}</h2>
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
              {recipeProgress.meals[0].strCategory}
            </h4>

            {/* <ul>
              {ingredientes.map((a, i) => (
                <li key={ i } data-testid={ `${i}-ingredient-step` }>
                  {`${a} ${medidas[i]}`}
                </li>
              ))}
            </ul> */}

            <h5 data-testid="instructions">
              {recipeProgress.meals[0].strInstructions}
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
        <div>
          {/* <img
                data-testid="recipe-photo"
                src={ recipeProgress.drinks[0].strDrinkThumb }
                width="400px"
                alt=""
              />
              <h2 data-testid="recipe-title">{recipeProgress.drinks[0].strDrink}</h2>
              <h4 data-testid="recipe-category">
                {recipeProgress.drinks[0].strCategory}
              </h4>
              <ul>
                {ingredientes.map((a2, i2) => (
                  <li key={ i2 } data-testid={ `${i2}-ingredient-step` }>
                    {`${a2} ${medidas[i2]}`}
                  </li>
                ))}
              </ul>
              <h5 data-testid="instructions">
                {recipeProgress.drinks[0].strInstructions}
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
              </button> */}
        </div>
      )}
      {console.log('foodDrinks é: ', foodDrinks, 'idDrink é: ', idRecipes)}
    </div>
  );
}

export default RecipeInProgress;
