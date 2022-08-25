import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const getEmail = () => {
    const text = localStorage.getItem('user');
    const email = JSON.parse(text);
    return email.email;
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
      >
        Logout
      </button>
      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>
      <Footer />
    </div>);
}

export default Profile;
