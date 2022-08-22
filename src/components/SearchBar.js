import React, { useState } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [radioSelect, setRadioSelect] = useState('');

  const buttonCLick = async () => {
    let endpoint = '';
    console.log(endpoint);
    switch (radioSelect) {
    case 'Ingredient':
      endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`;
      break;
    case 'Name':
      endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
      break;
    case 'First letter':
      endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`;
      break;
    default: endpoint = '';
      break;
    }
    console.log(endpoint);
    if (radioSelect === 'First letter' && searchValue.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const response = await fetch(endpoint);
      const dataResponse = await response.json();
      console.log(dataResponse);
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
