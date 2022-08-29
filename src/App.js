import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify([]));
    localStorage.setItem('doneRecipes', JSON.stringify([]));
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }, []);
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id/in-progress" component={ FoodDetails } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinkDetails } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="/drinks/:id" component={ DrinkDetails } />
        <Route exact path="/recipe-in-progress" component={ RecipeInProgress } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default App;
