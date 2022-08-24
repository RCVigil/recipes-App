import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import receitasContext from '../Context/ReceitasContext';

export default function Categories() {
  const { category, setRecipes, getMeals, getDrinks } = useContext(receitasContext);
  const num = 5;
  const [categoryState, setCategoryState] = useState(true);

  const history = useHistory();
  const { pathname } = history.location;

  const allOnClick = () => {
    if (pathname === ('/foods')) {
      getMeals();
    }
    if (pathname === ('/drinks')) {
      getDrinks();
    }
  };

  const mealsFilter = async (elemF) => {
    setCategoryState(!categoryState);
    if (categoryState) {
      const responseApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${elemF}`);
      const dataApi = await responseApi.json();
      console.log(dataApi);
      setRecipes(dataApi);
    } else {
      getMeals();
    }
  };

  const drinksFilter = async (elemF) => {
    setCategoryState(!categoryState);
    if (categoryState) {
      const responseApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${elemF}`);
      const dataApi = await responseApi.json();
      console.log(dataApi);
      setRecipes(dataApi);
    } else {
      getDrinks();
    }
  };

  return (
    <div>
      {category.meals
        && category.meals.map((elem, index) => (index < num ? (
          <button
            data-testid={ `${elem.strCategory}-category-filter` }
            type="button"
            key={ index }
            onClick={ () => mealsFilter(elem.strCategory) }
          >
            {elem.strCategory}
          </button>
        ) : (
          ''
        )))}

      {category.drinks
        && category.drinks.map((e, ind) => (ind < num ? (
          <button
            data-testid={ `${e.strCategory}-category-filter` }
            type="button"
            key={ ind }
            onClick={ () => drinksFilter(e.strCategory) }
          >
            {e.strCategory}
          </button>
        ) : (
          ''
        )))}

      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ allOnClick }
      >
        All
      </button>
    </div>
  );
}
