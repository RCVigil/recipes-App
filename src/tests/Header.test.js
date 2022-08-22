import React from "react";
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Header from "../components/Header";
import renderWithRouter from './utils/renderWIthRouter'
import App from '../App'

describe('atingir 45% de coverage', () => {
  test('testa se o header possui os intes na tela', () => {
    const { history } = renderWithRouter(<Header />)

    const profile = screen.getByAltText('profile-pic');
    expect(profile).toBeInTheDocument();

    const search = screen.getByAltText('search');
    expect(search).toBeInTheDocument();

    history.push('/foods')

    const foods = screen.getByTestId('page-title')
    expect(foods).toBeInTheDocument();

  })

  test('testa se o header possui os intes na tela', () => {
    const { history } = renderWithRouter(<App />)
    history.push('/foods')
    
    const profile = screen.getByAltText('profile-pic');
    const search = screen.getByTestId('search-top-btn');
    userEvent.click(profile)

    expect(history.location.pathname).toBe('/profile')
    
    expect(search).not.toBeInTheDocument();
  })

  test('testa se o header utiliza o botao search', () => {
    const { history } = renderWithRouter(<App />)
    history.push('/foods')
    
    const search = screen.getByTestId('search-top-btn');

    userEvent.click(search)

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument()

    userEvent.click(search)
    
    expect(searchInput).not.toBeInTheDocument();
  })

  test('testa se o header possui os intes na tela', () => {
    const { history } = renderWithRouter(<App />)
    
    history.push('/drinks')
    
    const search = screen.getByText('Drinks');
    expect(search).toBeInTheDocument();

    history.push('/done-recipes')
    
    const done = screen.getByText('Done Recipes');
    expect(done).toBeInTheDocument();

    history.push('/favorite-recipes')
    
    const favorite = screen.getByText('Favorite Recipes');
    expect(favorite).toBeInTheDocument();
  })
})