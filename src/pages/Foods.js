import React, { useContext, useEffect } from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import receitasContext from '../Context/ReceitasContext';
import './Pages.styles/Foods.sass';

function Foods() {
  const { recipes, getMeals, category, setCategory } = useContext(receitasContext);
  useEffect(() => {
    const getCategories = async () => {
      const responseApi = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const dataApi = await responseApi.json();
      setCategory(dataApi);
    };

    getMeals();
    getCategories();
  }, []);

  return (
    <div className="divFullFoods">
      <Header />
      {category.meals && <Categories />}
      { recipes.meals && <Recipes />}
      <Footer />
    </div>
  );
}

export default Foods;
