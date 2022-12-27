import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import receitasContext from '../Context/ReceitasContext';
import '../pages/Pages.styles/RecipsDetails.sass';

function StartButton() {
  const { recipeDetail } = useContext(receitasContext);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');

  const path = () => {
    if (splited[1] === 'foods') {
      return 'meals';
    } return 'drinks';
  };

  const id = () => {
    if (splited[1] === 'foods') {
      return 'idMeal';
    } return 'idDrink';
  };

  const chaveLocalStorage = () => {
    if (splited[1] === 'foods') {
      return 'meals';
    } return 'cocktails';
  };

  const caminho = path();
  const selectId = id();
  const chaveLocal = chaveLocalStorage();

  const continueRecipe = () => (localStorage
    .getItem('inProgressRecipes') !== null ? Object.keys(JSON.parse(localStorage
      .getItem('inProgressRecipes'))[chaveLocal])
      .some((a) => Number(a)
      === Number(recipeDetail[caminho][0][selectId])) : false);

  return (
    <button
      className="btnStartAndCont"
      type="button"
      data-testid="start-recipe-btn"
      onClick={ () => (
        history.push(`/${splited[1]}/${recipeDetail[caminho][0][selectId]}/in-progress`)
      ) }
    >
      { continueRecipe() ? 'Continue Recipe' : 'Start Recipe' }
    </button>
  );
}

export default StartButton;
