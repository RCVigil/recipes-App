import React from 'react';
import { useHistory } from 'react-router';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const history = useHistory();
  const { pathname } = history.location;

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
      <img
        src={ profileIcon }
        alt="profile-pic"
        data-testid="profile-top-btn"
      />
      { searchShow()
        && <img
          src={ searchIcon }
          alt="search"
          data-testid="search-top-btn"
        />}
    </header>
  );
}

export default Header;
