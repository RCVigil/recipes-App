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

})