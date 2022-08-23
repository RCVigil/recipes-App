import React, { useState } from 'react';
import PropTypes from 'prop-types';
import receitasContext from './ReceitasContext';

const ReceitasProvider = ({ children }) => {
  // const [email, setEmail] = useState('');
  const [recipes, setRecipes] = useState([]);

  const revcontext = {
    recipes,
    setRecipes,
    // password,
    // setPassword,
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
