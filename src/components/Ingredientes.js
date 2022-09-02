import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import receitasContext from '../Context/ReceitasContext';

function Ingredientes() {
  const { recipeDetail, setIngredientsRec, setLocBase } = useContext(receitasContext);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');
  let ingredValue = [];

  const ingredient = () => {
    if (splited[1] === 'foods') {
      const magicIngre1 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strIngredient1',
      );
      const magicIngre2 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strIngredient20',
      );
      ingredValue = Object.values(recipeDetail.meals[0]).filter(
        (a, i) => i <= magicIngre2 && i >= magicIngre1,
      );
      return ingredValue;
    }
    const magicDrink1 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strIngredient1',
    );
    const magicDrink2 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strIngredient15',
    );
    ingredValue = Object.values(recipeDetail.drinks[0]).filter(
      (a, i) => i <= magicDrink2 && i >= magicDrink1,
    );
    return ingredValue;
  };
  const measure = () => {
    if (splited[1] === 'foods') {
      const magicIngre1 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strMeasure1',
      );
      const magicIngre2 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strMeasure20',
      );
      return Object.values(recipeDetail.meals[0]).filter(
        (a, i) => i <= magicIngre2 && i >= magicIngre1,
      );
    }
    const magicDrink1 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strMeasure1',
    );
    const magicDrink2 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strMeasure15',
    );
    return Object.values(recipeDetail.drinks[0]).filter(
      (a, i) => i <= magicDrink2 && i >= magicDrink1,
    );
  };

  const ingredientes = ingredient().filter((a) => a !== null && a !== '');
  const medidas = measure().filter((a) => a !== null && a !== '');

  const checkDisab = () => {
    const localBas = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localBas !== null && splited[1] === 'foods') {
      const baseLength = (localBas.meals[splited[2]]);
      setLocBase(baseLength);
    }
    if (localBas !== null && splited[1] === 'drinks') {
      const baseLength = (localBas.cocktails[splited[2]]);
      setLocBase(baseLength);
    }
  };

  const checked = (i) => {
    if (localStorage.getItem('inProgressRecipes') !== null && splited[1] === 'foods') {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      // checkDisab();
      return inProgress.meals[splited[2]]
        ? inProgress.meals[splited[2]].some((a) => a === i) : false;
    }
    if (localStorage.getItem('inProgressRecipes') !== null && splited[1] === 'drinks') {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      // checkDisab();
      return inProgress.cocktails[splited[2]]
        ? inProgress.cocktails[splited[2]].some((a) => a === i) : false;
    }
  };

  const handleCheck = (ev, a) => {
    if (ev.target.checked && splited[1] === 'foods') {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'))
      || { cocktails: {},
        meals: {} };
      const inProgress2 = inProgress.meals[splited[2]]
        ? [...inProgress.meals[splited[2]], a] : [a];
      const newLocal = { cocktails: { ...inProgress.cocktails },
        meals:
      { ...inProgress.meals,
        [splited[2]]: inProgress2,
      } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocal));
      checked(a);
      checkDisab();
    }

    if (ev.target.checked && splited[1] === 'drinks') {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'))
      || { cocktails: {},
        meals: {} };
      const inProgress2 = inProgress.cocktails[splited[2]]
        ? [...inProgress.cocktails[splited[2]], a] : [a];
      const newLocal = { meals: { ...inProgress.meals },
        cocktails:
      { ...inProgress.cocktails,
        [splited[2]]: inProgress2,
      } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocal));
      checked(a);
      checkDisab();
    }
  };

  useEffect(() => {
    setIngredientsRec(ingredValue.filter((e) => e !== null && e !== ''));
    // checkDisab();
  }, []);

  return (
    <ul>
      {ingredientes.map((a, i) => (
        <li key={ i } data-testid={ `${i}-ingredient-step` }>
          {`${a} ${medidas[i]}`}
          <input
            type="checkbox"
            name="checked"
            onChange={ (ev) => handleCheck(ev, a) }
            checked={ checked(a) }
          />
        </li>
      ))}
    </ul>);
}

export default Ingredientes;
