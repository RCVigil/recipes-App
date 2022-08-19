import React, { useState } from 'react';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const history = useHistory();
  const { pathname } = history.location;

  const [searchInput, setSearchInput] = useState(false);

  const titulo = () => {
    switch (pathname) {
    case '/foods':
      return 'Foods';
    case '/drinks':
      return 'Drinks';
    case '/profile':
      return 'Profile';
    case '/done-recipes':
      return 'Done Recipes';
    case '/favorite-recipes':
      return 'Favorite Recipes';
    default: return '';
    }
  };

  const searchShow = () => {
    switch (pathname) {
    case '/profile':
      return false;
    case '/done-recipes':
      return false;
    case '/favorite-recipes':
      return false;
    default: return true;
    }
  };

  return (
    <header>
      <h2 data-testid="page-title">{titulo()}</h2>
      <button type="button" onClick={ () => history.push('/profile') }>
        <img
          src={ profileIcon }
          alt="profile-pic"
          data-testid="profile-top-btn"
        />
      </button>
      { searchShow()
          && (
            <button type="button" onClick={ () => setSearchInput(!searchInput) }>
              <img
                src={ searchIcon }
                alt="search"
                data-testid="search-top-btn"
              />
            </button>)}
      { searchInput && <input data-testid="search-input" type="text" />}
    </header>
  );
}

export default Header;
