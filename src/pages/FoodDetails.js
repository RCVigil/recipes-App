import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import Footer from '../components/Footer';
import RecipeDetail from '../components/RecipeDetails';
import receitasContext from '../Context/ReceitasContext';

function FoodDetails() {
  const { recipeDetail, setRecipeDetail } = useContext(receitasContext);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');

  const style = {
    position: 'fixed',
    bottom: '0px',
  };

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
      { recipeDetail.meals && <RecipeDetail />}
      <button
        type="button"
        data-testid="start-recipe-btn"
        style={ style }
      >
        Start Recipe
      </button>
    </div>
  );
}

export default FoodDetails;
