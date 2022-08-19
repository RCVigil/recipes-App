import React, { useState } from 'react';
import PropTypes from 'prop-types';
import receitasContext from './ReceitasContext';

const ReceitasProvider = ({ children }) => {
  const [email, setEmail] = useState('teste');
  const [password, setPassword] = useState('');

  const revcontext = {
    email,
    setEmail,
    password,
    setPassword,
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
