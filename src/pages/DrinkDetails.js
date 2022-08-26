import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetails';
import receitasContext from '../Context/ReceitasContext';

function DrinkDetails() {
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
      {recipeDetail.drinks && <RecipeDetail />}
    </div>
  );
}

export default DrinkDetails;
