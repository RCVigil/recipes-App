import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const history = useHistory();

  const getEmail = () => {
    const text = localStorage.getItem('user');
    const email = JSON.parse(text);
    return email.email;
  };

  const goToDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const goToFavorites = () => {
    history.push('/favorite-recipes');
  };

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      <h1
        data-testid="profile-email"
      >
        {getEmail()}
      </h1>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ logout }
      >
        Logout
      </button>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ goToDoneRecipes }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ goToFavorites }
      >
        Favorite Recipes
      </button>
      <Footer />
    </div>);
}

export default Profile;
