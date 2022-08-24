import React, { useContext, useEffect } from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import receitasContext from '../Context/ReceitasContext';

function Drinks() {
  const { recipes, getDrinks, category, setCategory } = useContext(receitasContext);
  useEffect(() => {
    const getCategories = async () => {
      const responseApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const dataApi = await responseApi.json();
      console.log(dataApi);
      setCategory(dataApi);
    };

    getDrinks();
    getCategories();
  }, []);
  return (
    <div>
      <Header />
      {category.drinks && <Categories />}
      { recipes.drinks && <Recipes />}
      <Footer />
    </div>
  );
}

export default Drinks;
