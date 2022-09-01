import { favoriteRecipes, desFavoriteRecipes }
from '../../components/util/favoriteRecipes';

function heartClick(recipeDetail, splited, fav, setFav) {
  if (splited[1] === 'foods' && !fav) {
    favoriteRecipes({ id: recipeDetail.meals[0].idMeal,
      type: 'food',
      nationality: recipeDetail.meals[0].strArea,
      category: recipeDetail.meals[0].strCategory,
      alcoholicOrNot: '',
      name: recipeDetail.meals[0].strMeal,
      image: recipeDetail.meals[0].strMealThumb });
    return setFav(JSON.parse(localStorage.getItem('favoriteRecipes'))
      .some((a) => a.id === recipeDetail.meals[0].idMeal));
  } if (splited[1] === 'drinks' && !fav) {
    favoriteRecipes({ id: recipeDetail.drinks[0].idDrink,
      type: 'drink',
      nationality: '',
      category: recipeDetail.drinks[0].strCategory,
      alcoholicOrNot: recipeDetail.drinks[0].strAlcoholic,
      name: recipeDetail.drinks[0].strDrink,
      image: recipeDetail.drinks[0].strDrinkThumb });
    return setFav(JSON.parse(localStorage.getItem('favoriteRecipes'))
      .some((a) => a.id === recipeDetail.drinks[0].idDrink));
  } if (splited[1] === 'foods' && fav) {
    desFavoriteRecipes({ id: recipeDetail.meals[0].idMeal });
    return setFav(JSON.parse(localStorage.getItem('favoriteRecipes'))
      .some((a) => a.id === recipeDetail.meals[0].idMeal));
  }
  desFavoriteRecipes({ id: recipeDetail.drinks[0].idDrink });
  return setFav(JSON.parse(localStorage.getItem('favoriteRecipes'))
    .some((a) => a.id === recipeDetail.drinks[0].idDrink));
}

export default heartClick;
