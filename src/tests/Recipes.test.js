import React from "react";
import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import renderWithRouter from './utils/renderWIthRouter'
import meals from "../../cypress/mocks/meals";
import drinks from "../../cypress/mocks/drinks";
import App from '../App'
import ReceitasProvider from '../Context/ReceitasProvider';

describe('testa Recipes', () => {
    test('testa recipes foods', async () => {
      const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(meals)
      });
      history.push('/foods')

    const chicken = await screen.findByText('Corba') ;
    expect(chicken).toBeInTheDocument();
    userEvent.click(chicken);
    await waitFor(() => expect(history.location.pathname).toBe('/foods/52977'));
      
  })

  test('testa recipes drinks', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinks)
    });
    history.push('/drinks')

  const drink = await screen.findByText('GG') ;
  expect(drink).toBeInTheDocument();
  userEvent.click(drink);
  await waitFor(() => expect(history.location.pathname).toBe('/drinks/15997'));
    
})
})
