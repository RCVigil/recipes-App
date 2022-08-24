import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import receitasContext from '../Context/ReceitasContext';

function Drinks() {
  const { recipes, setRecipes } = useContext(receitasContext);
  useEffect(() => {
    const getMeals = async () => {
      const responseApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const dataApi = await responseApi.json();
      console.log(dataApi);
      setRecipes(dataApi);
    };
    getMeals();
  }, []);
  return (
    <div>
      <Header />
      { recipes.drinks && <Recipes />}
      <Footer />
    </div>
  );
}

export default Drinks;
