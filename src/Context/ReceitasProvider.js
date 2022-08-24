import React, { useState } from 'react';
import PropTypes from 'prop-types';
import receitasContext from './ReceitasContext';

const ReceitasProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const revcontext = {
    recipes,
    setRecipes,
    setCategory,
    category,
  };
  return (
    <receitasContext.Provider
      value={ revcontext }
    >
      {children}
    </receitasContext.Provider>
  );
};

ReceitasProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default ReceitasProvider;
