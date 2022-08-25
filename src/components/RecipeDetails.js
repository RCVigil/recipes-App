import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function RecipeDetails() {
  const history = useHistory();
  const { pathname } = history.location;
  const splited = pathname.split('/');

  const getFoodDetail = async () => {
    if (splited[1] === 'foods') {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${splited[2]}`);
      const dataResponse = await response.json();
      console.log(dataResponse);
      console.log(splited);
    } else {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${splited[2]}`);
      const dataResponse = await response.json();
      console.log(dataResponse);
    }
  };

  useEffect(() => {
    getFoodDetail();
  }, []);

  return (
    <h1>OI</h1>
  );
}
