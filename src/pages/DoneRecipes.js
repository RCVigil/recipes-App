import React, { useEffect } from 'react';
import Header from '../components/Header';
import CardDoneRecipes from '../components/CardDoneRecipes';

function DoneRecipes() {
  return (
    <div>

      <div>
        <Header />
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </div>
      <CardDoneRecipes />
    </div>
  );
}

export default DoneRecipes;
