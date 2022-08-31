import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import receitasContext from '../Context/ReceitasContext';

function Ingredientes() {
  const { recipeDetail } = useContext(receitasContext);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');

  const ingredient = () => {
    if (splited[1] === 'foods') {
      const magicIngre1 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strIngredient1',
      );
      const magicIngre2 = Object.keys(recipeDetail.meals[0]).indexOf(
        'strIngredient20',
      );
      return Object.values(recipeDetail.meals[0]).filter(
        (a, i) => i <= magicIngre2 && i >= magicIngre1,
      );
    }
    const magicDrink1 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strIngredient1',
    );
    const magicDrink2 = Object.keys(recipeDetail.drinks[0]).indexOf(
      'strIngredient15',
    );
    return Object.values(recipeDetail.drinks[0]).filter(
      (a, i) => i <= magicDrink2 && i >= magicDrink1,
    );
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

  const checked = (i) => {
    if (localStorage.getItem('inProgressRecipes') !== null && splited[1] === 'foods') {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      return inProgress.meals[splited[2]]
        ? inProgress.meals[splited[2]].some((a) => a === i) : false;
    }
    if (localStorage.getItem('inProgressRecipes') !== null && splited[1] === 'drinks') {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
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
    } else if (ev.target.checked && splited[1] === 'drinks') {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'))
      || { cocktails: {},
        meals: {} };
      const inProgress2 = inProgress.cocktails[splited[2]]
        ? [...inProgress.cocktails[splited[2]], a] : [a];
      console.log(inProgress2);
      const newLocal = { meals: { ...inProgress.meals },
        cocktails:
      { ...inProgress.cocktails,
        [splited[2]]: inProgress2,
      } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocal));
      checked(a);
    }
  };

  checked('Tomat Puree');
  return (
    <ul>
      {ingredientes.map((a, i) => (
        <li key={ i } data-testid={ `${i}-ingredient-step` }>
          {`${a} ${medidas[i]}`}
          <input
            type="checkbox"
            onChange={ (ev) => handleCheck(ev, a) }
            checked={ checked(a) }
          />
        </li>
      ))}
    </ul>);
}

export default Ingredientes;
