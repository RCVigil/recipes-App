export const favoriteRecipes = ({ id,
  type, nationality, category, alcoholicOrNot, name, image }) => {
  const recipesFav = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const recipesFav2 = [...recipesFav, { id,
    type,
    nationality,
    category,
    alcoholicOrNot,
    name,
    image }];
  localStorage.setItem('favoriteRecipes', JSON.stringify(recipesFav2));
};

export const desFavoriteRecipes = ({ id }) => {
  const recipesFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const recipesFav2 = recipesFav.filter((a) => a.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(recipesFav2));
};
