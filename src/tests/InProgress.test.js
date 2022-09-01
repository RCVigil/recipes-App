import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWIthRouter';
import ReceitasProvider from '../Context/ReceitasProvider';
import meals from "../../cypress/mocks/meals";
import drinks from "../../cypress/mocks/drinks";


function simulation() {
  console.log('returned')
}

describe('Testando a Página RecipeInProgress', () => {

  test('renderizando a tela Recipe in progress(Meals)', async () => {
    const render = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>);
    const { history } = render;
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(meals)
    });
    history.push('foods/52977/in-progress');
    const title = screen.getByText('RecipeInProgress');
    expect(title).toBeInTheDocument();
    const favBtn = await screen.findByTestId('favorite-btn');
    userEvent.click(favBtn);
  });

  test('renderizando a tela Recipe in progress(Drinks)', async () => {
    const render = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>);
    const { history } = render;
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinks)
    });
    history.push('drinks/15997/in-progress');
    const title = screen.getByText('RecipeInProgress');
    expect(title).toBeInTheDocument();
    const favBtn = await screen.findByTestId('favorite-btn');
    userEvent.click(favBtn);
  });

});