import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import receitasContext from '../Context/ReceitasContext';
import { favoriteRecipes } from '../components/util/favoriteRecipes';
import CardFavoritRecip from '../components/CardFavoritRecip';

function FavoriteRecipes() {
  const { favoriteFoods, favoriteDrinks } = useContext(receitasContext);

  useEffect(() => {
    const favoritando = () => {
      if (favoriteRecipes !== null && favoriteRecipes > 0) {
        favoriteRecipes.filter((elem) => elem.type === 'food' && favoriteFoods(elem));
        favoriteRecipes.filter((elem) => elem.type === 'drink' && favoriteDrinks(elem));
      }
    };
    favoritando();
  }, []);

  return (
    <div>

      <div>
        <Header />
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      <CardFavoritRecip />
    </div>
  );
}

export default FavoriteRecipes;
