import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import renderWithRouter from './utils/renderWIthRouter'
// import chickenMock  from './utils/chickenMock'
import App from '../App'
import ReceitasProvider from '../Context/ReceitasProvider';
import { arrabiataMock } from "./utils/arrabiataMock";
import oneDrink from '../../cypress/mocks/oneDrink'

describe('Testa a página RecipeDetails', () => {
    test('testa o botão de favoritar(meals)', async () => {
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

      test('testa o botão de favoritar(drinks)', async () => {
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
      
      test('testa o caminho do arquivo(meals)', async () => {
        const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(arrabiataMock)
        });
        history.push('/foods/52771');
        const startBtn = await screen.findByTestId('start-recipe-btn');
        expect(startBtn).toBeInTheDocument();
        userEvent.click(startBtn);
        expect(history.location.pathname).toBe('/foods/52771/in-progress');
      })

      test('testa o caminho do arquivo(drinks)', async () => {
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

      test('testa o caminho do arquivo(meals)', async () => {
        const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(arrabiataMock)
        });
        history.push('/foods/52771');
        const startBtn = await screen.findByTestId('start-recipe-btn');
        expect(startBtn).toBeInTheDocument();
        userEvent.click(startBtn);
        expect(history.location.pathname).toBe('/foods/52771/in-progress');
      })
});
