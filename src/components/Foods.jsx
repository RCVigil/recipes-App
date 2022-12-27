import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';
import clipboardCopy from 'clipboard-copy';
import receitasContext from '../Context/ReceitasContext';
import '../Sass/index.sass';
import StartButton from './StartButton';
import heartClick from '../pages/funcs/heartClick';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../pages/Pages.styles/RecipsDetails.sass';

const Foods = () => {
  const { recipeDetail, getMeals, getDrinks, recipes } = useContext(receitasContext);
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');
  const numCarros = 6;
  const [share, setShare] = useState(false);
  const [fav, setFav] = useState(false);

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
  const shareClick = () => {
    clipboardCopy(`http://localhost:3000${pathname}`);
    setShare(true);
  };

  useEffect(() => {
    const indication = () => {
      if (splited[1] === 'foods') {
        getDrinks();
      } else {
        getMeals();
      }
    };
    const local = () => {
      if (localStorage.getItem('favoriteRecipes') !== null
        && splited[1] === 'foods') {
        setFav(JSON.parse(localStorage.getItem('favoriteRecipes'))
          .some((a) => a.id === recipeDetail.meals[0].idMeal));
      }
      if (localStorage.getItem('favoriteRecipes') !== null
        && splited[1] === 'drinks') {
        setFav(JSON.parse(localStorage.getItem('favoriteRecipes'))
          .some((a) => a.id === recipeDetail.drinks[0].idDrink));
      }
    };
    indication();
    local();
  }, []);

  return (
<div className="divFullRDetails">
<div className="headerRecipeDet">
  <img
    className="imgRecipeDet"
    data-testid="recipe-photo"
    src={ recipeDetail.meals[0].strMealThumb }
    alt={ `Imagem da receita ${recipeDetail.meals[0].strMeal}` }
  />
  <div className="h2H4RecipeDet">
    <h2 data-testid="recipe-title">{recipeDetail.meals[0].strMeal}</h2>
    <h4 data-testid="recipe-category">
      {recipeDetail.meals[0].strCategory}
    </h4>
  </div>
</div>
<ul className="ulIngredRecipeDet">
  {ingredientes.map((a, i) => (
    <li
      className="liIngredRecipeDet"
      key={ i }
      data-testid={ `${i}-ingredient-name-and-measure` }
    >
      <div className="liInterior">
        <ImArrowRight2 className='iconLiIngredient'/>
        <h2 className="h2InteriorLi">{`${a} ${medidas[i]}`}</h2>
      </div>
    </li>))}
</ul>
<p
  className="pRecipeDet"
  data-testid="instructions"
>
  {recipeDetail.meals[0].strInstructions}
</p>
<iframe
  width="560"
  height="315"
  className="iFrameRecipeDet"
  src={ recipeDetail.meals[0].strYoutube }
  title="YouTube video player"
  data-testid="video"
/>
{/* console.log({recipeDetail.meals[0].strYoutube}); */}
<div className="carroselOthersBut">
  {recipes.drinks && (
    <div className="carrossel">
      {recipes.drinks
        .filter((a, i) => i < numCarros)
        .map((el, ind) => (
      <div
        className="carrosselItem"
        data-testid={ `${ind}-recomendation-card` }
        key={ ind }
      >
        <img className="carrosselimg" src={ el.strDrinkThumb } alt="" />
        <p data-testid={ `${ind}-recomendation-title` }>{el.strDrink}</p>
      </div>))}
    </div>)}
    <div className="buttonStShCo">
      { localStorage.getItem('doneRecipes') !== null
      ? !(JSON.parse(localStorage.getItem('doneRecipes'))
        .some((a) => a.id === recipeDetail.meals[0].idMeal))
      && (<StartButton />) : <StartButton />}
      <div className="buttonsFavComp">
    <input
      className="imageFooterFoods"
      type="image"
      alt=""
      src={ shareIcon }
      data-testid="share-btn"
      onClick={ shareClick }
    />
    <input
      className="imageFooterFoods"
      type="image"
      alt=""
      data-testid="favorite-btn"
      src={ fav ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => heartClick(recipeDetail, splited, fav, setFav) }
    />
      { share && <p className="pCopied">Link copied!</p> }
      </div>
    </div>
  </div>
</div>
  )
}

export default Foods;
