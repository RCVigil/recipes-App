import React, { useState } from 'react';
import PropTypes from 'prop-types';
import receitasContext from './ReceitasContext';

const ReceitasProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getMeals = async () => {
    const responseApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const dataApi = await responseApi.json();
    console.log(dataApi);
    setRecipes(dataApi);
  };

  const getDrinks = async () => {
    const responseApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const dataApi = await responseApi.json();
    console.log(dataApi);
    setRecipes(dataApi);
  };

  const revcontext = {
    recipes,
    setRecipes,
    setCategory,
    category,
    getMeals,
    getDrinks,
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
