import React from "react";
import { screen, waitFor } from "@testing-library/react";
import renderWithRouter from './utils/renderWIthRouter'
import userEvent from '@testing-library/user-event'
import App from '../App'
import ReceitasProvider from '../Context/ReceitasProvider';

describe('testa Profile', () => {
  test('testa botão "logout"', () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>);
    const email = screen.getByTestId(/email-input/i);
    const password = screen.getByPlaceholderText(/password/i);
    const botao = screen.getByRole('button', {
      name: /enter/i
    });
    userEvent.type(email, "teste@test.com");
    userEvent.type(password, "1234567");
    expect(botao).toBeEnabled();
    userEvent.click(botao);
    history.push('/profile');

    const logoutBtn = screen.getByText('Logout');
    userEvent.click(logoutBtn);
    expect(history.location.pathname).toBe('/')
  })

  test('testa botão "Done Recipes"', () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>);
    const email = screen.getByTestId(/email-input/i);
    const password = screen.getByPlaceholderText(/password/i);
    const botao = screen.getByRole('button', {
      name: /enter/i
    });
    userEvent.type(email, "teste@test.com");
    userEvent.type(password, "1234567");
    expect(botao).toBeEnabled();
    userEvent.click(botao);
    history.push('/profile');

    const doneRecipes = screen.getByText('Done Recipes');
    userEvent.click(doneRecipes);
    expect(history.location.pathname).toBe('/done-recipes');
  })

  test('testa botão "Done Recipes"', () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>);
    const email = screen.getByTestId(/email-input/i);
    const password = screen.getByPlaceholderText(/password/i);
    const botao = screen.getByRole('button', {
      name: /enter/i
    });
    userEvent.type(email, "teste@test.com");
    userEvent.type(password, "1234567");
    expect(botao).toBeEnabled();
    userEvent.click(botao);
    history.push('/profile');

    const favoriteRecipes = screen.getByText('Favorite Recipes');
    userEvent.click(favoriteRecipes);
    expect(history.location.pathname).toBe('/favorite-recipes');
  })
})