import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import receitasContext from '../Context/ReceitasContext';
// import { Route, } from 'react-router-dom';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [radioSelect, setRadioSelect] = useState('');
  const { setRecipes } = useContext(receitasContext);
  const history = useHistory();
  const { pathname } = history.location;
  const first = 'First letter';

  const definedEndPoint = () => {
    let endpoint = '';
    if (pathname === '/foods') {
      switch (radioSelect) {
      case 'Ingredient':
        endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`;
        break;
      case 'Name':
        endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        break;
      case first:
        endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`;
        break;
      default: endpoint = '';
        break;
      }
    } else if (pathname === '/drinks') {
      switch (radioSelect) {
      case 'Ingredient':
        endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`;
        break;
      case 'Name':
        endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;
        break;
      case first:
        endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue}`;
        break;
      default: endpoint = '';
        break;
      }
    }
    return endpoint;
  };

  const fetchApi = async (endDefinition) => {
    try {
      const response = await fetch(endDefinition);
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      return { drinks: null };
    }
  };

  const buttonCLick = async () => {
    const endDefinition = definedEndPoint();
    if (radioSelect === first && searchValue.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }

    const dataResponse = await fetchApi(endDefinition);

    setRecipes(dataResponse);
    if (dataResponse.meals === null || dataResponse.drinks === null) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (('drinks' in dataResponse) && dataResponse.drinks.length === 1) {
      history.push(`/drinks/${dataResponse.drinks[0].idDrink}`);
    }
    if (('meals' in dataResponse) && dataResponse.meals.length === 1) {
      history.push(`/foods/${dataResponse.meals[0].idMeal}`);
    }
  };

  return (
    <div>

      <input
        data-testid="search-input"
        type="text"
        onChange={ (ev) => setSearchValue(ev.target.value) }
      />

      <label htmlFor="ingrediente">
        <input
          type="radio"
          value="Ingredient"
          id="ingrediente"
          data-testid="ingredient-search-radio"
          name="search-radio"
          onChange={ (ev) => setRadioSelect(ev.target.value) }
        />
        Ingrediente
      </label>
      <label htmlFor="nome">
        <input
          type="radio"
          value="Name"
          id="nome"
          data-testid="name-search-radio"
          name="search-radio"
          onChange={ (ev) => setRadioSelect(ev.target.value) }
        />
        Nome
      </label>
      <label htmlFor="primeira-letra">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          value="First letter"
          id="primeira-letra"
          name="search-radio"
          onChange={ (ev) => setRadioSelect(ev.target.value) }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ buttonCLick }
      >
        Buscar

      </button>
    </div>

  );
}

export default SearchBar;
