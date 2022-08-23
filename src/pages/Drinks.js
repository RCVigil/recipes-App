import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import receitasContext from '../Context/ReceitasContext';

function Drinks() {
  const { recipes } = useContext(receitasContext);
  return (
    <div>
      <Header />
      { recipes.drinks && <Recipes />}
      <Footer />
    </div>
  );
}

export default Drinks;
