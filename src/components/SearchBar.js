import React from 'react';

function SearchBar() {
  return (
    <div>

      <input data-testid="search-input" type="text" />

      <label htmlFor="ingrediente">
        <input
          type="radio"
          value="ingrediente"
          id="ingrediente"
          data-testid="ingredient-search-radio"
          name="search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="nome">
        <input
          type="radio"
          value="nome"
          id="nome"
          data-testid="name-search-radio"
          name="search-radio"
        />
        Nome
      </label>
      <label htmlFor="primeira-letra">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          value="primeira-letra"
          id="primeira-letra"
          name="search-radio"
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar

      </button>
    </div>

  );
}

export default SearchBar;
