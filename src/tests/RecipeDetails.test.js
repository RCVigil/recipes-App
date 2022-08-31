import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import renderWithRouter from './utils/renderWIthRouter'
// import chickenMock  from './utils/chickenMock'
import App from '../App'
import ReceitasProvider from '../Context/ReceitasProvider';
import { arrabiataMock } from "./utils/arrabiataMock";
import oneDrink from '../../cypress/mocks/oneDrink'

describe('Testa o RecipeDetails', () => {
    test('testa alguma coisa', async () => {
        const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(arrabiataMock)
        });
        history.push('/foods/52771');

        const favoriteBtn = await screen.findByTestId('favorite-btn');
        expect(favoriteBtn).toBeInTheDocument();
        userEvent.click(favoriteBtn);
        userEvent.click(favoriteBtn);     
      })

      test('testa alguma coisa', async () => {
        const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(oneDrink)
        });
        history.push('/drinks/178319');

        const favoriteBtn = await screen.findByTestId('favorite-btn');
        expect(favoriteBtn).toBeInTheDocument();
        userEvent.click(favoriteBtn);
        userEvent.click(favoriteBtn);
      })
      
      test('testa alguma coisa', async () => {
        const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(oneDrink)
        });
        history.push('/drinks/178319');

        const startBtn = await screen.findByTestId('start-recipe-btn');
        expect(startBtn).toBeInTheDocument();
        userEvent.click(startBtn);
        expect(history.location.pathname).toBe('/drinks/178319/in-progress');
      })

      test('testa alguma coisa', async () => {
        const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(oneDrink)
        });
        history.push('/drinks/178319');

        const favoriteBtn = screen.getByTestId('0-recomendation-card');
        expect(favoriteBtn).toBeInTheDocument();
      })
});
