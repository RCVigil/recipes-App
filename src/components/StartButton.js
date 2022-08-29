import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import receitasContext from '../Context/ReceitasContext';

function StartButton() {
  const { recipeDetail } = useContext(receitasContext);
  const history = useHistory();
  const style = {
    position: 'fixed',
    bottom: '0px',
    left: '200px',
    // margin: '100px, 0,0, 200px',
  };
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

  const caminho = path();
  const selectId = id();

  const continueRecipe = () => JSON.parse(localStorage
    .getItem('inProgressRecipes'))
    .some((a) => Number(a.id) === Number(recipeDetail[caminho][0][selectId]));

  continueRecipe();
  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      style={ style }
      onClick={ () => (
        history.push(`/${splited[1]}/${recipeDetail[caminho][0][selectId]}/in-progress`)
      ) }
    >
      { !continueRecipe() ? 'Continue Recipe' : 'Start Recipe' }
    </button>
  );
}

export default StartButton;
