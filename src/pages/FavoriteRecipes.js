import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import receitasContext from '../Context/ReceitasContext';
import { favoriteRecipes, desFavoriteRecipes } from '../components/util/favoriteRecipes';

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
      <Header />
    </div>
  );
}

export default FavoriteRecipes;
