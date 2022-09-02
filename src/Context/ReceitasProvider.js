import React, { useState } from 'react';
import PropTypes from 'prop-types';
import receitasContext from './ReceitasContext';

const ReceitasProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState([]);
  const [ingredientsRec, setIngredientsRec] = useState([]);
  const [locBase, setLocBase] = useState([]);
  const [favoriteDrinks, setFavoriteDrinks] = useState([]);
  const [favoriteFoods, setFavoriteFoods] = useState([]);

  const getMeals = async () => {
    const responseApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const dataApi = await responseApi.json();
    setRecipes(dataApi);
  };

  const getDrinks = async () => {
    const responseApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const dataApi = await responseApi.json();
    setRecipes(dataApi);
  };

  const revcontext = {
    recipes,
    setRecipes,
    setCategory,
    category,
    getMeals,
    getDrinks,
    recipeDetail,
    setRecipeDetail,
    ingredientsRec,
    setIngredientsRec,
    locBase,
    setLocBase,
    favoriteDrinks,
    setFavoriteDrinks,
    favoriteFoods,
    setFavoriteFoods,
  };

  return (
    <receitasContext.Provider
      value={ revcontext }
    >
      {children}
    </receitasContext.Provider>
  );
};

ReceitasProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default ReceitasProvider;
